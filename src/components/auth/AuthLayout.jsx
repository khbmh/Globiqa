import { Link, Outlet } from 'react-router';

function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="fixed top-4 left-1">
        <Link to="/">
          <h2 className="font-black text-2xl">Globiqa.</h2>
        </Link>
      </div>
      <div className="w-full h-[5vh] bg-transparent"></div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
