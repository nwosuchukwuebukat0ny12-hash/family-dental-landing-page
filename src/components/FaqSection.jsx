import { useState } from 'react';

const faqs = [
  {
    question: "Do you accept dental insurance?",
    answer: "Yes, we accept most major insurance providers including AXA Mansard, Reliance HMO, and Hygeia. We also offer flexible payment plans for treatments not covered by insurance."
  },
  {
    question: "How much does teeth whitening cost?",
    answer: "Our professional in-office laser whitening starts from $399. We also offer custom take-home tray kits starting from $199. Prices may vary based on your specific needs."
  },
  {
    question: "Is dental treatment painful?",
    answer: "We prioritize pain-free dentistry. We use advanced local anesthetics and offer sedation options for anxious patients to ensure a completely comfortable experience."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend a professional checkup and cleaning every 6 months to prevent major issues and maintain optimal oral health."
  },
  {
    question: "Do you handle dental emergencies?",
    answer: "Absolutely. We offer 24/7 emergency care for issues like severe toothaches, broken teeth, or lost fillings. Call our emergency line immediately."
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Structured Data for SEO (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-soft-teal font-semibold tracking-widest uppercase text-sm mb-3">Common Questions</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6">
            Everything You Need to <span className="text-soft-teal">Know</span>
          </h3>
          <p className="text-lg text-slate-600">
            Find answers to the most frequent questions about our treatments, pricing, and insurance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${activeIndex === index ? 'border-soft-teal bg-soft-teal/5 shadow-lg shadow-soft-teal/5' : 'border-slate-100 bg-medical-white'}`}
            >
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center"
              >
                <span className={`text-lg font-bold transition-colors ${activeIndex === index ? 'text-navy-blue' : 'text-navy-blue/80'}`}>
                  {faq.question}
                </span>
                <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-soft-teal' : 'text-navy-blue/30'}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-6">Still have questions?</p>
          <a 
            href="tel:+2349012286126" 
            className="inline-flex items-center gap-3 text-navy-blue font-bold hover:text-soft-teal transition-colors"
          >
            <div className="w-10 h-10 bg-soft-teal/10 rounded-full flex items-center justify-center text-soft-teal">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            Talk to our specialist: +234 901 228 6126
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
