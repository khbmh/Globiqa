import { Link, Outlet } from 'react-router';

function AuthLayout() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="fixed top-4 left-1">
        <Link to="/">
          <h2 className="font-black text-2xl">Globiqa.</h2>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
