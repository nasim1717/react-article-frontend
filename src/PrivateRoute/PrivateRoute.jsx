import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function PrivateRoute({ children }) {
  const { auth } = useAuth();

  if (auth?.user) {
    return <>{children}</>;
  }
  return <Navigate to={"/login"}></Navigate>;
}
