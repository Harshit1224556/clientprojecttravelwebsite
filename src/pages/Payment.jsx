import React from 'react';
import SEO from '../components/SEO';

const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Payment – City Cab",
  "url": "https://www.citycab.in/payment"
};

const paymentMethods = [
  { icon: '🏦', name: 'Bank Transfer (NEFT/IMPS)', detail: 'Instant transfer accepted', color: '#EFF6FF' },
  { icon: '📱', name: 'UPI / PhonePe / GPay', detail: 'Scan QR code to pay', color: '#F0FDF4' },
  { icon: '💳', name: 'Debit / Credit Card', detail: 'All major cards accepted', color: '#FFF7ED' },
  { icon: '💵', name: 'Cash Payment', detail: 'Pay driver on arrival', color: '#FDF4FF' },
];

export default function Payment() {
  return (
    <>
      <SEO
        title="Payment | City Cab Bhubaneswar"
        description="Pay for your City Cab taxi and tour bookings via UPI, bank transfer, cards or cash. Secure and convenient payment options."
        canonical="https://www.citycab.in/payment"
        schema={schema}
        noindex={false}
      />

      <section style={{ background: 'linear-gradient(135deg,#0A192F 0%,#1a3a5c 100%)', padding: '140px 0 80px' }}>
        <div className="container">
          <nav aria-label="Breadcrumb" style={{ marginBottom: 16 }}>
            <ol style={{ display: 'flex', gap: 8, color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', listStyle: 'none' }}>
              <li><a href="/" style={{ color: 'var(--gold)' }}>Home</a></li><li>/</li><li>Payment</li>
            </ol>
          </nav>
          <span className="section-label">💳 Secure Payment</span>
          <h1 style={{ color: '#fff', marginTop: 12 }}>Payment <span style={{ color: 'var(--gold)' }}>Options</span></h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: 16, fontSize: '1.05rem', maxWidth: 480 }}>
            We offer multiple convenient and secure payment methods for your booking.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container" style={{ maxWidth: 900 }}>
          <div className="text-center mb-48">
            <span className="section-label">Payment Methods</span>
            <h2 className="section-title">How to Pay</h2>
            <div className="divider divider-center" />
          </div>

          <div className="grid-2">
            {paymentMethods.map(p => (
              <div key={p.name} style={{ background: p.color, borderRadius: 'var(--radius)', padding: '28px 24px', border: '1px solid rgba(0,0,0,0.06)', display: 'flex', alignItems: 'center', gap: 20 }}>
                <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <h3 style={{ fontSize: '1.05rem', marginBottom: 4 }}>{p.name}</h3>
                  <p style={{ color: 'var(--gray)', fontSize: '0.88rem' }}>{p.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* UPI Details */}
          <div style={{ marginTop: 48, background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '36px', textAlign: 'center', color: '#fff' }}>
            <h3 style={{ color: 'var(--gold)', marginBottom: 8, fontFamily: 'var(--font-heading)', fontSize: '1.4rem' }}>Pay via UPI</h3>
            <div style={{ width: 140, height: 140, background: '#fff', borderRadius: 12, margin: '20px auto', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', color: 'var(--gray)' }}>
              QR Code<br />Available on<br />Request
            </div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)', marginBottom: 6 }}>UPI ID: citycab@upi</div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem' }}>Send payment and share screenshot on WhatsApp for confirmation</p>
          </div>

          {/* Bank Details */}
          <div style={{ marginTop: 32, background: 'var(--light-gray)', borderRadius: 'var(--radius)', padding: '28px 32px' }}>
            <h3 style={{ color: 'var(--navy)', marginBottom: 16 }}>Bank Transfer Details</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              {[
                ['Account Name', 'City Cab'],
                ['Account No.', 'XXXX XXXX XXXX'],
                ['IFSC Code', 'SBIN0000XXX'],
                ['Bank', 'State Bank of India'],
              ].map(([l, v]) => (
                <div key={l} style={{ background: '#fff', padding: '14px 18px', borderRadius: 8, border: '1px solid #E5E7EB' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--gray)', marginBottom: 2 }}>{l}</div>
                  <div style={{ fontWeight: 600, color: 'var(--navy)' }}>{v}</div>
                </div>
              ))}
            </div>
            <p style={{ color: 'var(--gray)', fontSize: '0.82rem', marginTop: 14 }}>* After transfer, please share the UTR number via WhatsApp +91 9090913111 for confirmation.</p>
          </div>

          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <p style={{ color: 'var(--gray)', marginBottom: 20 }}>Questions about payment? We're happy to help!</p>
            <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="tel:+919090913111" className="btn btn-navy">📞 Call Us</a>
              <a href="https://wa.me/919090913111" className="btn btn-primary" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
