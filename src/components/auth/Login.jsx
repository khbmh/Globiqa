import { Link } from 'react-router';
import PageTitle from '../utils/PageTitle';

function Login() {
  return (
    <div className="flex flex-col items-center justify-around">
      <PageTitle title="Login!" />
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
