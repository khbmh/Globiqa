import { useContext } from 'react';
import { AuthContext } from '../utils/AuthProvider';
import { useLocation, Navigate, useNavigate } from 'react-router';

function PrivateRoutes({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) return <div>Loading...</div>;
  if (!user)
    return (
      <Navigate state={{ from: location.pathname }} to="/auth/login"></Navigate>
    );
  return children;
}

export default PrivateRoutes;
