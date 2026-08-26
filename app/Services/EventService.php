<?php

namespace App\Services;

use App\Models\Event;
use App\Models\Store;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class EventService
{
    /**
     * Create a new event.
     */
    public function createEvent(array $data, ?User $creator = null): Event
    {
        return DB::transaction(function () use ($data, $creator) {
            $slug = Str::slug($data['name']);
            $count = Event::where('slug', 'like', "{$slug}%")->count();
            if ($count > 0) {
                $slug .= '-' . ($count + 1);
            }

            $isActive = !empty($data['is_active']);

            if ($isActive) {
                Event::query()->update(['is_active' => false]);
            }

            $qrisImagePath = null;
            if (isset($data['qris_image']) && $data['qris_image'] instanceof \Illuminate\Http\UploadedFile) {
                $qrisImagePath = $data['qris_image']->store('events/qris', 'public');
            }

            $event = Event::create([
                'name' => $data['name'],
                'slug' => $slug,
                'start_date' => $data['start_date'] ?? null,
                'end_date' => $data['end_date'] ?? null,
                'location' => $data['location'] ?? null,
                'is_active' => $isActive,
                'qris_image' => $qrisImagePath,
                'qris_payload' => $data['qris_payload'] ?? null,
                'created_by' => $creator?->id,
            ]);

            // B2C: 1 Cabang = 1 kasir. Otomatis buatkan satu kasir + link akses.
            $this->createKasirForEvent($event);

            return $event;
        });
    }

    /**
     * Buat satu kasir (Store) + akun operator + link akses untuk sebuah cabang.
     * Dipanggil otomatis saat cabang dibuat sehingga tiap cabang langsung punya
     * satu titik kasir yang bisa diakses lewat link tanpa perlu akun.
     */
    public function createKasirForEvent(Event $event): Store
    {
        $uuid = (string) Str::uuid();

        $baseUsername = 'kasir-' . $event->slug;
        $username = $baseUsername;
        $counter = 1;
        while (User::where('username', $username)->exists()) {
            $username = $baseUsername . '-' . $counter;
            $counter++;
        }

        $operator = User::create([
            'name' => 'Kasir ' . $event->name,
            'username' => $username,
            'email' => $username . '-' . substr($uuid, 0, 8) . '@kasir.local',
            'role' => 'user',
            'password' => Hash::make(Str::random(32)),
        ]);

        $store = Store::create([
            'event_id' => $event->id,
            'owner_id' => $operator->id,
            'name' => $event->name,
            'booth_number' => '1',
            'access_uuid' => $uuid,
            'category' => 'Umum',
            'is_active' => true,
            'use_dynamic_qris' => true, // B2C: QRIS selalu dinamis.
        ]);

        $operator->update(['store_id' => $store->id]);

        return $store;
    }

    /**
     * Set an event as active atomically and deactivate all other events.
     */
    public function activateEvent(Event $event): void
    {
        DB::transaction(function () use ($event) {
            Event::query()->update(['is_active' => false]);
            $event->update(['is_active' => true]);
        });
    }

    public function updateEvent(Event $event, array $data): Event
    {
        return DB::transaction(function () use ($event, $data) {
            // Field yang dikirim form dipakai apa adanya (termasuk saat dikosongkan),
            // field yang tidak dikirim sama sekali tetap memakai nilai lama.
            $updateData = [
                'name' => $data['name'] ?? $event->name,
            ];

            foreach (['start_date', 'end_date', 'location', 'qris_payload'] as $field) {
                $updateData[$field] = array_key_exists($field, $data) ? $data[$field] : $event->{$field};
            }

            if (isset($data['qris_image']) && $data['qris_image'] instanceof \Illuminate\Http\UploadedFile) {
                if ($event->qris_image && Storage::disk('public')->exists($event->qris_image)) {
                    Storage::disk('public')->delete($event->qris_image);
                }
                $updateData['qris_image'] = $data['qris_image']->store('events/qris', 'public');
            }

            $event->update($updateData);

            return $event;
        });
    }

    /**
     * Hapus cabang beserta kasir, produk, dan transaksinya (cascade), lalu
     * bersihkan akun operator kasir yang otomatis dibuat untuk cabang ini.
     */
    public function deleteEvent(Event $event): void
    {
        DB::transaction(function () use ($event) {
            $operatorIds = $event->stores()->pluck('owner_id')->filter()->all();

            // FK cascadeOnDelete pada stores/products/transactions ikut terhapus.
            $event->delete();

            if (!empty($operatorIds)) {
                User::whereIn('id', $operatorIds)->where('role', 'user')->delete();
            }
        });
    }
}
