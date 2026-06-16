import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Warehouse, Utensils, Store, Briefcase, Factory, Presentation, ArrowLeft, ArrowRight } from 'lucide-react';

function PolishedConcreteNogalesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const includedItems = [
    "Diagnóstico y evaluación del estado del piso",
    "Desbaste y preparación mecánica de la superficie",
    "Pulido progresivo con abrasivos de diamante",
    "Densificación química para mayor resistencia",
    "Sellado y acabado final en el nivel deseado",
    "Garantía en el trabajo realizado"
  ];

  const finishLevels = [
    { title: "Mate", desc: "Natural, antideslizante. Ideal para zonas industriales de alto tráfico. Mínimo mantenimiento." },
    { title: "Satinado", desc: "Semibrillante. Fácil de limpiar. Ideal para locales comerciales y restaurantes en Nogales." },
    { title: "Brillante", desc: "Alta reflectividad. Apariencia premium para showrooms, oficinas y comercios." },
    { title: "Espejo", desc: "Máximo brillo y reflejo. El acabado de concreto pulido más exclusivo." }
  ];

  const benefits = [
    "Mayor resistencia y durabilidad sin capas adicionales",
    "Superficie antideslizante y segura",
    "Fácil limpieza y bajo costo de mantenimiento",
    "Alta reflectividad que mejora la iluminación del espacio",
    "Solución sustentable — aprovecha el piso existente",
    "Ideal para tráfico pesado y montacargas",
    "Larga vida útil sin necesidad de reemplazo"
  ];

  const spaces = [
    { icon: Warehouse, name: "Almacenes y bodegas" },
    { icon: Utensils, name: "Restaurantes" },
    { icon: Store, name: "Locales comerciales" },
    { icon: Briefcase, name: "Oficinas" },
    { icon: Factory, name: "Naves industriales" },
    { icon: Presentation, name: "Showrooms" }
  ];

  return (
    <>
      <Helmet>
        <title>Pulido de Concreto en Nogales | Torre Fuerte</title>
        <meta name="description" content="Servicio profesional de pulido de concreto en Nogales, Sonora. Sistema mecánico diamantado con acabados Mate, Satinado, Brillante o Espejo. Cotización gratuita: 631 299 4645." />
        <link rel="canonical" href="https://torrefuerteing.com/pulido-de-concreto-en-nogales" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center py-20 bg-[#3D3D3D]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1606909225043-9420b2874334?q=80&w=1920&auto=format&fit=crop" 
              alt="Pulido de concreto en Nogales Sonora"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
          </div>
          
          <div className="container-custom relative z-10 text-white">
            <motion.div {...fadeInUp} className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm text-white/70 font-medium mb-6">
                <Link to="/inicio" className="hover:text-primary transition-colors">Inicio</Link>
                <span>&gt;</span>
                <Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
                <span>&gt;</span>
                <span className="text-white">Pulido de Concreto</span>
              </div>
              
              <h1 className="mb-6 text-white">Pulido de Concreto en Nogales — Resultados que Duran</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Sistema mecánico diamantado para pisos de concreto de alto desempeño. Acabados profesionales para negocios e industrias en Heroica Nogales, Sonora.
              </p>
              
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8">
                <Link to="/contacto">Solicitar Cotización de Pulido</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
                El pulido de concreto en Nogales es una de las soluciones más eficientes y duraderas para pisos comerciales e industriales. En Torre Fuerte aplicamos un sistema mecánico diamantado progresivo que transforma el concreto crudo en una superficie de alto desempeño, resistente, estética y de mínimo mantenimiento. Trabajamos con negocios, almacenes, restaurantes, oficinas y todo tipo de espacio en Heroica Nogales, Sonora que necesite un piso de concreto pulido de calidad profesional.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHAT'S INCLUDED SECTION */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="mb-6">¿Qué Incluye Nuestro Servicio de Pulido de Concreto?</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {includedItems.map((item, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90 font-medium text-lg">{item}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FINISH LEVELS SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Elige Tu Nivel de Acabado de Concreto Pulido</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {finishLevels.map((level, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full border-t-4 border-t-primary hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-bold mb-4">{level.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{level.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="section-padding bg-[#3D3D3D] text-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-white">Beneficios del Concreto Pulido en Nogales</h2>
            </motion.div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.05 }} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-white/90 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* IDEAL SPACES SECTION */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">¿Para Qué Espacios es Ideal el Pulido de Concreto?</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {spaces.map((space, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <space.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="font-semibold text-lg">{space.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-white">¿Listo para pulir el piso de tu negocio en Nogales?</h2>
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold text-base h-14 px-8">
                <Link to="/contacto">Solicitar Cotización Gratuita</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* BACK LINKS SECTION */}
        <section className="py-12 bg-white border-t border-border">
          <div className="container-custom">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
              <Link to="/servicios" className="flex items-center text-muted-foreground hover:text-primary font-medium transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Volver a Servicios
              </Link>
              <Link to="/contacto" className="flex items-center text-primary hover:text-primary/80 font-medium transition-colors">
                Contactar para Cotización <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default PolishedConcreteNogalesPage;