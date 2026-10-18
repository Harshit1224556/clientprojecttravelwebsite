import React from 'react';
import SEO from '../components/SEO';

// Images from Unsplash matching City Cab theme
const HERO_BG = 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1600&q=80';
const FLEET_IMGS = {
  sedan: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=600&q=80',
  suv: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=600&q=80',
  tempo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80',
  bus: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80',
};
const TOUR_IMGS = {
  jagannath: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
  konark: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80',
  puri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
  chilika: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80',
  bhubaneswar: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80',
  tribal: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=600&q=80',
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "name": "City Cab",
  "url": "https://www.citycab.in",
  "telephone": "+91-8926272226",
  "email": "citycab7777@gmail.com",
  "description": "Premium Taxi, Tempo Traveller, Urbania & Bus Hire in Bhubaneswar and Puri. Odisha Tour Packages.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhubaneswar",
    "addressRegion": "Odisha",
    "postalCode": "751001",
    "addressCountry": "IN"
  },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "854" }
};

const homeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I book a taxi in Bhubaneswar?", "acceptedAnswer": { "@type": "Answer", "text": "You can book a taxi by calling +91 89262 72226 or via WhatsApp. We are available 24/7." } },
    { "@type": "Question", "name": "What vehicles are available for hire?", "acceptedAnswer": { "@type": "Answer", "text": "We offer Sedan, SUV, Tempo Traveller (12–16 seater), Urbania (17–26 seater), and Bus (30–52 seater) for hire." } },
    { "@type": "Question", "name": "Do you provide outstation taxi services?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide outstation taxi from Bhubaneswar and Puri to all major destinations across Odisha including Konark, Chilika, Puri and tribal areas." } },
  ]
};

const services = [
  { icon: '🚕', title: 'Taxi – Bhubaneswar', desc: 'AC sedan & SUV cabs for airport pickup, local tours and outstation travel from Bhubaneswar.', link: '/taxi-service-bhubaneswar', badge: 'Most Popular' },
  { icon: '🌊', title: 'Taxi – Puri', desc: 'Reliable cab service from Puri for temple visits, beach tours and outstation trips.', link: '/taxi-service-puri', badge: '' },
  { icon: '🚐', title: 'Tempo Traveller', desc: '12 to 16 seater AC Tempo Traveller for group trips, family tours and pilgrimages.', link: '/tempo-traveller-bhubaneswar', badge: 'Group Favourite' },
  { icon: '🚌', title: 'Urbania', desc: '17 to 26 seater luxury Urbania bus for corporate events, weddings and group tours.', link: '/urbania-bhubaneswar', badge: '' },
  { icon: '🏎️', title: 'Bus Hire', desc: '30 to 52 seater AC bus for large groups, school trips and corporate outings.', link: '/bus-hire-bhubaneswar', badge: '' },
  { icon: '🗺️', title: 'Tour Packages', desc: 'Customized Odisha tour packages covering Puri, Konark, Chilika Lake, Bhubaneswar and tribal areas.', link: '/odisha-tour-packages', badge: 'Best Value' },
];

const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '854+', label: 'Happy Customers' },
  { value: '50+', label: 'Fleet Vehicles' },
  { value: '24/7', label: 'Availability' },
];

const whyUs = [
  { icon: '✅', title: 'AC Vehicles', desc: 'All our vehicles are fully air-conditioned and sanitized before every trip.' },
  { icon: '🛡️', title: 'Safe & Reliable', desc: 'Experienced professional drivers with valid licenses and police verification.' },
  { icon: '💰', title: 'Best Price', desc: 'Transparent pricing with no hidden charges. Fixed rates for all routes.' },
  { icon: '📱', title: '24/7 Support', desc: 'Round-the-clock customer support via call and WhatsApp for any assistance.' },
  { icon: '⏱️', title: 'On-Time Pickup', desc: 'We guarantee punctual pickups. Your time is our priority.' },
  { icon: '🗓️', title: 'Easy Booking', desc: 'Book by phone or WhatsApp. No app needed. Instant confirmation.' },
];

const tours = [
  { name: 'Puri – Jagannath Temple', duration: '1 Day', img: TOUR_IMGS.jagannath, price: '₹1,800' },
  { name: 'Konark Sun Temple', duration: '1 Day', img: TOUR_IMGS.konark, price: '₹2,200' },
  { name: 'Puri Beach Tour', duration: '1 Day', img: TOUR_IMGS.puri, price: '₹1,500' },
  { name: 'Chilika Lake Trip', duration: '1 Day', img: TOUR_IMGS.chilika, price: '₹2,500' },
  { name: 'Bhubaneswar Temple Trail', duration: '1 Day', img: TOUR_IMGS.bhubaneswar, price: '₹1,200' },
  { name: 'Tribal Odisha Tour', duration: '3 Days', img: TOUR_IMGS.tribal, price: '₹8,500' },
];

