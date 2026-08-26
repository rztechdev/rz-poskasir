<!-- Mobile Bottom Navigation Bar (Twitter UI Theme - Modern Curved Floating Dock) -->
@auth
    @php
        $user = auth()->user();
        $rolePrefix = $user->isSuperAdmin() ? 'superadmin' : ($user->isAdmin() ? 'admin' : 'user');
    @endphp
    <div class="lg:hidden">
        <!-- Floating Curved Dock Container -->
        <div class="fixed bottom-3.5 sm:bottom-5 inset-x-3 sm:inset-x-6 max-w-md sm:max-w-lg mx-auto z-40 bg-white/95 backdrop-blur-xl border border-[#eceae0] px-2 py-1.5 rounded-[28px] shadow-[0_12px_32px_rgba(15,20,25,0.12),0_2px_6px_rgba(0,0,0,0.04)]">
            @if($user->isUser())
                <!-- 1. USER (Kasir) 3-Item Floating Curved Dock -->
                <div class="grid grid-cols-4 items-center gap-1">
                    <!-- 1. Kasir -->
                    <a
                        href="/user/kasir"
                        class="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 cursor-pointer active:scale-95 {{ request()->is('user/kasir*') ? 'text-[#8b9b70] font-black bg-[#eef2e8]' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#f9f8f3]' }}"
                    >
                        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span class="text-[9.5px] tracking-tight font-bold">Kasir</span>
                    </a>

                    <!-- 2. Catatan -->
                    <a
                        href="/user/catatan"
                        class="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 cursor-pointer active:scale-95 {{ request()->is('user/catatan*') ? 'text-[#8b9b70] font-black bg-[#eef2e8]' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#f9f8f3]' }}"
                    >
                        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                        <span class="text-[9.5px] tracking-tight font-bold">Catatan</span>
                    </a>

                    <!-- 3. Laporan -->
                    <a
                        href="/user/laporan"
                        class="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 cursor-pointer active:scale-95 {{ request()->is('user/laporan*') ? 'text-[#8b9b70] font-black bg-[#eef2e8]' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#f9f8f3]' }}"
                    >
                        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        <span class="text-[9.5px] tracking-tight font-bold">Laporan</span>
                    </a>

                    <!-- 4. Panduan -->
                    <a
                        href="/user/panduan"
                        class="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 cursor-pointer active:scale-95 {{ request()->is('user/panduan*') ? 'text-[#8b9b70] font-black bg-[#eef2e8]' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#f9f8f3]' }}"
                    >
                        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                        <span class="text-[9.5px] tracking-tight font-bold">Panduan</span>
                    </a>
                </div>

            @else
                <!-- 2. ADMIN / SUPERADMIN 4-Item Floating Curved Dock -->
                <div class="grid grid-cols-4 items-center gap-1">
                    <!-- 1. Dashboard -->
                    <a
                        href="/{{ $rolePrefix }}/dashboard"
                        class="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 cursor-pointer active:scale-95 {{ request()->is($rolePrefix.'/dashboard') ? 'text-[#8b9b70] font-black bg-[#eef2e8]' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#f9f8f3]' }}"
                    >
                        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                        <span class="text-[9.5px] tracking-tight font-bold">Dashboard</span>
                    </a>

                    <!-- 2. Produk -->
                    <a 
                        href="/{{ $rolePrefix }}/produk" 
                        class="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 cursor-pointer active:scale-95 {{ request()->is($rolePrefix.'/produk*') ? 'text-[#8b9b70] font-black bg-[#eef2e8]' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#f9f8f3]' }}"
                    >
                        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                        <span class="text-[9.5px] tracking-tight font-bold">Produk</span>
                    </a>

                    <!-- 4. Laporan -->
                    <a 
                        href="/{{ $rolePrefix }}/laporan" 
                        class="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 cursor-pointer active:scale-95 {{ request()->is($rolePrefix.'/laporan*') ? 'text-[#8b9b70] font-black bg-[#eef2e8]' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#f9f8f3]' }}"
                    >
                        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                        <span class="text-[9.5px] tracking-tight font-bold">Laporan</span>
                    </a>

                    <!-- 5. Pengaturan -->
                    <a 
                        href="{{ route('profile.edit') }}" 
                        class="flex flex-col items-center justify-center py-1.5 px-1 rounded-2xl transition-all duration-200 cursor-pointer active:scale-95 {{ request()->is('profile*') ? 'text-[#8b9b70] font-black bg-[#eef2e8]' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#f9f8f3]' }}"
                    >
                        <svg class="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                        <span class="text-[9.5px] tracking-tight font-bold">Pengaturan</span>
                    </a>
                </div>
            @endif
        </div>
    </div>
@endauth

