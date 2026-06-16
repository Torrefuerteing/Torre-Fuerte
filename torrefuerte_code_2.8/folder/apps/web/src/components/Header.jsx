import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 100) {
        setIsScrolled(true);
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsScrolled(false);
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Inicio', path: '/inicio' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${isScrolled
          ? 'bg-[#0F1115]/95 backdrop-blur-sm shadow-lg'
          : 'bg-[#0F1115]'}`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link to="/inicio" className="flex items-center">
            <img 
              src="https://res.cloudinary.com/dd3vxqww7/image/upload/v1779154432/Black_torrefuerte_transparent_1_qhwu8y.png" 
              alt="Torre Fuerte Ingeniería de Pisos - Especialistas en pisos industriales Nogales Sonora"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-white transition-colors duration-200 relative ${
                  isActive(link.path) 
                    ? 'font-semibold after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-accent' 
                    : 'hover:text-accent'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a 
              href="tel:6312994645" 
              className="flex items-center gap-2 text-white hover:text-accent font-semibold transition-colors"
            >
              <Phone className="w-4 h-4" />
              631 299 4645
            </a>
            <Button 
              asChild 
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-primary text-white border-l-0">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-xl transition-colors duration-200 ${
                      isActive(link.path) 
                        ? 'text-accent font-semibold' 
                        : 'text-white hover:text-accent'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                
                <div className="h-px bg-white/20 my-2" />
                
                <a 
                  href="tel:6312994645" 
                  className="flex items-center gap-3 text-xl text-white hover:text-accent font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  631 299 4645
                </a>

                <Button 
                  asChild 
                  className="bg-accent text-accent-foreground hover:bg-accent/90 mt-4 h-12 text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Link to="/contacto">Solicitar cotización</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;