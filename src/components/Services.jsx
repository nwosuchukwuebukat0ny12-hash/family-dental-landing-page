import serviceLaser from '../assets/service-laser.webp';
import serviceTray from '../assets/service-tray.webp';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-soft-teal font-semibold tracking-widest uppercase text-sm mb-3 text-center">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6 text-center">
            Comprehensive Dental Care
          </h3>
          <p className="text-lg text-slate-600 text-center">
            From routine checkups to advanced cosmetic procedures, we offer a full range of services to keep your smile healthy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Laser Whitening */}
          <div className="group bg-medical-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
            <div className="h-64 overflow-hidden">
              <img 
                src={serviceLaser} 
                alt="Laser Whitening" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-soft-teal/10 text-soft-teal p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <h4 className="text-xl font-bold text-navy-blue">Laser Whitening</h4>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Experience instant results with our advanced laser technology. Brighten your smile by up to 8 shades in just one session.
              </p>
              <button className="text-soft-teal font-semibold flex items-center gap-2 group/btn mt-auto">
                <span>Learn More</span>
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2: Custom Tray Whitening */}
          <div className="group bg-medical-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
            <div className="h-64 overflow-hidden">
              <img 
                src={serviceTray} 
                alt="Custom Tray Whitening" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-soft-teal/10 text-soft-teal p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                <h4 className="text-xl font-bold text-navy-blue">Tray Whitening</h4>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Professional whitening from the comfort of your home. Custom-fitted trays designed for maximum comfort and even results.
              </p>
              <button className="text-soft-teal font-semibold flex items-center gap-2 group/btn mt-auto">
                <span>Learn More</span>
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3: General Dentistry (Replaces Form) */}
          <div className="group bg-medical-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
            <div className="h-64 overflow-hidden bg-navy-blue flex items-center justify-center relative">
              <div className="absolute inset-0 bg-soft-teal/20"></div>
              <svg className="w-32 h-32 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-soft-teal/10 text-soft-teal p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </span>
                <h4 className="text-xl font-bold text-navy-blue">General Checkups</h4>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed flex-grow">
                Comprehensive exams, cleanings, and digital X-rays to prevent issues before they start and maintain your optimal oral health.
              </p>
              <button className="text-soft-teal font-semibold flex items-center gap-2 group/btn mt-auto">
                <span>Learn More</span>
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Services;
