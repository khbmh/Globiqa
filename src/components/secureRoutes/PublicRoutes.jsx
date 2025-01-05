import { useContext } from 'react';
import { AuthContext } from '../utils/AuthProvider';
import { Navigate, useLocation } from 'react-router';

function PublicRoutes({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>loading...</div>;
  if (!user) {
    return children;
  }
  return (
    <Navigate to={location.state ? `${location.state.from}` : '/my'}></Navigate>
  );
}

export default PublicRoutes;
