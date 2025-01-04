import { Link } from 'react-router';

function Register() {
  return (
    <div className="flex flex-col items-center justify-around">
      <div className="text-6xl p-4">Register!</div>
      <p>
        Already a user?{' '}
        <Link to="/auth/login" className="underline">
          Login Here
        </Link>
        .
      </p>
    </div>
  );
}

export default Register;
