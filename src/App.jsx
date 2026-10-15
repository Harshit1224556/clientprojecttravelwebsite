import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import TaxiServiceBhubaneswar from './pages/TaxiServiceBhubaneswar';
import TaxiServicePuri from './pages/TaxiServicePuri';
import TempoTraveller from './pages/TempoTraveller';
import Urbania from './pages/Urbania';
import BusHire from './pages/BusHire';
import TourPackages from './pages/TourPackages';
import Contact from './pages/Contact';
import Payment from './pages/Payment';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/taxi-service-bhubaneswar" element={<TaxiServiceBhubaneswar />} />
              <Route path="/taxi-service-puri" element={<TaxiServicePuri />} />
              <Route path="/tempo-traveller-bhubaneswar" element={<TempoTraveller />} />
              <Route path="/urbania-bhubaneswar" element={<Urbania />} />
              <Route path="/bus-hire-bhubaneswar" element={<BusHire />} />
              <Route path="/odisha-tour-packages" element={<TourPackages />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </main>
          <WhatsAppButton />
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
