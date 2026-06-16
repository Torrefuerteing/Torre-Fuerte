import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function PrivacyPolicyPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <>
      <Helmet>
        <title>Política de Privacidad - Torre Fuerte Ingeniería</title>
        <meta name="description" content="Política de privacidad y tratamiento de datos personales de Torre Fuerte Ingeniería de Pisos en Nogales, Sonora." />
      </Helmet>

      <Header />
      
      <main className="pt-20 bg-background min-h-screen">
        <section className="bg-secondary text-secondary-foreground py-16 lg:py-24">
          <div className="container-custom text-center">
            <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
              <h1 className="mb-4 text-white">Política de Privacidad</h1>
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
                  <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introducción y responsable del tratamiento de datos</h2>
                  <p>
                    Torre Fuerte Ingeniería de Pisos, con sede en Heroica Nogales, Sonora, México, es el responsable del uso y protección de sus datos personales. Puede contactarnos en cualquier momento a través del correo electrónico: <strong>contacto@torrefuerteing.com</strong>.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">2. Recopilación de datos personales</h2>
                  <p>
                    Para llevar a cabo las finalidades descritas en la presente política de privacidad, utilizaremos los siguientes datos personales que usted nos proporcione libremente a través de nuestros formularios de contacto:
                  </p>
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Nombre completo</li>
                    <li>Número de teléfono / WhatsApp</li>
                    <li>Correo electrónico</li>
                    <li>Información sobre su empresa o proyecto (mensaje)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">3. Uso de cookies y tecnologías de seguimiento</h2>
                  <p>
                    Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">4. Google Analytics</h2>
                  <p>
                    Utilizamos Google Analytics para recopilar datos de navegación de forma anónima. Esta herramienta nos ayuda a entender cómo los visitantes interactúan con nuestro sitio web, qué páginas visitan y cuánto tiempo permanecen en ellas, con el fin de mejorar nuestro contenido y experiencia de usuario.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">5. Meta/Facebook Pixel</h2>
                  <p>
                    Nuestro sitio web utiliza el Pixel de Meta (Facebook) para el seguimiento de conversiones y publicidad dirigida. Esta herramienta nos permite medir la eficacia de nuestra publicidad al comprender las acciones que las personas realizan en nuestro sitio web.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">6. Consentimiento para comunicación vía WhatsApp</h2>
                  <p>
                    Al proporcionar su número de teléfono y contactarnos a través de nuestros botones de WhatsApp o formularios, usted otorga su consentimiento expreso para que Torre Fuerte Ingeniería se comunique con usted por este medio para dar seguimiento a su cotización o consulta.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">7. Consentimiento para contacto comercial y marketing</h2>
                  <p>
                    Sus datos personales podrán ser utilizados para enviarle información comercial, promociones, o actualizaciones sobre nuestros servicios. Usted puede revocar este consentimiento en cualquier momento enviando un correo a contacto@torrefuerteing.com.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">8. Protección y seguridad de datos</h2>
                  <p>
                    Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">9. Derechos del usuario (ARCO)</h2>
                  <p>
                    Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">10. Solicitud de eliminación de datos personales</h2>
                  <p>
                    Para ejercer cualquiera de los derechos ARCO, o solicitar la eliminación total de sus datos de nuestros sistemas, deberá presentar la solicitud respectiva enviando un correo electrónico a contacto@torrefuerteing.com.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">11. Uso de herramientas de inteligencia artificial</h2>
                  <p>
                    Podemos utilizar herramientas de inteligencia artificial para procesar consultas, mejorar la atención al cliente o analizar datos de forma agregada. Ninguna información personal sensible es compartida públicamente a través de estas herramientas.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">12. Almacenamiento y tratamiento de información</h2>
                  <p>
                    Su información es almacenada en servidores seguros y es tratada de manera confidencial. Solo el personal autorizado de Torre Fuerte Ingeniería tiene acceso a esta información para los fines descritos.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">13. Limitación de responsabilidad tecnológica</h2>
                  <p>
                    Aunque implementamos las mejores prácticas de seguridad, ninguna transmisión de datos por internet es 100% segura. Torre Fuerte Ingeniería no se hace responsable por intercepciones ilegales o violación de sus sistemas o bases de datos por parte de personas no autorizadas.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">14. Cumplimiento con leyes aplicables</h2>
                  <p>
                    Esta política de privacidad se rige por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y demás legislación aplicable en el Estado de Sonora y en los Estados Unidos Mexicanos.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">15. Contacto para privacidad</h2>
                  <p>
                    Si tiene alguna duda sobre esta política de privacidad o el tratamiento de sus datos, por favor contáctenos en: <strong>contacto@torrefuerteing.com</strong>.
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

export default PrivacyPolicyPage;