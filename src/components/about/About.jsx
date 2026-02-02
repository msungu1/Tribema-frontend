import React from "react";

export default function About() {
  return (
    <div className="bg-white text-[#181411] min-h-screen font-['Plus_Jakarta_Sans',sans-serif] antialiased">
      
      <main className="w-full">
        
        {/* ================= Hero Section: Full Bleed ================= */}
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)), url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80")',
            }}
          />
          <div className="relative z-10 text-center px-6">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#ec6d13]"></span>
              <span className="text-[#ec6d13] text-sm font-black uppercase tracking-[0.4em]">Our Legacy</span>
              <span className="w-12 h-px bg-[#ec6d13]"></span>
            </div>
            <h1 className="text-white text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
              The Heart of <br /> <span className="text-[#ec6d13]">Migori</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Discover the passion and purpose behind the sanctuary where every guest becomes part of the tribe.
            </p>
          </div>
        </section>
{/* ================= Trust & Stats Bar ================= */}
<section className="py-12 bg-white border-y border-gray-100">
  <div className="max-w-[1440px] mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
      
      {[
        { label: "Years of Excellence", value: "12+", icon: "history_edu" },
        { label: "Guest Satisfaction", value: "4.9/5", icon: "auto_awesome" },
        { label: "Renewable Energy", value: "100%", icon: "bolt" },
        { label: "Global Guests", value: "2k+", icon: "public" }
      ].map((stat, i) => (
        <div key={i} className="flex flex-col items-center text-center group">
          <div className="flex items-center gap-3 mb-1">
            <span className="material-symbols-outlined text-[#ec6d13] text-xl opacity-60 group-hover:opacity-100 transition-opacity">
              {stat.icon}
            </span>
            <span className="text-3xl md:text-4xl font-black text-[#181411] tracking-tighter">
              {stat.value}
            </span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#897261]">
            {stat.label}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

        {/* ================= Story Section: Split Screen ================= */}
        <section className="flex flex-col lg:flex-row w-full min-h-screen items-stretch overflow-hidden bg-white">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 bg-white">
            <div className="max-w-xl">
              <span className="text-[#ec6d13] font-black uppercase tracking-[0.3em] text-xs mb-6 block">
                Est. 2014
              </span>
              <h2 className="text-4xl md:text-6xl font-black leading-tight text-[#181411] mb-8 tracking-tighter">
                A True Home <br /> Away from Home
              </h2>
              <div className="space-y-6 text-[#897261] text-lg leading-relaxed">
                <p>
                  Tribena Home Stay began with a simple vision: to offer travelers a sanctuary that combines the luxury of a hotel with the warmth and intimacy of a family home.
                </p>
                <p className="border-l-4 border-[#ec6d13] pl-6 italic text-[#181411] font-medium">
                  "Every corner of Tribena is designed to reflect our local culture while providing the modern comforts of home."
                </p>
                <p>
                  From our meticulously manicured gardens to our locally-sourced breakfasts, every detail is a testament to our commitment to excellence and authentic Kenyan experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Collage */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 p-4 md:p-8 bg-white">
            <div className="space-y-4 h-full">
              <div
                className="h-3/5 rounded-[2.5rem] bg-cover bg-center shadow-lg hover:scale-[1.02] transition-transform duration-500"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80")' }}
              />
              <div
                className="h-2/5 rounded-[2.5rem] bg-cover bg-center shadow-lg hover:scale-[1.02] transition-transform duration-500"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80")' }}
              />
            </div>
            <div className="space-y-4 pt-12 h-full">
              <div
                className="h-2/5 rounded-[2.5rem] bg-cover bg-center shadow-lg hover:scale-[1.02] transition-transform duration-500"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80")' }}
              />
              <div
                className="h-3/5 rounded-[2.5rem] bg-cover bg-center shadow-lg hover:scale-[1.02] transition-transform duration-500"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80")' }}
              />
            </div>
          </div>
        </section>

        {/* ================= Values: Clean White Grid ================= */}
        <section className="py-24 px-6 bg-[#f8f7f6]">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h4 className="text-[#ec6d13] text-xs font-black uppercase tracking-[0.4em] mb-4">
              Our Core Values
            </h4>
            <h2 className="text-4xl md:text-5xl font-black text-[#181411] tracking-tighter">
              What Makes Us Different
            </h2>
          </div>

          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {[
              { title: "Ultimate Comfort", icon: "king_bed", desc: "Premium linens and spacious suites designed for rest." },
              { title: "Absolute Privacy", icon: "verified_user", desc: "Gated sanctuary ensuring a peaceful, secure retreat." },
              { title: "Local Heritage", icon: "festival", desc: "Authentic Migori culture woven into every detail." }
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-12 rounded-[3rem] border border-gray-100 group hover:border-[#ec6d13]/30 hover:shadow-xl transition-all duration-500 text-center"
              >
                <div className="size-16 rounded-2xl bg-[#f8f7f6] flex items-center justify-center mx-auto mb-6 text-[#ec6d13] group-hover:bg-[#ec6d13] group-hover:text-white transition-all">
                   <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-black mb-4 text-[#181411]">{value.title}</h3>
                <p className="text-[#897261] leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= Testimonials: Soft Contrast ================= */}
        <section className="py-24 bg-white" id="reviews">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl text-left">
                <h2 className="text-[#ec6d13] text-sm font-black uppercase tracking-[0.3em] mb-4">Testimonials</h2>
                <h3 className="text-4xl md:text-5xl font-black text-[#181411] tracking-tighter leading-tight">
                  What the <span className="text-[#ec6d13]">Tribe</span> <br/> says about us.
                </h3>
              </div>
              <div className="hidden md:flex gap-2 bg-[#f8f7f6] p-2 rounded-full border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 px-4 text-[#181411]">
                  <span className="text-2xl font-black">4.9</span>
                  <div className="flex text-[#ec6d13]">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined fill-current text-sm">star</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Sonia Akoth", location: "Nairobi", text: "The best stay I've had in Migori. The garden is so peaceful, and the breakfast was organic." },
                { name: "David Miller", location: "London", text: "Super fast Wi-Fi! I was able to take my Zoom calls without a single drop. Solar backup is a lifesaver." },
                { name: "Benson Otieno", location: "Kisumu", text: "A true home away from home. The staff treated us like family. Quiet luxury at its finest." }
              ].map((review, i) => (
                <div key={i} className="bg-[#f8f7f6] p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="flex text-[#ec6d13] mb-6">
                    {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined fill-current text-sm">star_rate</span>
                    ))}
                  </div>
                  <p className="text-[#181411] text-lg leading-relaxed italic mb-8">"{review.text}"</p>
                  <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                    <div className="size-12 rounded-full bg-white flex items-center justify-center font-bold text-[#ec6d13] shadow-sm">{review.name[0]}</div>
                    <div>
                      <h4 className="font-bold text-[#181411] text-sm">{review.name}</h4>
                      <p className="text-[10px] text-[#897261] uppercase tracking-widest font-bold">{review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= Final CTA: Full Width ================= */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-[1440px] mx-auto bg-[#181411] rounded-[3rem] p-12 md:p-24 flex flex-col items-center text-center gap-10 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 size-64 bg-[#ec6d13]/20 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <h2 className="text-white text-4xl md:text-6xl font-black max-w-3xl leading-tight tracking-tighter relative z-10">
              Ready to experience <br /> Tribena hospitality?
            </h2>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <button className="bg-[#ec6d13] text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Check Availability
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white hover:text-[#181411] transition-all">
                View Our Gallery
              </button>
            </div>
          </div>
        </section>
        <section className="py-12 bg-[#f8f7f6] text-center">
  <p className="text-[#181411] font-medium">Namba Junction, Migori Town · 1 km from city center</p>
  <p className="mt-2 text-[#897261]">Book via WhatsApp: 0743787953 | 0725159053</p>
</section>
        {/* ================= Culinary & Lifestyle Section ================= */}
<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-[1440px] mx-auto px-6 md:px-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      
      {/* Visual Side */}
      <div className="relative">
        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80" 
            alt="Local organic food" 
            className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
        {/* Decorative Element */}
        <div className="absolute -bottom-10 -right-10 size-64 bg-[#ec6d13]/5 rounded-full blur-3xl -z-0"></div>
        <div className="absolute top-10 -left-10 bg-white p-6 rounded-3xl shadow-xl z-20 hidden md:block border border-gray-50">
          <div className="flex items-center gap-4">
             <span className="material-symbols-outlined text-[#ec6d13] text-4xl">restaurant</span>
             <div>
               <p className="text-sm font-black text-[#181411]">100% Organic</p>
               <p className="text-[10px] text-[#897261] uppercase tracking-widest">Sourced from Migori Markets</p>
             </div>
          </div>
        </div>
      </div>

      {/* Content Side */}
      <div className="space-y-10">
        <div>
          <h2 className="text-[#ec6d13] text-sm font-black uppercase tracking-[0.3em] mb-4">The Experience</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#181411] tracking-tighter leading-tight mb-6">
            Where local flavor meets <br /> <span className="italic font-serif">modern living.</span>
          </h3>
          <p className="text-lg text-[#897261] leading-relaxed">
            We believe that a stay is defined by the senses. At Tribena, we've blended the rustic charm of South Nyanza with the high-tech needs of the global traveler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-[#181411] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ec6d13]">coffee</span>
              Farm-to-Table
            </h4>
            <p className="text-sm text-[#897261] leading-relaxed">
              Wake up to fresh Migori coffee and breakfast prepared with ingredients harvested the same morning.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xl font-bold text-[#181411] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#ec6d13]">lan</span>
              Always Connected
            </h4>
            <p className="text-sm text-[#897261] leading-relaxed">
              With Starlink internet and 24/7 solar power, you’re never out of touch, even in the heart of nature.
            </p>
          </div>
        </div>

        <div className="pt-6">
           <button className="flex items-center gap-4 group">
              <div className="size-12 rounded-full bg-[#181411] text-white flex items-center justify-center group-hover:bg-[#ec6d13] transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
              <span className="font-black uppercase tracking-widest text-sm text-[#181411]">Explore our amenities</span>
           </button>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= Digital Nomad Section ================= */}
<section className="py-24 bg-[#f8f7f6]">
  <div className="max-w-[1440px] mx-auto px-6 md:px-10">
    <div className="bg-white rounded-[3rem] p-8 md:p-20 shadow-sm border border-gray-100 flex flex-col lg:flex-row items-center gap-16">
      
      <div className="w-full lg:w-1/2 space-y-8">
        <div>
          <h2 className="text-[#ec6d13] text-sm font-black uppercase tracking-[0.3em] mb-4">The Digital Nomad Hub</h2>
          <h3 className="text-4xl md:text-5xl font-black text-[#181411] tracking-tighter leading-tight">
            Your office in the <br /> <span className="text-[#ec6d13]">South Nyanza wild.</span>
          </h3>
        </div>
        
        <p className="text-lg text-[#897261] leading-relaxed">
          We understand that the modern traveler needs to stay connected. Tribena is one of the few sanctuaries in Migori offering enterprise-grade reliability for remote professionals.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f7f6] border border-gray-50">
            <span className="material-symbols-outlined text-[#ec6d13] text-3xl">starlink</span>
            <div>
              <h4 className="font-bold text-[#181411]">Starlink Internet</h4>
              <p className="text-xs text-[#897261]">High-speed, low-latency connectivity for seamless 4K Zoom calls.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#f8f7f6] border border-gray-50">
            <span className="material-symbols-outlined text-[#ec6d13] text-3xl">wb_sunny</span>
            <div>
              <h4 className="font-bold text-[#181411]">24/7 Solar Power</h4>
              <p className="text-xs text-[#897261]">Never worry about outages. Our backup systems keep you online 24/7.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative">
        <div className="rounded-[2.5rem] overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80" 
            alt="Laptop on a wooden table with coffee" 
            className="w-full h-[450px] object-cover"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-[#ec6d13] text-white p-8 rounded-3xl shadow-xl">
           <p className="text-3xl font-black">200+</p>
           <p className="text-[10px] font-bold uppercase tracking-widest">Mbps Speed</p>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= Our Journey & Impact ================= */}
<section className="py-24 bg-white">
  <div className="max-w-[1440px] mx-auto px-6 md:px-10">
    <div className="flex flex-col lg:flex-row gap-20">
      
      {/* Column 1: Timeline */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-[#ec6d13] text-sm font-black uppercase tracking-[0.3em] mb-8">The Journey</h2>
        <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-gray-100">
          {[
            { year: "2014", title: "The First Stone", desc: "Tribena began as a small family dream to redefine Migori hospitality." },
            { year: "2018", title: "Expanding the Sanctuary", desc: "We opened our signature garden suites and organic kitchen." },
            { year: "2026", title: "The Modern Tribe", desc: "Fully solar-powered and Starlink equipped for the modern traveler." }
          ].map((milestone, i) => (
            <div key={i} className="relative pl-12 group">
              <div className="absolute left-0 top-1 size-6 rounded-full bg-white border-2 border-[#ec6d13] group-hover:bg-[#ec6d13] transition-colors z-10"></div>
              <span className="text-[#ec6d13] font-black text-lg mb-1 block">{milestone.year}</span>
              <h4 className="text-xl font-bold text-[#181411] mb-2">{milestone.title}</h4>
              <p className="text-[#897261] leading-relaxed">{milestone.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Column 2: Community Impact Card */}
      <div className="w-full lg:w-1/2">
        <div className="bg-[#181411] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden h-full flex flex-col justify-center">
          <div className="absolute top-0 right-0 size-40 bg-[#ec6d13]/10 rounded-full blur-3xl"></div>
          
          <span className="material-symbols-outlined text-[#ec6d13] text-5xl mb-6">eco</span>
          <h3 className="text-3xl md:text-4xl font-black mb-6 tracking-tighter">Small Footprint,<br/>Big Heart.</h3>
          
          <ul className="space-y-6">
            <li className="flex gap-4">
              <span className="material-symbols-outlined text-[#ec6d13]">check_circle</span>
              <p className="text-gray-300"><span className="text-white font-bold">100% Solar Powered:</span> Reducing our carbon footprint while ensuring your 24/7 comfort.</p>
            </li>
            <li className="flex gap-4">
              <span className="material-symbols-outlined text-[#ec6d13]">check_circle</span>
              <p className="text-gray-300"><span className="text-white font-bold">Farm-to-Table:</span> 90% of our ingredients are sourced from Migori’s local farmers.</p>
            </li>
            <li className="flex gap-4">
              <span className="material-symbols-outlined text-[#ec6d13]">check_circle</span>
              <p className="text-gray-300"><span className="text-white font-bold">Local Talent:</span> Our entire team are sons and daughters of the South Nyanza soil.</p>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
{/* ================= Regional Adventure Section ================= */}
<section className="py-24 bg-white">
  <div className="max-w-[1440px] mx-auto px-6 md:px-10">
    <div className="text-center mb-16">
      <h2 className="text-[#ec6d13] text-sm font-black uppercase tracking-[0.3em] mb-4">Explore the Region</h2>
      <h3 className="text-4xl md:text-5xl font-black text-[#181411] tracking-tighter">
        The Basecamp for <span className="italic font-serif">Epic Journeys.</span>
      </h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Maasai Mara",
          dist: "2.5 Hours Drive",
          desc: "Witness the Great Migration. We are the perfect stop-over before you enter the world's most famous game park.",
          img: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80",
          icon: "forest"
        },
        {
          title: "Lake Victoria",
          dist: "45 Mins Drive",
          desc: "Experience the sunset at Muhuru Bay. Enjoy fresh Tilapia and boat rides on Africa's largest Great Lake.",
          img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80",
          icon: "sailing"
        },
        {
          title: "Thimlich Ohinga",
          dist: "50 Mins Drive",
          desc: "Explore the UNESCO World Heritage site. A 16th-century dry-stone walled settlement rich in Luo history.",
          img: "https://images.unsplash.com/photo-1590050752117-23a9d7fc21ad?auto=format&fit=crop&q=80",
          icon: "castle"
        }
      ].map((loc, i) => (
        <div key={i} className="group cursor-pointer">
          <div className="relative h-[400px] rounded-[2.5rem] overflow-hidden mb-6 shadow-lg">
            <img 
              src={loc.img} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              alt={loc.title} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-[#ec6d13] text-sm">{loc.icon}</span>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{loc.dist}</span>
              </div>
              <h4 className="text-2xl font-black">{loc.title}</h4>
            </div>
          </div>
          <p className="text-[#897261] leading-relaxed px-4 text-sm">
            {loc.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= Amenities Grid ================= */}
<section className="py-24 px-6 bg-white">
  <div className="max-w-7xl mx-auto text-center mb-16">
    <h4 className="text-[#ec6d13] text-xs font-black uppercase tracking-[0.4em] mb-4">
      What We Offer
    </h4>
    <h2 className="text-4xl md:text-5xl font-black text-[#181411] tracking-tighter">
      Modern Comforts for Every Stay
    </h2>
  </div>
  <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
    {[
      { title: "Free Private Parking", icon: "local_parking", desc: "Secure, ample space right at the property." },
      { title: "High-Speed Wi-Fi", icon: "wifi", desc: "Unlimited & reliable – perfect for work or streaming." },
      { title: "Fully Equipped Kitchen", icon: "kitchen", desc: "Cook your own meals or use the on-site restaurant." },
      { title: "24/7 Security", icon: "security", desc: "Tight security for peace of mind day and night." },
      { title: "Air Conditioning", icon: "ac_unit", desc: "Cool comfort in every room." },
      { title: "Hot Shower & Ensuite", icon: "shower", desc: "Instant hot water and spacious bathrooms." },
      { title: "Smart TV", icon: "tv", desc: "Entertainment with streaming options." },
      { title: "Terrace & Outdoor Space", icon: "deck", desc: "Relax with outdoor fireplace and seating." },
    ].map((amenity, i) => (
      <div
        key={i}
        className="bg-[#f8f7f6] p-8 rounded-[2.5rem] border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
      >
        <span className="material-symbols-outlined text-[#ec6d13] text-5xl mb-4">{amenity.icon}</span>
        <h3 className="text-xl font-black mb-2 text-[#181411]">{amenity.title}</h3>
        <p className="text-[#897261] text-sm">{amenity.desc}</p>
      </div>
    ))}
  </div>
</section>
      </main>
    </div>
  );
}