import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Building2, Factory, Store, Utensils, Briefcase, ShoppingBag, Warehouse, Truck, Presentation } from 'lucide-react';

function ServicesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const services = [
    {
      title: "Pulido de Concreto",
      image: "https://images.unsplash.com/photo-1606909225043-9420b2874334?q=80&w=1000&auto=format&fit=crop",
      desc: "Transformamos pisos de concreto opacos y polvorientos en superficies brillantes, densas y de fácil mantenimiento. Ideal para almacenes y showrooms.",
      includes: ["Desbaste inicial", "Densificación química", "Pulido progresivo con diamantes", "Sellado protector"],
      link: "/pulido-de-concreto-en-nogales"
    },
    {
      title: "Pisos Epóxicos",
      image: "https://images.unsplash.com/photo-1611154385633-1e8cce974e43?q=80&w=1000&auto=format&fit=crop",
      desc: "Recubrimientos de alto rendimiento que ofrecen resistencia química, mecánica y un acabado higiénico sin juntas. Perfecto para la industria alimentaria y manufacturera.",
      includes: ["Preparación mecánica", "Imprimación epóxica", "Capa base autonivelante", "Acabado final (brillante/mate/antiderrapante)"],
      link: "/pisos-epoxicos-en-nogales"
    },
    {
      title: "Restauración de Pisos Industriales",
      image: "https://images.unsplash.com/photo-1686825076471-d1967dd836af?q=80&w=1000&auto=format&fit=crop",
      desc: "Recuperamos la funcionalidad y seguridad de pisos dañados por el uso intensivo, evitando el alto costo de un reemplazo total.",
      includes: ["Evaluación estructural", "Reparación de baches y desniveles", "Reconstrucción de juntas", "Nivelación de superficie"],
      link: "/restauracion-de-pisos-industriales"
    },
    {
      title: "Mantenimiento de Pisos",
      image: "https://images.unsplash.com/photo-1699412025743-7fcf93cc0b57?q=80&w=1000&auto=format&fit=crop",
      desc: "Programas preventivos y correctivos para extender la vida útil de tu inversión y mantener la estética de tus instalaciones.",
      includes: ["Limpieza profunda industrial", "Reaplicación de selladores", "Pulido de mantenimiento", "Reparaciones menores"],
      link: "/mantenimiento-de-pisos-de-concreto"
    },
    {
      title: "Preparación y Desbaste",
      image: "https://images.unsplash.com/photo-1509403619344-01b9e129e637?q=80&w=1000&auto=format&fit=crop",
      desc: "El paso fundamental para cualquier recubrimiento exitoso. Removemos adhesivos, pinturas viejas y preparamos el poro del concreto.",
      includes: ["Escarificado mecánico", "Granallado (Shotblasting)", "Desbaste con diamantes metálicos", "Aspiración HEPA"],
      link: "/contacto"
    },
    {
      title: "Reparación de Grietas",
      image: "https://images.unsplash.com/photo-1641714962108-50556e55336c?q=80&w=1000&auto=format&fit=crop",
      desc: "Tratamiento especializado de fisuras y grietas estructurales para evitar su propagación y proteger la integridad de la losa.",
      includes: ["Apertura en 'V'", "Limpieza de la grieta", "Inyección de resinas epóxicas/poliuretano", "Nivelación a ras de piso"],
      link: "/contacto"
    },
    {
      title: "Aplicación de Densificadores",
      image: "https://images.unsplash.com/photo-1583737177870-d5155284cf56?q=80&w=1000&auto=format&fit=crop",
      desc: "Tratamientos químicos que penetran el concreto, reaccionan con la cal libre y crean una superficie más dura y resistente a la abrasión.",
      includes: ["Lavado de superficie", "Aplicación de silicato de litio/sodio", "Trabajo mecánico para penetración", "Limpieza de excedentes"],
      link: "/contacto"
    },
    {
      title: "Protección y Sellado",
      image: "https://images.unsplash.com/photo-1604063165585-e17e9c3c3f0b?q=80&w=1000&auto=format&fit=crop",
      desc: "Barreras protectoras contra agua, aceites y químicos que facilitan la limpieza diaria y previenen manchas permanentes.",
      includes: ["Selladores acrílicos", "Selladores penetrantes silano/siloxano", "Protectores antimanchas", "Acabados mate o brillantes"],
      link: "/contacto"
    },
    {
      title: "Tratamiento de Mármol",
      image: "https://images.unsplash.com/photo-1533474397145-cb8c383139c0?q=80&w=1000&auto=format&fit=crop",
      desc: "Restauración, pulido y cristalizado de pisos de mármol y terrazo para devolverles su brillo natural y elegancia original.",
      includes: ["Desbastado para eliminar rayones", "Pulido con resinas diamantadas", "Cristalizado termoquímico", "Sellado protector"],
      link: "/contacto"
    }
  ];

  const spaces = [
    { icon: Warehouse, name: "Almacenes" },
    { icon: Truck, name: "Centros Logísticos" },
    { icon: Factory, name: "Naves Industriales" },
    { icon: Building2, name: "Plantas de Producción" },
    { icon: Store, name: "Locales Comerciales" },
    { icon: Utensils, name: "Restaurantes" },
    { icon: Briefcase, name: "Oficinas" },
    { icon: Presentation, name: "Showrooms" },
    { icon: ShoppingBag, name: "Centros Comerciales" }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios de Pisos de Concreto en Nogales | Torre Fuerte</title>
        <meta name="description" content="Pulido de concreto, pisos epóxicos, restauración y mantenimiento de pisos comerciales e industriales en Nogales, Sonora. Torre Fuerte — 15 años de experiencia." />
        <link rel="canonical" href="https://torrefuerteing.com/servicios" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center py-20">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1642469409191-90b182a80427?q=80&w=1920&auto=format&fit=crop" 
              alt="Piso de concreto pulido industrial"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          
          <div className="container-custom relative z-10 text-center text-white">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-sm mb-6">
                NUESTROS SERVICIOS
              </span>
              <h1 className="mb-6 text-white">Soluciones Integrales de Pisos de Concreto en Nogales</h1>
              <p className="text-xl text-white/80 mb-8">
                Desde la preparación inicial hasta el acabado final, ofrecemos sistemas completos para proteger y embellecer tus superficies.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-white/60 font-medium">
                <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
                <span>&gt;</span>
                <span className="text-white">Servicios</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
              <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-medium">
                En Torre Fuerte Ingeniería de Pisos, entendemos que el piso es la base de tu operación. Un piso en mal estado genera polvo, daña equipos y proyecta una mala imagen. Nuestros servicios están diseñados para resolver estos problemas de raíz, entregando superficies duraderas, seguras y estéticamente superiores para la industria y el comercio en Nogales, Sonora.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SERVICES BLOCKS */}
        <section className="py-0">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`py-20 lg:py-24 ${isEven ? 'bg-background' : 'bg-white'}`}>
                <div className="container-custom">
                  <div className={`flex flex-col lg:flex-row gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Image Side */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="w-full lg:w-1/2"
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                        <img 
                          src={service.image} 
                          alt={`Servicio de ${service.title} en Nogales Sonora`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
                      </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="w-full lg:w-1/2"
                    >
                      <h2 className="mb-6 text-3xl md:text-4xl">{service.title}</h2>
                      <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                        {service.desc}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className="text-lg font-bold mb-4 text-foreground">¿Qué incluye este servicio?</h4>
                        <ul className="space-y-3">
                          {service.includes.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-foreground/80">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                        <Link to={service.link}>Conocer más detalles <ArrowRight className="w-4 h-4 ml-2" /></Link>
                      </Button>
                    </motion.div>

                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* SPACES SECTION */}
        <section className="section-padding bg-[#2A2A2A] text-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6 text-white">Tipos de Espacios en los que Trabajamos en Nogales</h2>
              <p className="text-lg text-white/70">
                Adaptamos nuestros sistemas de pisos a las exigencias específicas de cada industria y sector comercial.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center">
              {spaces.map((space, idx) => (
                <motion.div 
                  key={idx} 
                  {...fadeInUp} 
                  transition={{ delay: idx * 0.05 }}
                  className={`flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors ${idx === 8 ? 'lg:col-start-3' : ''}`}
                >
                  <space.icon className="w-10 h-10 text-primary mb-4" />
                  <span className="font-medium text-sm md:text-base">{space.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="mb-4 text-white">¿No estás seguro de qué servicio necesitas?</h2>
              <p className="text-xl text-white/90 mb-10">
                Contáctanos para una evaluación gratuita. Analizaremos tu piso y te recomendaremos la mejor solución.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold text-base h-14 px-8">
                <a href="https://wa.me/526312994645" target="_blank" rel="noopener noreferrer">
                  Hablar con un Especialista <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default ServicesPage;