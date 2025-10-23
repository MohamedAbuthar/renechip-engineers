import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#0fa76f',
      color: '#ffffff'
    }}>
      {/* Main Footer Content */}
      <div style={{
        padding: '60px 40px',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '80px'
        }}>
          {/* Brand Section */}
          <div>
            <div style={{
              fontSize: '32px',
              fontWeight: '700',
              color: '#ffffff',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              letterSpacing: '-0.5px',
              marginBottom: '20px'
            }}>
              ReneChip
            </div>
            <p style={{
              fontSize: '16px',
              fontWeight: '400',
              color: '#ffffff',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              lineHeight: '1.6',
              margin: '0',
              opacity: '0.95'
            }}>
              Engineering excellence and workforce solutions<br />
              for manufacturing companies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#ffffff',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              marginBottom: '24px',
              marginTop: '0'
            }}>
              Quick Links
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '14px' }}>
                <a href="/about" style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: '0.9',
                  transition: 'opacity 0.2s'
                }}>
                  About Us
                </a>
              </li>
              <li style={{ marginBottom: '14px' }}>
                <a href="/services" style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: '0.9',
                  transition: 'opacity 0.2s'
                }}>
                  Services
                </a>
              </li>
              <li style={{ marginBottom: '14px' }}>
                <a href="/industries" style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: '0.9',
                  transition: 'opacity 0.2s'
                }}>
                  Industries
                </a>
              </li>
              <li style={{ marginBottom: '14px' }}>
                <a href="/careers" style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: '0.9',
                  transition: 'opacity 0.2s'
                }}>
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#ffffff',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              marginBottom: '24px',
              marginTop: '0'
            }}>
              Resources
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: '0',
              margin: '0'
            }}>
              <li style={{ marginBottom: '14px' }}>
                <a href="/case-studies" style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: '0.9',
                  transition: 'opacity 0.2s'
                }}>
                  Case Studies
                </a>
              </li>
              <li style={{ marginBottom: '14px' }}>
                <a href="/blog" style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: '0.9',
                  transition: 'opacity 0.2s'
                }}>
                  Blog
                </a>
              </li>
              <li style={{ marginBottom: '14px' }}>
                <a href="/how-it-works" style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: '0.9',
                  transition: 'opacity 0.2s'
                }}>
                  How It Works
                </a>
              </li>
              <li style={{ marginBottom: '14px' }}>
                <a href="/faq" style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: '0.9',
                  transition: 'opacity 0.2s'
                }}>
                  FAQ
                </a>
              </li>
              <li style={{ marginBottom: '14px' }}>
                <a href="/contact" style={{
                  textDecoration: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  fontWeight: '400',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  opacity: '0.9',
                  transition: 'opacity 0.2s'
                }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: '#ffffff',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              marginBottom: '24px',
              marginTop: '0'
            }}>
              Connect
            </h3>
            <div style={{ marginBottom: '24px' }}>
              <a href="mailto:info@renechip.com" style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontSize: '16px',
                fontWeight: '400',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                opacity: '0.9'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m2 7 10 7 10-7"/>
                </svg>
                info@renechip.com
              </a>
            </div>
            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#ffffff' }}>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#ffffff' }}>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div style={{
        padding: '24px 40px'
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <p style={{
            fontSize: '14px',
            fontWeight: '400',
            color: '#ffffff',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            margin: '0',
            opacity: '0.9'
          }}>
            © 2025 ReneChip. All rights reserved.
          </p>
          <div style={{
            display: 'flex',
            gap: '32px'
          }}>
            <a href="/privacy-policy" style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '400',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              opacity: '0.9',
              transition: 'opacity 0.2s'
            }}>
              Privacy Policy
            </a>
            <a href="/terms-of-service" style={{
              textDecoration: 'none',
              color: '#ffffff',
              fontSize: '14px',
              fontWeight: '400',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              opacity: '0.9',
              transition: 'opacity 0.2s'
            }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;