import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PolishedConcreteNogalesPage from '@/pages/PolishedConcreteNogalesPage.jsx';
import EpoxyFloorsNogalesPage from '@/pages/EpoxyFloorsNogalesPage.jsx';
import IndustrialRestorationPage from '@/pages/IndustrialRestorationPage.jsx';
import ConcreteMaintenancePage from '@/pages/ConcreteMaintenancePage.jsx';
import IndustrialPolishedConcretePage from '@/pages/IndustrialPolishedConcretePage.jsx';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage.jsx';
import TermsAndConditionsPage from '@/pages/TermsAndConditionsPage.jsx';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Torre Fuerte Ingeniería de Pisos",
    "description": "Especialistas en pisos de concreto comerciales e industriales en Nogales, Sonora.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Heroica Nogales",
      "addressRegion": "Sonora",
      "addressCountry": "MX"
    },
    "telephone": "+526312994645",
    "url": "https://torrefuerteing.com"
  };

  return (
    <Router>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />
        <Route path="/inicio" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        <Route path="/pulido-de-concreto-en-nogales" element={<PolishedConcreteNogalesPage />} />
        <Route path="/pisos-epoxicos-en-nogales" element={<EpoxyFloorsNogalesPage />} />
        <Route path="/restauracion-de-pisos-industriales" element={<IndustrialRestorationPage />} />
        <Route path="/mantenimiento-de-pisos-de-concreto" element={<ConcreteMaintenancePage />} />
        <Route path="/concreto-pulido-industrial" element={<IndustrialPolishedConcretePage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicyPage />} />
        <Route path="/terminos-y-condiciones" element={<TermsAndConditionsPage />} />
        <Route path="*" element={
          <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
              <p className="text-xl text-muted-foreground mb-8">Página no encontrada</p>
              <a href="/inicio" className="text-primary hover:underline font-medium">Volver al inicio</a>
            </div>
          </div>
        } />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;