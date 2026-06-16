import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function TermsAndConditionsPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Términos y Condiciones - Torre Fuerte Ingeniería</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de Torre Fuerte Ingeniería de Pisos." />
      </Helmet>

      <Header />
      
      <main className="pt-20 bg-background min-h-screen">
        <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
              <h1 className="mb-4 text-white">Términos y Condiciones</h1>
              <p className="text-xl text-white/80">
                Última actualización: {new Date().toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto bg-card text-card-foreground p-8 md:p-12 rounded-2xl shadow-sm border border-border prose prose-slate max-w-none">
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Aceptación de términos al usar el sitio web</h2>
                  <p>
                    Al acceder y utilizar el sitio web de Torre Fuerte Ingeniería (torrefuerteing.com), usted acepta estar sujeto a estos Términos y Condiciones de uso, todas las leyes y regulaciones aplicables, y acepta que es responsable del cumplimiento de las leyes locales aplicables.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Uso permitido del sitio</h2>
                  <p>
                    Este sitio web tiene como propósito principal proporcionar información general sobre nuestros servicios de ingeniería de pisos, pulido de concreto y recubrimientos epóxicos, así como facilitar la generación de prospectos y contacto comercial. El uso del sitio debe limitarse a estos fines legítimos.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Prohibición de copiar, reproducir o distribuir contenido</h2>
                  <p>
                    Se concede permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio web de Torre Fuerte Ingeniería solo para visualización transitoria personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia usted no puede modificar, copiar, reproducir, distribuir o utilizar los materiales para ningún propósito comercial.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Prohibición de hacerse pasar por Torre Fuerte Ingeniería</h2>
                  <p>
                    Queda estrictamente prohibido utilizar el nombre, logotipo, marca o identidad visual de Torre Fuerte Ingeniería para hacerse pasar por la empresa, sus empleados o representantes, ya sea en línea o fuera de línea.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Prohibición de enviar información falsa o engañosa</h2>
                  <p>
                    Al utilizar nuestros formularios de contacto o canales de comunicación, usted se compromete a proporcionar información veraz, precisa y actual. Queda prohibido el envío de información falsa, engañosa o el uso de identidades falsas.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Prohibición de interferencias, ataques o sabotaje al sitio</h2>
                  <p>
                    Usted acepta no utilizar ningún dispositivo, software o rutina para interferir o intentar interferir con el funcionamiento adecuado de nuestro sitio web. Queda prohibido cualquier intento de ataque informático, inyección de código, denegación de servicio (DDoS) o sabotaje.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Propiedad intelectual y derechos de autor</h2>
                  <p>
                    Todo el contenido incluido en este sitio, como texto, gráficos, logotipos, imágenes, clips de audio, descargas digitales y compilaciones de datos, es propiedad de Torre Fuerte Ingeniería o de sus proveedores de contenido y está protegido por las leyes de derechos de autor internacionales y de México.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Limitación de responsabilidad de la empresa</h2>
                  <p>
                    En ningún caso Torre Fuerte Ingeniería o sus proveedores serán responsables de ningún daño (incluidos, entre otros, daños por pérdida de datos o ganancias, o debido a la interrupción del negocio) que surjan del uso o la incapacidad de usar los materiales en el sitio web.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. Exactitud de información del sitio</h2>
                  <p>
                    Los materiales que aparecen en el sitio web de Torre Fuerte Ingeniería podrían incluir errores técnicos, tipográficos o fotográficos. No garantizamos que ninguno de los materiales en su sitio web sea preciso, completo o actual. Podemos realizar cambios en los materiales contenidos en el sitio web en cualquier momento sin previo aviso.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Enlaces externos y sitios de terceros</h2>
                  <p>
                    Torre Fuerte Ingeniería no ha revisado todos los sitios vinculados a su sitio web y no es responsable del contenido de dicho sitio vinculado. La inclusión de cualquier enlace no implica el respaldo del sitio por parte de Torre Fuerte Ingeniería. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">11. Comunicación vía WhatsApp (términos de uso)</h2>
                  <p>
                    Al utilizar nuestros enlaces de WhatsApp, usted acepta los términos de servicio de dicha plataforma. Torre Fuerte Ingeniería utilizará este canal exclusivamente para fines de atención al cliente, cotizaciones y seguimiento comercial relacionado con nuestros servicios.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">12. Limitación sobre disponibilidad y mantenimiento del sitio</h2>
                  <p>
                    Nos reservamos el derecho de retirar o modificar el servicio que brindamos en nuestro sitio web sin previo aviso. No seremos responsables si por alguna razón nuestro sitio web no está disponible en cualquier momento o durante cualquier período.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">13. Jurisdicción aplicable</h2>
                  <p>
                    Cualquier reclamo relacionado con el sitio web de Torre Fuerte Ingeniería se regirá por las leyes del Estado de Sonora, México, sin tener en cuenta sus disposiciones sobre conflictos de leyes.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">14. Contacto para términos</h2>
                  <p>
                    Si tiene alguna pregunta sobre estos Términos y Condiciones, por favor contáctenos en: <strong>contacto@torrefuerteing.com</strong>.
                  </p>
                </section>
              </div>

            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default TermsAndConditionsPage;