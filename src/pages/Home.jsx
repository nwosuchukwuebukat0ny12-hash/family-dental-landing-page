import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import MeetDoctor from '../components/MeetDoctor';
import ResultsGallery from '../components/ResultsGallery';
import Reviews from '../components/Reviews';
import FaqSection from '../components/FaqSection';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      <WhyChooseUs />
      <Services />
      <MeetDoctor />
      <ResultsGallery />
      <Reviews />
      <FaqSection />
    </>
  );
};

export default Home;
