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
              <Link to="/" className="footer__logo">🚗 City <em>Cab</em></Link>
              <p>Premium Taxi, Tempo Traveller, Urbania &amp; Bus Hire in Bhubaneswar &amp; Puri. Clean AC vehicles, 24/7 service across Odisha.</p>
              <div className="footer__social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">in</a>
                <a href="https://wa.me/919090913111" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">W</a>
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
                  <span>Bhubaneswar, Odisha – 751001</span>
                </li>
                <li>
                  <Phone size={16} />
                  <a href="tel:+919090913111">+91 90909 13111</a>
                </li>
                <li>
                  <Mail size={16} />
                  <a href="mailto:citycab7777@gmail.com">citycab7777@gmail.com</a>
                </li>
                <li>
                  <Clock size={16} />
                  <span>24/7 — All Days</span>
                </li>
              </ul>
              <a href="tel:+919090913111" className="btn btn-primary mt-16" style={{width:'100%',justifyContent:'center'}}>
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
