<?php

use App\Services\RevenueSplitService;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Bagian EO sempat tersimpan 22,5% dari omzet, padahal pembagiannya
     * 75% warung + 25% EO, dan fee platform 2,5% dipotong DARI bagian EO.
     *
     * Sengaja hanya menyentuh dua kolom yang memang salah:
     *   - admin_gross_share  -> 25% dari total transaksi
     *   - admin_net_share    -> bruto dikurangi fee platform baris itu sendiri
     *
     * owner_share (hak warung) dan superadmin_share (fee platform) TIDAK
     * diubah: keduanya sudah benar, dan sebagian transaksi lama memakai fee
     * flat Rp1.000 dari aturan terdahulu yang tidak boleh ikut ditulis ulang.
     */
    public function up(): void
    {
        DB::table('revenue_splits')
            ->join('transactions', 'transactions.id', '=', 'revenue_splits.transaction_id')
            ->select('revenue_splits.id', 'revenue_splits.superadmin_share', 'transactions.total_amount')
            ->orderBy('revenue_splits.id')
            ->chunk(500, function ($rows) {
                foreach ($rows as $row) {
                    $gross = round((float) $row->total_amount * RevenueSplitService::ADMIN_PERCENTAGE, 2);

                    DB::table('revenue_splits')->where('id', $row->id)->update([
                        'admin_gross_share' => $gross,
                        'admin_net_share' => round($gross - (float) $row->superadmin_share, 2),
                    ]);
                }
            });
    }

    /**
     * Kembalikan ke rumus lama: bagian EO 22,5% dan net sama dengan bruto.
     * Kolom lain tidak pernah disentuh, jadi pemulihannya utuh.
     */
    public function down(): void
    {
        DB::table('revenue_splits')
            ->join('transactions', 'transactions.id', '=', 'revenue_splits.transaction_id')
            ->select('revenue_splits.id', 'transactions.total_amount')
            ->orderBy('revenue_splits.id')
            ->chunk(500, function ($rows) {
                foreach ($rows as $row) {
                    $gross = round((float) $row->total_amount * 0.225, 2);

                    DB::table('revenue_splits')->where('id', $row->id)->update([
                        'admin_gross_share' => $gross,
                        'admin_net_share' => $gross,
                    ]);
                }
            });
    }
};
