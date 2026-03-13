import whyChooseUsBg from '../assets/why-choose-us-bg.png';

const WhyChooseUs = () => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center overflow-hidden bg-navy-blue py-20 lg:py-0"
      style={{
        backgroundImage: `url(${whyChooseUsBg})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      {/* Deep Navy Overlay for high contrast */}
      <div className="absolute inset-0 bg-navy-blue/70 lg:bg-navy-blue/60 backdrop-blur-[2px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-soft-teal font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4">Why Choose Us</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Smile is Your Greatest <span className="text-soft-teal">Asset.</span> <br className="hidden md:block" /> Trust the Experts.
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy patients who trust our award-winning specialists for precise, beautiful, and lasting dental care.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <div className="w-12 h-12 bg-soft-teal rounded-xl flex items-center justify-center mb-5 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Top-Rated Dental Specialists</h4>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <div className="w-12 h-12 bg-soft-teal rounded-xl flex items-center justify-center mb-5 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Comprehensive Family Care</h4>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <div className="w-12 h-12 bg-soft-teal rounded-xl flex items-center justify-center mb-5 mx-auto">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Emergency Appointments</h4>
            </div>
          </div>

          <button className="btn-primary px-10 py-4 text-lg shadow-2xl shadow-soft-teal/20 transition-all duration-300 hover:scale-105 active:scale-95">
            Schedule an Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
