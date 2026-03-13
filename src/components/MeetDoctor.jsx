import doctorPortrait from '../assets/doctor-portrait.png';

const MeetDoctor = () => {
  return (
    <section id="about" className="py-24 bg-medical-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Asymmetric Image Layout */}
          <div className="lg:w-1/2 relative">
            {/* Decorative background shape */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-soft-teal/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-navy-blue/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="relative">
              {/* Main Image with custom border radius */}
              <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform lg:-rotate-2 transition-transform duration-500 hover:rotate-0">
                <img 
                  src={doctorPortrait} 
                  alt="Dr. Sarah Jenkins" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 animate-fade-in-up">
                <p className="text-soft-teal text-4xl font-bold">15+</p>
                <p className="text-navy-blue font-semibold text-sm uppercase tracking-wider">Years of <br/>Excellence</p>
              </div>

              {/* Float Card: Credentials */}
              <div className="absolute top-10 -left-6 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 hidden md:block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-soft-teal rounded-full flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-navy-blue font-bold text-sm">Board Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Bio */}
          <div className="lg:w-1/2">
            <h2 className="text-soft-teal font-semibold tracking-widest uppercase text-sm mb-3">Meet the Doctor</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy-blue mb-8 leading-tight">
              A Healthier Smile Starts with a <span className="text-soft-teal">Personal Touch</span>
            </h3>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Hello, I'm **Dr. Sarah Jenkins**, founder of The Family Dental Clinic. My mission is to provide high-quality dental care in an environment that feels as welcoming as your own home.
              </p>
              <p>
                With over 15 years of experience in advanced restorative and cosmetic dentistry, I believe that modern technology should never come at the expense of patient comfort. We take the time to listen, explain, and ensure you feel confident at every step of your journey.
              </p>
              
              <blockquote className="border-l-4 border-soft-teal pl-6 italic text-navy-blue font-medium text-xl my-8">
                "I believe every smile tells a story, and my job is to make sure it's a confident one."
              </blockquote>
            </div>

            {/* Trust Badges */}
            <div className="mt-10 pt-10 border-t border-slate-200">
              <p className="text-navy-blue/60 font-semibold text-sm uppercase tracking-widest mb-6">Professional Memberships</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-navy-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-navy-blue font-bold text-xs italic">ADA</span>
                  </div>
                  <span className="text-xs font-bold text-navy-blue">American Dental <br/>Association</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-navy-blue/10 rounded-full flex items-center justify-center">
                    <span className="text-navy-blue font-bold text-xs italic">AAED</span>
                  </div>
                  <span className="text-xs font-bold text-navy-blue">Academy of <br/>Esthetic Dentistry</span>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-10">
              <div className="text-3xl font-serif text-navy-blue/30 select-none italic">
                Dr. Sarah Jenkins
              </div>
              <p className="text-sm text-slate-400 font-medium tracking-wide">Chief Dental Officer</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MeetDoctor;
