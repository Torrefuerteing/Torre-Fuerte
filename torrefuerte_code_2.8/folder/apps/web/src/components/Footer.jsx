import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'Inicio', path: '/inicio' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const mainServices = [
    { name: 'Todos los Servicios', path: '/servicios' },
    { name: 'Pulido de Concreto', path: '/pulido-de-concreto-en-nogales' },
    { name: 'Pisos Epóxicos', path: '/pisos-epoxicos-en-nogales' }
  ];

  const specializedServices = [
    { name: 'Restauración Industrial', path: '/restauracion-de-pisos-industriales' },
    { name: 'Mantenimiento de Pisos', path: '/mantenimiento-de-pisos-de-concreto' },
    { name: 'Concreto Pulido Industrial', path: '/concreto-pulido-industrial' }
  ];

  return (
     <footer className="bg-[#0F1115] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="https://res.cloudinary.com/dd3vxqww7/image/upload/v1779154432/Black_torrefuerte_transparent_1_qhwu8y.png" 
              alt="Torre Fuerte Ingeniería de Pisos"
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/80 mb-4 leading-relaxed max-w-sm">
              Especialistas en Pisos Comerciales e Industriales en Nogales, Sonora.
            </p>
            <div className="flex items-start gap-2 text-white/80 text-sm mb-2">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
              <span>Heroica Nogales, Sonora, México</span>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <span className="font-semibold text-sm uppercase tracking-wide text-accent mb-4 block">
              Empresa
            </span>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-sm uppercase tracking-wide text-accent mb-4 block">
              Servicios Principales
            </span>
            <ul className="space-y-2">
              {mainServices.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-sm uppercase tracking-wide text-accent mb-4 block">
              Especialidades
            </span>
            <ul className="space-y-2 mb-6">
              {specializedServices.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <span className="font-semibold text-sm uppercase tracking-wide text-accent mb-4 block">
              Contacto Directo
            </span>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:6312994645"
                  className="flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                  631 299 4645
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contacto@torrefuerteing.com"
                  className="flex items-center gap-2 text-white/80 hover:text-accent transition-colors duration-200 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  contacto@torrefuerteing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-white/80 text-sm">
              <span className="text-accent">🔒</span>
              <span>Facturación disponible</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white/80 text-sm">
              <span className="text-accent">✅</span>
              <span>Garantía en todos los trabajos</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 text-white/80 text-sm">
              <span className="text-accent">📋</span>
              <span>Cotización sin compromiso</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>
              © {currentYear} Torre Fuerte Ingeniería. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 items-center">
              <span className="font-semibold text-accent uppercase tracking-wider text-xs">Información Legal:</span>
              <Link to="/politica-de-privacidad" className="hover:text-accent transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos-y-condiciones" className="hover:text-accent transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;