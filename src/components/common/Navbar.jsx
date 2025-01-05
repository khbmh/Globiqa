import { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../utils/AuthProvider';

function Navbar() {
  const nickName = (name) => {
    const firstWord = name.split(' ')[0];

    const formattedFirstWord =
      firstWord.charAt(0).toUpperCase() + firstWord.slice(1).toLowerCase() + '.';

    return formattedFirstWord;
  };
  const { user, loading } = useContext(AuthContext);
  return (
    <div className="py-2 px-1 flex justify-between items-center w-full">
      <div className=" w-[20vw]">
        <Link to="/">
          <h1 className="font-black text-2xl">Globiqa.</h1>
        </Link>
      </div>
      <p className="flex lg:hidden justify-center gap-8 *:px-4 *:py-2 *:rounded-lg w-[60vw]">
        Menu
      </p>
      <div className="hidden lg:flex justify-center gap-8 *:px-4 *:py-2 *:rounded-lg w-[60vw]">
        <NavLink to="all-visas">All Visas</NavLink>
        <NavLink to="add-visa">Add Visa</NavLink>
        <NavLink to="my/added-visas">Added Visas</NavLink>
        <NavLink to="my/applied-visas">Applied Visas</NavLink>
      </div>
      <div className="flex justify-end w-[20vw]">
        {loading ? (
          <div>...</div>
        ) : !user ? (
          <Link to="auth/login">
            <button className="btn btn-ghost border-white/30">login</button>
          </Link>
        ) : (
          <Link to="/my" className="p-1 text-xl text-rose-200">
            {nickName(user.displayName)} 
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
