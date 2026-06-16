import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Warehouse, Store, Factory, Utensils, ArrowLeft, ArrowRight, PackageOpen } from 'lucide-react';

function IndustrialRestorationPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const signs = [
    "Grietas y fisuras visibles en el concreto",
    "Superficie desgastada o con polvo constante",
    "Juntas deterioradas o levantadas",
    "Manchas permanentes difíciles de limpiar",
    "Piso con bajo nivel de resistencia o reflectividad",
    "Desigualdades o hundimientos en la superficie"
  ];

  const processSteps = [
    { num: "1", title: "Diagnóstico", desc: "Evaluación completa del estado del piso" },
    { num: "2", title: "Preparación", desc: "Limpieza y desbaste de la superficie" },
    { num: "3", title: "Reparación", desc: "Sellado de grietas y reparación estructural" },
    { num: "4", title: "Acabado", desc: "Pulido o nivelación según necesidad" },
    { num: "5", title: "Sellado", desc: "Aplicación de sellador protector" },
    { num: "6", title: "Garantía", desc: "Garantía en el trabajo realizado" }
  ];

  const spaces = [
    { icon: Warehouse, name: "Almacenes" },
    { icon: PackageOpen, name: "Bodegas" },
    { icon: Factory, name: "Naves industriales" },
    { icon: Store, name: "Locales comerciales" },
    { icon: Utensils, name: "Restaurantes" },
    { icon: Factory, name: "Plantas de producción" }
  ];

  const benefits = [
    "Más económico que reemplazar el piso completo",
    "Recupera resistencia y funcionalidad del piso",
    "Mejora la presentación del espacio",
    "Proceso rápido — mínima interrupción de operaciones",
    "Garantía en el trabajo realizado"
  ];

  return (
    <>
      <Helmet>
        <title>Restauración de Pisos Industriales | Torre Fuerte Nogales</title>
        <meta name="description" content="Restauración profesional de pisos industriales y comerciales en Nogales, Sonora. Reparación de grietas, desgaste y daño estructural. Cotización gratuita: 631 299 4645." />
        <link rel="canonical" href="https://torrefuerteing.com/restauracion-de-pisos-industriales" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center py-20 bg-[#3D3D3D]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1641714962108-50556e55336c?q=80&w=1920&auto=format&fit=crop" 
              alt="Restauración de pisos industriales en Nogales Sonora"
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
                <span className="text-white">Restauración</span>
              </div>
              
              <h1 className="mb-6 text-white">Restauración de Pisos Industriales en Nogales — Devolvemos la Vida a tu Piso</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Reparación y restauración profesional de pisos de concreto industriales y comerciales deteriorados. Diagnóstico gratuito en Heroica Nogales, Sonora.
              </p>
              
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8">
                <Link to="/contacto">Solicitar Diagnóstico Gratuito</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
                La restauración de pisos industriales en Nogales es la solución más económica y eficiente para recuperar un piso deteriorado sin necesidad de reemplazarlo. En Torre Fuerte diagnosticamos el daño, aplicamos las reparaciones necesarias y dejamos el piso de concreto en condiciones óptimas de resistencia, presentación y funcionalidad.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHEN YOU NEED RESTORATION SECTION */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="mb-6">Señales de que tu Piso Necesita Restauración</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {signs.map((sign, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90 font-medium text-lg">{sign}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* RESTORATION PROCESS SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Nuestro Proceso de Restauración de Pisos</h2>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {processSteps.map((step, idx) => (
                  <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="relative">
                    <Card className="h-full border border-border shadow-sm hover:border-primary/50 transition-colors">
                      <CardContent className="p-8">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6">
                          {step.num}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SPACES WE RESTORE SECTION */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Espacios Industriales y Comerciales que Restauramos</h2>
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

        {/* BENEFITS SECTION */}
        <section className="section-padding bg-[#3D3D3D] text-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-white">Beneficios de la Restauración de Pisos</h2>
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
              <h2 className="mb-8 text-white">¿Tu piso industrial necesita restauración en Nogales?</h2>
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold text-base h-14 px-8">
                <Link to="/contacto">Solicitar Diagnóstico Gratuito</Link>
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

export default IndustrialRestorationPage;