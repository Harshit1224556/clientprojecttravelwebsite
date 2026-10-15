import React, { useState } from 'react';
import SEO from '../components/SEO';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact City Cab",
  "url": "https://www.citycab.in/contact",
  "mainEntity": {
    "@type": "TravelAgency",
    "name": "City Cab",
    "telephone": "+91-9090913111",
    "email": "citycab7777@gmail.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Bhubaneswar", "addressRegion": "Odisha", "addressCountry": "IN" }
  }
};

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Hello City Cab!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0ADate: ${form.date}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919090913111?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact City Cab | Book Taxi & Tour – Bhubaneswar"
        description="Contact City Cab for taxi booking, tour packages and vehicle hire in Bhubaneswar & Puri. Call +91 9090913111 or WhatsApp anytime."
        canonical="https://www.citycab.in/contact"
        schema={schema}
      />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0A192F 0%,#1a3a5c 100%)', padding: '140px 0 80px' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <ol style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'var(--gold)' }}>Home</a></li><li>/</li><li>Contact</li>
            </ol>
          </nav>
          <span className="section-label">📞 Get in Touch</span>
          <h1 style={{ color: '#fff', marginTop: 12 }}>Contact <span style={{ color: 'var(--gold)' }}>City Cab</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', maxWidth: 500, marginTop: 16 }}>
            Ready to book? Call, WhatsApp or fill the form — we'll get back to you instantly!
          </p>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section style={{ background: 'var(--light-gray)', padding: '50px 0' }}>
        <div className="container">
          <div className="grid-4">
            {[
              { icon: <Phone size={22} color="var(--gold)" />, title: 'Call Us', info: '+91 90909 13111', sub: 'Available 24/7', href: 'tel:+919090913111' },
              { icon: <Mail size={22} color="var(--gold)" />, title: 'Email Us', info: 'citycab7777@gmail.com', sub: 'Reply within 2 hours', href: 'mailto:citycab7777@gmail.com' },
              { icon: <MapPin size={22} color="var(--gold)" />, title: 'Location', info: 'Bhubaneswar, Odisha', sub: '751001', href: 'https://maps.google.com/?q=Bhubaneswar+Odisha' },
              { icon: <Clock size={22} color="var(--gold)" />, title: 'Hours', info: '24/7 Service', sub: 'All days, All seasons', href: null },
            ].map(c => (
              <div key={c.title} style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '28px 22px', boxShadow: 'var(--shadow)', textAlign: 'center' }}>
                <div style={{ marginBottom: 12 }}>{c.icon}</div>
                <h3 style={{ fontSize: '1rem', marginBottom: 8 }}>{c.title}</h3>
                {c.href ? (
                  <a href={c.href} style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem', display: 'block', wordBreak: 'break-word', textDecoration: 'none' }}>{c.info}</a>
                ) : (
                  <div style={{ color: 'var(--navy)', fontWeight: 600, fontSize: '0.9rem' }}>{c.info}</div>
                )}
                <p style={{ color: 'var(--gray)', fontSize: '0.82rem', marginTop: 4 }}>{c.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
            {/* Booking Form */}
            <div>
              <span className="section-label">Booking Form</span>
              <h2 className="section-title mt-8">Book Your Vehicle</h2>
              <div className="divider" />
              {submitted ? (
                <div style={{ background: '#DCFCE7', border: '1px solid #86EFAC', borderRadius: 'var(--radius)', padding: 28, textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: 12 }}>✅</div>
                  <h3 style={{ color: '#166534', marginBottom: 8 }}>Booking Request Sent!</h3>
                  <p style={{ color: '#166534' }}>We've received your request and will confirm via WhatsApp shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-primary" style={{ marginTop: 20 }}>Submit Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {[
                    { key: 'name', label: 'Your Name *', type: 'text', placeholder: 'Full name', required: true },
                    { key: 'phone', label: 'Phone Number *', type: 'tel', placeholder: '+91 XXXXX XXXXX', required: true },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com', required: false },
                    { key: 'date', label: 'Travel Date *', type: 'date', placeholder: '', required: true },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display: 'block', fontWeight: 600, color: 'var(--navy)', marginBottom: 6, fontSize: '0.9rem' }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} required={f.required}
                        value={form[f.key]} onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1.5px solid #E5E7EB', fontSize: '0.95rem', outline: 'none', fontFamily: 'var(--font-body)', transition: 'border 0.2s' }}
                        onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                        onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--navy)', marginBottom: 6, fontSize: '0.9rem' }}>Service Required *</label>
                    <select required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1.5px solid #E5E7EB', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none', background: '#fff' }}>
                      <option value="">-- Select Service --</option>
                      <option>Taxi – Bhubaneswar</option>
                      <option>Taxi – Puri</option>
                      <option>Tempo Traveller (12–16 Seater)</option>
                      <option>Urbania (17–26 Seater)</option>
                      <option>Bus Hire (30–52 Seater)</option>
                      <option>Odisha Tour Package</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ display: 'block', fontWeight: 600, color: 'var(--navy)', marginBottom: 6, fontSize: '0.9rem' }}>Message / Requirements</label>
                    <textarea rows={4} placeholder="Pickup location, drop location, number of passengers..."
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '12px 16px', borderRadius: 8, border: '1.5px solid #E5E7EB', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical' }}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem', justifyContent: 'center' }}>
                    📨 Send via WhatsApp
                  </button>
                  <p style={{ color: 'var(--gray)', fontSize: '0.8rem', textAlign: 'center' }}>Your booking enquiry will be sent via WhatsApp for instant response.</p>
                </form>
              )}
            </div>

            {/* Map Embed */}
            <div>
              <span className="section-label">Our Location</span>
              <h2 className="section-title mt-8">Find Us</h2>
              <div className="divider" />
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '3px solid var(--gold)' }}>
                <iframe
                  title="City Cab Location – Bhubaneswar"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119595.44979290677!2d85.7595!3d20.2961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1697000000000"
                  width="100%" height="380" style={{ border: 0, display: 'block' }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div style={{ marginTop: 24, background: 'var(--navy)', borderRadius: 'var(--radius)', padding: '24px', color: '#fff' }}>
                <h3 style={{ color: 'var(--gold)', marginBottom: 14, fontSize: '1.1rem' }}>Quick Contact</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <a href="tel:+919090913111" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 600 }}>📞 +91 90909 13111</a>
                  <a href="https://wa.me/919090913111" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: 600 }}>💬 WhatsApp Chat</a>
                  <a href="mailto:citycab7777@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem' }}>✉️ citycab7777@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
