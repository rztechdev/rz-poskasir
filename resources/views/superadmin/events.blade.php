@extends('layouts.app')

@section('title', 'Kelola Cabang Sistem')

@php
 $rolePrefix = auth()->user()->isSuperAdmin() ? 'superadmin' : 'admin';
@endphp

@section('content')
<div x-data="{
 regModalOpen: false,
 regEvent: null,
 openReg(ev) { this.regEvent = ev; this.regModalOpen = true; },
 copyRegLink() {
 const url = this.regEvent?.kasir_url;
 if (!url) { Swal.fire('Info', 'Link kasir belum tersedia.', 'info'); return; }
 navigator.clipboard.writeText(url).then(() => Swal.fire({ icon: 'success', title: 'Disalin!', text: 'Link kasir berhasil disalin.', timer: 1500, showConfirmButton: false }));
 },
 subDays(ev) {
 if (!ev?.end_date) return null;
 const end = new Date((ev.end_date || '').substring(0,10) + 'T23:59:59');
 return Math.ceil((end - new Date()) / 86400000);
 },
 subLabel(ev) {
 if (!ev?.start_date && !ev?.end_date) return 'Langganan belum diatur';
 const fmt = d => d ? (d||'').substring(0,10).split('-').reverse().join('/') : '—';
 const d = this.subDays(ev);
 let sisa = '';
 if (d !== null) sisa = d < 0 ? ` · habis ${Math.abs(d)} hr lalu` : ` · sisa ${d} hr`;
 return `s/d ${fmt(ev.end_date)}${sisa}`;
 }
}" class="space-y-6">

 <!-- Header & Action (Twitter UI) -->
 <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <div>
 <div class="flex items-center gap-2">
 <span class="px-3.5 py-0.5 rounded-full bg-[#eef2e8] text-[#8b9b70] text-[10px] font-black uppercase border border-[#d2dbc2]">Cabang Sistem</span>
 <span class="text-xs text-[#2e2e2a] font-semibold">Kelola Cabang</span>
 </div>
 <h2 class="text-xl sm:text-2xl font-black text-[#2e2e2a] tracking-tight mt-1">Daftar Cabang & Pengelolaan</h2>
 <p class="text-xs sm:text-sm text-[#2e2e2a] font-medium mt-0.5">Buat cabang baru atau aktifkan cabang yang siap beroperasi</p>
 </div>

 <button 
 @click="$store.app.openCreateEventModal()"
 type="button" 
 class="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-xs sm:text-sm font-black shadow-md shadow-[#8b9b70]/25 transition-all cursor-pointer active:scale-95"
 >
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path></svg>
 <span>Buat Cabang Baru</span>
 </button>
 </div>

 <!-- Events List Grid (Twitter UI) -->
 <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
 <template x-for="event in $store.app.events" :key="event.id">
 <div 
 class="bg-white rounded-3xl border p-6 shadow-xs flex flex-col justify-between space-y-4 relative transition-all"
 :class="event.is_active ? 'border-2 border-[#8b9b70] shadow-md ring-4 ring-[#8b9b70]/10' : 'border-[#eceae0]'"
 >
 <div>
 <!-- Status Badge -->
 <div class="flex items-center justify-between">
 <span 
 class="px-3.5 py-1 rounded-full text-xs font-black flex items-center gap-1.5"
 :class="event.is_active ? 'bg-[#eef2e8] text-[#8b9b70] border border-[#d2dbc2]' : 'bg-[#eceae0] text-[#595952]'"
 >
 <span class="w-2 h-2 rounded-full" :class="event.is_active ? 'bg-[#8b9b70] animate-pulse' : 'bg-[#595952]'"></span>
 <span x-text="event.is_active ? 'Aktif' : 'Nonaktif'"></span>
 </span>

 <span class="text-[11px] font-mono text-[#595952]" x-text="`#${event.id}`"></span>
 </div>

 <!-- Title & Slug -->
 <h3 class="text-base sm:text-lg font-black text-[#2e2e2a] mt-3 leading-snug" x-text="event.name"></h3>
 <p class="text-xs text-[#595952] font-mono mt-0.5" x-text="`/${event.slug}`"></p>
 </div>

 <!-- Cabang Details -->
 <div class="space-y-2 text-xs text-[#595952] p-3.5 bg-[#f9f8f3] rounded-2xl border border-[#eceae0]">
 <div class="flex items-center gap-2">
 <span class="text-[#595952]">📍</span>
 <span class="font-bold text-[#2e2e2a] truncate" x-text="event.location || 'Alamat belum diisi'"></span>
 </div>
 <div class="flex items-center gap-2">
 <span>📅</span>
 <span class="font-bold" :class="subDays(event) !== null && subDays(event) < 0 ? 'text-[#f4212e]' : 'text-[#2e2e2a]'" x-text="subLabel(event)"></span>
 </div>
 <div class="flex items-center gap-2">
 <span class="text-[#595952]">💳</span>
 <span class="font-bold text-[#2e2e2a]" x-text="event.qris_payload ? 'Tunai & QRIS' : 'Hanya tunai'"></span>
 </div>
 </div>

 <!-- Activate & Detail Action (Twitter UI Pill) -->
 <div class="pt-2 border-t border-[#eceae0] flex flex-wrap items-center justify-between gap-2">
 <button
 type="button"
 @click="openReg(event)"
 class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#eef2e8] hover:bg-[#8b9b70] text-[#8b9b70] hover:text-white text-xs font-black transition-colors cursor-pointer"
 title="Lihat cabang terdaftar & link kasir"
 >
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
 <span>Cabang Terdaftar</span>
 </button>

 <div class="flex items-center gap-2">
 <button
 @click="$store.app.openEditEventModal(event)"
 type="button"
 class="p-2 bg-[#f9f8f3] hover:bg-[#eceae0] text-[#2e2e2a] rounded-full transition-colors cursor-pointer"
 title="Edit Cabang"
 >
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
 </button>
 <form :action="`/{{ $rolePrefix }}/events/${event.id}`" method="POST" onsubmit="return confirm('Hapus cabang ini beserta kasir, produk, dan transaksinya? Tindakan ini permanen.')">
 @csrf @method('DELETE')
 <button type="submit" class="p-2 bg-[#f4212e]/10 hover:bg-[#f4212e] text-[#f4212e] hover:text-white rounded-full transition-colors cursor-pointer" title="Hapus Cabang">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
 </button>
 </form>
 </div>

 <template x-if="!event.is_active">
 <form :action="`/{{ $rolePrefix }}/events/${event.id}/activate`" method="POST" class="w-full mt-3 sm:mt-0 sm:w-auto">
 @csrf
 <button 
 type="submit" 
 class="w-full py-2.5 px-3 bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-xs font-black rounded-full transition-colors text-center shadow-xs cursor-pointer"
 >
 Aktifkan Cabang Ini &rarr;
 </button>
 </form>
 </template>
 </div>
 </div>
 </template>
 </div>

 <!-- CREATE EVENT MODAL (SLIDE UP BOTTOM SHEET ON MOBILE) -->
 <div 
 x-show="$store.app.eventModalOpen" 
 x-cloak 
 class="fixed inset-0 z-50 overflow-y-auto"
 aria-labelledby="modal-title"
 role="dialog"
 aria-modal="true"
 >
 <!-- Backdrop -->
 <div 
 x-show="$store.app.eventModalOpen"
 x-transition:enter="ease-out duration-300"
 x-transition:enter-start="opacity-0"
 x-transition:enter-end="opacity-100"
 x-transition:leave="ease-in duration-200"
 x-transition:leave-start="opacity-100"
 x-transition:leave-end="opacity-0"
 class="fixed inset-0 bg-[#2e2e2a]/60 backdrop-blur-xs transition-opacity" 
 @click="$store.app.eventModalOpen = false"
 ></div>

 <!-- Position: Bottom on Mobile (`items-end p-0`), Center on Desktop (`sm:items-center sm:p-4`) -->
 <div class="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-left">
 <div 
 x-show="$store.app.eventModalOpen"
 x-transition:enter="ease-out duration-300"
 x-transition:enter-start="opacity-0 translate-y-full sm:translate-y-4 sm:scale-95"
 x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
 x-transition:leave="ease-in duration-200"
 x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
 x-transition:leave-end="opacity-0 translate-y-full sm:translate-y-4 sm:scale-95"
 class="relative w-full max-w-md bg-white rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 border-t sm:border border-[#eceae0] text-left max-h-[92vh] sm:max-h-none overflow-y-auto custom-scrollbar"
 >
 <!-- Mobile Drag / Pull Indicator Handle -->
 <div class="w-12 h-1.5 bg-[#cfd9de] rounded-full mx-auto mb-2 sm:hidden"></div>

 <div class="flex items-center justify-between pb-3 border-b border-[#eceae0]">
 <h3 class="text-base font-black text-[#2e2e2a]" x-text="$store.app.isEditingEvent ? 'Edit Cabang' : 'Buat Cabang Baru'"></h3>
 <button @click="$store.app.eventModalOpen = false" class="text-[#2e2e2a] hover:text-[#8b9b70] p-1.5 rounded-full hover:bg-[#eceae0] cursor-pointer">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
 </button>
 </div>

 <form 
 :action="$store.app.isEditingEvent ? `/{{ $rolePrefix }}/events/${$store.app.eventFormData.id}` : '{{ route($rolePrefix. '.events.store') }}'" 
 method="POST" 
 enctype="multipart/form-data" 
 class="space-y-3.5"
 >
 @csrf
 <input type="hidden" name="_method" :value="$store.app.isEditingEvent ? 'PUT' : 'POST'">
 <div>
 <label class="block text-xs font-bold text-[#2e2e2a] mb-1">Nama Cabang</label>
 <input 
 type="text" 
 name="name"
 x-model="$store.app.eventFormData.name"
 required
 placeholder="mis. Cabang Bandung"
 class="w-full px-3.5 py-2.5 bg-[#f9f8f3] border border-[#eceae0] rounded-xl text-xs text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none font-semibold"
 >
 </div>

 <div>
 <div class="flex items-center justify-between mb-1">
 <label class="block text-xs font-bold text-[#2e2e2a]">Teks QRIS <span class="font-normal text-[#595952]">(untuk pembayaran QRIS)</span></label>
 <a href="https://zxing.org/w/decode.jspx" target="_blank" class="inline-flex items-center gap-1 px-2.5 py-1 bg-[#eef2e8] text-[#8b9b70] text-[10px] font-black rounded-full hover:bg-[#d8eefc] transition-colors">
 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
 Alat Ekstrak Teks QRIS
 </a>
 </div>
 <textarea 
 name="qris_payload"
 x-model="$store.app.eventFormData.qris_payload"
 placeholder="000201010211266500..." 
 rows="2"
 class="w-full px-3.5 py-2.5 bg-[#f9f8f3] border border-[#eceae0] rounded-xl text-xs text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none font-mono"
 ></textarea>
 <p class="text-[10px] text-[#595952] mt-1 leading-tight">Isi teks QRIS statis cabang ini agar kasir bisa menerima QRIS — nominal otomatis mengikuti total belanja. Pakai "Alat Ekstrak Teks QRIS" untuk mengambil teks dari gambar QRIS. Kosongkan jika cabang hanya menerima tunai.</p>
 </div>

 <div>
 <label class="block text-xs font-bold text-[#2e2e2a] mb-1">Alamat / Lokasi Cabang</label>
 <input
 type="text"
 name="location"
 x-model="$store.app.eventFormData.location"
 placeholder="mis. Jl. Merdeka No. 10, Bandung"
 class="w-full px-3.5 py-2.5 bg-[#f9f8f3] border border-[#eceae0] rounded-xl text-xs text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none font-semibold"
 >
 </div>

 <!-- Masa Langganan (paket yang dijual RZ) -->
 <div class="rounded-2xl border border-[#eceae0] bg-[#f9f8f3] p-3">
 <p class="text-xs font-black text-[#2e2e2a] mb-2 flex items-center gap-1.5">
 <svg class="w-4 h-4 text-[#8b9b70]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
 Masa Langganan
 </p>
 <div class="grid grid-cols-2 gap-3">
 <div>
 <label class="block text-[11px] font-bold text-[#595952] mb-1">Mulai Langganan</label>
 <input
 type="date"
 name="start_date"
 x-model="$store.app.eventFormData.start_date"
 class="w-full px-3 py-2 bg-white border border-[#eceae0] rounded-xl text-xs text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none font-semibold"
 >
 </div>
 <div>
 <label class="block text-[11px] font-bold text-[#595952] mb-1">Langganan Berakhir</label>
 <input
 type="date"
 name="end_date"
 x-model="$store.app.eventFormData.end_date"
 class="w-full px-3 py-2 bg-white border border-[#eceae0] rounded-xl text-xs text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none font-semibold"
 >
 </div>
 </div>
 <p class="text-[10px] text-[#595952] mt-1.5">Contoh paket 1 tahun: mulai hari ini, berakhir tanggal sama tahun depan.</p>
 </div>

 <div class="pt-2 flex gap-3">
 <button 
 type="button" 
 @click="$store.app.eventModalOpen = false"
 class="flex-1 py-3 rounded-full bg-[#eceae0] hover:bg-slate-200 text-[#2e2e2a] text-xs font-black cursor-pointer"
 >
 Batal
 </button>
 <button 
 type="submit" 
 class="flex-1 py-3 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-xs font-black shadow-md shadow-[#8b9b70]/25 cursor-pointer"
 >
 Simpan Cabang
 </button>
 </div>
 </form>
 </div>
 </div>
 </div>

 <!-- ACTIVATE EVENT CONFIRMATION MODAL (SLIDE UP BOTTOM SHEET ON MOBILE) -->
 <div 
 x-show="$store.app.activateEventConfirmOpen" 
 x-cloak 
 class="fixed inset-0 z-50 overflow-y-auto"
 aria-labelledby="modal-title"
 role="dialog"
 aria-modal="true"
 >
 <div class="fixed inset-0 bg-[#2e2e2a]/60 backdrop-blur-xs" @click="$store.app.activateEventConfirmOpen = false"></div>
 <div class="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-center">
 <div 
 x-show="$store.app.activateEventConfirmOpen"
 x-transition:enter="ease-out duration-300"
 x-transition:enter-start="opacity-0 translate-y-full sm:translate-y-4 sm:scale-95"
 x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
 x-transition:leave="ease-in duration-200"
 x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
 x-transition:leave-end="opacity-0 translate-y-full sm:translate-y-4 sm:scale-95"
 class="relative w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl text-center space-y-4 border-t sm:border border-[#eceae0]"
 >
 <div class="w-12 h-1.5 bg-[#cfd9de] rounded-full mx-auto mb-2 sm:hidden"></div>
 <div class="w-12 h-12 rounded-full bg-[#eef2e8] text-[#8b9b70] flex items-center justify-center mx-auto">
 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
 </div>
 <h4 class="text-base font-black text-[#2e2e2a]">Aktifkan Cabang Ini?</h4>
 <p class="text-xs text-[#2e2e2a] leading-relaxed font-medium">
 Cabang <strong class="text-[#2e2e2a] font-black" x-text="$store.app.eventToActivate?.name"></strong> akan dijadikan cabang aktif. Cabang lain akan otomatis dinonaktifkan.
 </p>
 <div class="flex gap-2.5 pt-2">
 <button @click="$store.app.activateEventConfirmOpen = false" class="flex-1 py-3 rounded-full bg-[#eceae0] font-black text-xs text-[#2e2e2a] cursor-pointer">Batal</button>
 <button @click="$store.app.confirmActivateEvent()" class="flex-1 py-3 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] font-black text-xs text-white cursor-pointer shadow-md shadow-[#8b9b70]/25">Ya, Aktifkan</button>
 </div>
 </div>
 </div>
 </div>

 <!-- POPUP: CABANG TERDAFTAR (kasir + link) -->
 <div x-show="regModalOpen" x-cloak class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
 <div class="fixed inset-0 bg-[#2e2e2a]/60 backdrop-blur-sm" @click="regModalOpen = false"></div>
 <div class="flex min-h-full items-center justify-center p-4">
 <div class="relative max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl border border-[#eceae0]">
 <div class="flex items-center justify-between mb-4 pb-4 border-b border-[#eceae0]">
 <div>
 <h3 class="text-lg font-black text-[#2e2e2a]">Cabang Terdaftar</h3>
 <p class="text-[11px] text-[#595952] font-semibold mt-0.5" x-text="regEvent?.name"></p>
 </div>
 <button @click="regModalOpen = false" class="p-1.5 rounded-full hover:bg-[#eceae0] text-[#2e2e2a]">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
 </button>
 </div>

 <div class="rounded-2xl border border-[#eceae0] bg-[#f9f8f3] p-4 space-y-1">
 <div class="flex items-center gap-2">
 <span class="w-8 h-8 rounded-xl bg-[#eef2e8] text-[#8b9b70] flex items-center justify-center shrink-0">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 9v1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
 </span>
 <div class="min-w-0">
 <p class="text-sm font-black text-[#2e2e2a] truncate" x-text="regEvent?.kasir_name || 'Kasir belum tersedia'"></p>
 <p class="text-[11px] text-[#595952] font-semibold truncate" x-text="regEvent?.kasir_owner ? ('PIC: ' + regEvent.kasir_owner) : ''"></p>
 </div>
 </div>
 </div>

 <p class="text-xs text-[#595952] font-medium mt-4 mb-2">Link kasir (bagikan ke karyawan, tanpa login):</p>
 <div class="flex items-center gap-2">
 <input type="text" readonly :value="regEvent?.kasir_url || ''" class="flex-1 min-w-0 rounded-xl border border-[#eceae0] bg-[#f9f8f3] px-3.5 py-2.5 text-xs text-[#2e2e2a] outline-none" @focus="$event.target.select()">
 <button type="button" @click="copyRegLink()" class="shrink-0 px-4 py-2.5 rounded-xl bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-xs font-black transition-colors">Salin</button>
 </div>
 <template x-if="regEvent?.kasir_url">
 <a :href="regEvent.kasir_url" target="_blank" class="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-[#8b9b70] hover:underline">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
 Buka link kasir
 </a>
 </template>
 </div>
 </div>
 </div>
</div>
@endsection
