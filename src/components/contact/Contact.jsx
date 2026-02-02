import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-[#181411] min-h-screen font-['Plus_Jakarta_Sans',sans-serif] antialiased">
      
      {/* ================= STICKY WHATSAPP BUTTON ================= */}
      <a 
        href="https://wa.me/254700000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 z-[100] group flex items-center gap-4"
      >
        <div className="bg-white px-6 py-3 rounded-full shadow-2xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 hidden md:block">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#181411]">Chat with the Tribe home away from home</p>
        </div>
        <div className="size-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform active:scale-95">
          <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

      <main className="flex flex-col items-center">
        
        {/* ================= HERO SECTION ================= */}
        <section className="w-full max-w-[1440px] px-6 md:px-10 pt-24 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-[#ec6d13]"></span>
              <span className="text-[#ec6d13] text-xs font-black uppercase tracking-[0.4em]">Get in Touch</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Reach out to <br /> <span className="text-[#ec6d13]">Tribena.</span>
            </h1>
            <p className="text-[#897261] text-lg leading-relaxed max-w-md mb-10">
              Have a question about your booking or a special request for your stay in Migori? We're just a message away.
            </p>

            {/* WHATSAPP QUICK CAPTION CARD */}
            <a href="https://wa.me/254700000000" className="inline-flex items-center gap-6 p-4 pr-10 rounded-full bg-[#f8f7f6] border border-gray-100 hover:shadow-xl transition-all group">
               <div className="size-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform">
                  <span className="material-symbols-outlined text-3xl font-light">chat</span>
               </div>
               <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#897261] mb-1">Instant Response</p>
                  <p className="font-black text-[#181411]">Contact us via WhatsApp</p>
               </div>
            </a>
          </div>

          {/* Right Visual Image */}
          <div className="relative h-[550px] rounded-[4rem] overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[5s]" 
              alt="Tribena Sanctuary" 
            />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20">
               <p className="text-[10px] font-black text-[#ec6d13] uppercase tracking-widest mb-1">Our Atmosphere</p>
               <p className="text-sm font-bold text-[#181411]">Peaceful. Modern. Secure.</p>
            </div>
          </div>
        </section>

        {/* ================= FORM & DETAILS ================= */}
        <section className="w-full max-w-[1440px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-32">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#f8f7f6] p-10 md:p-16 rounded-[4rem] border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 size-64 bg-[#ec6d13]/5 rounded-full blur-3xl"></div>
            <h3 className="text-3xl font-black mb-10 tracking-tight">Send an Inquiry</h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <InputBox label="Full Name" placeholder="Your name" />
                <InputBox label="Email" placeholder="Email address" />
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#897261] ml-2">How can we help?</span>
                <select className="h-16 rounded-2xl border-none bg-white px-8 shadow-sm focus:ring-2 focus:ring-[#ec6d13] transition-all text-sm font-bold text-[#897261] appearance-none cursor-pointer">
                  <option>Booking & Reservations</option>
                  <option>Maasai Mara Transfers</option>
                  <option>Corporate Stays</option>
                  <option>Special Events</option>
                </select>
              </div>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#897261] ml-2">Your Message</span>
                <textarea 
                  placeholder="Tell us about your plans..."
                  className="w-full min-h-[200px] rounded-[2.5rem] border-none bg-white px-8 py-6 shadow-sm focus:ring-2 focus:ring-[#ec6d13] transition-all resize-none" 
                />
              </div>
              <button className="w-full py-6 rounded-2xl bg-[#181411] text-white font-black uppercase tracking-widest text-xs hover:bg-[#ec6d13] transition-all shadow-xl flex items-center justify-center gap-3">
                Submit Message
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>

          {/* Details Side */}
          <div className="lg:col-span-5 space-y-8">
             <div className="bg-[#181411] p-12 rounded-[3.5rem] text-white h-full flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute bottom-0 right-0 size-48 bg-[#ec6d13]/10 rounded-full blur-3xl group-hover:bg-[#ec6d13]/20 transition-all"></div>
                
                <div>
                  <h4 className="text-3xl font-black tracking-tighter mb-12">Other ways <br/> to <span className="text-[#ec6d13]">connect.</span></h4>
                  <div className="space-y-10">
                    <InfoLink icon="mail" title="Email" value="stay@tribenahomestay.com" />
                    <InfoLink icon="call" title="Call Us" value="+254 700 000 000" />
                    <InfoLink icon="near_me" title="Location" value="Migori, Kenya" />
                  </div>
                </div>

                {/* ADDED: ESSENTIAL TRAVEL INFO BLOCK */}
                <div className="mt-16 pt-10 border-t border-white/10 space-y-6">
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Check-In</span>
                      <span className="text-sm font-bold">From 11:00 AM</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Check-Out</span>
                      <span className="text-sm font-bold">Until 10:00 AM</span>
                   </div>
                   <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                      <p className="text-[10px] text-[#ec6d13] font-black uppercase tracking-widest mb-1">Transport Note</p>
                      <p className="text-[11px] text-gray-400 leading-relaxed">We provide 24/7 airport pick-ups from Migori Airstrip for all confirmed guests.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* ================= FINAL MAP CARD ================= */}
        <section className="w-full max-w-[1440px] px-6 md:px-10 pb-32">
          <div className="w-full h-[500px] rounded-[4rem] bg-[#f8f7f6] relative overflow-hidden group shadow-sm border border-gray-100">
             <div 
              className="absolute inset-0 bg-cover bg-center grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[4s]"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80")' }}
             />
             <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent"></div>
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="relative">
                  <div className="size-10 bg-[#ec6d13] rounded-full animate-ping absolute inset-0"></div>
                  <div className="size-10 bg-[#ec6d13] rounded-full relative z-10 border-4 border-white shadow-2xl flex items-center justify-center text-white">
                      <span className="material-symbols-outlined text-sm">home</span>
                  </div>
                </div>
                <div className="mt-6 bg-white/90 backdrop-blur-md px-8 py-4 rounded-3xl shadow-2xl border border-white/50">
                   <p className="text-[10px] font-black text-[#ec6d13] uppercase tracking-widest mb-1">Arrive Safely</p>
                   <p className="text-lg font-black text-[#181411] tracking-tight">Tribena Home Stay, Migori</p>
                   <button className="mt-4 text-[10px] font-black uppercase tracking-widest border-b-2 border-[#ec6d13] pb-1 hover:text-[#ec6d13] transition-colors">
                      Get Directions
                   </button>
                </div>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
}

{/* REUSABLE HELPERS */}
function InputBox({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-[10px] font-black uppercase tracking-widest text-[#897261] ml-2">{label}</span>
      <input 
        type="text" 
        placeholder={placeholder} 
        className="h-16 rounded-2xl border-none bg-white px-8 shadow-sm focus:ring-2 focus:ring-[#ec6d13] transition-all text-sm font-bold text-[#181411] placeholder:text-gray-300"
      />
    </div>
  );
}

function InfoLink({ icon, title, value }) {
  return (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="size-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#ec6d13] group-hover:bg-[#ec6d13] group-hover:text-white transition-all duration-300">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-[10px] font-black uppercase tracking-widest text-[#ec6d13] mb-1 opacity-60">{title}</p>
        <p className="text-xl font-bold tracking-tight group-hover:text-[#ec6d13] transition-colors">{value}</p>
      </div>
    </div>
  );
}