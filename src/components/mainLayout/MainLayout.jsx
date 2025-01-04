import { Outlet } from 'react-router';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

function MainLayout() {
  return (
    <div 
    className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className="container mx-auto text-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
