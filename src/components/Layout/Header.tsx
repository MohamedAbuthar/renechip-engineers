'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: '#about', label: 'About',id: 'about' },
    { href: '#services', label: 'Services',id: 'services' },
    { href: '#works', label: 'How It Works',id: 'works' },
    { href: '#industries', label: 'Industries',id: 'industries' },
    { href: '#faq', label: 'FAQ',id: 'faq' },
    { href: '/blog', label: 'Blog' },
    { href: '/Casestudies', label: 'Case Studies' },
    { href: '/Careers', label: 'Careers' },
  ];

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: 'white',
      padding: '20px 40px',
      borderBottom: '1px solid #d0cec5'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none' }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#10b981',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.5px'
          }}>
            ReneChip
          </div>
        </Link>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: pathname === link.href ? '#10b981' : '#1f2937',
                fontSize: '16px',
                fontWeight: pathname === link.href ? '600' : '500',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap'
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* Contact Us Button */}
          <Link href="/getin" style={{ textDecoration: 'none' }}>
            <button style={{
              backgroundColor: '#10b981',
              color: '#ffffff',
              fontSize: '16px',
              fontWeight: '600',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              padding: '12px 28px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#059669'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;