import { Link } from 'react-router';
import PageTitle from '../utils/PageTitle';

function Error() {
  return (
    <div className="flex flex-col justify-around items-center h-screen py-[30vh] lg:py-36">
      <PageTitle title="Oops... " />
      <div className="text-center">
        <h1 className="text-5xl lg:text-8xl opacity-50 font-bold">Error 404</h1>
        <h1 className="text-3xl lg:text-6xl opacity-50 font-bold">
          Page Not Found
        </h1>
      </div>
      <Link to="/">
        <button className="btn btn-ghost border-white/30">Back To Home</button>
      </Link>
    </div>
  );
}

export default Error;
