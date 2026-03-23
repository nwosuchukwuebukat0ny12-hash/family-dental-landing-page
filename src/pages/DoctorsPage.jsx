import PageHeader from '../components/PageHeader';
import doctorPortrait from '../assets/doctor-portrait.webp';

const doctors = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Chief Dental Officer",
    specialty: "Cosmetic & Restorative Dentistry",
    image: doctorPortrait,
    bio: "With over 15 years of experience, Dr. Sarah Jenkins focuses on transforming smiles through advanced cosmetic procedures."
  },
  {
    name: "Dr. James Wilson",
    role: "Senior Orthodontist",
    specialty: "Orthodontics & Dentofacial Orthopedics",
    image: null, // Placeholder
    bio: "Dr. Wilson specializes in modern alignment techniques, including clear aligners and traditional braces for all ages."
  },
  {
    name: "Dr. Maria Garcia",
    role: "Pediatric Specialist",
    specialty: "Pediatric Dentistry",
    image: null, // Placeholder
    bio: "Dr. Maria is dedicated to making dental visits a fun and positive experience for our youngest patients."
  }
];

const DoctorsPage = () => {
  return (
    <>
      <PageHeader 
        title="Our Specialist Doctors" 
        subtitle="Meet the world-class team of experts dedicated to your family's oral health and beautiful smiles."
      />
      
      <section className="py-24 bg-medical-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {doctors.map((doctor, index) => (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-xl border border-slate-100 group hover:-translate-y-2 transition-all duration-500">
                <div className="h-80 bg-navy-blue/5 relative overflow-hidden">
                  {doctor.image ? (
                    <img 
                      src={doctor.image} 
                      alt={doctor.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-navy-blue/20">
                      <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy-blue/80 to-transparent p-8">
                    <p className="text-soft-teal font-bold text-sm uppercase tracking-widest mb-1">{doctor.role}</p>
                    <h4 className="text-white text-2xl font-bold">{doctor.name}</h4>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-soft-teal"></span>
                    <span className="text-navy-blue font-semibold text-sm uppercase tracking-wider">{doctor.specialty}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {doctor.bio}
                  </p>
                  <button className="w-full py-4 rounded-xl border-2 border-slate-100 text-navy-blue font-bold hover:bg-navy-blue hover:text-white hover:border-navy-blue transition-all duration-300">
                    View Full Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-navy-blue text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-soft-teal/10 skew-x-12 transform translate-x-1/2"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-soft-teal font-bold uppercase tracking-widest text-sm mb-6">Why Trust Our Doctors?</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-8">Continuous Excellence in Modern Dentistry</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-soft-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Board Certified</h4>
                  <p className="text-white/60 text-sm">Every specialist on our team is fully board-certified in their respective fields.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-soft-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.641.32a2 2 0 01-1.815 0l-.641-.32a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-.35.35a2 2 0 000 2.828l.707.707a2 2 0 002.828 0l.707-.707a2 2 0 012.828 0l.707.707a2 2 0 002.828 0l.707-.707a2 2 0 012.828 0l.707.707a2 2 0 002.828 0l.707-.707a2 2 0 000-2.828l-.35-.35z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Advanced Tech</h4>
                  <p className="text-white/60 text-sm">Our doctors utilize the latest 3D imaging and laser technology for precise results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorsPage;
