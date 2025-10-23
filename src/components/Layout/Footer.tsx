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
              <div className="mb-5 text-3xl font-bold tracking-tight lg:text-[32px]">
                ReneChip
              </div>
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
                  <a href="#services" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#industries" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    Industries
                  </a>
                </li>
                <li>
                  <a href="/Careers" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-6 text-lg font-semibold">
                Resources
              </h3>
              <ul className="space-y-3.5">
                <li>
                  <a href="/Casestudies" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#works" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/getin" className="text-base opacity-90 transition-opacity hover:opacity-100">
                    Contact
                  </a>
                </li>
              </ul>
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
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 transition-colors hover:bg-white/25">
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
              © 2025 ReneChip. All rights reserved.
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