'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#432C2C]/90 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-[#FFF8D9] text-xl font-gothic font-bold">
            Flights & Sounds
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/about" 
              className="text-[#FFF8D9] hover:text-[#ECD35A] transition-colors duration-200 font-gothic"
            >
              About
            </Link>
            <Link 
              href="/artists" 
              className="text-[#FFF8D9] hover:text-[#ECD35A] transition-colors duration-200 font-gothic"
            >
              Artists
            </Link>
            <Link 
              href="/performers" 
              className="text-[#FFF8D9] hover:text-[#ECD35A] transition-colors duration-200 font-gothic"
            >
              Performers
            </Link>
            <Link 
              href="/contact" 
              className="text-[#FFF8D9] hover:text-[#ECD35A] transition-colors duration-200 font-gothic"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#432C2C]/95">
              <Link 
                href="/about" 
                className="text-[#FFF8D9] hover:text-[#ECD35A] block px-3 py-2 font-gothic"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/artists" 
                className="text-[#FFF8D9] hover:text-[#ECD35A] block px-3 py-2 font-gothic"
                onClick={() => setIsMenuOpen(false)}
              >
                Artists
              </Link>
              <Link 
                href="/performers" 
                className="text-[#FFF8D9] hover:text-[#ECD35A] block px-3 py-2 font-gothic"
                onClick={() => setIsMenuOpen(false)}
              >
                Performers
              </Link>
              <Link 
                href="/contact" 
                className="text-[#FFF8D9] hover:text-[#ECD35A] block px-3 py-2 font-gothic"
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