const testimonials = [
  { name: 'Ravi Kumar', loc: 'Delhi', stars: 5, text: 'Excellent service provider! Driver was very well behaved and the car was spotlessly clean. Highly recommend City Cab for Puri trip.' },
  { name: 'Harsh Sharma', loc: 'Kolkata', stars: 5, text: 'Booked a Tempo Traveller for our family pilgrimage. The vehicle was well-maintained and driver knew all the routes perfectly.' },
  { name: 'Ayush Yadav', loc: 'Bhubaneswar', stars: 5, text: 'Used their taxi service multiple times for airport pickups. Always on time and very affordable pricing.' },
];

const faqs = [
  { q: 'How do I book a taxi in Bhubaneswar?', a: 'Simply call or WhatsApp us at +91 89262 72226. We confirm your booking instantly and are available 24/7.' },
  { q: 'What vehicles are available?', a: 'Sedan, SUV, Tempo Traveller (12–16 seat), Urbania (17–26 seat), and Bus (30–52 seat).' },
  { q: 'Do you cover outstation routes?', a: 'Yes — all major Odisha destinations including Puri, Konark, Chilika Lake, Sambalpur, and tribal areas.' },
  { q: 'Is pricing fixed or metered?', a: 'We offer fixed transparent pricing for all routes. No hidden charges.' },
];

