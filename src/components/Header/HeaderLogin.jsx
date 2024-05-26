import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function HeaderLogin() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    setAuth({});
    navigate("/login");
  };

  return (
    <li>
      {auth?.user ? (
        <h1
          onClick={handleLogOut}
          className="bg-slate-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-slate-700 transition-all duration-200"
        >
          LogOut
        </h1>
      ) : (
        <Link
          to={location.pathname === "/login" ? "/register" : "/login"}
          className="bg-slate-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-slate-700 transition-all duration-200"
        >
          {location.pathname === "/login" ? "Register" : "Login"}
        </Link>
      )}
    </li>
  );
}
