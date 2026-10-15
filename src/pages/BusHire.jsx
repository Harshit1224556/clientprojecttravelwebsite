import React from 'react';
import SEO from '../components/SEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "City Cab – Bus Hire Bhubaneswar",
  "telephone": "+91-9090913111",
  "address": { "@type": "PostalAddress", "addressLocality": "Bhubaneswar", "addressRegion": "Odisha", "addressCountry": "IN" },
  "url": "https://www.citycab.in/bus-hire-bhubaneswar"
};

const buses = [
  { seats: '30 Seater', price: '₹45/km', min: '₹5,500/day', img: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80' },
  { seats: '40 Seater', price: '₹50/km', min: '₹6,500/day', img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80' },
  { seats: '52 Seater', price: '₹60/km', min: '₹8,000/day', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80' },
];

export default function BusHire() {
  return (
    <>
      <SEO
        title="Bus Hire Bhubaneswar | 30 40 52 Seater AC Bus | City Cab"
        description="Hire 30, 40 & 52 seater AC bus in Bhubaneswar for school trips, corporate events, pilgrimages. Experienced drivers. Call +91 9090913111"
        canonical="https://www.citycab.in/bus-hire-bhubaneswar"
        schema={schema}
      />

      <section style={{ background: 'linear-gradient(135deg,#0A192F 60%,#1a3a5c)', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '45%', backgroundImage: 'url(https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.25 }} />
        <div className="container" style={{ position: 'relative' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <ol style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'var(--gold)' }}>Home</a></li><li>/</li><li>Bus Hire</li>
            </ol>
          </nav>
          <span className="section-label">🚍 Large Groups</span>
          <h1 style={{ color: '#fff', marginTop: 12, maxWidth: 600 }}>Bus Hire in<br /><span style={{ color: 'var(--gold)' }}>Bhubaneswar</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 500, margin: '18px 0 32px', lineHeight: 1.7 }}>
            30 to 52 seater AC buses for school picnics, corporate events, large group pilgrimages and outstation tours across Odisha.
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
            <span className="section-label">Bus Fleet</span>
            <h2 className="section-title">Our Bus Options</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-3">
            {buses.map(b => (
              <article key={b.seats} className="card">
                <img src={b.img} alt={`${b.seats} AC Bus`} loading="lazy" style={{ width: '100%', height: 210, objectFit: 'cover' }} />
                <div style={{ padding: '22px 24px' }}>
                  <h3 style={{ marginBottom: 8 }}>AC Bus – {b.seats}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.88rem', marginBottom: 16 }}>AC · Cushioned seats · Luggage space · Professional driver</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--navy)' }}>{b.price}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gray)' }}>Min {b.min}</div>
                    </div>
                    <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '10px 20px' }}>Book</a>
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
            <span className="section-label">Who Books Our Bus</span>
            <h2 className="section-title">Perfect For Every Large Group</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-4">
            {[['🏫','Schools','Picnics & field trips'],['🏢','Corporate','Team outings & offsite'],['🛕','Pilgrimages','Temple circuits & Char Dham'],['💒','Weddings','Guest transportation']].map(([ic,t,d]) => (
              <div key={t} style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '26px 20px', textAlign: 'center', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: 10 }}>{ic}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: 6 }}>{t}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.85rem' }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'var(--navy)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: 14 }}>Book Your Bus Today</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 28 }}>Group Discounts · All Odisha Routes · 24/7 Available</p>
          <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>📞 +91 90909 13111</a>
        </div>
      </section>
    </>
  );
}