export default function Home() {
  const [openFaq, setOpenFaq] = React.useState(null);

  return (
    <>
      <SEO
        title="City Cab | Taxi, Tempo Traveller, Bus Hire – Bhubaneswar & Puri | Odisha Tours"
        description="Book Taxi/Cab, Tempo Traveller, Urbania, Bus Hire & Odisha Tour Packages from Bhubaneswar and Puri. Clean AC vehicles, 24/7 service. Call +91 89262 72226"
        canonical="https://www.citycab.in/"
        schema={homeSchema}
        faqSchema={homeFaq}
      />

      {/* ═══ HERO ═══ */}
      <section className="hero" style={{ backgroundImage: `url(${HERO_BG})` }}>
        <div className="hero-overlay" />
        <div className="container hero__content">
          <div className="hero__brand">
            <span className="hero__brand-mark">🚗</span>
            <span className="hero__brand-text">City <span>Cab</span></span>
          </div>

          <div className="hero__badge">Taxi • Tempo Traveller • Urbania • Bus Hire • Odisha Tours</div>

          <h1 className="hero__title">
            City Cab – Taxi, Tour Packages<br />&amp; <span>Vehicle Hire in Odisha</span>
          </h1>

          <div className="hero__subtitle">
            Bhubaneswar | Puri | Konark | Chilika | Odisha Tour Packages
          </div>

          <div className="hero__meta">
            <span className="hero__icon">📞</span>
            <span>Taxi, Tempo Traveller, Urbania, Bus Hire and Odisha Tour Packages with safe, smooth sightseeing.</span>
          </div>

          <div className="hero__row">
            <a href="tel:+91 89262 72226" className="hero__cta">
              <span className="hero__icon">📞</span>
              Call Now – +91 89262 72226
            </a>
            <a href="https://wa.me/918926272226" className="hero__cta hero__cta--alt" target="_blank" rel="noopener noreferrer">
              <span className="hero__icon">💬</span>
              WhatsApp Us
            </a>
          </div>

          <div className="hero__stats">
            {stats.map(s => (
              <div key={s.label} className="hero__stat">
                <span className="hero__stat-number">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-48">
            <span className="section-label">Our Services</span>
            <h2 className="section-title">What We Offer</h2>
            <div className="divider divider-center" />
            <p className="section-sub" style={{ margin: '0 auto' }}>
              From airport pickups to multi-day tour packages, we've got every travel need covered.
            </p>
          </div>
          <div className="grid-3">
            {services.map(s => (
              <article key={s.title} className="card" style={{ padding: 28 }}>
                {s.badge && <span className="badge badge-gold mb-16" style={{ display: 'inline-block', marginBottom: 12 }}>{s.badge}</span>}
                <div style={{ fontSize: '2.5rem', marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'var(--gray)', fontSize: '0.93rem', marginBottom: 20, lineHeight: 1.7 }}>{s.desc}</p>
                <a href={s.link} className="btn btn-navy" style={{ width: '100%', justifyContent: 'center', padding: '11px 20px' }}>
                  Know More →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY CHOOSE US ═══ */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
            <div>
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title mt-8">Trusted by Thousands of Travelers</h2>
              <div className="divider" />
              <p style={{ color: 'var(--gray)', marginBottom: 32, lineHeight: 1.8 }}>
                City Cab has been serving passengers across Odisha for over a decade. Our commitment to safety, reliability and comfort has made us the #1 choice for both locals and tourists.
              </p>
              <div className="grid-2" style={{ gap: 20 }}>
                {whyUs.map(w => (
                  <div key={w.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{w.icon}</span>
                    <div>
                      <h4 style={{ marginBottom: 4, fontSize: '1rem', color: 'var(--navy)' }}>{w.title}</h4>
                      <p style={{ color: 'var(--gray)', fontSize: '0.87rem', lineHeight: 1.6 }}>{w.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80"
                alt="Professional taxi driver City Cab"
                loading="lazy"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', width: '100%', objectFit: 'cover', height: 480 }}
              />
              <div style={{ position: 'absolute', bottom: -20, left: -20, background: 'var(--navy)', color: '#fff', borderRadius: 'var(--radius)', padding: '20px 28px', boxShadow: 'var(--shadow)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 700, color: 'var(--gold)' }}>4.9 ⭐</div>
                <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.75)' }}>854 verified reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FLEET ═══ */}
      <section className="section-pad" style={{ background: 'var(--navy)' }}>
        <div className="container">
          <div className="text-center mb-48">
            <span className="section-label">Our Fleet</span>
            <h2 style={{ color: '#fff', marginBottom: 12 }}>Choose Your Vehicle</h2>
            <div className="divider divider-center" />
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto' }}>
              All vehicles are AC, sanitized and regularly serviced for your comfort.
            </p>
          </div>
          <div className="grid-4">
            {[
              { name: 'Sedan', cap: '4 Seater', img: FLEET_IMGS.sedan, price: '₹12/km' },
              { name: 'SUV', cap: '6–7 Seater', img: FLEET_IMGS.suv, price: '₹16/km' },
              { name: 'Tempo Traveller', cap: '12–16 Seater', img: FLEET_IMGS.tempo, price: '₹25/km' },
              { name: 'Bus', cap: '30–52 Seater', img: FLEET_IMGS.bus, price: '₹55/km' },
            ].map(v => (
              <div key={v.name} style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)', transition: 'all 0.3s' }}>
                <img src={v.img} alt={v.name} loading="lazy" style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <div style={{ padding: '18px 20px' }}>
                  <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: 4 }}>{v.name}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', marginBottom: 12 }}>{v.cap}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ color: 'var(--gold)', fontWeight: 700, fontSize: '1.1rem' }}>{v.price}</span>
                    <a href="tel:+91 89262 72226" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>Book</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TOUR PACKAGES ═══ */}
      <section className="section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center mb-48">
            <span className="section-label">Tour Packages</span>
            <h2 className="section-title">Popular Odisha Tours</h2>
            <div className="divider divider-center" />
            <p className="section-sub" style={{ margin: '0 auto' }}>Explore the spiritual and natural beauty of Odisha with our curated packages.</p>
          </div>
          <div className="grid-3">
            {tours.map(t => (
              <article key={t.name} className="card">
                <img src={t.img} alt={t.name} loading="lazy" style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div style={{ padding: '20px 22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontSize: '1.05rem' }}>{t.name}</h3>
                    <span className="badge badge-gold">{t.duration}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--gray)' }}>Starting from</div>
                      <div style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--navy)', fontFamily: 'var(--font-heading)' }}>{t.price}</div>
                    </div>
                    <a href="tel:+91 89262 72226" className="btn btn-primary" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Book →</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-32">
            <a href="/odisha-tour-packages" className="btn btn-navy" style={{ padding: '14px 36px', fontSize: '1rem' }}>View All Packages</a>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center mb-48">
            <span className="section-label">Testimonials</span>
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="divider divider-center" />
          </div>
          <div className="grid-3">
            {testimonials.map(t => (
              <div key={t.name} style={{ background: '#fff', borderRadius: 'var(--radius)', padding: 28, boxShadow: 'var(--shadow)', border: '1px solid #F3F4F6' }}>
                <div className="stars mb-16">{'★'.repeat(t.stars)}</div>
                <p style={{ color: 'var(--gray)', lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'var(--navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.1rem' }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'var(--navy)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--gray)' }}>{t.loc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-pad" style={{ background: 'var(--light-gray)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="text-center mb-48">
            <span className="section-label">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="divider divider-center" />
          </div>
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i}>
                {f.q}
                <span style={{ fontSize: '1.4rem', color: 'var(--gold)', flexShrink: 0 }}>{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && <p className="faq-answer">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section style={{ background: 'linear-gradient(135deg, var(--navy) 0%, #1a2f4e 100%)', padding: '70px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff', marginBottom: 16 }}>Ready to Travel? Book Your Cab Now!</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: 32, fontSize: '1.1rem' }}>
            24/7 available | Clean AC vehicles | Professional drivers | Best prices
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+91 89262 72226" className="btn btn-primary" style={{ padding: '15px 36px', fontSize: '1.05rem' }}>
              📞 +91 89262 72226
            </a>
            <a href="https://wa.me/918926272226" className="btn btn-outline" target="_blank" rel="noopener noreferrer" style={{ padding: '15px 36px', fontSize: '1.05rem' }}>
              💬 WhatsApp Book
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
