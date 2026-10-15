import React, { useState } from 'react';
import SEO from '../components/SEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "City Cab – Urbania Hire Bhubaneswar",
  "telephone": "+91-9090913111",
  "address": { "@type": "PostalAddress", "addressLocality": "Bhubaneswar", "addressRegion": "Odisha", "addressCountry": "IN" },
  "url": "https://www.citycab.in/urbania-bhubaneswar"
};

const variants = [
  { seats: '17 Seater', price: '₹30/km', min: '₹3,500/day', img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80' },
  { seats: '20 Seater', price: '₹35/km', min: '₹4,000/day', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
  { seats: '26 Seater', price: '₹40/km', min: '₹5,000/day', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80' },
];

const faqs = [
  { q: 'What is Urbania and how is it different from Tempo Traveller?', a: 'Force Urbania is a luxury minibus that offers more spacious seating, better AC and premium interiors compared to standard Tempo Travellers.' },
  { q: 'Is Urbania suitable for corporate events?', a: 'Absolutely. The Urbania is our most popular option for corporate outings and executive group travel.' },
  { q: 'What is the minimum hire period?', a: 'Minimum 8 hours / 80 km per day. Outstation packages available.' },
];

export default function Urbania() {
  const [openFaq, setOpenFaq] = useState(null);
  return (
    <>
      <SEO
        title="Urbania Hire Bhubaneswar | Force Urbania 17–26 Seater | City Cab"
        description="Rent Force Urbania (17–26 seater) in Bhubaneswar for corporate events, weddings & group tours. Luxury AC minibus. Call +91 9090913111"
        canonical="https://www.citycab.in/urbania-bhubaneswar"
        schema={schema}
      />

      <section style={{ background: 'linear-gradient(135deg,#0A192F 60%,#1a3a5c)', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', backgroundImage: 'url(https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="container" style={{ position: 'relative' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <ol style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'var(--gold)' }}>Home</a></li><li>/</li><li>Urbania</li>
            </ol>
          </nav>
          <span className="section-label">🚌 Luxury Group</span>
          <h1 style={{ color: '#fff', marginTop: 12, maxWidth: 600 }}>Urbania Hire in<br /><span style={{ color: 'var(--gold)' }}>Bhubaneswar</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 500, margin: '18px 0 32px', lineHeight: 1.7 }}>
            Force Urbania 17–26 seater luxury minibus for corporate outings, weddings, group pilgrimages and special events across Odisha.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '14px 30px' }}>📞 Book Now</a>
            <a href="https://wa.me/919090913111" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 30px' }}>💬 WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-48">
            <span className="section-label">Our Urbania Fleet</span>
            <h2 className="section-title">Choose Your Urbania</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-3">
            {variants.map(v => (
              <article key={v.seats} className="card">
                <img src={v.img} alt={`Urbania ${v.seats}`} loading="lazy" style={{ width: '100%', height: 210, objectFit: 'cover' }} />
                <div style={{ padding: '22px 24px' }}>
                  <h3 style={{ marginBottom: 6 }}>Force Urbania – {v.seats}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.88rem', marginBottom: 18 }}>AC · Push-back seats · USB charging · Music system</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--navy)' }}>{v.price}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gray)' }}>Min {v.min}</div>
                    </div>
                    <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Book</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-48">
            <span className="section-label">Features</span>
            <h2 className="section-title">Why Choose Force Urbania?</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-4">
            {[['💺','Spacious Seats','Wide push-back recliner seats'],['❄️','Powerful AC','Fully air-conditioned'],['🎵','Entertainment','Music system & screen'],['🔌','USB Charging','Charging ports at every seat']].map(([ic,t,d]) => (
              <div key={t} style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '26px 20px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: 10 }}>{ic}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{t}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="text-center mb-48">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Urbania Questions</h2>
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
          <h2 style={{ color: '#fff', marginBottom: 14 }}>Book Your Urbania Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>Premium Group Travel · Best Rates · All Odisha</p>
          <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>📞 +91 90909 13111</a>
        </div>
      </section>
    </>
  );
}
