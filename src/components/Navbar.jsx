import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Services', path: '#',
    children: [
      { label: 'Taxi – Bhubaneswar', path: '/taxi-service-bhubaneswar' },
      { label: 'Taxi – Puri', path: '/taxi-service-puri' },
      { label: 'Tempo Traveller', path: '/tempo-traveller-bhubaneswar' },
      { label: 'Urbania', path: '/urbania-bhubaneswar' },
      { label: 'Bus Hire', path: '/bus-hire-bhubaneswar' },
    ]
  },
  { label: 'Tour Packages', path: '/odisha-tour-packages' },
  { label: 'Contact', path: '/contact' },
  { label: 'Payment', path: '/payment' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); setDropdown(false); }, [location]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="container navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="City Cab Home">
          <span className="logo-icon">🚗</span>
          <span className="logo-text">City <em>Cab</em></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="navbar__links" role="navigation" aria-label="Main navigation">
          {navLinks.map(link => link.children ? (
            <div key={link.label} className="navbar__dropdown-wrap"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => setDropdown(false)}>
              <button className="navbar__link navbar__link--drop" aria-haspopup="true" aria-expanded={dropdown}>
                {link.label} <span className="arrow">▾</span>
              </button>
              {dropdown && (
                <div className="navbar__dropdown" role="menu">
                  {link.children.map(child => (
                    <NavLink key={child.path} to={child.path} className="navbar__dropdown-item" role="menuitem">
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <NavLink key={link.path} to={link.path}
              className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}>
              {link.label}
            </NavLink>
          ))}
          <a href="tel:+919090913111" className="btn btn-primary navbar__cta" aria-label="Call us">
            📞 +91 90909 13111
          </a>
        </nav>

        {/* Hamburger */}
        <button className="navbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu" aria-expanded={menuOpen}>
          <span></span><span></span><span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="navbar__mobile" role="navigation" aria-label="Mobile navigation">
          {navLinks.map(link => link.children ? (
            <div key={link.label}>
              <span className="navbar__mobile-label">{link.label}</span>
              {link.children.map(child => (
                <NavLink key={child.path} to={child.path} className="navbar__mobile-link">{child.label}</NavLink>
              ))}
            </div>
          ) : (
            <NavLink key={link.path} to={link.path} className="navbar__mobile-link">{link.label}</NavLink>
          ))}
          <a href="tel:+919090913111" className="btn btn-primary" style={{ margin: '16px 20px' }}>
            📞 Call Now
          </a>
        </nav>
      )}
    </header>
  );
}
