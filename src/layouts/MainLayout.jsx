import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MobileStickyCTA from '../components/MobileStickyCTA';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col pb-20 lg:pb-0">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
};

export default MainLayout;
