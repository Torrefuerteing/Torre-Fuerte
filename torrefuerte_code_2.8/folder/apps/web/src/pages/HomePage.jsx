import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Star, ArrowRight, Wrench, Wind, Gem, Target } from 'lucide-react';
function HomePage() {
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once: true,
      margin: "-100px"
    },
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  };
  const staggerContainer = {
    initial: {
      opacity: 0
    },
    whileInView: {
      opacity: 1
    },
    viewport: {
      once: true,
      margin: "-100px"
    },
    transition: {
      staggerChildren: 0.15
    }
  };
  return <>
      <Helmet>
        <title>Pisos de Concreto en Nogales | Torre Fuerte</title>
        <meta name="description" content="Especialistas en pisos de concreto comerciales e industriales en Nogales, Sonora. Pulido, restauración, recubrimiento epóxico y mantenimiento. 15+ años de experiencia. Cotización gratuita: 631 299 4645." />
        <link rel="canonical" href="https://torrefuerteing.com/inicio" />
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Torre Fuerte Ingeniería de Pisos",
          "description": "Especialistas en pisos de concreto comerciales e industriales",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Heroica Nogales",
            "addressRegion": "Sonora",
            "addressCountry": "MX"
          },
          "telephone": "+526312994645",
          "areaServed": "Heroica Nogales",
          "url": "https://torrefuerteing.com"
        })}
        </script>
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* SECTION 1 - HERO */}
        <section className="relative min-h-[90vh] flex flex-col lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-[60%] bg-secondary text-secondary-foreground flex flex-col justify-center px-6 py-16 lg:px-16 xl:px-24 relative z-10">
            <motion.div {...fadeInUp} className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-sm mb-6">
                NOGALES, SONORA · 15+ AÑOS DE EXPERIENCIA
              </span>
              <h1 className="mb-6 text-white">
                Especialistas en Pisos de Concreto Comerciales e Industriales en Nogales
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl">
                Transformamos superficies desgastadas en pisos de alto rendimiento. Soluciones duraderas que optimizan la operación de tu empresa.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base h-14 px-8">
                  <Link to="/contacto">Solicitar Cotización Gratis</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-base h-14 px-8">
                  <Link to="/servicios">Ver Nuestros Servicios</Link>
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 text-sm font-medium text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Garantía en cada trabajo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Cotización sin compromiso</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span>Facturación disponible</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-[40%] h-[50vh] lg:h-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/50 to-transparent z-10 hidden lg:block w-32" />
            <img src="https://horizons-cdn.hostinger.com/95bc8cf7-9531-4f48-bd9b-71e8bbe892bc/pexels-craftsman-concrete-floors-2159674718-36230768-CF1FQ.jpg" alt="piso de concreto pulido industrial en almacén Nogales Sonora" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* SECTION 2 - STATISTICS BAR */}
        <section className="bg-[#2A2A2A] py-12 border-y border-white/10">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <motion.div {...fadeInUp} className="py-4 md:py-0">
                <p className="text-2xl md:text-3xl font-bold text-primary font-['Barlow_Condensed'] tracking-wide">
                  15+ Años de Experiencia en Nogales
                </p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{
              delay: 0.1
            }} className="py-4 md:py-0">
                <p className="text-2xl md:text-3xl font-bold text-primary font-['Barlow_Condensed'] tracking-wide">
                  100+ Proyectos Completados
                </p>
              </motion.div>
              <motion.div {...fadeInUp} transition={{
              delay: 0.2
            }} className="py-4 md:py-0">
                <p className="text-2xl md:text-3xl font-bold text-primary font-['Barlow_Condensed'] tracking-wide">
                  Industrial & Comercial — Especialistas en Ambos Sectores
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3 - MAIN SERVICES */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge-orange">SOLUCIONES PARA PISOS DE CONCRETO</span>
              <h2 className="mb-6">Sistemas Integrales de Pisos Comerciales e Industriales</h2>
              <p className="text-lg text-muted-foreground">
                Ofrecemos un portafolio completo de servicios para mantener, restaurar y mejorar las superficies de concreto de tu empresa.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" className="grid md:grid-cols-2 gap-6 mb-12">
              {[{
              icon: "https://res.cloudinary.com/dd3vxqww7/image/upload/v1779162231/fix_icon_torefuerte_icon_jyq3k0.png",
              title: "Restauración de Pisos",
              link: "/restauracion-de-pisos-industriales",
              desc: "Reparación de grietas, baches y desniveles para devolver la seguridad y funcionalidad."
            }, {
              icon: "https://res.cloudinary.com/dd3vxqww7/image/upload/v1779159555/TORREFUERTRE_ICON_PULIDO_ujqhwp.png",
              title: "Pulido de Concreto",
              link: "/pulido-de-concreto-en-nogales",
              desc: "Acabados brillantes y duraderos que reducen el polvo y mejoran la iluminación."
            }, {
              icon: "https://res.cloudinary.com/dd3vxqww7/image/upload/v1779158948/torrefuerte_icon_empxy_aalsxv.png",
              title: "Pisos Epóxicos",
              link: "/pisos-epoxicos-en-nogales",
              desc: "Recubrimientos de alta resistencia química y mecánica para áreas exigentes."
            }, {
              icon: "https://res.cloudinary.com/dd3vxqww7/image/upload/v1779158004/Torrefuerte_pisos_mantenimiento_rty8sb.png",
              title: "Mantenimiento de Pisos",
              link: "/mantenimiento-de-pisos-de-concreto",
              desc: "Programas preventivos para extender la vida útil de tu inversión."
            }].map((service, idx) => <motion.div key={idx} variants={fadeInUp}>
                  <Link to={service.link} className="block h-full">
                    <Card className="h-full bg-secondary text-secondary-foreground border-transparent hover:border-primary transition-colors duration-300 group">
                      <CardContent className="p-8 flex flex-col h-full">
                        <div className="mb-6">
                          <img src={service.icon} alt={service.title} className="w-[100px] h-[100px] object-contain" />
                        </div>
                        <h3 className="text-2xl mb-3 text-white group-hover:text-primary transition-colors">{service.title}</h3>
                        <p className="text-white/70 mb-6 flex-grow">{service.desc}</p>
                        <div className="flex items-center text-primary font-medium mt-auto">
                          Saber más <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>)}
            </motion.div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/servicios">Ver Todos Nuestros Servicios <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 4 - WHO WE SERVE */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge-orange">¿A QUIÉN SERVIMOS?</span>
              <h2 className="mb-6">Pisos de Concreto para Espacios Industriales y Comerciales en Nogales</h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Industrial Panel */}
              <motion.div {...fadeInUp} className="relative rounded-2xl overflow-hidden group min-h-[500px] flex flex-col justify-end p-8 lg:p-12">
                <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1606909225043-9420b2874334?q=80&w=1000&auto=format&fit=crop" alt="almacén industrial con piso de concreto pulido en Nogales Sonora" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-white">
                  <h3 className="text-4xl mb-4 text-white">Pisos Industriales</h3>
                  <p className="text-lg text-white/90 mb-6">
                    Soluciones de alta resistencia diseñadas para soportar tráfico pesado, maquinaria y condiciones extremas.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Almacenes y bodegas', 'Centros logísticos', 'Plantas industriales', 'Áreas de carga'].map((item, i) => <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>)}
                  </ul>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                    <Link to="/contacto">Cotizar para mi almacén <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </motion.div>

              {/* Commercial Panel */}
              <motion.div {...fadeInUp} transition={{
              delay: 0.2
            }} className="relative rounded-2xl overflow-hidden group min-h-[500px] flex flex-col justify-end p-8 lg:p-12">
                <div className="absolute inset-0">
                  <img src="https://images.unsplash.com/photo-1686825076471-d1967dd836af?q=80&w=1000&auto=format&fit=crop" alt="local comercial con piso de concreto pulido en Nogales Sonora" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10 text-white">
                  <h3 className="text-4xl mb-4 text-white">Pisos Comerciales</h3>
                  <p className="text-lg text-white/90 mb-6">
                    Acabados estéticos, brillantes y fáciles de limpiar que mejoran la imagen de tu negocio ante los clientes.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {['Locales comerciales', 'Restaurantes', 'Oficinas', 'Espacios de atención'].map((item, i) => <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>)}
                  </ul>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                    <Link to="/contacto">Cotizar para mi negocio <ArrowRight className="w-4 h-4 ml-2" /></Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 5 - HOW WE WORK */}
        <section className="section-padding bg-[#2A2A2A] text-white overflow-hidden">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge-orange">NUESTRO PROCESO</span>
              <h2 className="mb-6 text-white">Así Trabajamos en Cada Proyecto de Pisos en Nogales</h2>
              <p className="text-lg text-white/70">
                Un método probado para garantizar resultados excepcionales sin interrumpir tus operaciones más de lo necesario.
              </p>
            </motion.div>

            <div className="relative max-w-5xl mx-auto mb-16">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-1 bg-primary/30 -z-0" />
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {[{
                num: "1",
                title: "Contacto",
                desc: "Nos cuentas sobre tu proyecto y necesidades."
              }, {
                num: "2",
                title: "Diagnóstico Gratuito",
                desc: "Visitamos tus instalaciones para evaluar el piso."
              }, {
                num: "3",
                title: "Cotización",
                desc: "Propuesta detallada con opciones y tiempos."
              }, {
                num: "4",
                title: "Ejecución Profesional",
                desc: "Trabajo rápido, limpio y con garantía."
              }].map((step, idx) => <motion.div key={idx} {...fadeInUp} transition={{
                delay: idx * 0.1
              }} className="flex flex-col items-center text-center relative">
                    {/* Connecting Line (Mobile) */}
                    {idx !== 3 && <div className="md:hidden absolute top-16 bottom-[-2rem] left-1/2 w-1 bg-primary/30 -translate-x-1/2 -z-0" />}
                    
                    <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-[0_0_0_8px_rgba(244,121,32,0.2)] relative z-10">
                      {step.num}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.desc}</p>
                  </motion.div>)}
              </div>
            </div>

            <div className="text-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/contacto">Iniciar Mi Proyecto <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* SECTION 6 - FINISH LEVELS */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge-orange">SISTEMA DE ACABADO</span>
              <h2 className="mb-6">Elige el Acabado Ideal para Tu Piso de Concreto</h2>
              <p className="text-lg text-muted-foreground">
                Adaptamos el nivel de pulido según el uso del espacio, desde bodegas industriales hasta showrooms de lujo.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[{
              icon: "https://res.cloudinary.com/dd3vxqww7/image/upload/v1779164041/Screenshot_2026-05-18_at_9.12.39_PM_vvvfx0.png",
              title: "Mate",
              desc: "Ideal para bodegas y áreas de almacenamiento. Fácil de limpiar, sin reflejos."
            }, {
              icon: "https://res.cloudinary.com/dd3vxqww7/image/upload/v1779164041/Screenshot_2026-05-18_at_9.12.47_PM_t43aoz.png",
              title: "Satinado",
              desc: "Brillo suave. Perfecto para pasillos industriales y áreas de producción."
            }, {
              icon: "https://res.cloudinary.com/dd3vxqww7/image/upload/v1779164041/Screenshot_2026-05-18_at_9.12.54_PM_ni15uk.png",
              title: "Brillante",
              desc: "Alta reflectividad. Excelente para locales comerciales y supermercados."
            }, {
              icon: "https://res.cloudinary.com/dd3vxqww7/image/upload/v1779164041/Screenshot_2026-05-18_at_9.13.01_PM_v8gshe.png",
              title: "Espejo",
              desc: "Máximo brillo y claridad. La opción premium para showrooms y lobbies."
            }].map((finish, idx) => <motion.div key={idx} {...fadeInUp} transition={{
              delay: idx * 0.1
            }}>
              <Card className="h-full border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center flex flex-col items-center">

                  <div className="mb-4">
                    <img
                      src={finish.icon}
                      alt={finish.title}
                      className="w-[70px] h-[70px] object-contain mx-auto"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{finish.title}</h3>

                  <p className="text-muted-foreground text-sm">
                    {finish.desc}
                  </p>

                </CardContent>
              </Card>
            </motion.div>)}
          </div>
        </div>
      </section>

        {/* SECTION 7 - TESTIMONIALS */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge-orange">LO QUE DICEN NUESTROS CLIENTES</span>
              <h2 className="mb-6">Resultados que Hablan por Sí Solos</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[{
              name: "Carlos Mendoza",
              role: "Gerente de Operaciones, Almacenes Nogales",
              text: "El pulido de concreto transformó nuestra bodega. Redujimos el polvo al mínimo y la iluminación mejoró drásticamente. Excelente trabajo del equipo de Torre Fuerte."
            }, {
              name: "María López",
              role: "Propietaria, Restaurante El Paso",
              text: "Necesitábamos un piso resistente pero estético para el restaurante. El acabado brillante que nos entregaron superó nuestras expectativas y es súper fácil de limpiar."
            }, {
              name: "Roberto García",
              role: "Director de Planta, Industrias Nogales",
              text: "Restauraron las áreas dañadas de nuestra planta sin detener la producción. Profesionales, rápidos y cumplieron con todo lo prometido en la cotización."
            }].map((testimonial, idx) => <motion.div key={idx} {...fadeInUp} transition={{
              delay: idx * 0.1
            }}>
                  <Card className="h-full bg-background border-none shadow-sm">
                    <CardContent className="p-8">
                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                      </div>
                      <p className="text-foreground/80 italic mb-8 text-lg leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>)}
            </div>
          </div>
        </section>

        {/* SECTION 8 - ORANGE CTA BAND */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="mb-4 text-white">¿Tu Piso Necesita Atención Profesional en Nogales?</h2>
              <p className="text-xl text-white/90 mb-10">
                No dejes que un piso en mal estado afecte tu operación o la imagen de tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold text-base h-14 px-8">
                  <a href="tel:+526312994645">Llamar: 631 299 4645</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold text-base h-14 px-8">
                  <a href="https://wa.me/526312994645" target="_blank" rel="noopener noreferrer">
                    Escribir por WhatsApp <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 9 - TECHNOLOGY */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <span className="badge-orange">TECNOLOGÍA DE PUNTA</span>
              <h2 className="mb-6 text-white">Maquinaria Especializada para Pisos de Concreto Superiores</h2>
              <p className="text-lg text-white/70">
                Invertimos en los mejores equipos de la industria para garantizar acabados perfectos y procesos eficientes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {[{
              icon: Wrench,
              title: "Pulidoras Industriales de Alta Velocidad",
              desc: "Equipos planetarios pesados que aseguran un desbaste uniforme y un pulido profundo en menos tiempo."
            }, {
              icon: Wind,
              title: "Aspiración de Polvo Industrial",
              desc: "Sistemas HEPA integrados que capturan el 99% del polvo generado, manteniendo tu espacio limpio durante el proceso."
            }, {
              icon: Gem,
              title: "Abrasivos de Diamante de Última Generación",
              desc: "Utilizamos resinas y metales diamantados de alta calidad para lograr el nivel de brillo exacto que necesitas."
            }, {
              icon: Target,
              title: "Herramientas de Precisión",
              desc: "Equipos de medición y nivelación láser para garantizar que tu piso cumpla con las tolerancias más estrictas."
            }].map((tech, idx) => <motion.div key={idx} {...fadeInUp} transition={{
              delay: idx * 0.1
            }}>
                  <div className="bg-[#2A2A2A] p-8 rounded-2xl flex gap-6 items-start h-full border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <tech.icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-white">{tech.title}</h3>
                      <p className="text-white/60 leading-relaxed">{tech.desc}</p>
                    </div>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>;
}
export default HomePage;