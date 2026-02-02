import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for glass effect change
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 z-50 w-full transition-all duration-300 px-0 md:px-6 pt-0 md:pt-4">
      {/* 1. Top Mini Info Bar - Cleaned & Balanced */}
      <div className={`hidden md:flex max-w-7xl mx-auto justify-between px-8 py-2 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 ${isScrolled ? 'opacity-0 h-0 overflow-hidden translate-y-[-10px]' : 'opacity-100 text-[#897261] translate-y-0'}`}>
        <div className="flex gap-8">
          <span className="flex items-center gap-2 hover:text-[#181411] transition-colors cursor-default">
            <span className="material-symbols-outlined text-[14px] text-[#ec6d13]">location_on</span> Migori, Kenya
          </span>
          <span className="flex items-center gap-2 hover:text-[#181411] transition-colors cursor-default">
            <span className="material-symbols-outlined text-[14px] text-[#ec6d13]">call</span> +254 700 000 000
          </span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#ec6d13] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#ec6d13] transition-colors">Facebook</a>
        </div>
      </div>

      {/* 2. Main Navigation Bar - Enhanced Beauty & Colors */}
      <header className={`max-w-7xl mx-auto transition-all duration-700 overflow-hidden
        ${isScrolled 
          ? 'bg-white/90 dark:bg-[#181411]/90 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:rounded-full border-[#f4f2f0]/80' 
          : 'bg-white dark:bg-[#181411] md:rounded-[2.5rem] border-transparent shadow-sm'} 
        border`}
      >
        <div className="px-6 lg:px-10">
          <div className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? 'h-16' : 'h-24'}`}>
            
            {/* Logo Section - Sharp Contrast */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="bg-[#181411] dark:bg-[#ec6d13] p-2.5 rounded-xl shadow-lg group-hover:bg-[#ec6d13] group-hover:rotate-[10deg] transition-all duration-500">
                  <span className="material-symbols-outlined text-white text-2xl block font-light">cottage</span>
                </div>
                <div className="absolute -inset-1 bg-[#ec6d13]/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black tracking-tighter text-[#181411] dark:text-white leading-none">
                  TRIBENA
                </h1>
                <span className="text-[9px] font-black text-[#ec6d13] tracking-[0.4em] uppercase ml-0.5 mt-1">
                  Home Stay
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Advanced Pill Style */}
            <nav className="hidden md:flex items-center gap-8">
              <div className="flex items-center bg-[#f8f7f6] dark:bg-[#251e18] px-1.5 py-1.5 rounded-full border border-gray-100 dark:border-white/5">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`relative px-6 py-2 text-[11px] font-black uppercase tracking-widest transition-all duration-500 rounded-full
                      ${location.pathname === item.path
                        ? 'text-white bg-[#ec6d13] shadow-[0_4px_12px_rgba(236,109,19,0.3)]'
                        : 'text-[#897261] hover:text-[#181411] dark:hover:text-white'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Enhanced CTA Button - The Final Touch */}
              <button className="group relative bg-[#181411] dark:bg-white text-white dark:text-[#181411] px-8 py-3.5 rounded-full font-black text-[10px] uppercase tracking-[0.2em] overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#181411]/20">
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">Book Your Stay</span>
                <div className="absolute inset-0 bg-[#ec6d13] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
            </nav>

            {/* Mobile Actions - Cleaned & Themed */}
            <div className="flex md:hidden items-center gap-2">
               <button className="bg-[#ec6d13] text-white p-2.5 rounded-xl shadow-lg active:scale-90 transition-transform">
                 <span className="material-symbols-outlined text-2xl font-light">calendar_month</span>
               </button>
               <button className="p-2 text-[#181411] dark:text-white active:opacity-50 transition-opacity">
                 <span className="material-symbols-outlined text-3xl font-light">menu_open</span>
               </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}