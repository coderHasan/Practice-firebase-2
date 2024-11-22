import { useContext } from "react";
import { AuthContext } from "../utils/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRout = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return <>{children}</>;
};

export default PrivetRout;
