// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Desktop dropdown state
  const pathname = usePathname();

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard' },
    {
      name: 'Pasir',
      href: '#',
      dropdown: [
        { name: 'jenis-pasir', href: '/pasir/jenis-pasir' },
        { name: 'Armada', href: '/pasir/armada' },
        { name: 'Produksi', href: '/pasir/produksi' },
        { name: 'Transaksi', href: '/pasir/transaksi' },
      ],
    },
    { name: 'Users', href: '/users' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-white/5">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-white text-2xl font-bold tracking-tighter">
          Pasir<span className="text-orange-500">App</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            if (link.dropdown) {
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <button
                    className={`flex items-center px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      isDropdownOpen ? 'bg-orange-600 text-white' : 'text-gray-300 hover:bg-orange-600 hover:text-white'
                    }`}
                  >
                    {link.name}
                    <svg className={`ml-2 w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu Desktop */}
                  <div className={`absolute left-0 mt-1 w-48 rounded-2xl bg-zinc-900/90 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-300 origin-top ${
                    isDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                  }`}>
                    <div className="p-2 space-y-1">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-4 py-2 text-sm text-zinc-300 hover:bg-orange-600 hover:text-white rounded-lg transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive ? 'bg-orange-600 text-white' : 'text-gray-300 hover:bg-orange-600 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          
          {/* Logout Button */}
          <button className="ml-4 px-5 py-2 text-sm font-bold text-zinc-400 hover:text-red-500 transition-colors">
            Logout
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden bg-zinc-950 border-t border-white/5 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-6 flex flex-col space-y-4">
          <Link href="/dashboard" className="text-zinc-300 hover:text-orange-500">Dashboard</Link>
          <div className="space-y-2">
            <p className="text-zinc-500 text-xs font-bold uppercase tracking-widest">Pasir</p>
            <div className="pl-4 flex flex-col space-y-3 border-l border-white/10">
              <Link href="/pasir/armada" className="text-zinc-400 hover:text-orange-500 text-sm">Armada</Link>
              <Link href="/pasir/produksi" className="text-zinc-400 hover:text-orange-500 text-sm">Produksi</Link>
              <Link href="/pasir/transaksi" className="text-zinc-400 hover:text-orange-500 text-sm">Transaksi</Link>
            </div>
          </div>
          <Link href="/users" className="text-zinc-300 hover:text-orange-500">Users</Link>
          <button className="text-left text-red-500 font-bold pt-4 border-t border-white/5">Logout</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;