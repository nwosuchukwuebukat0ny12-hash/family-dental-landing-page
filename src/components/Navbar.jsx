import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-soft-teal rounded-lg flex items-center justify-center shadow-inner">
            <svg 
              className="w-6 h-6 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isScrolled ? 'text-navy-blue' : 'text-white'}`}>
            The Family <span className="text-soft-teal">Dental</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-navy-blue/80' : 'text-white/90 hover:text-white'}`}>Our Services</a>
          <a href="#about" className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-navy-blue/80' : 'text-white/90 hover:text-white'}`}>Meet the Doctor</a>
          <a href="#location" className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-navy-blue/80' : 'text-white/90 hover:text-white'}`}>Location</a>
          <button className="btn-primary">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`transition-colors duration-300 ${isScrolled ? 'text-navy-blue' : 'text-white'} focus:outline-none`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-6 shadow-xl animate-fade-in-down">
          <div className="flex flex-col gap-4">
            <a href="#services" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Our Services</a>
            <a href="#about" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Meet the Doctor</a>
            <a href="#location" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Location</a>
            <button className="btn-primary w-full mt-2">
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
