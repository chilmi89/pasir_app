// src/components/Footer.tsx
"use client";
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright & Name */}
          <div className="text-zinc-500 text-sm">
            © {currentYear} <span className="text-zinc-300 font-medium">Pasir App.</span> All rights reserved.
          </div>

          {/* Minimalist Links */}
          <div className="flex items-center space-x-6 text-sm text-zinc-500">
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-orange-500 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;