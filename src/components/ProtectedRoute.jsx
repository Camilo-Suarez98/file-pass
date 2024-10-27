import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { tokenId } = useAuth();
  if (!tokenId) {
    return <Navigate to="/" />
  }

  return <>{children}</>;
};

export default ProtectedRoute;
