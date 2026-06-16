import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useForm, Controller } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Mail, MapPin, Clock, CheckCircle2, Send } from 'lucide-react';

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue, control } = useForm();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

const onSubmit = async (data) => {
    console.log("📋 Form data:", JSON.stringify(data));
    setIsSubmitting(true);
    try {
      const params = new URLSearchParams({
        nombre:      data.nombre,
        empresa:     data.empresa      || "No proporcionado",
        telefono:    data.telefono,
        correo:      data.correo,
        servicio:    data.servicio,
        espacio:     data.espacio,
        descripcion: data.descripcion,
      });

      await new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = `https://script.google.com/macros/s/AKfycbyqHZPpef_GarBSDapmH06S8WobIqV5u7aKS8GJ4_J-fBnU0TcazW8Id59DLzC2YgAj6w/exec?${params.toString()}`;
      });

      toast.success('✅ ¡Solicitud enviada con éxito! Nos pondremos en contacto contigo en menos de 24 horas.');
      reset();
    } catch (error) {
      console.error("❌ Error:", error);
      toast.error("Error de conexión con el servidor");
    }
    setIsSubmitting(false);
  };

  const faqs = [
    {
      q: "¿Cuánto cuesta pulir un piso de concreto en Nogales?",
      a: "El costo varía dependiendo de los metros cuadrados, el estado actual del piso, el nivel de brillo deseado y si requiere reparaciones previas. Por eso ofrecemos una visita de diagnóstico y cotización gratuita para darte un precio exacto."
    },
    {
      q: "¿Qué tipos de pisos trabajan?",
      a: "Nos especializamos en pisos de concreto industriales y comerciales. Realizamos pulido, desbaste, aplicación de sistemas epóxicos, restauración de grietas y mantenimiento preventivo."
    },
    {
      q: "¿Cuánto tiempo tarda el proceso?",
      a: "Depende del tamaño del área y el servicio. Un pulido comercial estándar puede tomar de 2 a 4 días. En nuestra cotización siempre incluimos un cronograma detallado de ejecución."
    },
    {
      q: "¿Tengo que detener la operación de mi negocio?",
      a: "No necesariamente. Podemos trabajar en horarios nocturnos, fines de semana o por secciones para minimizar el impacto en tu operación diaria."
    },
    {
      q: "¿Cuánto dura un piso epóxico?",
      a: "Con el mantenimiento adecuado y dependiendo del tráfico, un sistema epóxico industrial bien instalado puede durar entre 5 y 15 años antes de requerir un recubrimiento de mantenimiento."
    },
    {
      q: "¿Emiten factura?",
      a: "Sí, somos una empresa formalmente establecida y emitimos facturas fiscales (CFDI) por todos nuestros servicios."
    },
    {
      q: "¿Cuáles son las formas de pago?",
      a: "Aceptamos transferencias bancarias y cheques. Normalmente trabajamos con un anticipo para inicio de obra y el resto contra entrega o según estimaciones de avance."
    },
    {
      q: "¿Ofrecen garantía?",
      a: "Absolutamente. Todos nuestros trabajos de pulido, restauración y aplicación de epóxicos cuentan con garantía por escrito sobre la mano de obra y adherencia de los materiales."
    },
    {
      q: "¿Atienden fuera de Nogales?",
      a: "Nuestra base principal es Nogales, pero atendemos proyectos industriales y comerciales en municipios aledaños del norte de Sonora. Contáctanos para verificar cobertura."
    },
    {
      q: "¿Qué es mejor, pulido de concreto o piso epóxico?",
      a: "Depende del uso. El pulido es ideal para almacenes secos, pasillos y showrooms por su bajo mantenimiento y alta durabilidad. El epóxico es necesario en áreas que requieren resistencia química, grado alimenticio o impermeabilidad total."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contacto | Pisos de Concreto en Nogales — Torre Fuerte</title>
        <meta name="description" content="Solicita tu cotización gratuita para pisos de concreto en Nogales, Sonora. Especialistas en pisos comerciales e industriales. WhatsApp: 631 299 4645." />
        <link rel="canonical" href="https://torrefuerteing.com/contacto" />
      </Helmet>

      <Header />
      
      <main className="pt-20">
        {/* HERO */}
        <section className="bg-secondary text-secondary-foreground py-20 lg:py-28">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1.5 bg-primary text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-sm mb-6">
                CONTÁCTANOS
              </span>
              <h1 className="mb-6 text-white">Solicita Tu Cotización Gratuita — Pisos en Nogales</h1>
              <p className="text-xl text-white/80">
                Déjanos tus datos y un especialista evaluará tu proyecto. Nos comprometemos a responder en menos de 24 horas hábiles.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
              
              {/* LEFT COLUMN: FORM */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-3/5"
              >
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-border">
                  <h2 className="text-3xl mb-8">Cuéntanos sobre tu proyecto de pisos</h2>
                  
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre completo *</Label>
                        <Input 
                          id="nombre" 
                          placeholder="Ej. Juan Pérez" 
                          className="text-foreground"
                          {...register('nombre', { required: 'El nombre es obligatorio' })}
                        />
                        {errors.nombre && <p className="text-sm text-destructive">{errors.nombre.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="empresa">Empresa / Negocio</Label>
                        <Input 
                          id="empresa" 
                          placeholder="Nombre de tu empresa" 
                          className="text-foreground"
                          {...register('empresa')}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono / WhatsApp *</Label>
                        <Input 
                          id="telefono" 
                          type="tel" 
                          placeholder="631 000 0000" 
                          className="text-foreground"
                          {...register('telefono', { required: 'El teléfono es obligatorio' })}
                        />
                        {errors.telefono && <p className="text-sm text-destructive">{errors.telefono.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="correo">Correo electrónico *</Label>
                        <Input 
                          id="correo" 
                          type="email" 
                          placeholder="correo@empresa.com" 
                          className="text-foreground"
                          {...register('correo', { 
                            required: 'El correo es obligatorio',
                            pattern: { value: /^\S+@\S+$/i, message: 'Correo inválido' }
                          })}
                        />
                        {errors.correo && <p className="text-sm text-destructive">{errors.correo.message}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="servicio">Tipo de servicio *</Label>
                        <Select onValueChange={(val) => setValue('servicio', val)}>
                          <SelectTrigger className="text-foreground">
                            <SelectValue placeholder="Selecciona un servicio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pulido">Pulido de Concreto</SelectItem>
                            <SelectItem value="epoxico">Pisos Epóxicos</SelectItem>
                            <SelectItem value="restauracion">Restauración de Pisos</SelectItem>
                            <SelectItem value="mantenimiento">Mantenimiento</SelectItem>
                            <SelectItem value="otro">Otro / No estoy seguro</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" {...register('servicio', { required: 'Selecciona un servicio' })} />
                        {errors.servicio && <p className="text-sm text-destructive">{errors.servicio.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="espacio">Tipo de espacio *</Label>
                        <Select onValueChange={(val) => setValue('espacio', val)}>
                          <SelectTrigger className="text-foreground">
                            <SelectValue placeholder="Selecciona el espacio" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="almacen">Almacén / Bodega</SelectItem>
                            <SelectItem value="nave">Nave Industrial</SelectItem>
                            <SelectItem value="comercial">Local Comercial</SelectItem>
                            <SelectItem value="restaurante">Restaurante</SelectItem>
                            <SelectItem value="oficina">Oficina / Showroom</SelectItem>
                          </SelectContent>
                        </Select>
                        <input type="hidden" {...register('espacio', { required: 'Selecciona un espacio' })} />
                        {errors.espacio && <p className="text-sm text-destructive">{errors.espacio.message}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="descripcion">Descripción del proyecto *</Label>
                      <Textarea 
                        id="descripcion" 
                        placeholder="Cuéntanos los detalles: metros cuadrados aproximados, estado actual del piso, problemas que presenta..." 
                        className="min-h-[120px] text-foreground resize-none"
                        {...register('descripcion', { required: 'La descripción es obligatoria' })}
                      />
                      {errors.descripcion && <p className="text-sm text-destructive">{errors.descripcion.message}</p>}
                    </div>

                    <div className="flex items-start space-x-3 pt-2">
                      <Controller
                        name="terms"
                        control={control}
                        rules={{ required: 'Debes aceptar la Política de Privacidad y los Términos y Condiciones' }}
                        render={({ field }) => (
                          <Checkbox 
                            id="terms" 
                            checked={field.value} 
                            onCheckedChange={field.onChange} 
                            className="mt-1"
                          />
                        )}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label 
                          htmlFor="terms" 
                          className="text-sm font-medium leading-relaxed text-muted-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          He leído y acepto la <Link to="/politica-de-privacidad" className="text-primary hover:underline">Política de Privacidad</Link> y los <Link to="/terminos-y-condiciones" className="text-primary hover:underline">Términos y Condiciones</Link>.
                        </label>
                        {errors.terms && <p className="text-sm text-destructive">{errors.terms.message}</p>}
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-14 text-base mt-4"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Enviando...' : (
                        <>Enviar Solicitud de Cotización <Send className="w-4 h-4 ml-2" /></>
                      )}
                    </Button>
                    
                    <p className="text-xs text-muted-foreground text-center mt-4">
                      Tus datos están seguros con nosotros. No compartimos información con terceros.
                    </p>
                  </form>
                </div>
              </motion.div>

              {/* RIGHT COLUMN: INFO */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full lg:w-2/5 space-y-8"
              >
                <div>
                  <h3 className="text-2xl mb-6">Contacto Directo</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">Llámanos</p>
                        <a href="tel:+526312994645" className="text-3xl font-bold text-primary hover:underline font-['Barlow_Condensed'] tracking-wide">
                          631 299 4645
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">WhatsApp</p>
                        <a href="https://wa.me/526312994645" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                          Enviar mensaje directo
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">Correo</p>
                        <a href="mailto:contacto@torrefuerteing.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                          contacto@torrefuerteing.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">Ubicación y Área de Servicio</p>
                        <p className="text-lg font-semibold text-foreground">Heroica Nogales, Sonora</p>
                        <p className="text-sm text-muted-foreground mt-1">Servicio a toda la región norte del estado.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium mb-1">Horario de Atención</p>
                        <p className="text-base font-semibold text-foreground">Lun – Vie: 8:00 am – 6:00 pm</p>
                        <p className="text-base font-semibold text-foreground">Sáb: 9:00 am – 2:00 pm</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary text-secondary-foreground p-6 rounded-2xl mt-8">
                  <h4 className="font-bold text-lg mb-4 text-white">Nuestro Compromiso</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-white/90">Cotización Sin Compromiso</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-white/90">Garantía en Todos los Trabajos</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-white/90">Facturación Disponible</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-4">Preguntas Frecuentes</h2>
              <p className="text-lg text-muted-foreground">
                Resolvemos las dudas más comunes sobre nuestros servicios de pisos de concreto en Nogales.
              </p>
            </motion.div>

            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default ContactPage;