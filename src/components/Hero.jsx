import { useState, useEffect } from 'react';
import heroWhitening from '../assets/hero-whitening.webp';
import heroPatient from '../assets/hero-patient.webp';
import heroFamily from '../assets/hero-family.webp';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [heroWhitening, heroPatient, heroFamily];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slideshow */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="h-full w-full object-cover"
          />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-navy-blue/30 lg:bg-navy-blue/20"></div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Your Journey to a <span className="text-soft-teal">Healthier Smile</span> Starts Here
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-lg leading-relaxed">
              Experience gentle, professional dental care tailored for your entire family. 
              Modern technology meets a compassionate touch in the heart of Abuja.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-10 py-4">
                Book Appointment
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold py-4 px-10 rounded-full transition-all duration-300">
                Our Services
              </button>
            </div>
            
            {/* Quick Stats/Trust indicators */}
            <div className="mt-12 flex gap-8">
              <div>
                <p className="text-white text-3xl font-bold">15+</p>
                <p className="text-white/70 text-sm uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-white/20"></div>
              <div>
                <p className="text-white text-3xl font-bold">5000+</p>
                <p className="text-white/70 text-sm uppercase tracking-wider">Happy Smiles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
