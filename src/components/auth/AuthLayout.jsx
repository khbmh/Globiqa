import { Outlet } from 'react-router';

function AuthLayout() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
