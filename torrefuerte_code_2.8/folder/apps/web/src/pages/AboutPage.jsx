import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, Wrench, ShieldCheck, Users, Leaf } from 'lucide-react';

function AboutPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const values = [
    {
      icon: Wrench,
      title: "Enfoque Técnico",
      desc: "No improvisamos. Cada proyecto comienza con un análisis técnico del sustrato para determinar el sistema adecuado."
    },
    {
      icon: ShieldCheck,
      title: "Calidad Garantizada",
      desc: "Utilizamos materiales de grado industrial y maquinaria de última generación para asegurar resultados duraderos."
    },
    {
      icon: Users,
      title: "Atención Personalizada",
      desc: "Entendemos que cada negocio es único. Adaptamos nuestros horarios y procesos para minimizar el impacto en tu operación."
    },
    {
      icon: Leaf,
      title: "Solución Sustentable",
      desc: "Restaurar y pulir el concreto existente es una de las opciones de pisos más ecológicas y de menor impacto ambiental."
    }
  ];

  const benefits = [
    "Alta resistencia al tráfico pesado y maquinaria",
    "Reducción drástica en costos de mantenimiento",
    "Durabilidad superior a 15 años con cuidado básico",
    "Aumento de reflectividad de luz hasta en un 30%",
    "Mejora inmediata en la imagen corporativa",
    "Resistencia a la humedad y derrames accidentales",
    "Proceso sustentable que aprovecha la losa existente",
    "Protección de la inversión a largo plazo"
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros | Torre Fuerte — Pisos en Nogales, Sonora</title>
        <meta name="description" content="Más de 15 años como especialistas en pisos de concreto comerciales e industriales en Nogales, Sonora. Conoce nuestra historia, valores y compromiso con cada proyecto." />
        <link rel="canonical" href="https://torrefuerteing.com/nosotros" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* SPLIT HERO */}
        <section className="relative min-h-[70vh] flex flex-col lg:flex-row">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 bg-secondary text-secondary-foreground flex flex-col justify-center px-6 py-20 lg:px-16 xl:px-24 relative z-10">
            <motion.div {...fadeInUp} className="max-w-xl">
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-sm mb-6">
                NUESTRA HISTORIA
              </span>
              <h1 className="mb-6 text-white">
                15 Años Transformando Pisos Comerciales e Industriales en Nogales
              </h1>
              <div className="flex items-center gap-2 text-sm text-white/60 font-medium mt-8">
                <Link to="/" className="hover:text-primary transition-colors">Inicio</Link>
                <span>&gt;</span>
                <span className="text-white">Nosotros</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2 h-[40vh] lg:h-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/20 to-transparent z-10 hidden lg:block w-32" />
            <img 
              src="https://images.unsplash.com/photo-1457369444200-60f6a6cf5298?q=80&w=1000&auto=format&fit=crop" 
              alt="Trabajo profesional de pisos de concreto industrial"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* HISTORY SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="mb-8 text-3xl md:text-4xl">Nuestra Trayectoria</h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Torre Fuerte Ingeniería de Pisos nació hace más de 15 años con una visión clara: elevar el estándar de los pisos industriales y comerciales en Nogales, Sonora y la región norte del estado. Observamos que muchas empresas sufrían por pisos polvorientos, agrietados y difíciles de mantener, lo que afectaba su productividad y la imagen ante sus clientes.
                </p>
                <p>
                  Comenzamos ofreciendo servicios básicos de desbaste y preparación de superficies, pero rápidamente evolucionamos al incorporar tecnología de punta en pulido de concreto y aplicación de sistemas epóxicos. Hoy en día, somos un equipo de especialistas técnicos capacitados para diagnosticar, reparar y transformar cualquier superficie de concreto.
                </p>
                <p>
                  Nuestro compromiso en cada proyecto es simple: entregar un piso que no solo luzca espectacular el primer día, sino que resista el paso del tiempo y las exigencias operativas de tu negocio. Ya sea un almacén logístico de alto tráfico o un showroom comercial, aplicamos el mismo rigor técnico y atención al detalle.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-6">Nuestros Pilares de Trabajo</h2>
              <p className="text-lg text-muted-foreground">
                La filosofía que guía cada metro cuadrado que pulimos, reparamos o recubrimos.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {values.map((value, idx) => (
                <motion.div key={idx} {...fadeInUp} transition={{ delay: idx * 0.1 }}>
                  <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-8 flex gap-6 items-start">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BENEFITS SECTION */}
        <section className="section-padding bg-secondary text-secondary-foreground">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div {...fadeInUp} className="w-full lg:w-1/3">
                <h2 className="mb-6 text-white">¿Por Qué Elegir Torre Fuerte?</h2>
                <p className="text-lg text-white/70 mb-8">
                  Invertir en un piso profesional no es un gasto, es una decisión estratégica que impacta directamente en la eficiencia y seguridad de tu empresa.
                </p>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link to="/contacto">Cotizar mi proyecto <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </motion.div>

              <motion.div {...fadeInUp} className="w-full lg:w-2/3">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="text-white/90 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section className="section-padding bg-white">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
              <h2 className="mb-6">Servicio en Nogales, Sonora y Región</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-8">
                Nuestra base de operaciones se encuentra en la Heroica Nogales, Sonora. Desde aquí, atendemos a parques industriales, centros logísticos, maquiladoras y negocios comerciales en toda la ciudad y municipios aledaños del norte del estado. Conocemos las condiciones climáticas y operativas de la región, lo que nos permite recomendar los sistemas más adecuados para cada caso.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA BAND */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <h2 className="mb-4 text-white">¿Listo para transformar tus pisos?</h2>
              <p className="text-xl text-white/90 mb-10">
                Permítenos demostrarte por qué somos los líderes en pisos de concreto en Nogales.
              </p>
              <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 font-bold text-base h-14 px-8">
                <Link to="/contacto">
                  Solicitar Cotización Sin Compromiso <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
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

export default AboutPage;