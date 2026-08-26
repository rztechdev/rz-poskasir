@extends('layouts.app')

@section('title', 'Laporan Penjualan')

@section('content')
<div x-data="{
    search: '',
    selectedMethod: 'all',
    selectedStatus: 'all',

    get currentStore() { return $store.app.getCurrentStore?.() || null; },

    get myTransactions() {
        const storeId = this.currentStore ? this.currentStore.id : null;
        const q = (this.search || '').toLowerCase().trim().replace(/^#/, '');
        return ($store.app.transactions || []).filter(t => {
            const matchesStore = storeId ? t.store_id == storeId : true;
            const idStr = String(t.id || '');
            const matchesSearch = !q || (t.invoice_code || '').toLowerCase().includes(q) || idStr.includes(q) || idStr.padStart(4, '0').includes(q);
            const matchesMethod = this.selectedMethod === 'all' || t.payment_method === this.selectedMethod;
            const matchesStatus = this.selectedStatus === 'all' || t.status === this.selectedStatus;
            return matchesStore && matchesSearch && matchesMethod && matchesStatus;
        });
    },

    get stats() {
        return $store.app.getUserReportStats?.(this.currentStore ? this.currentStore.id : null) || {
            totalGross: 0, totalCash: 0, totalQris: 0, totalCount: 0, cancelledCount: 0
        };
    }
}" class="max-w-6xl mx-auto p-4 sm:p-6 space-y-5">

    <!-- Header + Export -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <div class="flex items-center gap-2">
                <span class="px-3.5 py-0.5 rounded-full bg-[#eef2e8] text-[#8b9b70] text-[10px] font-black uppercase border border-[#d2dbc2]">Laporan Cabang</span>
            </div>
            <h2 class="text-xl sm:text-2xl font-black text-[#2e2e2a] tracking-tight mt-1">Laporan Penjualan</h2>
            <p class="text-xs sm:text-sm text-[#595952] font-semibold mt-0.5" x-text="`Rekap transaksi ${currentStore?.name || 'Cabang Saya'}`"></p>
        </div>

        <div class="flex flex-wrap items-center gap-2">
            <button type="button" @click="$store.app.printUserReport(myTransactions)" class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#D93025] hover:bg-[#b0271d] text-white text-xs font-black shadow-xs transition-all cursor-pointer active:scale-95" title="Cetak / Simpan PDF">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"></path></svg>
                <span>PDF / Cetak</span>
            </button>
            <button type="button" @click="$store.app.exportUserReportWord(myTransactions)" class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#185ABD] hover:bg-[#12448f] text-white text-xs font-black shadow-xs transition-all cursor-pointer active:scale-95" title="Unduh Word (.doc)">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span>Word (.doc)</span>
            </button>
            <button type="button" @click="$store.app.exportUserReportExcel(myTransactions)" class="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-[#217346] hover:bg-[#1a5a37] text-white text-xs font-black shadow-xs transition-all cursor-pointer active:scale-95" title="Unduh Excel (.xls)">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <span>Excel (.xls)</span>
            </button>
        </div>
    </div>

    <!-- KPI Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div class="bg-gradient-to-br from-[#8b9b70] to-[#667451] rounded-3xl p-5 text-white shadow-lg shadow-[#8b9b70]/25">
            <span class="text-xs font-bold text-white/90 uppercase tracking-wider block">Total Omzet</span>
            <h3 class="text-lg sm:text-xl font-black mt-1 text-white" x-text="formatRupiah(stats.totalGross)"></h3>
            <p class="text-[11px] text-white/90 mt-2 font-semibold"><span class="font-black" x-text="stats.totalCount"></span> transaksi lunas</p>
        </div>
        <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs">
            <span class="text-xs font-bold text-[#2e2e2a] uppercase tracking-wider block">💵 Total Cash</span>
            <h3 class="text-lg sm:text-xl font-black text-[#2e2e2a] mt-1" x-text="formatRupiah(stats.totalCash)"></h3>
            <p class="text-[11px] text-[#595952] mt-2 font-medium">Pembayaran tunai</p>
        </div>
        <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs">
            <span class="text-xs font-bold text-[#8b9b70] uppercase tracking-wider block">📱 Total QRIS</span>
            <h3 class="text-lg sm:text-xl font-black text-[#8b9b70] mt-1" x-text="formatRupiah(stats.totalQris)"></h3>
            <p class="text-[11px] text-[#595952] mt-2 font-medium">Pembayaran QRIS</p>
        </div>
        <div class="bg-white rounded-3xl p-5 border border-[#eceae0] shadow-xs">
            <span class="text-xs font-bold text-[#f4212e] uppercase tracking-wider block">Dibatalkan</span>
            <h3 class="text-lg sm:text-xl font-black text-[#f4212e] mt-1" x-text="stats.cancelledCount"></h3>
            <p class="text-[11px] text-[#595952] mt-2 font-medium">Transaksi batal</p>
        </div>
    </div>

    <!-- Filter Bar -->
    <div class="flex flex-col md:flex-row gap-3 items-stretch md:items-center bg-white p-3.5 rounded-2xl border border-[#eceae0] shadow-xs">
        <div class="relative flex-1">
            <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#595952]">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input type="text" x-model="search" placeholder="Cari no. invoice / antrean..." class="w-full pl-9 pr-4 py-2 bg-[#f9f8f3] border border-[#eceae0] rounded-full text-xs sm:text-sm text-[#2e2e2a] placeholder-[#595952] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none font-semibold">
        </div>
        <select x-model="selectedMethod" class="px-4 py-2 bg-[#f9f8f3] border border-[#eceae0] rounded-full text-xs font-black text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none cursor-pointer">
            <option value="all">Semua Metode</option>
            <option value="cash">Cash</option>
            <option value="qris">QRIS</option>
        </select>
        <select x-model="selectedStatus" class="px-4 py-2 bg-[#f9f8f3] border border-[#eceae0] rounded-full text-xs font-black text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none cursor-pointer">
            <option value="all">Semua Status</option>
            <option value="paid">Lunas</option>
            <option value="cancelled">Dibatalkan</option>
        </select>

        <!-- Filter Periode (dari–sampai + preset) -->
        <div
            x-data="{
                from: new URLSearchParams(location.search).get('from') || '',
                to: new URLSearchParams(location.search).get('to') || '',
                terapkan() {
                    const url = new URL(location.href);
                    if (this.from && this.to) { url.searchParams.set('from', this.from); url.searchParams.set('to', this.to); }
                    else if (this.from) { url.searchParams.set('from', this.from); url.searchParams.set('to', this.from); }
                    else { url.searchParams.delete('from'); url.searchParams.delete('to'); }
                    location.href = url.toString();
                },
                cepat(hari) {
                    const d = new Date(); const akhir = new Date(d); const awal = new Date(d);
                    if (hari === 'kemarin') { awal.setDate(awal.getDate() - 1); akhir.setDate(akhir.getDate() - 1); }
                    if (hari === '7hari') { awal.setDate(awal.getDate() - 6); }
                    const f = (x) => x.toISOString().substring(0, 10);
                    this.from = f(awal); this.to = f(akhir); this.terapkan();
                }
            }"
            class="flex flex-wrap items-center gap-2"
        >
            <input type="date" x-model="from" @change="if (to) terapkan()" title="Dari tanggal"
                class="px-3 py-2 bg-[#f9f8f3] border border-[#eceae0] rounded-full text-xs font-black text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none cursor-pointer">
            <span class="text-[10px] font-black text-[#595952]">s/d</span>
            <input type="date" x-model="to" @change="terapkan()" title="Sampai tanggal"
                class="px-3 py-2 bg-[#f9f8f3] border border-[#eceae0] rounded-full text-xs font-black text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none cursor-pointer">
            <button @click="cepat('hariini')" type="button" class="px-3 py-2 bg-[#f9f8f3] hover:bg-[#eef2e8] hover:text-[#8b9b70] border border-[#eceae0] rounded-full text-xs font-black text-[#2e2e2a] transition-colors cursor-pointer shrink-0">Hari Ini</button>
            <button @click="cepat('kemarin')" type="button" class="px-3 py-2 bg-[#f9f8f3] hover:bg-[#eef2e8] hover:text-[#8b9b70] border border-[#eceae0] rounded-full text-xs font-black text-[#2e2e2a] transition-colors cursor-pointer shrink-0">Kemarin</button>
            <button @click="cepat('7hari')" type="button" class="px-3 py-2 bg-[#f9f8f3] hover:bg-[#eef2e8] hover:text-[#8b9b70] border border-[#eceae0] rounded-full text-xs font-black text-[#2e2e2a] transition-colors cursor-pointer shrink-0">7 Hari</button>
            <button x-show="from || to" x-cloak @click="from = ''; to = ''; terapkan()" type="button"
                class="px-3 py-2 bg-[#f4212e]/10 hover:bg-[#f4212e]/20 text-[#f4212e] rounded-full text-xs font-black transition-colors cursor-pointer shrink-0" title="Tampilkan semua periode">Reset</button>
        </div>
    </div>

    <!-- Transaction Table (desktop) -->
    <div class="hidden lg:block bg-white rounded-3xl border border-[#eceae0] shadow-xs overflow-hidden">
        <div class="overflow-x-auto">
            <table class="w-full text-left text-xs text-[#2e2e2a]">
                <thead class="bg-[#f9f8f3] border-b border-[#eceae0] text-[10px] uppercase font-black text-[#2e2e2a] tracking-wider">
                    <tr>
                        <th class="px-4 py-3.5">Invoice / Antrean</th>
                        <th class="px-4 py-3.5">Waktu</th>
                        <th class="px-4 py-3.5">Metode</th>
                        <th class="px-4 py-3.5 text-right">Total Belanja</th>
                        <th class="px-4 py-3.5">Status</th>
                        <th class="px-4 py-3.5 text-center">Struk</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-[#eceae0] font-medium">
                    <template x-for="tx in myTransactions" :key="tx.id">
                        <tr class="hover:bg-[#f9f8f3] transition-colors" :class="{ 'opacity-60 line-through': tx.status === 'cancelled' }">
                            <td class="px-4 py-3 font-black text-[#2e2e2a]">
                                <div class="flex items-center gap-1.5">
                                    <span class="px-2 py-0.5 rounded-lg bg-[#eef2e8] text-[#8b9b70] text-[10px] font-black shrink-0" x-text="`#${String(tx.id || 0).padStart(4, '0')}`"></span>
                                    <span class="truncate" x-text="tx.invoice_code"></span>
                                </div>
                            </td>
                            <td class="px-4 py-3 text-[#595952] font-semibold" x-text="formatDateTime(tx.paid_at || tx.created_at)"></td>
                            <td class="px-4 py-3"><span class="px-3 py-1 rounded-full font-black uppercase text-[10px] bg-[#eef2e8] text-[#8b9b70] border border-[#d2dbc2]" x-text="tx.payment_method"></span></td>
                            <td class="px-4 py-3 font-black text-[#2e2e2a] text-right" x-text="formatRupiah(tx.total_amount)"></td>
                            <td class="px-4 py-3">
                                <span class="inline-flex items-center px-3 py-0.5 rounded-full text-[10px] font-bold"
                                      :class="tx.status === 'paid' ? 'bg-[#00ba7c]/10 text-[#00815a]' : 'bg-[#f4212e]/10 text-[#f4212e]'"
                                      x-text="tx.status === 'paid' ? 'LUNAS' : tx.status.toUpperCase()"></span>
                            </td>
                            <td class="px-4 py-3 text-center">
                                <button type="button" @click="$store.app.openReceipt(tx)" class="p-1.5 rounded-full bg-[#f9f8f3] hover:bg-[#8b9b70] text-[#595952] hover:text-white transition-colors cursor-pointer" title="Lihat struk">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                                </button>
                            </td>
                        </tr>
                    </template>
                    <template x-if="myTransactions.length === 0">
                        <tr><td colspan="6" class="px-4 py-10 text-center text-[#595952] font-semibold">Belum ada transaksi.</td></tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Transaction Cards (mobile) -->
    <div class="lg:hidden space-y-3">
        <template x-for="tx in myTransactions" :key="tx.id">
            <div class="bg-white rounded-2xl border border-[#eceae0] p-4" :class="{ 'opacity-60': tx.status === 'cancelled' }">
                <div class="flex items-center justify-between gap-2">
                    <div class="flex items-center gap-1.5 min-w-0">
                        <span class="px-2 py-0.5 rounded-lg bg-[#eef2e8] text-[#8b9b70] text-[10px] font-black shrink-0" x-text="`#${String(tx.id || 0).padStart(4, '0')}`"></span>
                        <span class="text-xs font-black text-[#2e2e2a] truncate" x-text="tx.invoice_code"></span>
                    </div>
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[9px] font-bold shrink-0"
                          :class="tx.status === 'paid' ? 'bg-[#00ba7c]/10 text-[#00815a]' : 'bg-[#f4212e]/10 text-[#f4212e]'"
                          x-text="tx.status === 'paid' ? 'LUNAS' : tx.status.toUpperCase()"></span>
                </div>
                <div class="grid grid-cols-2 gap-1.5 text-xs mt-2 py-2 border-y border-[#eceae0]">
                    <div>
                        <span class="text-[10px] text-[#595952] block font-semibold">Total</span>
                        <span class="font-black text-xs text-[#2e2e2a]" x-text="formatRupiah(tx.total_amount)"></span>
                    </div>
                    <div>
                        <span class="text-[10px] text-[#595952] block font-semibold">Metode</span>
                        <span class="font-black uppercase text-[11px] text-[#8b9b70]" x-text="tx.payment_method"></span>
                    </div>
                </div>
                <div class="flex items-center justify-between mt-2">
                    <span class="text-[10px] text-[#595952] font-semibold" x-text="formatDateTime(tx.paid_at || tx.created_at)"></span>
                    <button type="button" @click="$store.app.openReceipt(tx)" class="text-xs font-black text-[#8b9b70]">Lihat Struk &rarr;</button>
                </div>
            </div>
        </template>
        <template x-if="myTransactions.length === 0">
            <div class="bg-white rounded-2xl border border-[#eceae0] p-8 text-center text-[#595952] font-semibold text-sm">Belum ada transaksi.</div>
        </template>
    </div>
</div>
@endsection
