import React, { useState } from 'react';
import SEO from '../components/SEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "City Cab – Taxi Service Bhubaneswar",
  "telephone": "+91-9090913111",
  "address": { "@type": "PostalAddress", "addressLocality": "Bhubaneswar", "addressRegion": "Odisha", "addressCountry": "IN" },
  "priceRange": "₹₹",
  "url": "https://www.citycab.in/taxi-service-bhubaneswar"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is the taxi fare from Bhubaneswar airport?", "acceptedAnswer": { "@type": "Answer", "text": "Starting from ₹400 for sedan. We offer fixed airport rates with no surprises." } },
    { "@type": "Question", "name": "Do you provide 24/7 taxi service in Bhubaneswar?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we operate 24/7 including early morning airport pickups and late night drops." } },
  ]
};

const rates = [
  { route: 'Bhubaneswar Airport Pickup', sedan: '₹400', suv: '₹600' },
  { route: 'Bhubaneswar to Puri', sedan: '₹1,200', suv: '₹1,800' },
  { route: 'Bhubaneswar to Konark', sedan: '₹1,400', suv: '₹2,000' },
  { route: 'Bhubaneswar to Chilika', sedan: '₹1,800', suv: '₹2,400' },
  { route: 'Bhubaneswar Local (8hr/80km)', sedan: '₹1,500', suv: '₹2,200' },
  { route: 'Bhubaneswar to Cuttack', sedan: '₹600', suv: '₹900' },
];

const faqs = [
  { q: 'What is the taxi fare from Bhubaneswar airport?', a: 'Starting from ₹400 for sedan. We offer fixed airport rates with no surprises.' },
  { q: 'Do you provide 24/7 taxi service?', a: 'Yes, we operate 24/7 including early morning pickups and late night drops.' },
  { q: 'Are drivers verified?', a: 'All drivers are police-verified with valid licenses and extensive route knowledge.' },
  { q: 'Can I book outstation from Bhubaneswar?', a: 'Yes, we cover all Odisha destinations and inter-state routes.' },
];

export default function TaxiServiceBhubaneswar() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <SEO
        title="Taxi Service Bhubaneswar | Cab Booking | City Cab"
        description="Book reliable taxi & cab service in Bhubaneswar. Airport pickup, local hire, outstation trips. AC vehicles, 24/7 service. Call +91 9090913111"
        canonical="https://www.citycab.in/taxi-service-bhubaneswar"
        schema={schema} faqSchema={faqSchema}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0A192F 60%,#1a3a5c)', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', backgroundImage: 'url(https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="container" style={{ position: 'relative' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <ol style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'var(--gold)' }}>Home</a></li>
              <li>/</li><li>Taxi – Bhubaneswar</li>
            </ol>
          </nav>
          <span className="section-label">🚕 Bhubaneswar</span>
          <h1 style={{ color: '#fff', marginTop: 12, maxWidth: 600 }}>Taxi Service in<br /><span style={{ color: 'var(--gold)' }}>Bhubaneswar</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 520, margin: '18px 0 32px', lineHeight: 1.7 }}>
            AC Sedan & SUV cabs for airport transfers, temple visits, outstation tours and local sightseeing across Bhubaneswar.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '14px 30px' }}>📞 Book Now</a>
            <a href="https://wa.me/919090913111" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 30px' }}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad-sm" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="grid-4">
            {[['✅','AC Vehicles','Clean, sanitized cars'],['🛡️','Verified Drivers','Police-verified pros'],['💰','Fixed Rates','No hidden charges'],['⏱️','On-Time','Punctual guaranteed']].map(([ic,t,d]) => (
              <div key={t} style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '24px 20px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 10 }}>{ic}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{t}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--gray)' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates Table */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: 860 }}>
          <div className="text-center mb-48">
            <span className="section-label">Pricing</span>
            <h2 className="section-title">Taxi Rates – Bhubaneswar</h2>
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
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--gray)' }}>{r.sedan}</td>
                    <td style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--gray)' }}>{r.suv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--gray)', fontSize: '0.85rem', marginTop: 12, textAlign: 'center' }}>* Rates are approximate. Call for exact quote. Toll & parking extra.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center mb-48">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Common Questions</h2>
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

      {/* CTA */}
      <section style={{ background: 'var(--navy)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: 14 }}>Book Your Bhubaneswar Taxi Now</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>Available 24/7 · Fixed Rates · Instant Confirmation</p>
          <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>📞 +91 90909 13111</a>
        </div>
      </section>
    </>
  );
}
