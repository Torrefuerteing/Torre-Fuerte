import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

function EpoxyFloorsNogalesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const includedItems = [
    "Preparación mecánica de la superficie de concreto",
    "Reparación de grietas y defectos previos",
    "Aplicación de imprimante epóxico de penetración",
    "Capa de recubrimiento epóxico de alta resistencia",
    "Sellador de acabado protector",
    "Garantía en materiales y proceso"
  ];

  const epoxyTypes = [
    { title: "Industrial", desc: "Máxima resistencia para almacenes, plantas y naves con tráfico pesado y montacargas." },
    { title: "Comercial", desc: "Acabado limpio y profesional para locales, restaurantes y negocios de atención al público." },
    { title: "Antiderrapante", desc: "Seguridad adicional para zonas húmedas, cocinas y áreas de carga." },
    { title: "Decorativo", desc: "Colores y acabados personalizados para showrooms y espacios de representación." }
  ];

  const benefits = [
    "Alta resistencia a tráfico pesado y montacargas",
    "Resistencia química — ácidos, aceites y solventes",
    "Superficie impermeable y fácil de limpiar",
    "Alta durabilidad con mínimo mantenimiento",
    "Acabado higiénico — ideal para cocinas y áreas de proceso",
    "Disponible en múltiples colores y acabados",
    "Protección total de la losa de concreto"
  ];

  return (
    <>
      <Helmet>
        <title>Pisos Epóxicos en Nogales | Torre Fuerte</title>
        <meta name="description" content="Instalación y aplicación de pisos epóxicos en Nogales, Sonora. Recubrimientos industriales y comerciales de alta resistencia. Cotización gratuita: 631 299 4645." />
        <link rel="canonical" href="https://torrefuerteing.com/pisos-epoxicos-en-nogales" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center py-20 bg-[#3D3D3D]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1597057435443-8a51eeb5538f?q=80&w=1920&auto=format&fit=crop" 
              alt="Pisos epóxicos en Nogales Sonora"
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
                <span className="text-white">Pisos Epóxicos</span>
              </div>
              
              <h1 className="mb-6 text-white">Pisos Epóxicos en Nogales — Alta Resistencia para tu Negocio</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Sistemas de recubrimiento epóxico industrial y comercial para pisos de alto desempeño en Heroica Nogales, Sonora. Resistencia a tráfico, químicos y humedad.
              </p>
              
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8">
                <Link to="/contacto">Solicitar Cotización de Piso Epóxico</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
                Los pisos epóxicos en Nogales son la solución ideal para negocios e industrias que necesitan un piso resistente, higiénico y de fácil mantenimiento. En Torre Fuerte aplicamos sistemas de recubrimiento epóxico industrial y comercial diseñados para soportar las condiciones más exigentes en almacenes, plantas, cocinas, talleres y espacios comerciales de Heroica Nogales, Sonora.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHAT'S INCLUDED SECTION */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="mb-6">¿Qué Incluye la Aplicación de Piso Epóxico?</h2>
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

        {/* EPOXY TYPES SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Tipos de Pisos Epóxicos para tu Negocio en Nogales</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {epoxyTypes.map((type, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full border-t-4 border-t-primary hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-bold mb-4">{type.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{type.desc}</p>
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
              <h2 className="mb-6 text-white">Beneficios de los Pisos Epóxicos en Nogales</h2>
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

        {/* CTA BAND */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-white">¿Tu negocio necesita un piso epóxico resistente en Nogales?</h2>
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

export default EpoxyFloorsNogalesPage;