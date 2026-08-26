@extends('layouts.app')

@section('title', 'Daftar Cabang & Cabang')

@section('content')
<div x-data="{
 searchStore: '',
 selectedStoreDetail: null,
 storeDetailModalOpen: false,
 linkModalOpen: false,
 linkUrl: '',
 linkStoreName: '',

 openLinkModal(store) {
 this.linkUrl = store.access_url || '';
 this.linkStoreName = store.name || '';
 this.linkModalOpen = true;
 },

 copyKasirLink() {
 if (!this.linkUrl) { Swal.fire('Info', 'Link kasir belum tersedia.', 'info'); return; }
 navigator.clipboard.writeText(this.linkUrl).then(() => Swal.fire({ icon: 'success', title: 'Disalin!', text: 'Link kasir berhasil disalin.', timer: 1500, showConfirmButton: false }));
 },

 qrisModalOpen: false,
 qrisStoreId: null,
 qrisStoreName: '',
 qrisPayload: '',
 qrisSaving: false,

 openQrisModal(store) {
 this.qrisStoreId = store.id;
 this.qrisStoreName = store.name || '';
 this.qrisPayload = store.qris_payload || '';
 this.qrisModalOpen = true;
 },

 async saveQris() {
 this.qrisSaving = true;
 try {
 const res = await fetch(`/admin/warung/${this.qrisStoreId}/qris`, {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 'X-CSRF-TOKEN': document.querySelector('meta[name=csrf-token]').content,
 'X-Requested-With': 'XMLHttpRequest',
 'Accept': 'application/json',
 },
 body: JSON.stringify({ qris_payload: this.qrisPayload }),
 });
 const data = await res.json();
 if (!res.ok || !data.success) throw new Error(data.message || 'Gagal menyimpan QRIS.');
 const s = $store.app.stores.find(s => s.id == this.qrisStoreId);
 if (s) s.qris_payload = data.qris_payload;
 this.qrisModalOpen = false;
 Swal.fire({ icon: 'success', title: 'Tersimpan!', text: data.message, timer: 1600, showConfirmButton: false });
 } catch (e) {
 Swal.fire('Gagal', e.message, 'error');
 } finally {
 this.qrisSaving = false;
 }
 },

 get filteredStores() {
 return $store.app.stores.filter(s => {
 return s.name.toLowerCase().includes(this.searchStore.toLowerCase()) || 
 s.owner_name.toLowerCase().includes(this.searchStore.toLowerCase());
 });
 },

 getStoreProducts(storeId) {
 return $store.app.products.filter(p => p.store_id === storeId);
 },

 getStoreRevenue(storeId) {
 const paid = $store.app.transactions.filter(t => t.store_id === storeId && t.status === 'paid');
 return paid.reduce((sum, t) => sum + t.total_amount, 0);
 },

 pullModalOpen: false,

 openDetail(store) {
 this.selectedStoreDetail = store;
 this.storeDetailModalOpen = true;
 }
}" class="space-y-6">

 <!-- Header (Twitter UI) -->
 <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <div>
 <div class="flex items-center gap-2">
 <span class="px-3.5 py-0.5 rounded-full bg-[#eef2e8] text-[#8b9b70] text-[10px] font-black uppercase border border-[#d2dbc2]">Direktori Cabang</span>
 <span class="text-xs text-[#2e2e2a] font-semibold">Cabang</span>
 </div>
 <h2 class="text-xl sm:text-2xl font-black text-[#2e2e2a] tracking-tight mt-1">Daftar Cabang & Pemilik</h2>
 <p class="text-xs sm:text-sm text-[#2e2e2a] font-medium mt-0.5">Kelola data cabang, kontak WhatsApp pemilik, dan pantau penjualan per cabang</p>
 </div>

 <div class="flex items-center gap-3">
 <div class="text-xs font-black text-[#2e2e2a] bg-white px-4 py-2 rounded-full border border-[#eceae0] shadow-xs">
 Total Cabang Aktif: <span class="text-[#8b9b70] font-black" x-text="$store.app.stores.length"></span>
 </div>
 </div>
 </div>

 <!-- Search Input (Twitter UI) -->
 <div class="bg-white p-3.5 rounded-2xl border border-[#eceae0] shadow-xs max-w-md">
 <div class="relative">
 <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#595952]">
 <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
 </div>
 <input 
 type="text" 
 x-model="searchStore"
 placeholder="Cari nama cabang atau nama pemilik..." 
 class="w-full pl-9 pr-4 py-2 bg-[#f9f8f3] border border-[#eceae0] rounded-full text-xs sm:text-sm text-[#2e2e2a] placeholder-[#595952] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none font-semibold"
 >
 </div>
 </div>


 <!-- Stores Grid (Twitter UI - 2 Cards Mobile, 4 Cards Desktop) -->
 <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-2.5 sm:gap-3.5">
 <template x-for="store in filteredStores" :key="store.id">
 <div class="bg-white rounded-2xl border border-[#eceae0] p-2.5 sm:p-4 shadow-2xs hover:border-[#8b9b70]/50 hover:shadow-xs transition-all flex flex-col justify-between space-y-2 sm:space-y-3 group">
 <div>
 <!-- Top Info -->
 <div class="flex items-center justify-between gap-1 mb-1">
 <span class="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#f9f8f3] font-mono text-[8px] sm:text-[9px] font-bold text-[#2e2e2a] border border-[#eceae0]" x-text="store.booth_number || 'Cabang 01'"></span>
 <span class="px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-black bg-[#eef2e8] text-[#8b9b70] border border-[#d2dbc2]">
 Aktif
 </span>
 </div>

 <h3 class="font-black text-xs sm:text-base text-[#2e2e2a] truncate leading-tight group-hover:text-[#8b9b70] transition-colors" x-text="store.name"></h3>
 <p class="text-[10px] sm:text-xs text-[#595952] font-semibold truncate mt-0.5" x-text="`Pemilik: ${store.owner_name}`"></p>
 <span class="inline-block mt-0.5 text-[9px] sm:text-[11px] px-2 py-0.5 rounded-full bg-[#f9f8f3] text-[#8b9b70] font-bold border border-[#eceae0] truncate max-w-full" x-text="store.category || 'Makanan'"></span>
 </div>

 <!-- Compact Stats Grid -->
 <div class="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 text-xs p-2 sm:p-2.5 bg-[#f9f8f3] rounded-xl border border-[#eceae0]">
 <div>
 <span class="text-[8px] sm:text-[9px] text-[#595952] block font-semibold">Total Menu</span>
 <span class="font-black text-[10px] sm:text-xs text-[#2e2e2a]" x-text="getStoreProducts(store.id).length + ' Menu'"></span>
 </div>
 <div>
 <span class="text-[8px] sm:text-[9px] text-[#595952] block font-semibold">Omzet</span>
 <span class="font-black text-[10px] sm:text-xs text-[#8b9b70] truncate block" x-text="formatRupiah(getStoreRevenue(store.id))"></span>
 </div>
 </div>

 <!-- Action Links (Twitter Style Pills) -->
 <div class="pt-1.5 sm:pt-2 border-t border-[#eceae0] flex flex-col sm:flex-row sm:items-center justify-between gap-1.5">
 <div class="flex items-center gap-1">
 <!-- Impersonate Button (Masuk sebagai Cabang) -->
 <form :action="`{{ (auth()->user() && auth()->user()->isSuperAdmin()) ? '/superadmin/impersonate/' : '/admin/impersonate/' }}${store.id}`" method="POST" class="inline">
 @csrf
 <button 
 type="submit" 
 class="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#2e2e2a] hover:bg-[#272c30] text-white text-[9px] sm:text-[10px] font-black transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-0.5"
 title="Buka terminal kasir dan kelola menu langsung sebagai cabang ini"
 >
 <svg class="w-2.5 sm:w-3 h-2.5 sm:h-3 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
 <span>Inspeksi</span>
 </button>
 </form>

 <!-- Link Kasir (popup + salin) -->
 <button
 type="button"
 @click="openLinkModal(store)"
 class="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-[#eef2e8] hover:bg-[#8b9b70] text-[#8b9b70] hover:text-white border border-[#d2dbc2] text-[9px] sm:text-[10px] font-black transition-all cursor-pointer active:scale-95 flex items-center gap-0.5"
 title="Lihat & salin link kasir cabang ini"
 >
 <svg class="w-2.5 sm:w-3 h-2.5 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
 <span>Link Kasir</span>
 </button>

 <!-- QRIS (isi teks payload) -->
 <button
 type="button"
 @click="openQrisModal(store)"
 class="px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-black transition-all cursor-pointer active:scale-95 flex items-center gap-0.5 border"
 :class="store.qris_payload ? 'bg-[#8b9b70] text-white border-[#8b9b70]' : 'bg-white text-[#595952] border-[#eceae0] hover:bg-[#eef2e8] hover:text-[#8b9b70]'"
 title="Isi / ubah teks QRIS cabang ini"
 >
 <svg class="w-2.5 sm:w-3 h-2.5 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h6v6H4V4zm10 0h6v6h-6V4zM4 14h6v6H4v-6zm10 3h3m0 0h3m-3 0v3m0-3v-3"/></svg>
 <span x-text="store.qris_payload ? 'QRIS ✓' : 'QRIS'"></span>
 </button>
 </div>

 </div>
 </div>
 </template>
 </div>

 <!-- Empty State -->
 <template x-if="filteredStores.length === 0">
 <div class="bg-white rounded-3xl border border-[#eceae0] p-12 text-center max-w-md mx-auto my-8 shadow-2xs">
 <div class="w-16 h-16 bg-[#eef2e8] rounded-full text-[#8b9b70] flex items-center justify-center mx-auto mb-3">
 <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
 </div>
 <h4 class="text-sm font-black text-[#2e2e2a]">Belum Ada Cabang Terdaftar</h4>
 <p class="text-xs text-[#595952] font-semibold mt-1">Cabang baru yang mendaftar secara mandiri melalui form registrasi akan langsung muncul di sini.</p>
 </div>
 </template>

 <!-- STORE DETAIL MODAL (SLIDE UP BOTTOM SHEET ON MOBILE) -->
 <div 
 x-show="storeDetailModalOpen" 
 x-cloak 
 class="fixed inset-0 z-50 overflow-y-auto"
 aria-labelledby="modal-title"
 role="dialog"
 aria-modal="true"
 >
 <!-- Backdrop -->
 <div 
 x-show="storeDetailModalOpen"
 x-transition:enter="ease-out duration-300"
 x-transition:enter-start="opacity-0"
 x-transition:enter-end="opacity-100"
 x-transition:leave="ease-in duration-200"
 x-transition:leave-start="opacity-100"
 x-transition:leave-end="opacity-0"
 class="fixed inset-0 bg-[#2e2e2a]/60 backdrop-blur-xs transition-opacity" 
 @click="storeDetailModalOpen = false"
 ></div>

 <!-- Position: Bottom on Mobile (`items-end p-0`), Center on Desktop (`sm:items-center sm:p-4`) -->
 <div class="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-left">
 <div 
 x-show="storeDetailModalOpen"
 x-transition:enter="ease-out duration-300"
 x-transition:enter-start="opacity-0 translate-y-full sm:translate-y-4 sm:scale-95"
 x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
 x-transition:leave="ease-in duration-200"
 x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
 x-transition:leave-end="opacity-0 translate-y-full sm:translate-y-4 sm:scale-95"
 class="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4 border-t sm:border border-[#eceae0] text-left max-h-[92vh] sm:max-h-none overflow-y-auto custom-scrollbar"
 >
 <div class="w-12 h-1.5 bg-[#cfd9de] rounded-full mx-auto mb-2 sm:hidden"></div>

 <div class="flex items-center justify-between pb-3 border-b border-[#eceae0]">
 <div>
 <h3 class="text-base font-black text-[#2e2e2a]" x-text="selectedStoreDetail?.name"></h3>
 <p class="text-xs text-[#595952] font-medium" x-text="`Pemilik: ${selectedStoreDetail?.owner_name} • ${selectedStoreDetail?.phone}`"></p>
 </div>
 <button @click="storeDetailModalOpen = false" class="text-[#2e2e2a] hover:text-[#8b9b70] p-1.5 rounded-full hover:bg-[#eceae0] cursor-pointer">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
 </button>
 </div>

 <div class="space-y-2.5 max-h-72 overflow-y-auto custom-scrollbar">
 <template x-for="p in getStoreProducts(selectedStoreDetail?.id)" :key="p.id">
 <div class="p-3 bg-[#f9f8f3] rounded-2xl flex items-center justify-between gap-3 border border-[#eceae0]">
 <img :src="p.photo" class="w-12 h-12 rounded-xl object-cover border border-[#eceae0]">
 <div class="flex-1 min-w-0">
 <h5 class="font-black text-xs text-[#2e2e2a] truncate" x-text="p.title"></h5>
 <span class="text-[10px] text-[#595952] font-semibold" x-text="p.category"></span>
 </div>
 <span class="text-xs font-black text-[#8b9b70]" x-text="formatRupiah(p.price)"></span>
 </div>
 </template>
 </div>
 
 <!-- QRIS Toggle -->
 <div class="p-3 bg-[#f9f8f3] rounded-2xl border border-[#eceae0]">
 <div class="flex items-center justify-between">
 <div>
 <p class="text-sm font-black text-[#2e2e2a]">Gunakan QRIS Dinamis</p>
 <p class="text-[10px] text-[#595952] font-medium leading-tight mt-0.5 max-w-[200px] sm:max-w-xs">Pelanggan bisa langsung menscan nominal yang tepat. Cocok untuk cabang dengan fitur harga tawar.</p>
 </div>
 <label class="relative inline-flex items-center cursor-pointer">
 <input type="checkbox" class="sr-only peer" :checked="selectedStoreDetail?.use_dynamic_qris" @change="async (e) => {
 try {
 const res = await apiFetch(`/admin/warung/${selectedStoreDetail.id}`, {
 method: 'PUT',
 body: JSON.stringify({ use_dynamic_qris: e.target.checked })
 });
 if(res.success) {
 // Update state
 const storeIndex = $store.app.stores.findIndex(s => s.id === selectedStoreDetail.id);
 if(storeIndex !== -1) {
 $store.app.stores[storeIndex].use_dynamic_qris = e.target.checked;
 }
 selectedStoreDetail.use_dynamic_qris = e.target.checked;
 Toastify({ text: 'Pengaturan QRIS diperbarui!', duration: 3000, style: { background: '#00ba7c' } }).showToast();
 }
 } catch(err) {
 e.target.checked = !e.target.checked;
 Toastify({ text: 'Gagal memperbarui pengaturan QRIS', duration: 3000, style: { background: '#f4212e' } }).showToast();
 }
 }">
 <div class="w-11 h-6 bg-[#eceae0] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-[#eceae0] after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#8b9b70]"></div>
 </label>
 </div>
 </div>

 <div class="pt-3 border-t border-[#eceae0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
 <form :action="selectedStoreDetail ? `{{ (auth()->user() && auth()->user()->isSuperAdmin()) ? '/superadmin/impersonate/' : '/admin/impersonate/' }}${selectedStoreDetail.id}` : '#'" method="POST">
 @csrf
 <button type="submit" class="w-full sm:w-auto px-5 py-2.5 bg-[#2e2e2a] hover:bg-[#272c30] text-white text-xs font-black rounded-full cursor-pointer shadow-xs transition-all flex items-center justify-center gap-1.5">
 <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
 <span>Masuk & Kelola sebagai Cabang Ini</span>
 </button>
 </form>
 <button @click="storeDetailModalOpen = false" class="w-full sm:w-auto px-6 py-2.5 bg-[#eceae0] text-[#2e2e2a] text-xs font-black rounded-full cursor-pointer hover:bg-slate-200 transition-all">
 Tutup
 </button>
 </div>
 </div>
 </div>
 </div>

 <!-- LINK KASIR MODAL (popup + salin) -->
 <div x-show="linkModalOpen" x-cloak class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
 <div class="fixed inset-0 bg-[#2e2e2a]/60 backdrop-blur-sm" @click="linkModalOpen = false"></div>
 <div class="flex min-h-full items-center justify-center p-4">
 <div class="relative max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl border border-[#eceae0]">
 <div class="flex items-center justify-between mb-4 pb-4 border-b border-[#eceae0]">
 <div>
 <h3 class="text-lg font-black text-[#2e2e2a]">Link Kasir</h3>
 <p class="text-[11px] text-[#595952] font-semibold mt-0.5" x-text="linkStoreName"></p>
 </div>
 <button @click="linkModalOpen = false" class="p-1.5 rounded-full hover:bg-[#eceae0] text-[#2e2e2a]">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
 </button>
 </div>
 <p class="text-xs text-[#595952] font-medium mb-2">Bagikan link ini ke kasir. Kasir cukup buka link, tanpa perlu login.</p>
 <div class="flex items-center gap-2">
 <input type="text" readonly :value="linkUrl" class="flex-1 min-w-0 rounded-xl border border-[#eceae0] bg-[#f9f8f3] px-3.5 py-2.5 text-xs text-[#2e2e2a] outline-none" @focus="$event.target.select()">
 <button type="button" @click="copyKasirLink()" class="shrink-0 px-4 py-2.5 rounded-xl bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-xs font-black transition-colors">Salin</button>
 </div>
 <template x-if="linkUrl">
 <a :href="linkUrl" target="_blank" class="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-[#8b9b70] hover:underline">
 <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
 Buka link kasir
 </a>
 </template>
 </div>
 </div>
 </div>
 <!-- QRIS MODAL (isi teks payload cabang) -->
 <div x-show="qrisModalOpen" x-cloak class="fixed inset-0 z-50 overflow-y-auto" role="dialog" aria-modal="true">
 <div class="fixed inset-0 bg-[#2e2e2a]/60 backdrop-blur-sm" @click="qrisModalOpen = false"></div>
 <div class="flex min-h-full items-center justify-center p-4">
 <div class="relative max-w-lg w-full bg-white rounded-3xl p-6 shadow-2xl border border-[#eceae0]">
 <div class="flex items-center justify-between mb-4 pb-4 border-b border-[#eceae0]">
 <div>
 <h3 class="text-lg font-black text-[#2e2e2a]">Teks QRIS Cabang</h3>
 <p class="text-[11px] text-[#595952] font-semibold mt-0.5" x-text="qrisStoreName"></p>
 </div>
 <button @click="qrisModalOpen = false" class="p-1.5 rounded-full hover:bg-[#eceae0] text-[#2e2e2a]">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
 </button>
 </div>

 <div class="flex items-center justify-between mb-1.5">
 <label class="block text-xs font-bold text-[#2e2e2a]">Teks QRIS <span class="font-normal text-[#595952]">(payload)</span></label>
 <a href="https://zxing.org/w/decode.jspx" target="_blank" class="inline-flex items-center gap-1 px-2.5 py-1 bg-[#eef2e8] text-[#8b9b70] text-[10px] font-black rounded-full hover:bg-[#8b9b70] hover:text-white transition-colors">
 <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
 Alat Ekstrak Teks QRIS
 </a>
 </div>
 <textarea x-model="qrisPayload" rows="3" placeholder="000201010211266500..." class="w-full px-3.5 py-2.5 bg-[#f9f8f3] border border-[#eceae0] rounded-xl text-xs text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none font-mono"></textarea>
 <p class="text-[10px] text-[#595952] mt-1 leading-tight">Tempel teks QRIS statis cabang ini agar kasir bisa menerima QRIS — nominal otomatis mengikuti belanja. Buka "Alat Ekstrak Teks QRIS" untuk mengambil teks dari gambar QRIS. Kosongkan jika hanya menerima tunai.</p>

 <div class="pt-4 flex gap-3">
 <button type="button" @click="qrisModalOpen = false" class="flex-1 py-2.5 rounded-full bg-[#eceae0] text-[#2e2e2a] text-xs font-black hover:bg-[#d9d6c8] transition-colors cursor-pointer">Batal</button>
 <button type="button" @click="saveQris()" :disabled="qrisSaving" class="flex-1 py-2.5 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] disabled:opacity-50 text-white text-xs font-black transition-colors cursor-pointer" x-text="qrisSaving ? 'Menyimpan...' : 'Simpan QRIS'"></button>
 </div>
 </div>
 </div>
 </div>
</div>
@endsection
