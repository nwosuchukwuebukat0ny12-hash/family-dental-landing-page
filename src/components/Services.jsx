import { useState } from 'react';
import serviceLaser from '../assets/service-laser.png';
import serviceTray from '../assets/service-tray.png';

const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-soft-teal font-semibold tracking-widest uppercase text-sm mb-3 text-center">Our Services</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6 text-center">
            Professional Whitening & Care
          </h3>
          <p className="text-lg text-slate-600 text-center">
            Choose the best whitening treatment for your lifestyle or book a consultation today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Laser Whitening */}
          <div className="group bg-medical-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <img 
                src={serviceLaser} 
                alt="Laser Whitening" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-soft-teal/10 text-soft-teal p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                <h4 className="text-xl font-bold text-navy-blue">Laser Whitening</h4>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Experience instant results with our advanced laser technology. Brighten your smile by up to 8 shades in just one session.
              </p>
              <button className="text-soft-teal font-semibold flex items-center gap-2 group/btn">
                <span>Learn More</span>
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 2: Custom Tray Whitening */}
          <div className="group bg-medical-white rounded-3xl overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="h-64 overflow-hidden">
              <img 
                src={serviceTray} 
                alt="Custom Tray Whitening" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-soft-teal/10 text-soft-teal p-2 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
                <h4 className="text-xl font-bold text-navy-blue">Tray Whitening</h4>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Professional whitening from the comfort of your home. Custom-fitted trays designed for maximum comfort and even results.
              </p>
              <button className="text-soft-teal font-semibold flex items-center gap-2 group/btn">
                <span>Learn More</span>
                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 3: Booking Form */}
          <div className="bg-navy-blue rounded-3xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-soft-teal/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-soft-teal/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h4 className="text-2xl font-bold text-white mb-2">Book Appointment</h4>
              <p className="text-white/70 mb-8">Send us a message and we'll get back to you shortly.</p>

              {submitted ? (
                <div className="bg-soft-teal/20 border border-soft-teal/30 rounded-2xl p-6 text-center animate-fade-in-up">
                  <svg className="w-12 h-12 text-soft-teal mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-white font-semibold">Message Sent!</p>
                  <p className="text-white/60 text-sm">We'll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-soft-teal/50 transition-colors"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email Address" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-soft-teal/50 transition-colors"
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      placeholder="How can we help?" 
                      rows="3"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-soft-teal/50 transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 mt-2 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : 'Book Now'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
