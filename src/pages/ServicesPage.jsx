import PageHeader from '../components/PageHeader';
import serviceLaser from '../assets/service-laser.webp';
import serviceTray from '../assets/service-tray.webp';

const detailedServices = [
  {
    category: "Cosmetic Dentistry",
    services: [
      {
        name: "Laser Whitening",
        description: "Instant results with advanced laser technology. Brighten your smile by up to 8 shades in one session.",
        price: "From $399",
        image: serviceLaser,
        features: ["60 Minute Session", "Zero Sensitivity", "Long-lasting Results"]
      },
      {
        name: "Custom Tray Whitening",
        description: "Professional-grade whitening from the comfort of your home with custom-fitted dental trays.",
        price: "From $199",
        image: serviceTray,
        features: ["Custom-fit Trays", "Professional Gel", "Convenient Home Use"]
      },
      {
        name: "Porcelain Veneers",
        description: "Transform your smile with custom-made, durable porcelain shells that look and feel natural.",
        price: "From $800/tooth",
        image: null,
        features: ["Stain Resistant", "Natural Appearance", "Minimal Invasiveness"]
      }
    ]
  },
  {
    category: "Restorative & General",
    services: [
      {
        name: "General Checkup",
        description: "Comprehensive exam, professional cleaning, and digital X-rays to maintain optimal oral health.",
        price: "$99",
        image: null,
        features: ["Full Mouth Cleaning", "Digital X-Rays", "Cancer Screening"]
      },
      {
        name: "Dental Implants",
        description: "The gold standard for tooth replacement. A permanent, secure solution for missing teeth.",
        price: "From $1,500",
        image: null,
        features: ["Natural Look & Feel", "Lifetime Solution", "Prevents Bone Loss"]
      },
      {
        name: "Invisalign",
        description: "Straighten your teeth discreetly with clear, removable aligners. No wires, no brackets.",
        price: "From $3,000",
        image: null,
        features: ["Virtually Invisible", "Removable for Eating", "Faster Results"]
      }
    ]
  }
];

const ServicesPage = () => {
  return (
    <>
      <PageHeader 
        title="Our Services & Pricing" 
        subtitle="Transparent pricing and world-class care. Explore our comprehensive dental solutions tailored to your needs."
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          {detailedServices.map((section, sIdx) => (
            <div key={sIdx} className={sIdx > 0 ? "mt-24" : ""}>
              <div className="flex items-center gap-4 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-navy-blue whitespace-nowrap">{section.category}</h2>
                <div className="h-px bg-slate-100 w-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.services.map((service, index) => (
                  <div key={index} className="group bg-medical-white rounded-3xl overflow-hidden border border-slate-100 flex flex-col transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                    {service.image && (
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.name} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                    )}
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-navy-blue">{service.name}</h3>
                        <span className="text-soft-teal font-bold">{service.price}</span>
                      </div>
                      <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-xs font-medium text-navy-blue/70">
                            <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-4 rounded-xl bg-white border border-slate-100 text-navy-blue font-bold text-sm hover:bg-soft-teal hover:text-white hover:border-soft-teal transition-all duration-300 mt-auto">
                        Learn More & Book
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Disclaimer */}
      <section className="py-12 bg-medical-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-xs italic">
            * Prices listed are starting estimates and may vary based on individual cases and complexity. Final pricing is determined after a professional consultation.
          </p>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
