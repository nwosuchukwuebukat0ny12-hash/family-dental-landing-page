import { useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: "Funke A.",
    initial: "F",
    color: "bg-purple-500",
    headline: "Saved me from a sleepless night!",
    text: "I had a terrible toothache that kept me up all night, and they were able to fit me in first thing in the morning. The extraction was completely painless, and the doctor was so reassuring. I won't go anywhere else for my dental care.",
    stars: 5
  },
  {
    id: 2,
    name: "Tunde O.",
    initial: "T",
    color: "bg-blue-500",
    headline: "Professional, clean, and zero waiting time.",
    text: "What I love most is that they actually respect your time. I booked a 10:00 AM appointment and was seated in the chair by 10:05 AM. The clinic is incredibly spotless, and the equipment looks very modern. Highly recommended!",
    stars: 5
  },
  {
    id: 3,
    name: "Chika M.",
    initial: "C",
    color: "bg-amber-500",
    headline: "Got my confidence back!",
    text: "I came in for teeth whitening before a major event, and the results are fantastic. The staff is so warm and welcoming, they even made my kids feel at ease during their checkups. Best dental experience I’ve had.",
    stars: 5
  },
  {
    id: 4,
    name: "Bello K.",
    initial: "B",
    color: "bg-emerald-500",
    headline: "The most gentle dentist ever.",
    text: "I have always been terrified of the dentist, but Dr. Sarah changed that. She explained everything clearly and made sure I was comfortable the entire time. The facility is state-of-the-art!",
    stars: 5
  },
  {
    id: 5,
    name: "Ngozi E.",
    initial: "N",
    color: "bg-rose-500",
    headline: "Amazing with my kids!",
    text: "Finding a family-friendly clinic was my priority. My kids actually enjoy their checkups here. The waiting area is kid-friendly and the staff is incredibly patient and kind with them.",
    stars: 5
  },
  {
    id: 6,
    name: "Ibrahim S.",
    initial: "I",
    color: "bg-indigo-500",
    headline: "Top-tier cosmetic dentistry.",
    text: "I recently finished my veneers treatment and I am blown away by the result. The precision and attention to detail at this clinic are unmatched. Worth every kobo for this transformation!",
    stars: 5
  }
];

const Reviews = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-soft-teal font-semibold tracking-widest uppercase text-sm mb-3">Patient Testimonials</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-navy-blue leading-tight">
              Hear What Our Patients Say About <span className="text-soft-teal text-navy-blue shadow-soft-teal/10">Their Smiles</span>
            </h3>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full border border-slate-200 text-navy-blue hover:bg-soft-teal hover:text-white hover:border-soft-teal transition-all duration-300"
              aria-label="Previous Review"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full border border-slate-200 text-navy-blue hover:bg-soft-teal hover:text-white hover:border-soft-teal transition-all duration-300"
              aria-label="Next Review"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 -mx-6 px-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviews.map((review) => (
            <div 
              key={review.id}
              className="min-w-full md:min-w-[450px] snap-center"
            >
              <div className="h-full bg-medical-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-500 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-1">
                      {[...Array(review.stars)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {/* Google Logo Placeholder style */}
                    <div className="flex items-center gap-1 opacity-50 grayscale hover:grayscale-0 transition-all">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                      <span className="text-[10px] font-bold uppercase tracking-tighter">Verified</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-navy-blue mb-4">"{review.headline}"</h4>
                  <p className="text-slate-600 leading-relaxed italic">
                    {review.text}
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-100 flex items-center gap-4">
                  <div className={`w-12 h-12 ${review.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-inner`}>
                    {review.initial}
                  </div>
                  <div>
                    <p className="text-navy-blue font-bold">{review.name}</p>
                    <p className="text-xs text-slate-400 font-medium">Patient Review</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Carousel Indicator Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-navy-blue opacity-10"></div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default Reviews;
