import { Link, NavLink } from 'react-router';

function Navbar() {
  return (
    <div className="py-2 px-1 flex justify-between items-center w-full">
      <div className=" lg:w-[20vw]">
        <Link to="/" className="font-black text-2xl">
          <h1>Globiqa.</h1>
        </Link>
      </div>
      <div className="flex justify-center gap-8 *:px-4 *:py-2 *:rounded-lg lg:w-[60vw]">
        <NavLink to="about"></NavLink>
        <NavLink to="all-visas">All Visas</NavLink>
        <NavLink to="add-visa">Add Visa</NavLink>
        <NavLink to="my/added-visas">Added Visas</NavLink>
        <NavLink to="my/applied-visas">Applied Visas</NavLink>
      </div>
      <div className="flex justify-end lg:w-[20vw]">
        <Link>
          <button className="btn btn-ghost border-white/30">login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
