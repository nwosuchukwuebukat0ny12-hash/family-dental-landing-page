const TrustBar = () => {
  const partners = [
    { name: 'AXA Mansard', icon: 'AXA' },
    { name: 'Reliance HMO', icon: 'RHMO' },
    { name: 'Hygeia', icon: 'HYG' },
    { name: 'Leadway Health', icon: 'LH' },
    { name: 'NHIS', icon: 'NHIS' }
  ];

  return (
    <section className="bg-medical-white py-12 border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Trust Text */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h4 className="text-navy-blue font-bold text-lg mb-2">Flexible Payment Options</h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              We accept most major insurance providers and offer flexible payment plans for your comfort.
            </p>
          </div>

          {/* Logo Cloud (Placeholders with subtle styling) */}
          <div className="lg:w-2/3 flex flex-wrap justify-center lg:justify-end items-center gap-8 md:gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {partners.map((partner) => (
              <div key={partner.name} className="flex flex-col items-center group cursor-help">
                <div className="w-16 h-10 border-2 border-navy-blue/20 rounded-lg flex items-center justify-center font-black text-navy-blue text-[10px] tracking-tighter mb-1 transition-colors group-hover:border-soft-teal group-hover:text-soft-teal">
                  {partner.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-navy-blue/60 group-hover:text-soft-teal transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Divider (Visible only on mobile) */}
          <div className="w-full h-px bg-slate-200 lg:hidden"></div>

          {/* Quick Stats/Badges */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-navy-blue/80">NDA<br/>Certified</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-soft-teal/10 rounded-full flex items-center justify-center text-soft-teal">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-navy-blue/80">Secured<br/>HIPAA</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustBar;
