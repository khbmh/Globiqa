import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';
import toast, { Toaster } from 'react-hot-toast';

export const AuthContext = createContext(null);
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        // const user = userCredential.user;
        // setUser(user);
        toast.success('Logged in successfully');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, ' ', errorMessage);
      });
  };
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        toast.success('Logged out successfully');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, ' ', errorMessage);
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    signInWithGoogle,
    handleSingOut,
  };
  return (
    <AuthContext.Provider value={authData}>
      {children}
      <Toaster />
    </AuthContext.Provider>
  );
}

export default AuthProvider;
