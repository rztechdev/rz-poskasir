<?php

namespace App\Services;

use App\Models\RevenueSplit;
use App\Models\Transaction;
use Illuminate\Support\Facades\DB;

class RevenueSplitService
{
    /**
     * B2C: seluruh omzet 100% milik bisnis. Tidak ada bagi hasil / fee platform.
     */
    public const OWNER_PERCENTAGE = 1.0;         // 100% milik bisnis
    public const ADMIN_PERCENTAGE = 0.0;
    public const SUPERADMIN_PERCENTAGE = 0.0;
    public const ADMIN_NET_PERCENTAGE = 0.0;

    /**
     * Calculate and persist revenue split for a paid transaction.
     */
    public function calculate(Transaction $transaction): RevenueSplit
    {
        return DB::transaction(function () use ($transaction) {
            $total = (float) $transaction->total_amount;

            $ownerShare = round($total * self::OWNER_PERCENTAGE, 2);
            $adminGrossShare = round($total * self::ADMIN_PERCENTAGE, 2);
            $superadminShare = round($total * self::SUPERADMIN_PERCENTAGE, 2);

            // Fee platform dipotong DARI bagian EO, bukan dari omzet terpisah:
            // warung 75% + EO 25% = 100%, lalu EO menyisihkan 2,5% ke platform.
            $adminNetShare = round($adminGrossShare - $superadminShare, 2);

            return RevenueSplit::updateOrCreate(
                ['transaction_id' => $transaction->id],
                [
                    'owner_share' => $ownerShare,
                    'admin_gross_share' => $adminGrossShare,
                    'superadmin_share' => $superadminShare,
                    'admin_net_share' => $adminNetShare,
                    'calculated_at' => now(),
                ]
            );
        });
    }
}
