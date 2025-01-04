import { Link, useLocation } from 'react-router';
import PageTitle from '../utils/PageTitle';
import { useContext } from 'react';
import { AuthContext } from '../utils/AuthProvider';

function Login() {
  const { signInWithGoogle } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-8 items-center justify-around">
      <PageTitle title="Login!" />
      <div
        onClick={signInWithGoogle}
        className="text-lg px-4 py-2 bg-white/10 rounded-full"
      >
        <button className="flex items-center gap-2">
          <p>Login with</p>
          <img
            className="w-16 mt-1"
            src="https://pngimg.com/d/google_PNG19644.png"
            alt="google icon"
          />
        </button>
      </div>
      <p className="text-sm">
        Not a user?{' '}
        <Link to="/auth/register" className="underline">
          Register Here
        </Link>
        .
      </p>
    </div>
  );
}

export default Login;
