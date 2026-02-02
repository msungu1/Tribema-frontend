import React from "react";

export default function Services() {
  return (
    <div className="bg-white text-[#181411] antialiased font-['Plus_Jakarta_Sans',sans-serif]">
      
      <main className="">
        {/* ================= HERO SPLIT SECTION ================= */}
        <section className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
          
          {/* LEFT VISUAL: The Vibe */}
          <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#181411]/40" />
            </div>

            <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 text-white p-10 bg-black/20 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ec6d13] mb-4 block">
                The Tribena Standard
              </span>
              <h3 className="text-3xl md:text-4xl font-black leading-tight tracking-tighter">
                Hospitality that feels like <span className="italic font-serif text-[#ec6d13]">home</span>, <br/> calibrated for the <span className="italic font-serif text-[#ec6d13]">world.</span>
              </h3>
            </div>
          </div>

          {/* RIGHT CONTENT: The Menu */}
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-16 lg:p-24 flex flex-col justify-center">
            <div className="max-w-xl mx-auto w-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[2px] bg-[#ec6d13]"></span>
                <span className="text-[#ec6d13] text-xs font-black uppercase tracking-[0.3em]">Our Offerings</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-[0.9] mb-8 tracking-tighter">
                Elevated <br /> <span className="text-[#ec6d13]">Experiences.</span>
              </h1>
              
              <p className="text-lg text-[#897261] mb-12 leading-relaxed">
                We’ve obsessed over every detail—from the speed of your Wi-Fi to the freshness of your morning juice—to ensure your stay in Migori is flawless.
              </p>

              {/* Services List */}
              <div className="space-y-10">
                {[
                  {
                    icon: "restaurant",
                    title: "Gourmet Breakfast",
                    desc: "Organic, farm-to-table flavors sourced directly from Migori's fertile lands.",
                  },
                  {
                    icon: "starlink",
                    title: "Nomad Connectivity",
                    desc: "Starlink high-speed internet paired with 24/7 solar backup for uninterrupted work.",
                  },
                  {
                    icon: "cleaning_services",
                    title: "Meticulous Care",
                    desc: "Daily housekeeping and laundry services that keep your sanctuary pristine.",
                  },
                  {
                    icon: "explore",
                    title: "Regional Concierge",
                    desc: "Private transfers and curated tours to Maasai Mara, Lake Victoria, and beyond.",
                  },
                ].map((service, i) => (
                  <div key={i} className="group flex items-start gap-6 border-b border-gray-100 pb-8 last:border-0 transition-all">
                    <div className="size-14 rounded-2xl bg-[#f8f7f6] flex items-center justify-center text-[#ec6d13] group-hover:bg-[#ec6d13] group-hover:text-white transition-all duration-300 shadow-sm">
                      <span className="material-symbols-outlined text-3xl">
                        {service.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-black tracking-tight group-hover:text-[#ec6d13] transition-colors">{service.title}</h3>
                      <p className="mt-2 text-[#897261] leading-relaxed text-sm">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECONDARY STATS SECTION ================= */}
        <section className="bg-[#f8f7f6] py-24 px-8">
          <div className="max-w-[1440px] mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="flex flex-col gap-4">
                  <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#ec6d13]">support_agent</span>
                  </div>
                  <h4 className="text-xl font-black">24/7 Tribe Support</h4>
                  <p className="text-sm text-[#897261] leading-relaxed">
                    Our local team is on-site around the clock to assist with anything from extra pillows to travel advice.
                  </p>
                </div>

                <div className="flex flex-col gap-4 border-l-0 md:border-l border-gray-200 md:pl-12">
                  <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#ec6d13]">security</span>
                  </div>
                  <h4 className="text-xl font-black">Secure Gated Entry</h4>
                  <p className="text-sm text-[#897261] leading-relaxed">
                    Enjoy total peace of mind with 24/7 security and monitored private parking within our perimeter.
                  </p>
                </div>

                <div className="flex flex-col gap-4 border-l-0 md:border-l border-gray-200 md:pl-12">
                  <div className="size-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#ec6d13]">local_shipping</span>
                  </div>
                  <h4 className="text-xl font-black">Airport Transfers</h4>
                  <p className="text-sm text-[#897261] leading-relaxed">
                    Arriving at Migori Airstrip or Kisumu? Let us handle the logistics with our private executive transport.
                  </p>
                </div>
             </div>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1200px] mx-auto bg-[#181411] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 size-64 bg-[#ec6d13]/10 rounded-full blur-3xl"></div>
             <h2 className="text-white text-4xl md:text-5xl font-black mb-8 tracking-tighter relative z-10">
                Experience the <span className="text-[#ec6d13]">Tribena</span> Difference.
             </h2>
             <button className="bg-[#ec6d13] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform relative z-10 shadow-xl">
                Book Your Stay Now
             </button>
          </div>
        </section>
        {/* ================= SUSTAINABILITY & IMPACT STRIP ================= */}
<section className="py-20 bg-[#181411] overflow-hidden relative">
  {/* Background Glow */}
  <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ec6d13]/10 rounded-full blur-[120px]"></div>
  
  <div className="max-w-[1440px] mx-auto px-6 md:px-10 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      
      <div className="max-w-md">
        <h2 className="text-[#ec6d13] text-xs font-black uppercase tracking-[0.4em] mb-4">Our Footprint</h2>
        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">
          Luxury that respects <br /> the <span className="text-[#ec6d13]">environment.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full lg:w-auto">
        {[
          { icon: "solar_power", title: "100% Solar", desc: "Powered by the sun, day and night." },
          { icon: "eco", title: "Zero Waste", desc: "No single-use plastics in our suites." },
          { icon: "local_mall", title: "Local First", desc: "Every meal supports Migori farmers." }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-start p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-[#ec6d13]/40 transition-colors">
            <span className="material-symbols-outlined text-[#ec6d13] text-4xl mb-4">{item.icon}</span>
            <h4 className="text-white font-bold mb-1">{item.title}</h4>
            <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
        {/* ================= THE GRAND FINALE: CONCIERGE & FAQS ================= */}
<section className="py-24 bg-white">
  <div className="max-w-[1440px] mx-auto px-6 md:px-10">
    
    <div className="flex flex-col lg:flex-row gap-20">
      
      {/* 1. THE CONCIERGE CARD (Left) */}
      <div className="w-full lg:w-1/2">
        <div className="relative group rounded-[3rem] overflow-hidden bg-[#181411] p-12 md:p-16 h-full flex flex-col justify-between text-white shadow-2xl">
          {/* Decorative Pattern Overlay */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ec6d13]/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          
          <div>
            <span className="text-[#ec6d13] text-xs font-black uppercase tracking-[0.4em] mb-6 block">Personal Concierge</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              Need something <br /> <span className="italic font-serif text-[#ec6d13]">bespoke?</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              From private airport pick-ups at Migori Airstrip to curated Maasai Mara itineraries, our team is ready to craft your perfect stay.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ec6d13]">
                <span className="material-symbols-outlined">whatsapp</span>
              </div>
              <p className="font-bold text-lg">+254 700 000 000</p>
            </div>
            <button className="w-full md:w-auto px-10 py-5 bg-[#ec6d13] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-[#181411] transition-all">
              Chat with us now
            </button>
          </div>
        </div>
      </div>

      {/* 2. THE INTELLIGENT FAQ (Right) */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-black text-[#181411] mb-8 tracking-tight">Common Inquiries</h3>
        
        <div className="space-y-4">
          {[
            { 
              q: "Is there reliable power for remote work?", 
              a: "Yes. We operate on a dual-grid system with professional-grade solar backup to ensure 24/7 power for your devices and Starlink internet." 
            },
            { 
              q: "Can you arrange transport to the Maasai Mara?", 
              a: "Absolutely. We provide private executive 4x4 transfers and can help coordinate your entry through the Olololo or Sekenani gates." 
            },
            { 
              q: "What are the dining hours?", 
              a: "Breakfast is served from 7:00 AM to 10:30 AM. However, our kitchen is flexible—just let the concierge know your schedule." 
            },
            { 
              q: "Is the property secure?", 
              a: "Your safety is our priority. We feature a gated perimeter, 24/7 on-site security personnel, and secure private parking." 
            }
          ].map((faq, i) => (
            <details key={i} className="group border-b border-gray-100 pb-4">
              <summary className="flex items-center justify-between cursor-pointer list-none py-2">
                <span className="font-bold text-[#181411] group-open:text-[#ec6d13] transition-colors">{faq.q}</span>
                <span className="material-symbols-outlined text-[#897261] group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <p className="text-sm text-[#897261] leading-relaxed pt-2 pr-10">
                {faq.a}
              </p>
            </details>
          ))}
        </div>

        {/* The "Bottom Line" Text */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="size-6 bg-[#ec6d13] rounded"></div>
                <span className="font-black text-sm tracking-tighter">TRIBENA HOME STAY</span>
            </div>
            <p className="text-[10px] font-bold text-[#897261] uppercase tracking-widest">Migori • Kenya • 2026</p>
        </div>
      </div>

    </div>
  </div>
</section>
      </main>


    </div>
  );
}