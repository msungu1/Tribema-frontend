import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#181411] text-white overflow-hidden pt-32 pb-12 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Premium Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ec6d13]/30 to-transparent"></div>
      
      {/* Background Glows for Depth */}
      <div className="absolute -top-24 -left-24 size-96 bg-[#ec6d13]/5 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -right-24 size-96 bg-[#ec6d13]/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          
          {/* 1. Brand Philosophy - High Impact */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex items-center gap-4 group cursor-default">
              <div className="bg-[#ec6d13] p-3 rounded-2xl shadow-[0_10px_30px_rgba(236,109,19,0.3)] group-hover:rotate-[10deg] transition-transform duration-500">
                <span className="material-symbols-outlined text-white text-3xl font-light">cottage</span>
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tighter leading-none">TRIBENA</h2>
                <span className="text-[9px] font-black text-[#ec6d13] tracking-[0.4em] uppercase">Private Home Stay</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm font-medium">
              Where Migori's rich heritage meets contemporary luxury. Your sanctuary on the road to adventure.
            </p>

            <div className="flex gap-4">
              {['Instagram', 'Facebook', 'WhatsApp'].map((platform) => (
                <a 
                  key={platform} 
                  href={`#${platform.toLowerCase()}`} 
                  className="px-5 py-2 rounded-full border border-white/10 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#181411] hover:border-white transition-all duration-500"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* 2. Navigation - The Minimalist List */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ec6d13] mb-10">Navigation</h3>
            <ul className="flex flex-col gap-5 text-gray-400 text-sm font-bold tracking-tight">
              {['Home', 'Rooms', 'Experience', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`/${link.toLowerCase().replace(' ', '')}`} className="hover:text-[#ec6d13] transition-all flex items-center gap-3 group">
                    <span className="h-[2px] w-0 bg-[#ec6d13] group-hover:w-3 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info - Icon-Centric */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ec6d13] mb-10">Inquiries</h3>
            <div className="flex flex-col gap-8">
              <div className="flex gap-5">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ec6d13] shrink-0 border border-white/5">
                  <span className="material-symbols-outlined text-xl">near_me</span>
                </div>
                <p className="text-sm font-medium text-gray-400 leading-relaxed">Off Sirare-Migori Highway,<br /> Migori Town, Kenya</p>
              </div>
              <div className="flex gap-5">
                <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-[#ec6d13] shrink-0 border border-white/5">
                  <span className="material-symbols-outlined text-xl">call</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase font-black tracking-widest text-gray-500 mb-1">Direct Line</p>
                  <p className="text-white font-black text-lg">+254 700 000 000</p>
                </div>
              </div>
            </div>
          </div>

          {/* 4. The Newsletter - Premium Field */}
          <div className="lg:col-span-3">
            <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ec6d13] mb-10">Join the Tribe</h3>
            <p className="text-sm text-gray-400 mb-8 font-medium">Subscribe for exclusive Maasai Mara itineraries and seasonal rates.</p>
            <form className="relative group" onClick={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="email@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-6 pr-14 text-xs font-bold text-white focus:outline-none focus:ring-2 focus:ring-[#ec6d13] focus:border-transparent transition-all placeholder:text-gray-600"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#ec6d13] text-white p-2.5 rounded-xl hover:bg-white hover:text-[#ec6d13] transition-all shadow-xl">
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar - Minimalist Copyright */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center">
            <div className="size-6 bg-[#ec6d13] rounded flex items-center justify-center">
                <span className="text-[8px] font-black text-white">T</span>
            </div>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-[0.3em]">
              © {currentYear} TRIBENA HOME STAY. Crafted for <span className="text-white">Luxury & Comfort.</span>
            </p>
          </div>
          
          <div className="flex gap-10 text-[9px] font-black uppercase tracking-[0.4em] text-gray-600">
            <a href="#" className="hover:text-[#ec6d13] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#ec6d13] transition-colors">Legal</a>
            <a href="#" className="hover:text-[#ec6d13] transition-colors">Safaris</a>
          </div>
        </div>
      </div>
    </footer>
  );
}