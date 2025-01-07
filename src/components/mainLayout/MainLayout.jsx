import { Outlet } from 'react-router';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import { useContext } from 'react';
import { AuthContext } from '../utils/AuthProvider';

function MainLayout() {
  const { menuVisible } = useContext(AuthContext);
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <div className='w-full h-[8vh]'></div>
      {!menuVisible && (
        <div className="container mx-auto flex items-center justify-center min-h-[50vh] text-center">
          <Outlet />
        </div>
      )}
      {!menuVisible && <Footer />}
    </div>
  );
}

export default MainLayout;
