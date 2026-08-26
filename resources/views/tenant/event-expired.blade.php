<!DOCTYPE html>
<html lang="id" class="h-full bg-[#f9f8f3] text-[#2e2e2a] antialiased selection:bg-[#8b9b70] selection:text-white">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    
    <title>Cabang Berakhir — RZ</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/favicon-32x32.png') }}?v=3">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/favicon-16x16.png') }}?v=3">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    @vite(['resources/css/app.css'])
    
    <style>
        body { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    </style>
</head>
<body class="min-h-full flex flex-col justify-center py-10 sm:px-6 lg:px-8 bg-[#f9f8f3] text-[#2e2e2a] relative overflow-x-hidden">
    
    <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10 flex flex-col items-center px-4 mb-6">
        <!-- Logo -->
        <div class="inline-flex items-center justify-center gap-3.5 mb-4">
            <div class="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 flex items-center justify-center shadow-md bg-white border border-[#eceae0] p-1.5">
                <img src="{{ asset('images/logo_rz.png') }}" alt="Logo RZ" class="w-full h-full object-contain">
            </div>
        </div>
    </div>

    <!-- Main Card -->
    <div class="sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        @include('components.subscription-expired', ['event' => $event ?? null])
        <p class="text-center text-xs text-[#595952] font-medium mt-6">
            RZ Kasir &copy; {{ date('Y') }}
        </p>
    </div>
</body>
</html>
