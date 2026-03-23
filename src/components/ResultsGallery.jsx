import { useState, useRef } from 'react';

const ResultsGallery = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (e) => {
    if (!isResizing || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.type === 'touchmove' ? e.touches[0].pageX - rect.left : e.clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(position);
  };

  const cases = [
    {
      title: "In-Office Laser Whitening",
      description: "8 shades brighter in a single 60-minute session.",
      tag: "Whitening",
      before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Complete Smile Makeover",
      description: "Correction of alignment and brightness using porcelain veneers.",
      tag: "Veneers",
      before: "https://images.unsplash.com/photo-1593022356769-11f09279a05a?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Advanced Periodontal Care",
      description: "Deep cleaning treatment to restore gum health and aesthetics.",
      tag: "Cleaning",
      before: "https://images.unsplash.com/photo-1460676746866-c5b2ff24aa15?auto=format&fit=crop&q=80&w=800",
      after: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="results" className="py-24 bg-medical-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-soft-teal font-semibold tracking-widest uppercase text-sm mb-3">Smile Gallery</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-navy-blue mb-6">
            Real Transformations, <span className="text-soft-teal">Real Smiles</span>
          </h3>
          <p className="text-lg text-slate-600">
            See the life-changing results of our professional dental treatments. Every smile is unique, and every result is crafted with precision.
          </p>
        </div>

        {/* Interactive Main Slider */}
        <div className="max-w-4xl mx-auto mb-20">
          <div 
            ref={containerRef}
            className="relative h-[400px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white select-none cursor-ew-resize"
            onMouseMove={handleMove}
            onTouchMove={handleMove}
            onMouseDown={() => setIsResizing(true)}
            onMouseUp={() => setIsResizing(false)}
            onMouseLeave={() => setIsResizing(false)}
            onTouchStart={() => setIsResizing(true)}
            onTouchEnd={() => setIsResizing(false)}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200" 
                alt="After Whitening" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-soft-teal text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">After Treatment</div>
            </div>

            {/* Before Image (Foreground Clip) */}
            <div 
              className="absolute inset-0 transition-none"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200" 
                alt="Before Whitening" 
                className="w-full h-full object-cover grayscale-[0.3] sepia-[0.2]"
              />
              <div className="absolute bottom-6 left-6 bg-navy-blue/80 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Before Treatment</div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute inset-y-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-soft-teal">
                <svg className="w-6 h-6 text-soft-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l-4 3 4 3m8-6l4 3-4 3" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-slate-400 text-sm italic font-medium">
            Drag the handle to see the whitening transformation
          </p>
        </div>

        {/* Other Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cases.map((item, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="flex h-48">
                <div className="w-1/2 h-full relative overflow-hidden">
                  <img src={item.before} alt="Before" className="w-full h-full object-cover grayscale-[0.3]" />
                  <div className="absolute top-2 left-2 bg-black/50 text-white text-[8px] font-bold uppercase px-2 py-1 rounded">Before</div>
                </div>
                <div className="w-1/2 h-full relative overflow-hidden border-l-2 border-white">
                  <img src={item.after} alt="After" className="w-full h-full object-cover" />
                  <div className="absolute top-2 right-2 bg-soft-teal text-white text-[8px] font-bold uppercase px-2 py-1 rounded">After</div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-soft-teal font-bold text-[10px] uppercase tracking-widest mb-2 block">{item.tag} Case</span>
                <h4 className="text-xl font-bold text-navy-blue mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="btn-primary px-10 py-4 shadow-xl shadow-soft-teal/20">
            View All Clinical Cases
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResultsGallery;
