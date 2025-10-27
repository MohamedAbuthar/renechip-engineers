import { Facebook, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0fa76f] text-white">
      {/* Main Footer Content */}
      <div className="border-b border-white/20 px-4 py-12 sm:px-6 md:px-8 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-1">
              <a
          href="/"
          className="group"
        >
          <img 
            src="/renechip_logo.png" 
            alt="ReneChip Logo" 
            className="w-12 h-12 sm:w-50 sm:h-15 transition-transform group-hover:scale-105"
          />
        </a>
              <p className="text-base leading-relaxed opacity-95">
                Engineering excellence and workforce solutions<br className="hidden sm:block" />
                for manufacturing companies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Quick Links
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a href="#about" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/Casestudies" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/Careers" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

                 {/* Head Office */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Head office
              </h3>
              <div className="space-y-4 text-base opacity-90">
                <p className="leading-relaxed">
                  97G/4C/1, 1st Floor, PSS Jayam Towers,<br />
                  Teachers Colony,<br />
                  Tuticorin, Tamilnadu, India, 628008
                </p>
                <div className="space-y-3">
                  <a href="tel:+919842160709" className="flex items-center gap-2 transition-opacity hover:opacity-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    +91 9842160709
                  </a>
                  <a href="mailto:info@renechip.com" className="flex items-center gap-2 transition-opacity hover:opacity-100">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m2 7 10 7 10-7"/>
                    </svg>
                    info@renechip.com
                  </a>
                </div>
                <a href="https://wa.me/919842160709" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#25D366] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[#20BD5A]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
            {/* Connect */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Connect
              </h3>
              <div className="mb-6">
                <a href="mailto:info@renechip.com" className="flex items-center gap-2 text-base opacity-90 transition-opacity hover:opacity-100">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m2 7 10 7 10-7"/>
                  </svg>
                  info@renechip.com
                </a>
              </div>
              <div className="flex gap-3">
                <a href="https://www.facebook.com/people/Renechip/61553602659541/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 transition-colors hover:bg-white/25">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/Renechip67?t=zAOCqWfIaiH2rNVbIETryA" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 transition-colors hover:bg-white/25">
                  <Twitter size={20} />
                </a>
                <a href="https://www.linkedin.com/company/renechip-india/" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 transition-colors hover:bg-white/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 transition-colors hover:bg-white/25">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-sm opacity-90">
              © 2014 ReneChip. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a href="/privacy-policy" className="text-sm opacity-90 transition-opacity hover:opacity-100">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="text-sm opacity-90 transition-opacity hover:opacity-100">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;