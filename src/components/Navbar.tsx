'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#B25E5D] backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo3.png" alt="Flights & Sounds" width={40} height={40} className="h-8 md:h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/about" 
              className="text-[20px] text-[#EDDEB7] hover:text-[#934D2F] transition-colors duration-200 font-dwpica"
            >
              About
            </Link>
            <Link 
              href="/performers" 
              className="text-[20px] text-[#EDDEB7] hover:text-[#934D2F] transition-colors duration-200 font-dwpica"
            >
              Performers
            </Link>
            <Link 
              href="/team" 
              className="text-[20px] text-[#EDDEB7] hover:text-[#934D2F] transition-colors duration-200 font-dwpica"
            >
              Our Team
            </Link>
            <Link 
              href="/contact" 
              className="text-[20px] text-[#EDDEB7] hover:text-[#934D2F] transition-colors duration-200 font-dwpica"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
                          <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#FFF8D9] hover:text-[#ECD35A] focus:outline-none focus:text-[#ECD35A]"
              >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                href="/about" 
                className="text-[20px] text-[#FFF8D9] hover:text-[#ECD35A] block px-3 py-2 font-dwpica"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/performers" 
                className="text-[20px] text-[#FFF8D9] hover:text-[#ECD35A] block px-3 py-2 font-dwpica"
                onClick={() => setIsMenuOpen(false)}
              >
                Performers
              </Link>
              <Link 
                href="/team" 
                className="text-[20px] text-[#FFF8D9] hover:text-[#ECD35A] block px-3 py-2 font-dwpica"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link 
                href="/contact" 
                className="text-[20px] text-[#FFF8D9] hover:text-[#ECD35A] block px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 