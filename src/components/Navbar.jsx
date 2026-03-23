import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
    <header className="fixed w-full z-50">
      {/* Top Bar - Contact & Emergency */}
      <div className={`bg-navy-blue py-2 border-b border-white/10 transition-all duration-500 ${isScrolled ? 'hidden lg:block opacity-0 h-0 overflow-hidden' : 'opacity-100 h-auto'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center text-xs sm:text-sm text-white/90">
          <div className="flex items-center gap-6">
            <a href="tel:+2349012286126" className="flex items-center gap-2 hover:text-soft-teal transition-colors">
              <svg className="w-4 h-4 text-soft-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="font-semibold">+234 901 228 6126</span>
            </a>
            <div className="hidden md:flex items-center gap-2">
              <svg className="w-4 h-4 text-soft-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>15 Awolowo Ave, Ibadan</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="font-bold uppercase tracking-widest text-[10px]">Open Now</span>
            </div>
            <Link to="/contact" className="hidden lg:flex items-center gap-2 text-rose-400 hover:text-rose-300 font-bold uppercase tracking-widest text-[10px] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Emergency Care Available 24/7
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`transition-all duration-500 ${
          isScrolled ? 'bg-white shadow-sm py-3 border-b border-slate-100' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
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
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-navy-blue/80' : 'text-white/90 hover:text-white'}`}>Home</Link>
            <Link to="/services" className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-navy-blue/80' : 'text-white/90 hover:text-white'}`}>Our Services</Link>
            <Link to="/doctors" className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-navy-blue/80' : 'text-white/90 hover:text-white'}`}>Our Doctors</Link>
            <Link to="/contact" className={`nav-link transition-colors duration-300 ${isScrolled ? 'text-navy-blue/80' : 'text-white/90 hover:text-white'}`}>Contact</Link>
            <Link to="/contact" className="btn-primary shadow-lg shadow-soft-teal/20">
              Book Appointment
            </Link>
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
              <Link to="/" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              <Link to="/services" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Our Services</Link>
              <Link to="/doctors" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Our Doctors</Link>
              <Link to="/contact" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              
              {/* Mobile Emergency Link */}
              <Link 
                to="/contact" 
                className="flex items-center justify-center gap-2 py-3 bg-rose-50 text-rose-600 rounded-xl font-bold text-xs uppercase tracking-widest border border-rose-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></div>
                Emergency: +234 901 228 6126
              </Link>

              <Link to="/contact" className="btn-primary w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
                Book Appointment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
