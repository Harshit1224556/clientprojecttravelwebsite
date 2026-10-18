import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__top">
        <div className="container">
          <div className="footer__grid">
            {/* Brand */}
            <div className="footer__col footer__brand">
              <Link to="/" className="footer__logo">
                <img src="/city-cab-logo.png" alt="City Cab" className="footer__logo-img" />
              </Link>
              <p>Premium Taxi, Tempo Traveller, Urbania &amp; Bus Hire in Bhubaneswar &amp; Puri. Clean AC vehicles, 24/7 service across Odisha.</p>
              <div className="footer__social">
                <a href="https://www.facebook.com/share/1DipXMS2yv/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
                <a href="https://www.instagram.com/citycabodisha?dlrf=Y2xpaHcyamJkZG52" target="_blank" rel="noopener noreferrer" aria-label="Instagram">in</a>
                <a href="https://share.google/RTw8zpLzWza1YMamU" target="_blank" rel="noopener noreferrer" aria-label="Google Profile">G</a>
                <a href="https://wa.me/918926272226" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">W</a>
              </div>
            </div>

            {/* Services */}
            <div className="footer__col">
              <h3>Our Services</h3>
              <ul>
                <li><Link to="/taxi-service-bhubaneswar">Taxi – Bhubaneswar</Link></li>
                <li><Link to="/taxi-service-puri">Taxi – Puri</Link></li>
                <li><Link to="/tempo-traveller-bhubaneswar">Tempo Traveller</Link></li>
                <li><Link to="/urbania-bhubaneswar">Urbania Hire</Link></li>
                <li><Link to="/bus-hire-bhubaneswar">Bus Hire</Link></li>
                <li><Link to="/odisha-tour-packages">Tour Packages</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/odisha-tour-packages">Odisha Tour Packages</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link to="/payment">Payment</Link></li>
                <li><a href="/sitemap.xml" target="_blank" rel="noopener">Sitemap</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3>Contact Us</h3>
              <ul className="footer__contact">
                <li>
                  <MapPin size={16} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--white)' }}>Official Office:</strong>
                    <span>Plot No-506, Puri Bypass Road, Near DM Public School, Bhubaneswar, Odisha</span>
                  </div>
                </li>
                <li>
                  <MapPin size={16} />
                  <div>
                    <strong style={{ display: 'block', color: 'var(--white)' }}>Corporate Office:</strong>
                    <span>Plot No-506, Puri Bypass Road, Near DM Public School, Bhubaneswar, Odisha</span>
                  </div>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="tel:+91 89262 72226">+91 89262 72226</a>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="tel:+91 77351 72226">+91 77351 72226</a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href="mailto:service.citycab@gmail.com">service.citycab@gmail.com</a>
                </li>
                <li>
                  <Clock size={16} />
                  <span>24/7 — All Days</span>
                </li>
              </ul>
              <a href="tel:+91 89262 72226" className="btn btn-primary mt-16" style={{width:'100%',justifyContent:'center'}}>
                📞 Book Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} City Cab. All rights reserved.</p>
          <p>Taxi &amp; Tour Services in Bhubaneswar, Puri &amp; Odisha</p>
        </div>
      </div>
    </footer>
  );
}
