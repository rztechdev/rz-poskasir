@extends('layouts.app')

@section('title', 'Edit Akun')

@section('content')
<div class="max-w-2xl mx-auto p-4 sm:p-6 space-y-5" x-data="{ role: '{{ old('role', $user->role) }}' }">
    <div class="flex items-center gap-3">
        <a href="{{ route('superadmin.users.index') }}" class="text-[#595952] hover:text-[#8b9b70] transition-colors bg-white p-1.5 rounded-full border border-[#eceae0]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
        </a>
        <div>
            <h1 class="text-xl font-black text-[#2e2e2a] tracking-tight">Edit Akun</h1>
            <p class="text-sm text-[#595952] font-medium">{{ $user->name }}</p>
        </div>
    </div>

    @if($errors->any())
        <div class="rounded-2xl bg-[#f4212e]/10 border border-[#f4212e]/20 text-[#f4212e] px-4 py-3 text-sm font-semibold">
            <ul class="list-disc list-inside space-y-0.5">
                @foreach($errors->all() as $e)<li>{{ $e }}</li>@endforeach
            </ul>
        </div>
    @endif

    <form action="{{ route('superadmin.users.update', $user) }}" method="POST" class="bg-white border border-[#eceae0] rounded-3xl p-5 sm:p-6 space-y-4">
        @csrf @method('PUT')
        @include('superadmin.users._fields', ['user' => $user])

        <div class="flex items-center justify-end gap-3 pt-2">
            <a href="{{ route('superadmin.users.index') }}" class="px-4 py-2.5 rounded-full bg-[#eceae0] text-[#2e2e2a] text-sm font-bold hover:bg-[#d9d6c8] transition-colors">Batal</a>
            <button type="submit" class="px-5 py-2.5 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] text-white text-sm font-bold transition-colors">Simpan Perubahan</button>
        </div>
    </form>
</div>
@endsection
