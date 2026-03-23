import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy-blue text-white pt-20">
      {/* Google Maps Integration */}
      <div className="w-full h-[400px] grayscale contrast-125 opacity-90 transition-all duration-500 hover:grayscale-0 hover:opacity-100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.672465922753!2d3.91136!3d7.4241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d5c41936bb7%3A0x6b90757758379412!2sBodija%20Market!5e0!3m2!1sen!2sng!4v1710325000000!5m2!1sen!2sng"
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
        ></iframe>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Trust */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-soft-teal rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">The Family <span className="text-soft-teal">Dental</span></span>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              Delivering world-class, pain-free dentistry to families across Ibadan. Your smile is our signature.
            </p>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/50">Registered with Nigerian Dental Association</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-soft-teal">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-soft-teal transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-soft-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/60 hover:text-soft-teal transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-soft-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About the Clinic
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/60 hover:text-soft-teal transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-soft-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-soft-teal transition-colors duration-200 text-sm flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-soft-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-soft-teal">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-soft-teal shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm leading-relaxed">
                  15 Awolowo Avenue, Bodija,<br /> Ibadan, Oyo State
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-soft-teal shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm">+234 901 228 6126</p>
              </div>
              <div className="flex gap-4">
                <div className="text-soft-teal shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-white/70 text-sm">hello@familydental.com.ng</p>
              </div>
              <div className="mt-6 p-4 bg-soft-teal/10 rounded-xl border border-soft-teal/20">
                <p className="text-soft-teal text-xs font-bold uppercase tracking-widest mb-1">Emergency Care</p>
                <p className="text-white text-sm font-medium">Available 24/7 for dental emergencies.</p>
              </div>
            </div>
          </div>

          {/* Column 4: Operating Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-soft-teal">Operating Hours</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-white/60 text-sm">Mon - Fri</span>
                <span className="text-white font-medium text-sm">8:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-white/60 text-sm">Saturday</span>
                <span className="text-white font-medium text-sm">9:00 AM – 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Sunday</span>
                <span className="text-rose-400 font-medium text-sm uppercase tracking-tighter">Emergencies Only</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Footer */}
      <div className="bg-black/20 border-t border-white/5 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs tracking-wide">
            © 2026 The Family Dental Care. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <a href="#" className="text-white/40 hover:text-soft-teal transition-all duration-300 flex items-center gap-2 group">
              <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline group-hover:tracking-[0.2em] transition-all">Facebook</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.97 3.64 9.1 8.4 9.87v-6.98h-2.54V12h2.54V9.6c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.85h-2.33v6.98c4.76-.77 8.4-4.9 8.4-9.87 0-5.5-4.46-9.96-9.96-9.96z"/></svg>
            </a>
            <a href="#" className="text-white/40 hover:text-soft-teal transition-all duration-300 flex items-center gap-2 group">
              <span className="text-[10px] font-bold uppercase tracking-widest hidden sm:inline group-hover:tracking-[0.2em] transition-all">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a 
              href="https://wa.me/2349012286126?text=Hi,%20how%20can%20The%20Family%20Dental%20help%20you?" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-xl font-bold text-sm shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.439 5.662 1.439h.05c6.551 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
