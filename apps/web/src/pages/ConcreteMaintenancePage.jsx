import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowLeft, ArrowRight, Droplets, Shield, Zap, Search } from 'lucide-react';

function ConcreteMaintenancePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const services = [
    {
      icon: Droplets,
      title: "Lavado Profundo Industrial",
      desc: "Remoción de manchas de aceite, marcas de llantas y suciedad incrustada utilizando equipos de restregado industrial y químicos especializados."
    },
    {
      icon: Shield,
      title: "Reaplicación de Selladores",
      desc: "Renovación de la capa protectora para mantener la impermeabilidad del concreto y protegerlo contra derrames accidentales."
    },
    {
      icon: Zap,
      title: "Densificación de Concreto",
      desc: "Tratamiento químico que penetra el poro del concreto para endurecer la superficie y evitar la generación de polvo."
    },
    {
      icon: Search,
      title: "Inspección y Diagnóstico",
      desc: "Evaluación técnica periódica para detectar microfisuras o desgaste prematuro antes de que se conviertan en problemas costosos."
    }
  ];

  const programItems = [
    "Evaluación inicial del estado actual del piso de concreto",
    "Diseño de un calendario de mantenimiento adaptado a tu operación",
    "Limpieza profunda programada (mensual, trimestral o semestral)",
    "Restauración de brillo en zonas de alto tráfico",
    "Reporte detallado de condiciones y recomendaciones preventivas"
  ];

  const benefits = [
    "Extiende significativamente la vida útil de tu inversión en pisos",
    "Mantiene una imagen impecable y profesional de tus instalaciones",
    "Previene reparaciones costosas y paros operativos no planificados",
    "Mejora la seguridad al mantener las propiedades antideslizantes",
    "Garantiza un ambiente libre de polvo para proteger mercancía y equipos"
  ];

  return (
    <>
      <Helmet>
        <title>Mantenimiento de Pisos de Concreto en Nogales | Torre Fuerte</title>
        <meta name="description" content="Programa de mantenimiento especializado para pisos de concreto en Nogales, Sonora. Lavado profundo, sellado y densificación. Cotización: 631 299 4645." />
        <link rel="canonical" href="https://torrefuerteing.com/mantenimiento-de-pisos-de-concreto" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center py-20 bg-[#3D3D3D]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1606909225043-9420b2874334?q=80&w=1920&auto=format&fit=crop" 
              alt="Piso de concreto limpio y pulido en almacén industrial"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
          </div>
          
          <div className="container-custom relative z-10 text-white">
            <motion.div {...fadeInUp} className="max-w-3xl">
              <div className="flex items-center gap-2 text-sm text-white/70 font-medium mb-6 flex-wrap">
                <Link to="/inicio" className="hover:text-primary transition-colors">Inicio</Link>
                <span>&gt;</span>
                <Link to="/servicios" className="hover:text-primary transition-colors">Servicios</Link>
                <span>&gt;</span>
                <span className="text-white">Mantenimiento</span>
              </div>
              
              <h1 className="mb-6 text-white">Mantenimiento de Pisos de Concreto en Nogales — Prolonga la Vida de tu Piso</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Programas preventivos y correctivos para proteger tu inversión. Mantén tus superficies industriales y comerciales impecables, seguras y funcionales.
              </p>
              
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8">
                <Link to="/contacto">Solicitar Programa de Mantenimiento</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
                El mantenimiento de pisos de concreto es fundamental para preservar la resistencia y estética de tus instalaciones. Un piso descuidado no solo daña la imagen de tu empresa, sino que genera polvo que afecta maquinaria, inventario y la salud del personal. En Torre Fuerte ofrecemos soluciones de mantenimiento especializado en Nogales, Sonora, diseñadas para mantener tus pisos en condiciones óptimas año tras año.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Servicios de Mantenimiento Especializado para Pisos de Concreto</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                    <CardContent className="p-8 flex flex-col gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MAINTENANCE PROGRAM SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
              <motion.div {...fadeInUp} className="w-full lg:w-1/2">
                <h2 className="mb-8">Nuestro Programa de Mantenimiento Integral</h2>
                <div className="space-y-4">
                  {programItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-lg bg-secondary/5 border border-border">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/3]">
                  <img 
                    src="https://images.unsplash.com/photo-1699412025743-7fcf93cc0b57?q=80&w=1000&auto=format&fit=crop" 
                    alt="Máquina restregadora realizando mantenimiento de piso de concreto"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="section-padding bg-[#3D3D3D] text-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-white">Beneficios del Mantenimiento Preventivo de Pisos</h2>
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
              <h2 className="mb-8 text-white">¿Necesitas un plan de mantenimiento para tus pisos en Nogales?</h2>
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold text-base h-14 px-8">
                <Link to="/contacto">Solicitar Programa Personalizado</Link>
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

export default ConcreteMaintenancePage;