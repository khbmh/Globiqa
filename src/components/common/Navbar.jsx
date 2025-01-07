import { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../utils/AuthProvider';

function Navbar() {
  const { user, loading, handleMenuVisible, menuVisible } =
    useContext(AuthContext);
  const nickName = (name) => {
    const firstWord = name.split(' ')[0];

    const formattedFirstWord =
      firstWord.charAt(0).toUpperCase() +
      firstWord.slice(1).toLowerCase() +
      '.';

    return formattedFirstWord;
  };

  return (
    <div className="fixed top-0 backdrop-blur-sm py-2 px-1 flex justify-between items-center w-full">
      
      <div className=" lg:w-[20vw]">
        <Link to="/">
          <h1 className="font-black text-2xl">Globiqa.</h1>
        </Link>
      </div>
      <div className="flex justify-end lg:justify-center w-[60vw]">
        <p
          onClick={handleMenuVisible}
          className="lg:hidden cursor-pointer justify-end p-1"
        >
          Menu
        </p>
        <div
          className={`${
            menuVisible ? 'active' : ''
          }  left-0 h-screen miniNav w-screen absolute bg-black lg:hidden flex-col items-center justify-around gap-6 z-30`}
        >
          <div className="flex gap-3 flex-col items-center text-2xl justify-around *:mx-2 *:px-2 *:py-2 *:rounded-lg">
            <NavLink
              onClick={() => {
                handleMenuVisible();
              }}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => {
                handleMenuVisible();
              }}
              to="add-visa"
            >
              Add Visa
            </NavLink>
            <NavLink
              onClick={() => {
                handleMenuVisible();
              }}
              to="all-visas"
            >
              All Visas
            </NavLink>
            <NavLink
              onClick={() => {
                handleMenuVisible();
              }}
              to="my/added-visas"
            >
              Added Visas
            </NavLink>
            <NavLink
              onClick={() => {
                handleMenuVisible();
              }}
              to="my/applied-visas"
            >
              Applied Visas
            </NavLink>
          </div>

          <div className="-mt-[120px] pb-16">
            <button
              onClick={() => {
                handleMenuVisible();
              }}
              className="text-8xl font-black miniNavBtn"
            >
              ✕
            </button>
          </div>

          <div className="">
            {loading ? (
              <div>...</div>
            ) : !user ? (
              <Link
                onClick={() => {
                  handleMenuVisible();
                }}
                to="auth/login"
              >
                <button className="px-4 py-2 mt-4 bg-white/20 border border-transparent hover:border-white/20 hover:bg-white/10 text-xl text-white rounded-xl">
                  Login
                </button>
              </Link>
            ) : (
              <Link
                onClick={() => {
                  handleMenuVisible();
                }}
                to="/my"
                className="p-1 bg-white/10 text-xl text-rose-200"
              >
                👋🏻 {nickName(user.displayName)}
              </Link>
            )}
          </div>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row justify-center gap-1 lg:gap-8 *:px-4 *:py-2 *:rounded-lg ">
          <NavLink to="all-visas">All Visas</NavLink>
          <NavLink to="add-visa">Add Visa</NavLink>
          <NavLink to="my/added-visas">Added Visas</NavLink>
          <NavLink to="my/applied-visas">Applied Visas</NavLink>
        </div>
      </div>
      <div className="hidden lg:flex justify-end w-[20vw]">
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

/*
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
*/
