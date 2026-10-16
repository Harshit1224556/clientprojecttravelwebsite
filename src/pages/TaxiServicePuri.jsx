import React, { useState } from 'react';
import SEO from '../components/SEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "City Cab – Taxi Service Puri",
  "telephone": "+91-8926272226",
  "address": { "@type": "PostalAddress", "addressLocality": "Puri", "addressRegion": "Odisha", "addressCountry": "IN" },
  "url": "https://www.citycab.in/taxi-service-puri"
};

const rates = [
  { route: 'Puri to Bhubaneswar', sedan: '₹1,200', suv: '₹1,800' },
  { route: 'Puri to Konark', sedan: '₹800', suv: '₹1,200' },
  { route: 'Puri to Chilika Lake', sedan: '₹1,400', suv: '₹2,000' },
  { route: 'Puri Local (8hr/80km)', sedan: '₹1,500', suv: '₹2,200' },
  { route: 'Puri Airport Drop', sedan: '₹1,300', suv: '₹1,900' },
  { route: 'Puri to Cuttack', sedan: '₹1,500', suv: '₹2,200' },
];

const faqs = [
  { q: 'What is the taxi fare from Puri to Bhubaneswar?', a: 'Fixed rate starting ₹1,200 for sedan. No hidden charges.' },
  { q: 'Do you provide pickup from Puri beach?', a: 'Yes, we pick up from any location in Puri including beach areas and the Jagannath Temple zone.' },
  { q: 'Can you arrange a Puri-Konark-Bhubaneswar day trip?', a: 'Absolutely! This is our most popular day tour. Call to get a customized quote.' },
];

export default function TaxiServicePuri() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <SEO
        title="Taxi Service Puri | Cab Booking Puri | City Cab"
        description="Book taxi & cab service in Puri for Jagannath Temple, beach tours, Konark, Chilika and outstation. AC vehicles, 24/7. Call +91 89262 72226"
        canonical="https://www.citycab.in/taxi-service-puri"
        schema={schema}
      />

      <section style={{ background: 'linear-gradient(135deg,#0A192F 60%,#1a3a5c)', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="container" style={{ position: 'relative' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <ol style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'var(--gold)' }}>Home</a></li><li>/</li><li>Taxi – Puri</li>
            </ol>
          </nav>
          <span className="section-label">🌊 Puri</span>
          <h1 style={{ color: '#fff', marginTop: 12, maxWidth: 580 }}>Taxi Service in<br /><span style={{ color: 'var(--gold)' }}>Puri, Odisha</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 500, margin: '18px 0 32px', lineHeight: 1.7 }}>
            Reliable cab service in Puri for Jagannath Temple, Puri Beach, Konark Sun Temple, Chilika Lake and all outstation destinations.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="tel:+91 89262 72226" className="btn btn-primary" style={{ padding: '14px 30px' }}>📞 Book Now</a>
            <a href="https://wa.me/918926272226" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 30px' }}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Image + Info */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }}>
            <div>
              <span className="section-label">Why Book With Us</span>
              <h2 className="section-title mt-8">Best Taxi Service in Puri</h2>
              <div className="divider" />
              <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20 }}>Puri is one of India's holiest cities and a top tourist destination. Our experienced drivers know every route, temple location and tourist spot perfectly.</p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Airport & railway station pickup', 'Jagannath Temple area access routes', 'Puri–Konark–Bhubaneswar triangle tours', 'Beach side pickup & drop', 'Multilingual drivers', 'Fixed transparent pricing'].map(p => (
                  <li key={p} style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--dark-gray)', fontSize: '0.95rem' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span> {p}
                  </li>
                ))}
              </ul>
            </div>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80"
              alt="Puri Beach taxi service" loading="lazy"
              style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 420, objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Rates */}
      <section className="section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="text-center mb-48">
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Taxi Rates from Puri</h2>
            <div className="divider divider-center" />
          </div>
          <div style={{ overflowX: 'auto', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff' }}>
              <thead>
                <tr style={{ background: 'var(--navy)', color: '#fff' }}>
                  <th style={{ padding: '16px 20px', textAlign: 'left', fontFamily: 'var(--font-heading)' }}>Route</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center' }}>Sedan</th>
                  <th style={{ padding: '16px 20px', textAlign: 'center' }}>SUV</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((r, i) => (
                  <tr key={r.route} style={{ background: i % 2 === 0 ? '#F9FAFB' : '#fff', borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 500, color: 'var(--navy)' }}>{r.route}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center' }}>{r.sedan}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center' }}>{r.suv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center mb-48">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Questions about Puri Taxi</h2>
            <div className="divider divider-center" />
          </div>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {f.q} <span style={{ color: 'var(--gold)', fontSize: '1.3rem' }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className="faq-answer">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: 14 }}>Book Your Puri Taxi Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>24/7 Available · Temple & Beach Routes · Fixed Rates</p>
          <a href="tel:+91 89262 72226" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>📞 +91 89262 72226</a>
        </div>
      </section>
    </>
  );
}
