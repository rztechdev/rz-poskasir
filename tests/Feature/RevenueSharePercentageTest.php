<?php

namespace Tests\Feature;

use App\Models\Event;
use App\Models\Store;
use App\Models\Transaction;
use App\Models\User;
use App\Services\ReportService;
use App\Services\RevenueSplitService;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RevenueSharePercentageTest extends TestCase
{
    use RefreshDatabase;

    protected User $admin;
    protected Event $event;
    protected Store $store;
    protected User $owner;

    protected function setUp(): void
    {
        parent::setUp();

        $this->admin = User::create([
            'name' => 'Admin EO',
            'username' => 'admin_bagi',
            'email' => 'admin_bagi@example.com',
            'role' => 'admin',
            'password' => bcrypt('password'),
        ]);

        $this->event = Event::create([
            'name' => 'Bazar Bagi Hasil',
            'slug' => 'bazar-bagi',
            'is_active' => true,
        ]);

        $this->owner = User::create([
            'name' => 'Pemilik Stand',
            'username' => 'stand_bagi',
            'email' => 'stand_bagi@example.com',
            'role' => 'user',
            'password' => bcrypt('password'),
        ]);

        $this->store = Store::create([
            'event_id' => $this->event->id,
            'owner_id' => $this->owner->id,
            'name' => 'Warung Bagi',
            'booth_number' => '001',
            'is_active' => true,
        ]);

        $this->owner->update(['store_id' => $this->store->id]);
    }

    protected function transaksiLunas(float $total): Transaction
    {
        $tx = Transaction::create([
            'invoice_code' => 'INV-' . uniqid(),
            'store_id' => $this->store->id,
            'cashier_id' => $this->owner->id,
            'total_amount' => $total,
            'payment_method' => 'cash',
            'amount_paid' => $total,
            'change_due' => 0,
            'status' => 'paid',
            'paid_at' => now(),
        ]);

        app(RevenueSplitService::class)->calculate($tx);

        return $tx->fresh('revenueSplit');
    }

    public function test_stand_takes_75_percent_and_the_organiser_25_percent(): void
    {
        $split = $this->transaksiLunas(1000000)->revenueSplit;

        $this->assertEquals(750000, (float) $split->owner_share);
        $this->assertEquals(250000, (float) $split->admin_gross_share);
    }

    public function test_stand_and_organiser_shares_add_up_to_the_whole_sale(): void
    {
        $split = $this->transaksiLunas(41293836)->revenueSplit;

        $this->assertEquals(
            41293836,
            (float) $split->owner_share + (float) $split->admin_gross_share,
            'Hak warung + bagian EO harus sama dengan omzet.'
        );
    }

    public function test_platform_fee_comes_out_of_the_organiser_share(): void
    {
        // Fee platform 2,5% dipotong DARI bagian EO, bukan dari omzet terpisah.
        $split = $this->transaksiLunas(1000000)->revenueSplit;

        $this->assertEquals(25000, (float) $split->superadmin_share);
        $this->assertEquals(225000, (float) $split->admin_net_share);
        $this->assertEquals(
            (float) $split->admin_gross_share,
            (float) $split->admin_net_share + (float) $split->superadmin_share,
            'Bagian EO bruto harus sama dengan bersih ditambah fee platform.'
        );
    }

    public function test_report_totals_follow_the_same_split(): void
    {
        $this->transaksiLunas(41293836);

        $stats = app(ReportService::class)->getEventStats($this->event);

        $this->assertEquals(41293836, $stats['total_gross']);
        $this->assertEquals(30970377, $stats['owner_total']);
        $this->assertEquals(10323459, $stats['admin_gross']);   // 25%, bukan 22,5%
        $this->assertEquals(1032345.9, $stats['superadmin_total']);
        $this->assertEquals(9291113.1, $stats['admin_net']);
    }

    public function test_the_organiser_card_no_longer_shows_the_net_figure(): void
    {
        // Angka di layar sempat 22,5% padahal kartunya berlabel 25%.
        $this->transaksiLunas(41293836);

        $html = $this->actingAs($this->admin)->get(route('admin.dashboard'))
            ->assertOk()
            ->getContent();

        $this->assertStringContainsString('Rp 10.323.459', $html);       // 25%
        $this->assertStringNotContainsString('Rp 9.291.113', $html);     // 22,5%
    }

    public function test_percentage_constants_stay_consistent(): void
    {
        $this->assertEquals(1.0, RevenueSplitService::OWNER_PERCENTAGE + RevenueSplitService::ADMIN_PERCENTAGE);
        $this->assertEquals(
            RevenueSplitService::ADMIN_PERCENTAGE,
            RevenueSplitService::ADMIN_NET_PERCENTAGE + RevenueSplitService::SUPERADMIN_PERCENTAGE
        );
    }
}
