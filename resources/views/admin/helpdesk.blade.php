@extends('layouts.app')

@section('title', 'Helpdesk Tiket Cabang ')

@section('content')
<div x-data="{
 selectedStatus: 'all',

 get allTickets() {
 return $store.app.helpdesk.filter(t => {
 return this.selectedStatus === 'all' || t.status === this.selectedStatus;
 });
 }
}" class="space-y-6">

 <!-- Header (Twitter UI) -->
 <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
 <div>
 <div class="flex items-center gap-2">
 <span class="px-3 py-0.5 rounded-full bg-[#2e2e2a] text-white text-[10px] font-black uppercase">Layanan Bantuan Cabang</span>
 <span class="text-xs text-[#595952]">Pemilik</span>
 </div>
 <h2 class="text-xl sm:text-2xl font-extrabold text-[#2e2e2a] tracking-tight mt-1">Helpdesk Masuk dari Cabang</h2>
 <p class="text-xs sm:text-sm text-[#595952] mt-0.5">Tanggapi pertanyaan teknis, verifikasi kasir, dan kebutuhan cabang cabang</p>
 </div>

 <!-- Filter Status Buttons (Twitter Style Pills) -->
 <div class="flex items-center gap-1.5 bg-white p-1 rounded-full border border-[#eceae0] shadow-xs overflow-x-auto no-scrollbar">
 <button 
 @click="selectedStatus = 'all'" 
 class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0"
 :class="selectedStatus === 'all' ? 'bg-[#2e2e2a] text-white shadow-xs' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#eceae0]'"
 >
 Semua (<span x-text="$store.app.helpdesk.length"></span>)
 </button>
 <button 
 @click="selectedStatus = 'open'" 
 class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0"
 :class="selectedStatus === 'open' ? 'bg-[#8b9b70] text-white shadow-xs' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#eceae0]'"
 >
 Open
 </button>
 <button 
 @click="selectedStatus = 'in_progress'" 
 class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0"
 :class="selectedStatus === 'in_progress' ? 'bg-[#ff7a00] text-white shadow-xs' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#eceae0]'"
 >
 Diproses
 </button>
 <button 
 @click="selectedStatus = 'resolved'" 
 class="px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0"
 :class="selectedStatus === 'resolved' ? 'bg-[#00ba7c] text-white shadow-xs' : 'text-[#595952] hover:text-[#2e2e2a] hover:bg-[#eceae0]'"
 >
 Selesai
 </button>
 </div>
 </div>

 <!-- Tickets Grid (Twitter UI) -->
 <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
 <template x-for="ticket in allTickets" :key="ticket.id">
 <div class="bg-white rounded-3xl border border-[#eceae0] p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#8b9b70]/40 transition-all">
 <div>
 <!-- Top Meta -->
 <div class="flex items-center justify-between">
 <div>
 <span class="font-mono text-xs font-bold text-[#595952]" x-text="ticket.ticket_code"></span>
 <h4 class="font-bold text-[#2e2e2a] text-xs mt-0.5" x-text="ticket.store_name"></h4>
 </div>

 <!-- Status Selector Dropdown -->
 <select 
 :value="ticket.status"
 @change="$store.app.changeTicketStatus(ticket.id, $event.target.value)"
 class="px-3 py-1 rounded-full text-xs font-bold border"
 :class="{
 'bg-[#eef2e8] border-[#d2dbc2] text-[#8b9b70]': ticket.status === 'open',
 'bg-amber-50 border-amber-200 text-[#ff7a00]': ticket.status === 'in_progress',
 'bg-emerald-50 border-emerald-200 text-[#00ba7c]': ticket.status === 'resolved'
 }"
 >
 <option value="open">Open</option>
 <option value="in_progress">In Progress</option>
 <option value="resolved">Resolved (Selesai)</option>
 </select>
 </div>

 <!-- Subject -->
 <h3 class="font-extrabold text-base text-[#2e2e2a] mt-2.5 leading-snug" x-text="ticket.subject"></h3>
 <span class="inline-block mt-1 text-[11px] px-2.5 py-0.5 rounded-full bg-[#f9f8f3] text-[#595952] font-semibold border border-[#eceae0]" x-text="ticket.category"></span>

 <!-- Conversation Thread Box -->
 <div class="mt-4 p-3.5 bg-[#f9f8f3] rounded-2xl space-y-2.5 max-h-52 overflow-y-auto custom-scrollbar border border-[#eceae0] text-xs">
 <template x-for="(msg, index) in ticket.messages" :key="index">
 <div 
 class="p-2.5 rounded-2xl text-xs"
 :class="msg.sender_role === 'admin' ? 'bg-[#eef2e8] text-[#2e2e2a] ml-4 border border-[#d2dbc2]' : 'bg-white text-[#2e2e2a] mr-4 border border-[#eceae0]'"
 >
 <div class="flex items-center justify-between text-[10px] font-bold text-[#595952] mb-1">
 <span x-text="`${msg.sender_name} (${msg.sender_role === 'admin' ? 'Pemilik' : 'Cabang'})`"></span>
 <span x-text="msg.time"></span>
 </div>
 <p class="leading-relaxed" x-text="msg.message"></p>
 </div>
 </template>
 </div>
 </div>

 <!-- Admin Reply Input (Twitter UI) -->
 <div class="pt-2 border-t border-[#eceae0] flex gap-2">
 <input 
 type="text" 
 placeholder="Balas pesan cabang..." 
 @focus="$store.app.selectedTicket = ticket"
 x-model="$store.app.ticketReplyText"
 @keydown.enter.prevent="$store.app.sendTicketReply()"
 class="flex-1 px-4 py-2 bg-[#f9f8f3] border border-[#eceae0] rounded-full text-xs text-[#2e2e2a] focus:ring-2 focus:ring-[#8b9b70] focus:outline-none font-medium"
 >
 <button 
 @click="$store.app.selectedTicket = ticket; $store.app.sendTicketReply()"
 type="button" 
 class="px-5 py-2 rounded-full bg-[#8b9b70] hover:bg-[#7a8a60] text-white font-bold text-xs shadow-xs"
 >
 Balas
 </button>
 </div>
 </div>
 </template>
 </div>
</div>
@endsection
