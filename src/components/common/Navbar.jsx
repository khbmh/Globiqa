import { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../utils/AuthProvider';

function Navbar() {
  const { loading } = useContext(AuthContext);
  console.log('loading:', loading);
  return (
    <div className="py-2 px-1 flex justify-between items-center w-full">
      <div className=" lg:w-[20vw]">
        <Link to="/">
          <h1 className="font-black text-2xl">Globiqa.</h1>
        </Link>
      </div>
      <div className="flex justify-center gap-8 *:px-4 *:py-2 *:rounded-lg lg:w-[60vw]">
        <NavLink to="all-visas">All Visas</NavLink>
        <NavLink to="add-visa">Add Visa</NavLink>
        <NavLink to="my/added-visas">Added Visas</NavLink>
        <NavLink to="my/applied-visas">Applied Visas</NavLink>
      </div>
      <div className="flex justify-end lg:w-[20vw]">
        <Link to="auth/login">
          <button className="btn btn-ghost border-white/30">login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
