import React, { useState } from 'react';

const Home = () => {
  // Form State
  const [booking, setBooking] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1 Guest'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", booking);
    alert(`Searching for availability from ${booking.checkIn} to ${booking.checkOut}`);
  };

  return (
    <div className="bg-[#f8f7f6]  text-[#181411] dark:text-[#f4f2f0] font-['Plus_Jakarta_Sans',sans-serif] antialiased flex flex-col min-h-screen overflow-x-hidden">
      
      {/* TopNavBar */}
    

      <main className="flex-grow">
        {/* HeroSection */}
        <section className="relative">
          <div 
            className="min-h-[700px] flex flex-col items-center justify-center p-4 bg-cover bg-center bg-no-repeat relative"
            style={{ 
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80")' 
            }}
          >
            <div className="relative z-10 flex flex-col gap-4 text-center max-w-[800px]">
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-sm">
                Welcome Home to Migori
              </h1>
              <h2 className="text-white/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-sm">
                Experience authentic hospitality and cozy comfort. Your peaceful retreat away from the bustle.
              </h2>
            </div>
          </div>

          {/* Floating Search Bar (State-driven) */}
          <div className="relative z-20 px-4 -mt-10 md:-mt-14 mb-10">
            <div className="max-w-5xl mx-auto bg-white dark:bg-[#2c2018] rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100 dark:border-gray-800">
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 items-end">
                <div className="flex-1 w-full flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#897261] uppercase tracking-wider">Check In</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#ec6d13]">calendar_today</span>
                    <input 
                      name="checkIn"
                      value={booking.checkIn}
                      onChange={handleInputChange}
                      className="w-full h-12 pl-10 pr-4 bg-[#f8f7f6] dark:bg-[#221810] rounded-lg border-none focus:ring-2 focus:ring-[#ec6d13] text-sm font-medium dark:text-white" 
                      type="date" 
                      required
                    />
                  </div>
                </div>
                <div className="flex-1 w-full flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#897261] uppercase tracking-wider">Check Out</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#ec6d13]">calendar_today</span>
                    <input 
                      name="checkOut"
                      value={booking.checkOut}
                      onChange={handleInputChange}
                      className="w-full h-12 pl-10 pr-4 bg-[#f8f7f6] dark:bg-[#221810] rounded-lg border-none focus:ring-2 focus:ring-[#ec6d13] text-sm font-medium dark:text-white" 
                      type="date" 
                      required
                    />
                  </div>
                </div>
                <div className="flex-1 w-full flex flex-col gap-2">
                  <label className="text-xs font-bold text-[#897261] uppercase tracking-wider">Guests</label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-[#ec6d13]">person</span>
                    <select 
                      name="guests"
                      value={booking.guests}
                      onChange={handleInputChange}
                      className="w-full h-12 pl-10 pr-4 bg-[#f8f7f6] dark:bg-[#221810] rounded-lg border-none focus:ring-2 focus:ring-[#ec6d13] text-sm font-medium dark:text-white appearance-none cursor-pointer"
                    >
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>Family (4+)</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-3 text-[#897261] pointer-events-none">expand_more</span>
                  </div>
                </div>
                <button type="submit" className="w-full md:w-auto h-12 px-8 bg-[#ec6d13] hover:bg-[#ec6d13]/90 text-white font-bold rounded-lg shadow-lg shadow-[#ec6d13]/30 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">search</span>
                  <span>Check Availability</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="relative w-full overflow-hidden bg-[#f8f7f6] dark:bg-[#221810]" id="about">
  <div className="flex flex-col lg:flex-row min-h-screen lg:h-[900px]">
    
    {/* 1. Left Side: Immersive Visuals (Covers 50% of screen) */}
    <div className="relative w-full lg:w-1/2 h-[500px] lg:h-full overflow-hidden group">
      <img 
        src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80" 
        alt="Tribena Heritage" 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      
      {/* Visual Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      
      {/* Floating Cultural Badge */}
      <div className="absolute top-12 left-12 z-20 animate-fade-in">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-white">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-1">Established</p>
          <p className="text-2xl font-serif">2023</p>
        </div>
      </div>

      {/* Bottom Visual Card */}
      <div className="absolute bottom-12 left-12 right-12 z-20">
        <div className="bg-white dark:bg-[#2c2018] p-8 rounded-[2.5rem] shadow-2xl flex items-center gap-6 max-w-md transform translate-y-0 group-hover:-translate-y-2 transition-transform duration-500">
          <div className="size-16 rounded-2xl bg-[#ec6d13]/10 flex items-center justify-center text-[#ec6d13]">
             <span className="material-symbols-outlined text-4xl">local_florist</span>
          </div>
          <div>
            <h4 className="font-bold text-[#181411] dark:text-white">Eco-Friendly Stay</h4>
            <p className="text-sm text-[#897261]">100% sustainable practices and local sourcing.</p>
          </div>
        </div>
      </div>
    </div>

    {/* 2. Right Side: Rich Content (Covers 50% of screen) */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-[#ec6d13]"></span>
          <span className="text-[#ec6d13] text-sm font-black uppercase tracking-[0.3em]">Our Heritage</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-black leading-[1.1] text-[#181411] dark:text-white mb-8 tracking-tighter">
          Rooted in Migori. <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec6d13] to-[#ff9d5c]">Driven by Heart.</span>
        </h2>

        <p className="text-xl text-[#897261] dark:text-gray-300 leading-relaxed mb-10">
          Tribena wasn't built to be just another hotel. It was born from a desire to share the authentic warmth of Kenyan hospitality. Every corner of our home tells a story of the people, the land, and the "Tribe" we’ve built over a decade.
        </p>

        {/* Values Grid - Adds more content and width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-2">
            <span className="material-symbols-outlined text-[#ec6d13]">diversity_3</span>
            <h5 className="font-bold text-[#181411] dark:text-white uppercase text-xs tracking-widest">Community First</h5>
            <p className="text-sm text-[#897261]">We empower local artisans and source 90% of our supplies from Migori markets.</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="material-symbols-outlined text-[#ec6d13]">high_quality</span>
            <h5 className="font-bold text-[#181411] dark:text-white uppercase text-xs tracking-widest">Premium Comfort</h5>
            <p className="text-sm text-[#897261]">Modern luxury meets traditional aesthetics for an unmatched resting experience.</p>
          </div>
        </div>

        {/* Stats Section Integrated */}
        <div className="flex items-center gap-12 py-8 border-t border-[#f4f2f0] dark:border-[#3a2e26] mb-10">
          <div>
            <p className="text-4xl font-black text-[#181411] dark:text-white">500+</p>
            <p className="text-[10px] font-bold text-[#897261] uppercase tracking-widest">Happy Guests</p>
          </div>
          <div className="h-10 w-px bg-[#f4f2f0] dark:bg-[#3a2e26]"></div>
          <div>
            <div className="flex items-center gap-1">
              <p className="text-4xl font-black text-[#181411] dark:text-white">4.9</p>
              <span className="material-symbols-outlined text-[#ec6d13] fill-current">star</span>
            </div>
            <p className="text-[10px] font-bold text-[#897261] uppercase tracking-widest">Guest Rating</p>
          </div>
        </div>

        {/* Action Button */}
        <button className="group relative px-10 py-5 bg-[#181411] dark:bg-white text-white dark:text-[#181411] rounded-full font-bold text-sm uppercase tracking-[0.2em] overflow-hidden transition-all shadow-2xl hover:shadow-[#ec6d13]/20">
          <span className="relative z-10">Explore Our History</span>
          <div className="absolute inset-0 bg-[#ec6d13] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>
      </div>
    </div>
  </div>
</section>
        {/* Room Grid */}
        <section className="py-24 bg-white " id="rooms">
  <div className="max-w-[1280px] mx-auto px-4 md:px-10">
    
    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
      <div className="relative">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-[2px] bg-[#ec6d13]"></div>
          <h2 className="text-[#ec6d13] text-sm font-extrabold uppercase tracking-[0.2em]">Accommodations</h2>
        </div>
        <h3 className="text-4xl md:text-5xl font-black text-[#181411] dark:text-white tracking-tight">
          Handpicked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec6d13] to-[#ff9d5c]">Sanctuaries</span>
        </h3>
      </div>
      <a className="group text-sm font-bold text-[#897261] hover:text-[#ec6d13] transition-all flex items-center gap-2 bg-[#f8f7f6] dark:bg-[#221810] px-6 py-3 rounded-full border border-[#f4f2f0] dark:border-[#3a2e26]" href="#">
        View All Suites 
        <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
      </a>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { 
          name: "The Garden Suite", 
          price: 50, 
          img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80", 
          tag: "Most Popular",
          specs: ["WiFi", "King Bed", "Garden View"]
        },
        { 
          name: "The Family Room", 
          price: 80, 
          img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80", 
          tag: "Spacious",
          specs: ["Kitchen", "2 Queen Beds", "WiFi"]
        },
        { 
          name: "Cozy Double", 
          price: 40, 
          img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80", 
          tag: "Best Value",
          specs: ["Workspace", "Queen Bed", "WiFi"]
        }
      ].map((room, i) => (
        <div key={i} className="group relative flex flex-col bg-white dark:bg-[#221810] rounded-[2.5rem] overflow-hidden border border-[#f4f2f0] dark:border-[#3a2e26] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(236,109,19,0.15)] hover:-translate-y-2">
          
          {/* Image Container */}
          <div className="relative w-full aspect-[11/10] overflow-hidden">
            <img 
              src={room.img} 
              alt={room.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            {/* Dark Overlay on Hover */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Floating Top Badges */}
            <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
              <span className="bg-white/90 dark:bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-[#ec6d13]">
                {room.tag}
              </span>
              <div className="bg-white dark:bg-[#2c2018] size-10 rounded-full flex items-center justify-center text-[#181411] dark:text-white shadow-lg cursor-pointer hover:text-[#ec6d13] transition-colors">
                <span className="material-symbols-outlined text-xl">favorite</span>
              </div>
            </div>

            {/* Price Tag Overlay */}
            <div className="absolute bottom-5 left-5">
              <div className="bg-[#181411]/80 backdrop-blur-md px-4 py-2 rounded-2xl text-white">
                <span className="text-xl font-bold">${room.price}</span>
                <span className="text-[10px] uppercase tracking-tighter opacity-70 ml-1">/ Night</span>
              </div>
            </div>
          </div>

          {/* Content Body */}
          <div className="p-8">
            <h4 className="text-2xl font-bold text-[#181411] dark:text-white mb-4 group-hover:text-[#ec6d13] transition-colors">
              {room.name}
            </h4>
            
            {/* Amenities Grid */}
            <div className="flex flex-wrap gap-y-2 gap-x-4 mb-8">
              {room.specs.map((spec, index) => (
                <span key={index} className="flex items-center gap-1.5 text-xs font-medium text-[#897261] dark:text-gray-400">
                  <span className="size-1.5 rounded-full bg-[#ec6d13]"></span>
                  {spec}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <button className="relative w-full overflow-hidden group/btn flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#f8f7f6] dark:bg-[#2c2018] text-[#181411] dark:text-white font-bold transition-all duration-300 hover:bg-[#ec6d13] hover:text-white">
              <span className="relative z-10 text-sm tracking-tight">Reserve This Room</span>
              <span className="material-symbols-outlined relative z-10 text-lg transition-transform group-hover/btn:translate-x-1">chevron_right</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-24 bg-[#f8f7f6] dark:bg-[#221810] overflow-hidden" id="experience">
  <div className="max-w-[1280px] mx-auto px-6 md:px-10 mb-12">
    <div className="flex flex-col md:flex-row justify-between items-end gap-6">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-10 h-[2px] bg-[#ec6d13]"></span>
          <span className="text-[#ec6d13] text-sm font-black uppercase tracking-[0.3em]">Beyond the Room</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#181411] dark:text-white tracking-tighter">
          Immerse Yourself in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec6d13] to-[#ff9d5c]">The Local Pulse</span>
        </h2>
      </div>
      <div className="flex gap-3">
        {/* Custom Navigation Buttons */}
        <button className="size-14 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center hover:bg-white dark:hover:bg-[#2c2018] transition-all shadow-sm">
          <span className="material-symbols-outlined">west</span>
        </button>
        <button className="size-14 rounded-full bg-[#181411] dark:bg-white text-white dark:text-[#181411] flex items-center justify-center hover:bg-[#ec6d13] transition-all shadow-xl">
          <span className="material-symbols-outlined">east</span>
        </button>
      </div>
    </div>
  </div>

  {/* Horizontal Scroll Container */}
  <div className="flex gap-8 overflow-x-auto pb-12 px-6 md:px-[calc((100vw-1280px)/2+40px)] no-scrollbar snap-x snap-mandatory">
    {[
      {
        title: "Thimlich Ohinga Tour",
        desc: "Explore the UNESCO World Heritage stone complex and learn about ancient engineering.",
        img: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80",
        tag: "History",
        duration: "4-5 Hours"
      },
      {
        title: "Traditional Luo Feast",
        desc: "A farm-to-table dining experience featuring organic Migori produce and local recipes.",
        img: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80",
        tag: "Culinary",
        duration: "2-3 Hours"
      },
      {
        title: "Market Day Safari",
        desc: "Navigate the vibrant local markets with our guide to find the best handmade crafts.",
        img: "https://images.unsplash.com/photo-1488459711615-ca997c31d682?auto=format&fit=crop&q=80",
        tag: "Culture",
        duration: "3 Hours"
      },
      {
        title: "Garden Sunset Yoga",
        desc: "Rejuvenate your soul with a private meditation session in our lush tropical gardens.",
        img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80",
        tag: "Wellness",
        duration: "90 Mins"
      }
    ].map((exp, i) => (
      <div 
        key={i} 
        className="flex-shrink-0 w-[85vw] md:w-[450px] group snap-center"
      >
        <div className="relative h-[600px] w-full rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[#ec6d13]/10">
          {/* Background Image */}
          <img 
            src={exp.img} 
            alt={exp.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
          
          {/* Top Info */}
          <div className="absolute top-8 left-8">
            <span className="bg-[#ec6d13] text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg">
              {exp.tag}
            </span>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">schedule</span>
              {exp.duration}
            </div>
            <h4 className="text-3xl font-bold text-white leading-tight">
              {exp.title}
            </h4>
            <p className="text-white/60 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
              {exp.desc}
            </p>
            
            {/* Minimalist Button */}
            <button className="mt-4 flex items-center gap-2 text-white font-bold group/btn">
              <span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/btn:bg-white group-hover/btn:text-[#181411] transition-all">
                <span className="material-symbols-outlined text-lg">add</span>
              </span>
              <span className="text-sm tracking-widest uppercase">Experience More</span>
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

<section className="py-24 bg-white" id="amenities">
  <div className="max-w-[1280px] mx-auto px-6 md:px-10">
    
    {/* Heading Section */}
    <div className="text-center max-w-3xl mx-auto mb-20">
      <div className="inline-flex items-center justify-center gap-3 mb-4">
        <span className="w-8 h-px bg-[#ec6d13]/30"></span>
        <h2 className="text-[#ec6d13] text-sm font-black uppercase tracking-[0.4em]">The Comforts</h2>
        <span className="w-8 h-px bg-[#ec6d13]/30"></span>
      </div>
      <h3 className="text-4xl md:text-5xl font-black text-[#181411] tracking-tighter leading-[1.1]">
        Everything you need for a <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ec6d13] to-[#ff9d5c]">perfect stay.</span>
      </h3>
    </div>

    {/* Amenities Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: 'wifi', label: 'High-Speed Wi-Fi', desc: 'Starlink powered internet for remote work.' },
        { icon: 'shield_check', label: '24/7 Security', desc: 'Gated community with professional guards.' },
        { icon: 'local_parking', label: 'Free Parking', desc: 'Secure on-site parking for all guests.' },
        { icon: 'restaurant', label: 'Private Chef', desc: 'Authentic local meals prepared on request.' },
        { icon: 'battery_charging_full', label: 'Solar Backup', desc: 'Uninterrupted power supply 24/7.' },
        { icon: 'water_drop', label: 'Hot Showers', desc: 'Solar-heated water in every suite.' },
        { icon: 'local_laundry_service', label: 'Laundry', desc: 'Professional cleaning & ironing services.' },
        { icon: 'directions_car', label: 'Airport Pickup', desc: 'Direct transfers from Kisumu or Migori.' },
      ].map((amenity, i) => (
        <div 
          key={i} 
          className="group relative p-8 rounded-[2rem] bg-white border border-[#f4f2f0] transition-all duration-500 hover:border-[#ec6d13]/20 hover:shadow-[0_20px_40px_rgba(236,109,19,0.05)] hover:-translate-y-1"
        >
          {/* Icon Container */}
          <div className="size-14 rounded-2xl bg-[#f8f7f6] text-[#181411] flex items-center justify-center mb-6 group-hover:bg-[#ec6d13] group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-sm">
            <span className="material-symbols-outlined text-2xl">{amenity.icon}</span>
          </div>
          
          {/* Text Content */}
          <h4 className="text-lg font-bold text-[#181411] mb-2 group-hover:text-[#ec6d13] transition-colors">
            {amenity.label}
          </h4>
          <p className="text-sm text-[#897261] leading-relaxed">
            {amenity.desc}
          </p>

          {/* Subtle Accent - only shows on hover */}
          <div className="absolute top-4 right-4 size-2 rounded-full bg-[#ec6d13] opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= THE HUB: LOCATION & ADVENTURE COMBINED ================= */}
<section className="py-24 bg-white overflow-hidden" id="explore">
  <div className="max-w-[1440px] mx-auto px-6 md:px-10">
    
    <div className="flex flex-col lg:flex-row gap-20 items-start">
      
      {/* LEFT COLUMN: THE PROXIMITY HUB (Sticky on Desktop) */}
      <div className="w-full lg:w-[35%] lg:sticky lg:top-24">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-10 h-[2px] bg-[#ec6d13]"></span>
          <span className="text-[#ec6d13] text-xs font-black uppercase tracking-[0.3em]">Location & Access</span>
        </div>
        
        <h2 className="text-5xl font-black text-[#181411] mb-8 tracking-tighter leading-tight">
          The Center of <br /> <span className="text-[#ec6d13]">Everything.</span>
        </h2>
        
        <p className="text-[#897261] text-lg leading-relaxed mb-12">
          Tribena is more than a stay; it’s your strategic basecamp. Whether you're here for a meeting in town or a safari in the Mara, you're perfectly placed.
        </p>

        {/* Proximity List */}
        <div className="space-y-6 mb-12">
          {[
            { place: "Migori Town Center", time: "5 Mins Drive", icon: "city_guide" },
            { place: "Migori Airstrip", time: "15 Mins Drive", icon: "flight_takeoff" },
            { place: "Lake Victoria", time: "45 Mins Drive", icon: "waves" },
            { place: "Maasai Mara Gate", time: "2.5 Hours", icon: "landscape" }
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-5 rounded-3xl bg-[#f8f7f6] border border-gray-50 hover:border-[#ec6d13]/20 hover:bg-white hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-4">
                <div className="size-10 rounded-full bg-white flex items-center justify-center text-[#ec6d13] shadow-sm group-hover:bg-[#ec6d13] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-xl">{item.icon}</span>
                </div>
                <h4 className="font-bold text-[#181411]">{item.place}</h4>
              </div>
              <span className="text-[11px] font-black uppercase tracking-tighter text-[#897261]">{item.time}</span>
            </div>
          ))}
        </div>

        <button className="w-full py-5 rounded-2xl bg-[#181411] text-white font-black uppercase tracking-widest text-xs hover:bg-[#ec6d13] transition-colors flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-sm">directions_car</span>
          Get Navigation Map
        </button>
      </div>

      {/* RIGHT COLUMN: THE ADVENTURE MASONRY */}
      <div className="w-full lg:w-[65%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Main Map Card */}
          <div className="md:col-span-2 h-[400px] rounded-[3rem] overflow-hidden relative shadow-2xl group">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale-[0.5] group-hover:grayscale-0 transition-all duration-[5s] group-hover:scale-110"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&q=80")' }}
            />
            <div className="absolute inset-0 bg-[#181411]/20 group-hover:bg-transparent transition-colors"></div>
            
            {/* Floating Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="size-8 bg-[#ec6d13] rounded-full animate-ping absolute inset-0"></div>
                <div className="size-8 bg-[#ec6d13] rounded-full relative z-10 border-4 border-white shadow-2xl flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-xs">home</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-[2rem] border border-white/20 max-w-[280px]">
              <p className="text-[10px] font-black text-[#ec6d13] uppercase tracking-[0.2em] mb-1">Your Location</p>
              <h4 className="text-xl font-black text-[#181411]">The Sanctuary, Migori</h4>
            </div>
          </div>

          {/* Adventure Card 1: Maasai Mara */}
          <div className="h-[500px] rounded-[3rem] overflow-hidden relative group shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Maasai Mara"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181411] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-[#ec6d13] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">2.5 Hours Away</span>
              <h4 className="text-3xl font-black text-white mb-2 tracking-tighter">Maasai Mara</h4>
              <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Experience the world's premier wildlife spectacle from your Tribena base.
              </p>
            </div>
          </div>

          {/* Adventure Card 2: Lake Victoria */}
          <div className="h-[500px] rounded-[3rem] overflow-hidden relative group shadow-lg mt-0 md:mt-12">
            <img 
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              alt="Lake Victoria"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181411] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-[#ec6d13] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">45 Mins Away</span>
              <h4 className="text-3xl font-black text-white mb-2 tracking-tighter">Lake Victoria</h4>
              <p className="text-white/70 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Fresh tilapia and golden sunsets at Africa's greatest Great Lake.
              </p>
            </div>
          </div>

          {/* Adventure Card 3: Culture */}
          <div className="md:col-span-2 h-[350px] rounded-[3rem] overflow-hidden relative group shadow-lg">
             <img 
              src="https://images.unsplash.com/photo-1590050752117-23a9d7fc21ad?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              alt="Culture"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h4 className="text-4xl font-black text-white tracking-tighter mb-4">UNESCO World Heritage</h4>
              <p className="text-white/80 max-w-lg mb-6">Discover the ancient dry-stone walls of Thimlich Ohinga, just an hour away.</p>
              <button className="px-8 py-3 bg-white text-[#181411] rounded-full font-black uppercase text-[10px] tracking-widest hover:bg-[#ec6d13] hover:text-white transition-all">
                Learn History
              </button>
            </div>
          </div>

        </div>
      </div>

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



      {/* Floating WhatsApp Button */}
      <a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center" href="https://wa.me/254713800378">
        <svg className="size-6 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
      </a>
    </div>
  );
};

export default Home;