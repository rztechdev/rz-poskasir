<?php

namespace Database\Seeders;

use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Super Admin Platform Master (Update jika sudah ada, buat jika belum)
        $superadmin = User::updateOrCreate(
            ['role' => 'superadmin'],
            [
                'name' => env('SUPERADMIN_NAME', 'Super Admin Platform'),
                'username' => env('SUPERADMIN_USERNAME', 'superadmin'),
                'email' => env('SUPERADMIN_EMAIL', 'superadmin@gmail.com'),
                'phone' => env('SUPERADMIN_PHONE', '081122334455'),
                'role' => 'superadmin',
                'password' => Hash::make(env('SUPERADMIN_PASSWORD', '12345678')),
            ]
        );

        // 2. Admin EO (Event Organizer) (Update jika sudah ada, buat jika belum)
        User::updateOrCreate(
            ['role' => 'admin'],
            [
                'name' => env('ADMIN_NAME', 'Admin EO'),
                'username' => env('ADMIN_USERNAME', 'admin'),
                'email' => env('ADMIN_EMAIL', 'admin@gmail.com'),
                'phone' => env('ADMIN_PHONE', '081299887766'),
                'role' => 'admin',
                'password' => Hash::make(env('ADMIN_PASSWORD', '12345678')),
            ]
        );

        // 3. Cabang awal (contoh) + 1 kasir otomatis
        $event = Event::firstOrCreate(
            ['slug' => 'cabang-pusat'],
            [
                'name' => 'Cabang Pusat',
                'start_date' => now()->toDateString(),
                'end_date' => now()->addYear()->toDateString(),
                'location' => 'Alamat Cabang Pusat',
                'is_active' => true,
                'created_by' => $superadmin->id,
            ]
        );

        if ($event->stores()->count() === 0) {
            app(\App\Services\EventService::class)->createKasirForEvent($event);
        }
    }
}
