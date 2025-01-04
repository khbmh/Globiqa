import { useContext } from 'react';
import { Outlet, useLocation } from 'react-router';
import { AuthContext } from '../utils/AuthProvider';

function MyLayout() {
  const location = useLocation();
  const { user, handleSingOut } = useContext(AuthContext);
  if (!user) return <div>loading...</div>;
  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center gap-6 my-10">
        <img
          src={user?.imageUrl}
          alt=""
          className="w-[100px] h-[100px] rounded-badge object-cover"
        />
        <h1 className="-mt-4 font-semibold text-4xl">{user?.displayName}</h1>
        <h5 className="-mt-4 text-base opacity-60">{user?.email}</h5>
        {location.pathname === '/my' && (
          <button
            onClick={handleSingOut}
            className="btn text-xs font-thin bg-transparent hover:bg-transparent hover:border-none"
          >
            Logout
          </button>
        )}
      </div>
      <Outlet />
    </div>
  );
}

export default MyLayout;
