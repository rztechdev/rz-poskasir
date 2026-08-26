<!DOCTYPE html>
<html lang="id" class="h-full bg-[#f9f8f3] text-[#2e2e2a] antialiased selection:bg-[#8b9b70] selection:text-white">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title', 'Autentikasi') — RZ</title>

    <!-- Favicon (High Curvature Squircle) -->
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/favicon-32x32.png') }}?v=3">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/favicon-16x16.png') }}?v=3">
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('images/favicon.png') }}?v=3">
    <link rel="apple-touch-icon" href="{{ asset('images/apple-touch-icon.png') }}?v=3">

    <!-- Google Fonts: Plus Jakarta Sans & Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <!-- Vite Styles & Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    
    <script>
        @if(session('success'))
            window.__FLASH_SUCCESS__ = @json(session('success'));
        @endif
        @if(session('error'))
            window.__FLASH_ERROR__ = @json(session('error'));
        @endif
        @if(session('status'))
            window.__FLASH_SUCCESS__ = @json(session('status'));
        @endif
        @if($errors->any())
            window.__FLASH_ERROR__ = @json($errors->first());
        @endif
    </script>

    <style>
        [x-cloak] { display: none !important; }
        body { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    </style>
</head>
<body class="min-h-full flex flex-col justify-center py-10 sm:px-6 lg:px-8 bg-[#f9f8f3] text-[#2e2e2a] relative overflow-x-hidden" x-data>
    <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10 flex flex-col items-center px-4">
        <!-- Logo & Text Horizontal (Kiri & Kanan) -->
        <a href="/" class="inline-flex items-center justify-center gap-3.5 group">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center shadow-md bg-white border border-[#eceae0] p-1.5 transition-transform group-hover:scale-105">
                <img src="{{ asset('images/logo_rz.png') }}" alt="Logo RZ" class="w-full h-full object-contain">
            </div>
            <div class="text-left">
                <span class="text-xl sm:text-2xl font-black tracking-tight text-[#2e2e2a] block leading-tight">RZ</span>
                <span class="text-xs text-[#595952] font-medium tracking-wide block mt-0.5">creating stories, crafting moments</span>
            </div>
        </a>

        <!-- Active Cabang Info Badge (Below Logo & Text) -->
        <div class="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#eceae0] text-xs text-[#2e2e2a] shadow-xs">
            <span class="w-2 h-2 rounded-full bg-[#00ba7c] animate-pulse"></span>
            <span class="text-[#595952]">Cabang:</span>
            <span class="font-bold text-[#2e2e2a] truncate max-w-[220px]" x-text="$store.app.getActiveEvent()?.name || 'Cabang Belum Aktif'"></span>
        </div>
    </div>

    <!-- Auth Card Content -->
    <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div class="bg-white py-8 px-6 sm:px-10 shadow-xl shadow-slate-200/50 rounded-3xl border border-[#eceae0] text-[#2e2e2a]">
            @yield('content')
        </div>
    </div>
    <!-- Global Circular Logo Loading Spinner Overlay -->
    @include('components.loading-overlay')
</body>
</html>
