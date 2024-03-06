import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function HeaderLogin() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

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
          className="text-white/50 hover:text-white transition-all duration-200 cursor-pointer"
        >
          LogOut
        </h1>
      ) : (
        <Link to={"/login"} className="text-white/50 hover:text-white transition-all duration-200">
          Login
        </Link>
      )}
    </li>
  );
}
