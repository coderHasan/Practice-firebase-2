import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const createUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const handleRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handleSighOut = () => {
    return signOut(auth);
  };
  const updateUserProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    user,
    setUser,
    createUserWithGoogle,
    handleRegister,
    handleLogin,
    handleSighOut,
    updateUserProfile,
    loading,
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (current) => {
      if (current) {
        setUser(current);
      } else {
        setUser(null);
      }

      setLoading(false);

      return () => {
        unSubscribe();
      };
    });
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
