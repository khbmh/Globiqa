import { Link } from 'react-router';

function Login() {
  return (
    <div className="flex flex-col items-center justify-around">
      <div className="text-6xl p-4">Login!</div>
      <p>
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
