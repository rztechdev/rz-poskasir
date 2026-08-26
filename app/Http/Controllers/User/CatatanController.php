<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Store;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class CatatanController extends Controller
{
    /**
     * Catatan kasir: riwayat transaksi yang dibatalkan (cancelled) pada
     * warung/cabang yang sedang aktif untuk kasir ini.
     */
    public function index(): View
    {
        $user = Auth::user();
        $store = $user->store ?: Store::where('owner_id', $user->id)->first();

        $cancelledTransactions = $store
            ? Transaction::where('store_id', $store->id)
                ->where('status', 'cancelled')
                ->with(['items', 'canceller'])
                ->latest('cancelled_at')
                ->take(100)
                ->get()
            : collect();

        return view('user.catatan', compact('user', 'store', 'cancelledTransactions'));
    }
}
