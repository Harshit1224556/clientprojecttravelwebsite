import React, { useState } from 'react';
import SEO from '../components/SEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "City Cab – Tempo Traveller Bhubaneswar",
  "telephone": "+91-9090913111",
  "address": { "@type": "PostalAddress", "addressLocality": "Bhubaneswar", "addressRegion": "Odisha", "addressCountry": "IN" },
  "url": "https://www.citycab.in/tempo-traveller-bhubaneswar"
};

const variants = [
  { seats: '12 Seater', features: 'AC, Push-back seats, Music system', price: '₹22/km', min: '₹2,500/day', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
  { seats: '14 Seater', features: 'AC, Luxury push-back, Charging points', price: '₹24/km', min: '₹2,800/day', img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80' },
  { seats: '16 Seater', features: 'AC, Recliner seats, Large luggage boot', price: '₹26/km', min: '₹3,200/day', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80' },
];

const faqs = [
  { q: 'What is the minimum hire duration for Tempo Traveller?', a: 'Minimum 1 day (8 hours / 80 km). Extra hours and km charged separately.' },
  { q: 'Can I book a Tempo Traveller for a pilgrimage tour?', a: 'Yes! We specialize in pilgrimage tours to Puri, Konark, Chilika and Char Dham.' },
  { q: 'Is the luggage space adequate?', a: 'Yes, all our Tempo Travellers have large dedicated luggage compartments.' },
];

export default function TempoTraveller() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <SEO
        title="Tempo Traveller Bhubaneswar | 12 14 16 Seater Hire | City Cab"
        description="Rent 12, 14 & 16 seater AC Tempo Traveller in Bhubaneswar for group tours, pilgrimages, weddings. Best rates. Call +91 9090913111"
        canonical="https://www.citycab.in/tempo-traveller-bhubaneswar"
        schema={schema}
      />

      <section style={{ background: 'linear-gradient(135deg,#0A192F 60%,#1a3a5c)', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="container" style={{ position: 'relative' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <ol style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'var(--gold)' }}>Home</a></li><li>/</li><li>Tempo Traveller</li>
            </ol>
          </nav>
          <span className="section-label">🚐 Group Travel</span>
          <h1 style={{ color: '#fff', marginTop: 12, maxWidth: 600 }}>Tempo Traveller Hire<br /><span style={{ color: 'var(--gold)' }}>Bhubaneswar</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 500, margin: '18px 0 32px', lineHeight: 1.7 }}>
            12, 14 & 16 seater AC Tempo Travellers for group tours, pilgrimages, family outings and corporate trips across Odisha.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '14px 30px' }}>📞 Book Now</a>
            <a href="https://wa.me/919090913111" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 30px' }}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-48">
            <span className="section-label">Fleet Options</span>
            <h2 className="section-title">Choose Your Tempo Traveller</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-3">
            {variants.map(v => (
              <article key={v.seats} className="card">
                <img src={v.img} alt={`${v.seats} Tempo Traveller`} loading="lazy" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div style={{ padding: '22px 24px' }}>
                  <h3 style={{ marginBottom: 8 }}>{v.seats}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.88rem', marginBottom: 16 }}>{v.features}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gray)' }}>From</div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--navy)' }}>{v.price}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gray)' }}>Min: {v.min}</div>
                    </div>
                    <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Book</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-48">
            <span className="section-label">Usage</span>
            <h2 className="section-title">Perfect For Every Occasion</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-4">
            {[['🛕','Pilgrimages','Puri, Konark, Char Dham'],['👨‍👩‍👧‍👦','Family Tours','Comfortable group travel'],['💒','Weddings','Airport & venue transfers'],['🏢','Corporate','Team outings & offsite']].map(([ic,t,d]) => (
              <div key={t} style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '28px 22px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: '2.4rem', marginBottom: 12 }}>{ic}</div>
                <h3 style={{ marginBottom: 6, fontSize: '1rem' }}>{t}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center mb-48">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Tempo Traveller Questions</h2>
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
          <h2 style={{ color: '#fff', marginBottom: 14 }}>Book Your Tempo Traveller Now</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>Group Discounts Available · 24/7 Service · All Odisha Routes</p>
          <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>📞 +91 90909 13111</a>
        </div>
      </section>
    </>
  );
}
