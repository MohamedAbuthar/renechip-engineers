import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav style={{
      backgroundColor: '#e8e6dd',
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
        <a href="/" style={{ textDecoration: 'none' }}>
          <div style={{
            fontSize: '32px',
            fontWeight: '700',
            color: '#10b981',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            letterSpacing: '-0.5px'
          }}>
            ReneChip
          </div>
        </a>

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px'
        }}>
          <a href="/about" style={{
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transition: 'color 0.2s'
          }}>
            About
          </a>
          
          <a href="/services" style={{
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transition: 'color 0.2s'
          }}>
            Services
          </a>
          
          <a href="/how-it-works" style={{
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transition: 'color 0.2s',
            whiteSpace: 'nowrap'
          }}>
            How It Works
          </a>
          
          <a href="/industries" style={{
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transition: 'color 0.2s'
          }}>
            Industries
          </a>
          
          <a href="/faq" style={{
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transition: 'color 0.2s'
          }}>
            FAQ
          </a>
          
          <a href="/blog" style={{
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transition: 'color 0.2s'
          }}>
            Blog
          </a>
          
          <a href="/case-studies" style={{
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transition: 'color 0.2s',
            whiteSpace: 'nowrap'
          }}>
            Case Studies
          </a>
          
          <a href="/careers" style={{
            textDecoration: 'none',
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            transition: 'color 0.2s'
          }}>
            Careers
          </a>

          {/* Contact Us Button */}
          <a href="/contact" style={{ textDecoration: 'none' }}>
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
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;