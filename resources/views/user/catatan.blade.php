@extends('layouts.app')

@section('title', 'Catatan Kasir')

@section('content')
<div class="max-w-4xl mx-auto p-4 sm:p-6 space-y-5">
    <div class="flex items-center gap-3">
        <div class="w-11 h-11 rounded-2xl bg-[#eef2e8] text-[#8b9b70] flex items-center justify-center shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
        </div>
        <div>
            <h1 class="text-xl font-black text-[#2e2e2a] tracking-tight">Catatan Kasir</h1>
            <p class="text-sm text-[#595952] font-medium">Transaksi yang dibatalkan oleh admin/pemilik pada {{ $store->name ?? 'cabang ini' }} (hanya lihat)</p>
        </div>
    </div>

    @if($cancelledTransactions->isEmpty())
        <div class="bg-white border border-[#eceae0] rounded-3xl p-10 text-center">
            <div class="w-16 h-16 rounded-full bg-[#f9f8f3] flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-[#8b9b70]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <p class="text-[#2e2e2a] font-bold">Belum ada transaksi yang dibatalkan</p>
            <p class="text-sm text-[#595952] mt-1">Semua transaksi berjalan lancar. Catatan pembatalan akan muncul di sini.</p>
        </div>
    @else
        <div class="space-y-3">
            @foreach($cancelledTransactions as $trx)
                <div class="bg-white border border-[#eceae0] rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center gap-3">
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2">
                            <span class="font-black text-[#2e2e2a] text-sm">{{ $trx->invoice_code }}</span>
                            <span class="px-2 py-0.5 rounded-full bg-[#f4212e]/10 text-[#f4212e] text-[10px] font-black uppercase tracking-wide">Dibatalkan</span>
                        </div>
                        <p class="text-xs text-[#595952] mt-1">
                            {{ $trx->cancelled_at?->format('d/m/Y H:i') ?? $trx->created_at->format('d/m/Y H:i') }}
                            @if($trx->canceller) &bull; oleh {{ $trx->canceller->name }} @endif
                            &bull; {{ strtoupper($trx->payment_method) }}
                        </p>
                        @if($trx->cancellation_reason)
                            <p class="text-sm text-[#2e2e2a] mt-1.5 bg-[#f9f8f3] rounded-lg px-3 py-2 border border-[#eceae0]">
                                <span class="font-semibold">Alasan:</span> {{ $trx->cancellation_reason }}
                            </p>
                        @endif
                    </div>
                    <div class="text-right shrink-0">
                        <p class="text-[10px] font-bold uppercase tracking-wide text-[#595952]">Nilai Transaksi</p>
                        <p class="font-black text-[#2e2e2a]">Rp {{ number_format($trx->total_amount, 0, ',', '.') }}</p>
                        <p class="text-[11px] text-[#595952]">{{ $trx->items->count() }} item</p>
                    </div>
                </div>
            @endforeach
        </div>
    @endif
</div>
@endsection
