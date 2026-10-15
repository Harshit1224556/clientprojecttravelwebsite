import React, { useState } from 'react';
import SEO from '../components/SEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "name": "Odisha Tour Packages – City Cab",
  "provider": { "@type": "TravelAgency", "name": "City Cab", "telephone": "+91-9090913111" },
  "url": "https://www.citycab.in/odisha-tour-packages"
};

const packages = [
  {
    name: 'Puri Pilgrimage Tour',
    duration: '1 Day',
    places: 'Jagannath Temple, Puri Beach, Gundicha Temple',
    price: '₹2,200',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    highlights: ['Jagannath Temple darshan', 'Puri Beach visit', 'Prasad pickup', 'Local market'],
    popular: true,
  },
  {
    name: 'Konark Sun Temple Tour',
    duration: '1 Day',
    places: 'Konark, Chandrabhaga Beach, Puri',
    price: '₹2,800',
    img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
    highlights: ['Konark Sun Temple', 'Chandrabhaga Beach', 'Puri darshan', 'Seafood lunch'],
    popular: false,
  },
  {
    name: 'Puri–Konark–BBSR Triangle',
    duration: '2 Days',
    places: 'Puri, Konark, Bhubaneswar Temples',
    price: '₹5,500',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    highlights: ['Jagannath Temple', 'Konark Sun Temple', 'Lingaraj Temple', 'Museum visit'],
    popular: true,
  },
  {
    name: 'Chilika Lake Tour',
    duration: '1 Day',
    places: 'Chilika Lake, Satapada, Kalijai Temple',
    price: '₹3,200',
    img: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80',
    highlights: ['Boat ride on Chilika', 'Irrawaddy dolphins', 'Kalijai Island', 'Bird watching'],
    popular: false,
  },
  {
    name: 'Bhubaneswar Heritage Tour',
    duration: '1 Day',
    places: 'Lingaraj, Udayagiri, Dhauligiri, Nandankanan',
    price: '₹1,800',
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
    highlights: ['Lingaraj Temple', 'Udayagiri Caves', 'Dhauligiri Peace Pagoda', 'Nandankanan Zoo'],
    popular: false,
  },
  {
    name: 'Tribal Odisha Tour',
    duration: '3–5 Days',
    places: 'Koraput, Rayagada, Jeypore',
    price: '₹14,000',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80',
    highlights: ['Tribal village visits', 'Koraput market', 'Deomali peak', 'Authentic Odisha cuisine'],
    popular: false,
  },
  {
    name: 'Odisha Char Dham Yatra',
    duration: '5 Days',
    places: 'Puri, Bhubaneswar, Konark, Sambalpur',
    price: '₹18,000',
    img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    highlights: ['4 dhams covered', 'Temple darshan', 'AC vehicle', 'Experienced driver'],
    popular: true,
  },
  {
    name: 'Sambalpur & Hirakud Tour',
    duration: '2 Days',
    places: 'Sambalpur, Hirakud Dam, Debrigarh',
    price: '₹7,500',
    img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80',
    highlights: ['Hirakud Dam', 'Debrigarh wildlife', 'Leaning temple', 'Sambalpuri weave market'],
    popular: false,
  },
];

export default function TourPackages() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', '1 Day', '2 Days', '3–5 Days'];
  const shown = filter === 'All' ? packages : packages.filter(p => p.duration.startsWith(filter));

  return (
    <>
      <SEO
        title="Odisha Tour Packages | Puri Konark Chilika Tours | City Cab"
        description="Book Odisha tour packages covering Puri Jagannath Temple, Konark Sun Temple, Chilika Lake, Bhubaneswar & tribal tours. Starting ₹1,800. Call +91 9090913111"
        canonical="https://www.citycab.in/odisha-tour-packages"
        schema={schema}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0A192F 60%,#1a3a5c)', padding: '140px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '50%', backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=900&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.22 }} />
        <div className="container" style={{ position: 'relative' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <ol style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'var(--gold)' }}>Home</a></li><li>/</li><li>Tour Packages</li>
            </ol>
          </nav>
          <span className="section-label">🗺️ Odisha Tours</span>
          <h1 style={{ color: '#fff', marginTop: 12, maxWidth: 640 }}>Odisha Tour <span style={{ color: 'var(--gold)' }}>Packages</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 520, margin: '18px 0 32px', lineHeight: 1.7 }}>
            Explore Odisha's temples, beaches, wildlife and tribal culture with our curated 1-day to 5-day tour packages.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="tel:+919090913111" className="btn btn-primary">📞 Customise Tour</a>
            <a href="https://wa.me/919090913111" className="btn btn-outline" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ background: 'var(--navy)', padding: '20px 0' }}>
        <div className="container" style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              style={{ padding: '8px 22px', borderRadius: 50, border: '2px solid', borderColor: filter === f ? 'var(--gold)' : 'rgba(255,255,255,0.25)', background: filter === f ? 'var(--gold)' : 'transparent', color: filter === f ? 'var(--navy)' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s' }}>
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Packages Grid */}
      <section className="section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="grid-3">
            {shown.map(p => (
              <article key={p.name} className="card" style={{ position: 'relative' }}>
                {p.popular && <span style={{ position: 'absolute', top: 16, left: 16, background: 'var(--gold)', color: 'var(--navy)', fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: 50, zIndex: 1 }}>⭐ Popular</span>}
                <img src={p.img} alt={p.name} loading="lazy" style={{ width: '100%', height: 210, objectFit: 'cover' }} />
                <div style={{ padding: '22px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <h3 style={{ fontSize: '1.08rem' }}>{p.name}</h3>
                    <span className="badge badge-navy" style={{ fontSize: '0.75rem', flexShrink: 0 }}>{p.duration}</span>
                  </div>
                  <p style={{ color: 'var(--gray)', fontSize: '0.85rem', marginBottom: 14 }}>{p.places}</p>
                  <ul style={{ marginBottom: 18 }}>
                    {p.highlights.map(h => (
                      <li key={h} style={{ fontSize: '0.85rem', color: 'var(--dark-gray)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <span style={{ color: 'var(--gold)' }}>✓</span> {h}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #F3F4F6', paddingTop: 14 }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--gray)' }}>Starting from</div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--navy)' }}>{p.price}</div>
                    </div>
                    <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Book Now</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Tour */}
      <section style={{ background: 'var(--navy)', padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: 14 }}>Want a Custom Odisha Tour?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: 32, maxWidth: 500, margin: '0 auto 32px', lineHeight: 1.7 }}>
            Tell us your dates, group size and interests — we'll design the perfect Odisha itinerary for you!
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+919090913111" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>📞 Call +91 90909 13111</a>
            <a href="https://wa.me/919090913111" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '14px 36px', fontSize: '1.05rem' }}>💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
