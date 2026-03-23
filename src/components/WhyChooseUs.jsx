import whyChooseUsBg from '../assets/why-choose-us-bg.webp';

const WhyChooseUs = () => {
  return (
    <section 
      className="relative min-h-[700px] flex items-center bg-navy-blue py-24 sm:py-32 lg:py-0"
      style={{ clipPath: 'inset(0)' }} // Essential for containing the fixed background on all devices
    >
      {/* Stagnant (Fixed) Background Layer */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `url(${whyChooseUsBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: '100%'
        }}
      ></div>

      {/* Dynamic Overlay - Optimized for mobile visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-blue/80 via-navy-blue/40 to-navy-blue/80 lg:bg-navy-blue/60 backdrop-blur-[1px] z-[1]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-soft-teal font-semibold tracking-widest uppercase text-xs sm:text-sm mb-4">Why Choose Us</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Smile is Your Greatest <span className="text-soft-teal">Asset.</span> <br className="hidden md:block" /> Trust the Experts.
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
              Join thousands of happy patients who trust our award-winning specialists for precise, beautiful, and lasting dental care.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-12">
            {[
              { title: "Top-Rated Specialists", icon: "M5 13l4 4L19 7" },
              { title: "Family-First Care", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
              { title: "24/7 Emergency Care", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                className="p-8 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30 group"
              >
                <div className="w-14 h-14 bg-soft-teal rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg shadow-soft-teal/20 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={pillar.icon} />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-white mb-2 leading-tight">{pillar.title}</h4>
              </motion.div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary px-12 py-5 text-lg font-bold shadow-2xl shadow-soft-teal/30 tracking-wide"
          >
            Schedule Appointment
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
