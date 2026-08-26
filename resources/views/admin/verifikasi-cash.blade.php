@extends('layouts.app')

@section('title', 'Verifikasi Cash ')
@section('page_title', 'Verifikasi Pembayaran Cash')

@section('content')
<div x-data="{
 isConfirming: false,
 searchQuery: '',

 matchesSearch(id, paddedId, invoice, storeName) {
 if (!this.searchQuery) return true;
 const q = this.searchQuery.toLowerCase().trim().replace(/^#/, '');
 return id.toString().includes(q) || 
 paddedId.toLowerCase().includes(q) || 
 invoice.toLowerCase().includes(q) || 
 storeName.toLowerCase().includes(q);
 },

 async confirmCash(transactionId) {
 if (this.isConfirming) return;
 
 const result = await Swal.fire({
 title: 'Konfirmasi Pembayaran?',
 text: 'Pastikan uang tunai sudah disetorkan oleh cabang / diterima sesuai jumlah tagihan.',
 icon: 'question',
 showCancelButton: true,
 confirmButtonColor: '#00ba7c',
 cancelButtonColor: '#eceae0',
 confirmButtonText: 'Ya, Sudah Dibayar',
 cancelButtonText: '<span class=\'text-[#2e2e2a]\'>Batal</span>'
 });

 if (result.isConfirmed) {
 this.isConfirming = true;
 try {
 const response = await fetch(`/admin/verifikasi-cash/${transactionId}/confirm`, {
 method: 'POST',
 headers: {
 'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
 'Accept': 'application/json'
 }
 });

 const data = await response.json();

 if (response.ok && data.success) {
 await Swal.fire({
 icon: 'success',
 title: 'Berhasil!',
 text: data.message || 'Transaksi cash telah dikonfirmasi.',
 confirmButtonColor: '#8b9b70'
 });
 window.location.reload();
 } else {
 Swal.fire('Gagal', data.message || 'Terjadi kesalahan.', 'error');
 }
 } catch (e) {
 Swal.fire('Error', 'Gagal terhubung ke server.', 'error');
 } finally {
 this.isConfirming = false;
 }
 }
 },

 async completeWithoutPayment(transactionId) {
 if (this.isConfirming) return;
 
 const result = await Swal.fire({
 title: 'Selesaikan Tanpa Pembayaran?',
 text: 'Transaksi ini akan diselesaikan tanpa uang masuk dan nominalnya tidak akan dihitung ke omzet maupun bagi hasil.',
 icon: 'warning',
 showCancelButton: true,
 confirmButtonColor: '#f59e0b',
 cancelButtonColor: '#eceae0',
 confirmButtonText: 'Ya, Selesaikan Tanpa Pembayaran',
 cancelButtonText: '<span class=\'text-[#2e2e2a]\'>Batal</span>'
 });

 if (result.isConfirmed) {
 this.isConfirming = true;
 try {
 const response = await fetch(`/admin/verifikasi-cash/${transactionId}/without-payment`, {
 method: 'POST',
 headers: {
 'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
 'Accept': 'application/json'
 }
 });

 const data = await response.json();

 if (response.ok && data.success) {
 await Swal.fire({
 icon: 'success',
 title: 'Berhasil!',
 text: data.message || 'Transaksi telah diselesaikan tanpa pembayaran.',
 confirmButtonColor: '#8b9b70'
 });
 window.location.reload();
 } else {
 Swal.fire('Gagal', data.message || 'Terjadi kesalahan.', 'error');
 }
 } catch (e) {
 Swal.fire('Error', 'Gagal terhubung ke server.', 'error');
 } finally {
 this.isConfirming = false;
 }
 }
 }
}">
 <!-- Header Banner -->
 <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
 <div>
 <h2 class="text-xl sm:text-2xl font-black text-[#2e2e2a] tracking-tight">Antrean Verifikasi Cash</h2>
 <p class="text-xs sm:text-sm text-[#595952] font-semibold mt-0.5">Konfirmasi transaksi tunai yang dilaporkan oleh cabang/warung.</p>
 </div>

 <div class="flex items-center gap-2">
 <span class="px-4 py-2 rounded-full text-xs font-black bg-[#eef2e8] text-[#8b9b70] border border-[#d2dbc2] shadow-2xs">
 ⚡ Menunggu: <strong>{{ count($pendingTransactions ?? []) }}</strong> Transaksi
 </span>
 </div>
 </div>

 <!-- Info Box -->
 <div class="mb-6 p-4 rounded-2xl bg-[#f9f8f3] border border-[#eceae0] flex items-start gap-3">
 <div class="p-2 rounded-full bg-[#eef2e8] text-[#8b9b70] shrink-0 mt-0.5">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
 </div>
 <div class="text-xs text-[#2e2e2a] space-y-1">
 <p class="font-black text-[#2e2e2a]">Prosedur Verifikasi Cash:</p>
 <p class="text-[#595952] font-medium leading-relaxed">
 Cocokkan <strong>Nomor Antrean</strong> yang ditunjukkan pembeli/struk. Pastikan kasir telah menerima uang fisik, lalu klik <strong>'Konfirmasi Sudah Dibayar'</strong>.
 </p>
 </div>
 </div>

 @if(!empty($pendingTransactions) && count($pendingTransactions) > 0)
 <!-- Live Search Bar: Filter by Queue Number, Store Name, or Invoice -->
 <div class="mb-6 bg-white p-3.5 rounded-3xl border border-[#eceae0] shadow-xs">
 <div class="relative">
 <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#595952]">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
 </div>
 <input 
 type="text" 
 x-model="searchQuery" 
 placeholder="Cari Nomor Antrean (misal: 1, 0001), nama cabang, atau invoice..." 
 class="w-full pl-9 pr-16 py-2.5 bg-[#f9f8f3] border border-[#eceae0] rounded-full text-xs sm:text-sm text-[#2e2e2a] placeholder-[#595952] focus:ring-2 focus:ring-[#00ba7c] focus:bg-white focus:outline-none font-semibold transition-all"
 >
 <button 
 x-show="searchQuery" 
 x-cloak
 @click="searchQuery = ''" 
 class="absolute inset-y-0 right-0 pr-3 flex items-center text-xs font-black text-[#595952] hover:text-[#f4212e] cursor-pointer"
 >
 Reset
 </button>
 </div>
 </div>
 @endif

 <!-- Verification Queue Cards List -->
 <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 sm:gap-4 mb-10">
 @forelse($pendingTransactions ?? [] as $trx)
 <div 
 x-show="matchesSearch('{{ $trx->id }}', '{{ str_pad($trx->id, 4, '0', STR_PAD_LEFT) }}', '{{ addslashes($trx->invoice_code) }}', '{{ addslashes($trx->store->name ?? '') }}')"
 x-transition
 class="bg-white rounded-2xl sm:rounded-3xl border border-[#eceae0] p-4 sm:p-5 hover:border-[#00ba7c] hover:shadow-md transition-all flex flex-col justify-between shadow-2xs group relative"
 >
 <div class="space-y-3">
 <!-- Prominent Queue Number & Store Header -->
 <div class="flex items-start justify-between pb-2.5 border-b border-[#eceae0] gap-2">
 <div class="flex items-center gap-2 min-w-0 flex-1">
 <div class="px-2.5 py-1 rounded-xl bg-[#00ba7c]/10 border border-[#00ba7c]/20 text-[#00ba7c] font-black text-sm tracking-wider shrink-0 shadow-2xs">
 #{{ str_pad($trx->id, 4, '0', STR_PAD_LEFT) }}
 </div>
 <div class="min-w-0">
 <span class="text-xs font-black text-[#2e2e2a] block truncate">{{ $trx->store->name ?? 'Cabang' }}</span>
 <div class="flex items-center gap-1 mt-0.5 text-[10px] text-[#595952] font-semibold truncate">
 <span>Booth {{ $trx->store->booth_number ?? '-' }}</span>
 <span>&bull;</span>
 <span class="truncate">{{ $trx->invoice_code }}</span>
 </div>
 </div>
 </div>
 <span class="text-[10px] text-[#595952] font-bold shrink-0 bg-[#f9f8f3] px-2 py-0.5 rounded-full border border-[#eceae0]">{{ $trx->created_at->format('H:i') }}</span>
 </div>

 <!-- Total Tagihan Box -->
 <div class="flex items-center justify-between p-2.5 bg-[#f6fbf9] rounded-xl border border-[#a6e9d5]">
 <span class="text-xs font-bold text-[#595952]">Total Tagihan:</span>
 <span class="text-base font-black text-[#00ba7c] tracking-tight">Rp {{ number_format($trx->total_amount, 0, ',', '.') }}</span>
 </div>
 
 <!-- Uang Bayar & Kembalian -->
 <div class="grid grid-cols-2 gap-2 text-xs">
 <div class="bg-[#f9f8f3] p-2 rounded-lg border border-[#eceae0]">
 <span class="block text-[9px] text-[#595952] font-bold uppercase mb-0.5">Uang Bayar</span>
 <span class="font-black text-[#2e2e2a]">Rp {{ number_format($trx->amount_paid ?? 0, 0, ',', '.') }}</span>
 </div>
 <div class="bg-[#f9f8f3] p-2 rounded-lg border border-[#eceae0]">
 <span class="block text-[9px] text-[#595952] font-bold uppercase mb-0.5">Kembalian</span>
 <span class="font-black text-[#2e2e2a]">Rp {{ number_format($trx->change_due ?? 0, 0, ',', '.') }}</span>
 </div>
 </div>

 <!-- Clearly Visible Item List -->
 <div class="space-y-1.5">
 <div class="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-[#595952]">
 <span>Daftar Item:</span>
 <span>{{ $trx->items->count() }} menu</span>
 </div>
 <div class="space-y-1.5 max-h-[90px] overflow-y-auto custom-scrollbar pr-1 bg-[#f9f8f3] p-2.5 rounded-xl border border-[#eceae0]">
 @foreach($trx->items as $item)
 <div class="flex items-center justify-between text-xs py-0.5">
 <span class="font-bold text-[#2e2e2a] truncate pr-2">
 {{ $item->qty }}x {{ $item->title }}
 @if($item->is_negotiated)
 <span class="px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[9px] font-black uppercase tracking-wider border border-amber-200" title="Harga hasil nego dari Rp {{ number_format($item->original_price, 0, ',', '.') }}">Nego</span>
 @endif
 </span>
 <span class="font-semibold text-[#595952] shrink-0">Rp {{ number_format($item->subtotal, 0, ',', '.') }}</span>
 </div>
 @endforeach
 </div>
 </div>
 </div>

 <!-- Action Buttons -->
 <div class="pt-3 border-t border-[#eceae0] mt-3.5 space-y-2">
 <button 
 type="button"
 @click="confirmCash({{ $trx->id }})"
 :disabled="isConfirming"
 class="w-full py-2.5 px-3 rounded-full bg-[#00ba7c] hover:bg-[#009b67] disabled:opacity-50 text-white text-xs font-black shadow-xs transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
 >
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
 <span>Konfirmasi Sudah Dibayar</span>
 </button>
 <button 
 type="button"
 @click="completeWithoutPayment({{ $trx->id }})"
 :disabled="isConfirming"
 class="w-full py-2 px-3 rounded-full bg-[#f9f8f3] hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200 border border-[#eceae0] disabled:opacity-50 text-[#595952] text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
 >
 <svg class="w-3.5 h-3.5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
 <span>Selesaikan Verifikasi Tanpa Pembayaran</span>
 </button>
 </div>
 </div>
 @empty
 <div class="col-span-full bg-white rounded-3xl border border-[#eceae0] p-12 text-center max-w-md mx-auto my-8 shadow-2xs">
 <div class="w-16 h-16 bg-[#f6fbf9] rounded-full text-[#00ba7c] flex items-center justify-center mx-auto mb-3">
 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
 </div>
 <h4 class="text-sm font-black text-[#2e2e2a]">Antrean Verifikasi Kosong</h4>
 <p class="text-xs text-[#595952] font-semibold mt-1">Belum ada transaksi cash baru yang perlu dikonfirmasi.</p>
 </div>
 @endforelse
 </div>

 @if(!empty($historyTransactions) && count($historyTransactions) > 0)
 <!-- History Section (Only shown if history exists) -->
 <div class="mt-8 mb-4">
 <h3 class="text-lg font-black text-[#2e2e2a]">Riwayat Konfirmasi Terbaru</h3>
 </div>
 
 <div class="bg-white rounded-3xl border border-[#eceae0] overflow-hidden shadow-xs">
 <div class="overflow-x-auto">
 <table class="w-full text-left border-collapse min-w-[600px]">
 <thead>
 <tr class="bg-[#f9f8f3] border-b border-[#eceae0]">
 <th class="px-5 py-3 text-[10px] font-black uppercase tracking-wider text-[#595952]">No. Antrean</th>
 <th class="px-5 py-3 text-[10px] font-black uppercase tracking-wider text-[#595952]">Waktu</th>
 <th class="px-5 py-3 text-[10px] font-black uppercase tracking-wider text-[#595952]">Invoice</th>
 <th class="px-5 py-3 text-[10px] font-black uppercase tracking-wider text-[#595952]">Cabang</th>
 <th class="px-5 py-3 text-[10px] font-black uppercase tracking-wider text-[#595952] text-right">Total</th>
 <th class="px-5 py-3 text-[10px] font-black uppercase tracking-wider text-[#595952] text-center">Status</th>
 </tr>
 </thead>
 <tbody class="divide-y divide-[#eceae0]">
 @foreach($historyTransactions as $history)
 <tr class="hover:bg-[#f9f8f3] transition-colors">
 <td class="px-5 py-3 text-xs font-black text-[#00ba7c]">#{{ str_pad($history->id, 4, '0', STR_PAD_LEFT) }}</td>
 <td class="px-5 py-3 text-xs text-[#595952] font-semibold">{{ $history->updated_at->format('d M, H:i') }}</td>
 <td class="px-5 py-3 text-xs font-black text-[#2e2e2a]">{{ $history->invoice_code }}</td>
 <td class="px-5 py-3 text-xs text-[#595952] font-semibold">{{ $history->store->name ?? '-' }}</td>
 <td class="px-5 py-3 text-right">
 @if($history->is_without_payment)
 <span class="text-xs font-black text-amber-600">Rp 0</span>
 <span class="text-[9px] text-[#595952] block font-medium">Tanpa Pembayaran</span>
 @elseif($history->status === 'paid')
 <span class="text-xs font-black text-[#00ba7c]">Rp {{ number_format($history->total_amount, 0, ',', '.') }}</span>
 @else
 <span class="text-xs font-semibold text-[#595952] line-through">Rp {{ number_format($history->total_amount, 0, ',', '.') }}</span>
 @endif
 </td>
 <td class="px-5 py-3 text-center">
 @if($history->is_without_payment)
 <span class="inline-block px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 text-[10px] font-black border border-amber-200">
 TANPA PEMBAYARAN
 </span>
 @elseif($history->status === 'paid')
 <span class="inline-block px-2.5 py-1 rounded-lg bg-[#e6f8f2] text-[#00ba7c] text-[10px] font-black border border-[#a6e9d5]">
 LUNAS
 </span>
 @elseif($history->status === 'rejected')
 <span class="inline-block px-2.5 py-1 rounded-lg bg-[#fef2f2] text-[#f4212e] text-[10px] font-black border border-[#fecdd3]">
 DITOLAK
 </span>
 @elseif($history->status === 'cancelled')
 <span class="inline-block px-2.5 py-1 rounded-lg bg-[#f9f8f3] text-[#595952] text-[10px] font-black border border-[#eceae0] line-through">
 BATAL
 </span>
 @else
 <span class="inline-block px-2.5 py-1 rounded-lg bg-amber-50 text-amber-600 text-[10px] font-black border border-amber-200">
 {{ strtoupper($history->status) }}
 </span>
 @endif
 </td>
 </tr>
 @endforeach
 </tbody>
 </table>
 </div>
 </div>
 @endif
</div>
@endsection
