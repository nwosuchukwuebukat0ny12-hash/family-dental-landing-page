import { useState } from 'react';
import PageHeader from '../components/PageHeader';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
    service: 'general'
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
      setFormData({ name: '', email: '', message: '', phone: '', service: 'general' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <>
      <PageHeader 
        title="Contact Us" 
        subtitle="Have questions? Our friendly team is here to help you schedule an appointment or answer any clinical inquiries."
      />
      <div className="py-16 bg-medical-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-soft-teal font-semibold tracking-widest uppercase text-sm mb-3">Get in Touch</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-blue mb-6">Book Your Appointment</h1>
            <p className="text-lg text-slate-600">
              We are here to answer any questions you may have about our services. Reach out to us and we'll respond as soon as we can.
            </p>
          </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="lg:w-1/3 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-navy-blue mb-6">Clinic Info</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-soft-teal/10 rounded-full flex items-center justify-center text-soft-teal shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Address</h4>
                    <p className="text-slate-600 mt-1">123 Wellness Avenue<br/>Abuja, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-soft-teal/10 rounded-full flex items-center justify-center text-soft-teal shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Phone</h4>
                    <p className="text-slate-600 mt-1">+234 800 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-soft-teal/10 rounded-full flex items-center justify-center text-soft-teal shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-blue">Email</h4>
                    <p className="text-slate-600 mt-1">hello@familydental.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <h4 className="font-semibold text-navy-blue mb-4">Opening Hours</h4>
                <div className="space-y-2 text-slate-600 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-medium text-navy-blue">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium text-navy-blue">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium text-soft-teal">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:w-2/3">
            <div className="bg-navy-blue rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-soft-teal/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-soft-teal/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                {submitted ? (
                  <div className="bg-soft-teal/20 border border-soft-teal/30 rounded-2xl p-12 text-center animate-fade-in-up h-full flex flex-col items-center justify-center">
                    <svg className="w-20 h-20 text-soft-teal mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-3xl font-bold text-white mb-4">Request Received!</h3>
                    <p className="text-white/80 text-lg">Thank you for reaching out. Our team will contact you shortly to confirm your appointment details.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">Full Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-soft-teal/50 focus:bg-white/10 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">Email Address *</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-soft-teal/50 focus:bg-white/10 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">Phone Number</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-soft-teal/50 focus:bg-white/10 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm font-medium mb-2">Service of Interest</label>
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-soft-teal/50 focus:bg-white/10 transition-colors appearance-none"
                        >
                          <option value="general" className="text-navy-blue">General Checkup</option>
                          <option value="whitening" className="text-navy-blue">Teeth Whitening</option>
                          <option value="cleaning" className="text-navy-blue">Deep Cleaning</option>
                          <option value="emergency" className="text-navy-blue">Emergency Care</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white/80 text-sm font-medium mb-2">Additional Notes or Questions</label>
                      <textarea 
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-soft-teal/50 focus:bg-white/10 transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button 
                      disabled={isSubmitting}
                      className="w-full btn-primary py-5 mt-4 flex items-center justify-center gap-3 text-lg font-semibold"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-6 w-6 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Submit Request
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
