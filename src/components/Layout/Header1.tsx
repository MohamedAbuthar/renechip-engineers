'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Nav: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/Home', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/Casestudies', label: 'Case Studies' },
    { href: '/Careers', label: 'Careers' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-md' 
        : 'bg-transparent backdrop-blur-sm-1'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className={`text-3xl font-bold font-sans tracking-tight transition-colors ${
          scrolled ? 'text-emerald-500' : 'text-white'
        }`}>
          ReneChip
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[16px] font-medium transition-colors whitespace-nowrap ${
                pathname === link.href
                  ? scrolled 
                    ? 'text-emerald-500 font-semibold' 
                    : 'text-white font-semibold'
                  : scrolled
                    ? 'text-gray-800 hover:text-emerald-500'
                    : 'text-white hover:text-green-100'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/getin">
            <button className={`font-semibold text-[16px] py-2.5 px-6 rounded-lg transition-all whitespace-nowrap ${
              scrolled 
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                : 'bg-white text-green-700 hover:bg-green-50'
            }`}>
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`md:hidden focus:outline-none transition-colors ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden flex flex-col items-center shadow-lg py-4 space-y-4 border-t ${
          scrolled 
            ? 'bg-white border-gray-200'
            : 'bg-green-700 border-green-600'
        }`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-[16px] font-medium transition-colors ${
                pathname === link.href
                  ? scrolled
                    ? 'text-emerald-500 font-semibold'
                    : 'text-white font-semibold'
                  : scrolled
                    ? 'text-gray-800 hover:text-emerald-500'
                    : 'text-white hover:text-green-100'
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/getin" onClick={() => setMenuOpen(false)}>
            <button className={`font-semibold text-[16px] py-2.5 px-6 rounded-lg transition-all ${
              scrolled 
                ? 'bg-emerald-500 hover:bg-emerald-600 text-white'
                : 'bg-white text-green-700 hover:bg-green-50'
            }`}>
              Contact Us
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;