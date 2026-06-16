import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, ArrowLeft, ArrowRight, Warehouse, Truck, Factory, Settings, PackageOpen, Plane } from 'lucide-react';

function IndustrialPolishedConcretePage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const advantages = [
    "Resistencia extrema al tráfico pesado y paso constante de montacargas",
    "Eliminación total del desprendimiento de polvo del concreto",
    "Reducción drástica en costos de iluminación por su alta reflectividad",
    "Superficie plana y sin juntas que reduce el desgaste de llantas de equipos",
    "Mantenimiento económico: solo requiere limpieza con agua y limpiador neutro"
  ];

  const applications = [
    { icon: Warehouse, name: "Almacenes y bodegas" },
    { icon: Truck, name: "Centros de distribución logística" },
    { icon: Factory, name: "Naves y plantas industriales" },
    { icon: Settings, name: "Áreas de manufactura" },
    { icon: PackageOpen, name: "Zonas de carga y descarga" },
    { icon: Plane, name: "Hangares y talleres" }
  ];

  const processSteps = [
    { num: "1", title: "Evaluación", desc: "Análisis de la dureza del concreto y requerimientos operativos." },
    { num: "2", title: "Preparación", desc: "Reparación de grietas, juntas y desniveles en la losa." },
    { num: "3", title: "Desbaste", desc: "Apertura del poro con diamantes metálicos para nivelar." },
    { num: "4", title: "Pulido Progresivo", desc: "Uso de resinas diamantadas para cerrar el poro y generar brillo." },
    { num: "5", title: "Densificación", desc: "Aplicación de silicato de litio para endurecer la superficie." },
    { num: "6", title: "Sellado", desc: "Aplicación de protector antimanchas de grado industrial." },
    { num: "7", title: "Entrega Garantizada", desc: "Inspección final y entrega del área lista para operar." }
  ];

  const benefits = [
    "Aumenta la dureza superficial del concreto hasta en un 40%",
    "Resiste marcas de llantas de montacargas y patines",
    "No se descascara ni se pela como las pinturas o recubrimientos de baja calidad",
    "Cumple con normativas de seguridad industrial (superficie antideslizante)",
    "Proceso ecológico: no utiliza solventes ni emite compuestos orgánicos volátiles (VOCs)",
    "Larga vida útil que supera los 15 años con mantenimiento básico",
    "Mejora el entorno laboral al crear espacios más limpios y luminosos"
  ];

  return (
    <>
      <Helmet>
        <title>Concreto Pulido Industrial en Nogales | Torre Fuerte</title>
        <meta name="description" content="Sistema de concreto pulido industrial para almacenes, bodegas y plantas en Nogales, Sonora. Alta resistencia y acabado profesional. Llama: 631 299 4645." />
        <link rel="canonical" href="https://torrefuerteing.com/concreto-pulido-industrial" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="relative min-h-[60vh] flex items-center py-20 bg-[#3D3D3D]">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1681043993766-9c530b095c99?q=80&w=1920&auto=format&fit=crop" 
              alt="Almacén industrial con piso de concreto pulido brillante y equipamiento"
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
                <span className="text-white">Concreto Pulido Industrial</span>
              </div>
              
              <h1 className="mb-6 text-white">Concreto Pulido Industrial en Nogales — Máximo Desempeño para tu Planta o Almacén</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Sistemas de pulido de alto rendimiento diseñados para soportar las exigencias operativas más extremas en la industria de Heroica Nogales, Sonora.
              </p>
              
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8">
                <Link to="/contacto">Solicitar Cotización Industrial</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
                El concreto pulido industrial es la opción preferida por las grandes corporaciones logísticas y manufactureras. A diferencia de los recubrimientos tradicionales que pueden desprenderse con el tráfico pesado, nuestro sistema transforma la propia losa de concreto en una superficie densa, brillante y extremadamente resistente. En Torre Fuerte, aplicamos tecnología de punta para entregar pisos industriales en Nogales que optimizan tu operación diaria.
              </p>
            </motion.div>
          </div>
        </section>

        {/* WHY INDUSTRIAL POLISHED CONCRETE SECTION */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="mb-6">Ventajas del Concreto Pulido Industrial en Nogales</h2>
            </motion.div>

            <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-6">
              {advantages.map((adv, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6 flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90 font-medium text-lg">{adv}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INDUSTRIAL APPLICATIONS SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Aplicaciones Industriales del Concreto Pulido</h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {applications.map((app, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full border border-border shadow-sm hover:border-primary/50 transition-colors bg-white">
                    <CardContent className="p-8 flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                        <app.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="font-semibold text-lg">{app.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="section-padding bg-[#3D3D3D] text-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-white">Proceso de Concreto Pulido Industrial</h2>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {processSteps.map((step, idx) => (
                  <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }} className="relative">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full hover:bg-white/10 transition-colors">
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                        {step.num}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="section-padding bg-[#F5F5F5]">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Beneficios del Concreto Pulido Industrial</h2>
            </motion.div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-x-12 gap-y-6">
              {benefits.map((benefit, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.05 }} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/90 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-white">¿Buscas el piso más resistente para tu industria en Nogales?</h2>
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold text-base h-14 px-8">
                <Link to="/contacto">Solicitar Cotización Industrial</Link>
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

export default IndustrialPolishedConcretePage;