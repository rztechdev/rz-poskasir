@extends('layouts.app')

@section('title', 'Dashboard Super Admin')

@section('content')
<div x-data class="space-y-6">

 <!-- Header Section (Twitter UI) -->
 <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <div>
 <div class="flex items-center gap-2">
 <span class="px-3.5 py-1 rounded-full bg-[#eef2e8] text-[#8b9b70] text-xs font-black uppercase border border-[#d2dbc2]">Super Admin</span>
 <span class="text-xs text-[#2e2e2a] font-semibold">Sistem RZ</span>
 </div>
 <h2 class="text-xl sm:text-2xl font-black text-[#2e2e2a] tracking-tight mt-1.5 flex items-center gap-1.5">
 <span>Ringkasan Bisnis &amp; Cabang</span>
 </h2>
 <p class="text-xs sm:text-sm text-[#2e2e2a] font-medium mt-0.5">Pantau total omzet dan seluruh cabang dari satu tempat.</p>
 </div>

 <a 
 href="/superadmin/events" 
 class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-xs sm:text-sm font-black shadow-md shadow-[#8b9b70]/25 transition-all cursor-pointer active:scale-95"
 >
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
 <span>Kelola Cabang</span>
 </a>
 </div>


 <!-- 1 Card Menu dengan 4 Kotak Icon (Mobile Only - Tepat di bawah Header) -->
 <div class="lg:hidden bg-white rounded-3xl p-4 sm:p-5 border border-[#eceae0] shadow-xs">
 <div class="grid grid-cols-4 gap-2 sm:gap-4 text-center">
 <!-- 1. Cabang -->
 <a 
 href="/superadmin/events" 
 class="flex flex-col items-center group cursor-pointer active:scale-95 transition-transform"
 >
 <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#eef2e8] group-hover:bg-[#8b9b70] text-[#8b9b70] group-hover:text-white flex items-center justify-center transition-all shadow-2xs group-hover:shadow-md group-hover:shadow-[#8b9b70]/25">
 <svg class="w-6 h-6 sm:w-7 sm:h-7 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
 </div>
 <span class="text-[11px] sm:text-xs font-black text-[#2e2e2a] group-hover:text-[#8b9b70] mt-2 block tracking-tight truncate w-full">Cabang</span>
 </a>

 <!-- 2. Kelola Akun -->
 <a
 href="/superadmin/users"
 class="flex flex-col items-center group cursor-pointer active:scale-95 transition-transform"
 >
 <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#eef2e8] group-hover:bg-[#8b9b70] text-[#8b9b70] group-hover:text-white flex items-center justify-center transition-all shadow-2xs group-hover:shadow-md group-hover:shadow-[#8b9b70]/25">
 <svg class="w-6 h-6 sm:w-7 sm:h-7 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
 </div>
 <span class="text-[11px] sm:text-xs font-black text-[#2e2e2a] group-hover:text-[#8b9b70] mt-2 block tracking-tight truncate w-full">Akun</span>
 </a>

 <!-- 3. Helpdesk -->
 <a 
 href="/superadmin/helpdesk" 
 class="flex flex-col items-center group cursor-pointer active:scale-95 transition-transform"
 >
 <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#eef2e8] group-hover:bg-[#8b9b70] text-[#8b9b70] group-hover:text-white flex items-center justify-center transition-all shadow-2xs group-hover:shadow-md group-hover:shadow-[#8b9b70]/25">
 <svg class="w-6 h-6 sm:w-7 sm:h-7 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
 </div>
 <span class="text-[11px] sm:text-xs font-black text-[#2e2e2a] group-hover:text-[#8b9b70] mt-2 block tracking-tight truncate w-full">Helpdesk</span>
 </a>

 <!-- 4. SOP / Panduan -->
 <a 
 href="/superadmin/panduan" 
 class="flex flex-col items-center group cursor-pointer active:scale-95 transition-transform"
 >
 <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#eef2e8] group-hover:bg-[#8b9b70] text-[#8b9b70] group-hover:text-white flex items-center justify-center transition-all shadow-2xs group-hover:shadow-md group-hover:shadow-[#8b9b70]/25">
 <svg class="w-6 h-6 sm:w-7 sm:h-7 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
 </div>
 <span class="text-[11px] sm:text-xs font-black text-[#2e2e2a] group-hover:text-[#8b9b70] mt-2 block tracking-tight truncate w-full">SOP Kasir</span>
 </a>
 </div>
 </div>

 <!-- KPI Metric Cards -->
 <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
 <!-- 1. Total Omzet -->
 <div class="bg-gradient-to-br from-[#8b9b70] to-[#667451] rounded-3xl p-5 text-white shadow-lg shadow-[#8b9b70]/25">
 <span class="text-xs font-bold text-white/90 uppercase tracking-wider block">Total Omzet</span>
 <h3 class="text-2xl sm:text-3xl font-black mt-2 tracking-tight text-white" x-text="formatRupiah($store.app.transactions.filter(t => t.status === 'paid').reduce((sum, t) => sum + t.total_amount, 0))"></h3>
 <p class="text-xs text-white/90 mt-2 font-medium">Seluruh cabang, transaksi lunas</p>
 </div>

 <!-- 2. Total Transaksi -->
 <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs flex flex-col justify-between">
 <div>
 <span class="text-xs font-bold text-[#2e2e2a] uppercase tracking-wider block">Total Transaksi</span>
 <h3 class="text-xl font-black text-[#2e2e2a] mt-2" x-text="`${$store.app.transactions.filter(t => t.status === 'paid').length} Transaksi`"></h3>
 </div>
 <p class="text-xs text-[#595952] mt-3 font-semibold">Transaksi lunas tercatat</p>
 </div>

 <!-- 3. Total Cabang -->
 <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs flex flex-col justify-between">
 <div>
 <span class="text-xs font-bold text-[#2e2e2a] uppercase tracking-wider block">Total Cabang</span>
 <h3 class="text-xl font-black text-[#8b9b70] mt-2" x-text="`${$store.app.events.length} Cabang`"></h3>
 </div>
 <p class="text-xs text-[#595952] mt-3 font-semibold">Jumlah cabang terdaftar</p>
 </div>
 </div>

 <!-- Active Cabang Banner (Twitter UI) -->
 <div class="bg-white rounded-3xl p-6 border-2 border-[#8b9b70] shadow-sm relative overflow-hidden">
 <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <div>
 <div class="flex items-center gap-2">
 <span class="px-3 py-0.5 rounded-full bg-[#eef2e8] text-[#8b9b70] text-xs font-black uppercase border border-[#d2dbc2]">
 ● Cabang Berjalan
 </span>
 <span class="text-xs text-[#595952] font-mono" x-text="`#ID: ${$store.app.getActiveEvent()?.id}`"></span>
 </div>
 <h3 class="text-lg sm:text-xl font-black text-[#2e2e2a] mt-1.5" x-text="$store.app.getActiveEvent()?.name"></h3>
 <p class="text-xs text-[#2e2e2a] mt-1">
 📅 <span class="font-bold" x-text="`${$store.app.getActiveEvent()?.start_date} s/d ${$store.app.getActiveEvent()?.end_date}`"></span>
 • 📍 <span class="font-bold" x-text="$store.app.getActiveEvent()?.location || 'Lokasi Cabang'"></span>
 </p>
 </div>

 <a 
 href="/admin/dashboard" 
 class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-xs font-black transition-colors cursor-pointer shadow-xs"
 >
 Masuk ke Panel &rarr;
 </a>
 </div>
</div>
@endsection
