<!-- Desktop Sidebar (Twitter UI Design System - Production Ready) -->
<aside class="hidden lg:flex lg:flex-col w-64 bg-white text-[#2e2e2a] shrink-0 h-screen sticky top-0 z-40 border-r border-[#eceae0]">
 <!-- Brand Logo & App Name (Twitter Style) -->
 <div class="p-5 border-b border-[#eceae0] flex items-center gap-3">
 <div class="w-10 h-10 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center shadow-md shadow-[#8b9b70]/10 hover:scale-105 transition-transform cursor-pointer bg-white border border-[#eceae0]">
 <img src="{{ asset('images/logo_rz.png') }}" alt="Logo RZ" class="w-full h-full object-contain p-1">
 </div>
 <div>
 <h1 class="font-black text-base tracking-tight text-[#2e2e2a]">
 Kasir
 </h1>
 <p class="text-xs text-[#595952] font-semibold">RZ</p>
 </div>
 </div>

 @php
 $activeEvent = \App\Models\Event::getActive();
 $user = auth()->user();
 @endphp

 <!-- Navigation Links based on Authenticated Role -->
 <nav class="flex-1 px-3 space-y-1 overflow-y-auto custom-scrollbar py-2">
 @if($user && $user->isUser())
 <!-- 1. MENU KASIR -->
 <div class="space-y-1">
 <div class="px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#595952]">Operasional Kasir</div>
 
 <a 
 href="/user/kasir" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('user/kasir*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
 <span>Kasir & POS</span>
 </a>


 <a
 href="/user/catatan"
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('user/catatan*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
 <span>Catatan</span>
 </a>

 <a
 href="/user/laporan"
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('user/laporan*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
 <span>Laporan</span>
 </a>

 <a
 href="/user/panduan"
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('user/panduan*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
 <span>Panduan</span>
 </a>
 </div>

 @elseif($user && $user->isAdmin())
 <!-- 2. ADMIN MENU -->
 <div class="space-y-1">
 <div class="px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#595952]">Pusat Kendali</div>

 <a 
 href="/admin/dashboard" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('admin/dashboard') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
 <span>Dashboard Cabang</span>
 </a>

 <a
 href="/admin/produk"
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('admin/produk*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
 <span>Produk</span>
 </a>

 <a 
 href="/admin/warung" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('admin/warung*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
 <span>Cabang & Kasir</span>
 </a>

 <a 
 href="/admin/laporan" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('admin/laporan*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
 <span>Laporan</span>
 </a>

 <div class="pt-3 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#595952]">Bantuan & SOP</div>

 <a 
 href="/admin/helpdesk" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('admin/helpdesk*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
 <span>Helpdesk Masuk</span>
 </a>

 <a 
 href="/admin/panduan" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('admin/panduan*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
 <span>SOP Operasional</span>
 </a>
 </div>

 @elseif($user && $user->isSuperAdmin())
 <!-- 3. SUPER ADMIN MENU -->
 <div class="space-y-1">
 <div class="px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#595952]">Menu Utama</div>

 <a 
 href="/superadmin/dashboard" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('superadmin/dashboard') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
 <span>Dashboard Sistem</span>
 </a>

 <a 
 href="/superadmin/events" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('superadmin/events*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
 <span>Kelola Cabang</span>
 </a>

 <a
 href="/superadmin/users"
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('superadmin/users*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
 <span>Kelola Akun &amp; Role</span>
 </a>

 <a
 href="/superadmin/laporan"
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('superadmin/laporan*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
 <span>Laporan</span>
 </a>

 <div class="pt-3 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-[#595952]">Layanan & Bantuan</div>

 <a 
 href="/superadmin/helpdesk" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('superadmin/helpdesk*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
 <span>Helpdesk Lintas Cabang</span>
 </a>

 <a 
 href="/superadmin/panduan" 
 class="flex items-center gap-3.5 px-4 py-2.5 rounded-full text-sm font-medium transition-all group cursor-pointer {{ request()->is('superadmin/panduan*') ? 'bg-[#eef2e8] text-[#8b9b70] font-bold' : 'text-[#2e2e2a] hover:bg-[#eceae0]' }}"
 >
 <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
 <span>SOP & Panduan Sistem</span>
 </a>
 </div>
 @endif
 </nav>

 <!-- Footer Logout -->
 @if(auth()->check() && (auth()->user()->isAdmin() || auth()->user()->isSuperAdmin()))
 <div class="p-4 border-t border-[#eceae0]">
 <form action="{{ route('logout') }}" method="POST" class="block w-full">
 @csrf
 <button type="submit" class="w-full flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-full bg-[#eceae0] text-[#595952] hover:bg-rose-50 hover:text-[#f4212e] text-sm font-bold transition-colors cursor-pointer" title="Keluar dari akun">
 <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
 Keluar
 </button>
 </form>
 </div>
 @endif
</aside>
