import { useAuth } from "../../hooks/useAuth";
import HeaderLogin from "./HeaderLogin";
import HeaderLogo from "./HeaderLogo";
import HeaderProfile from "./HeaderProfile";
import HeaderSearch from "./HeaderSearch";
import HeaderWrite from "./HeaderWrite";

export default function Header() {
  const { auth } = useAuth();
  return (
    <header>
      <nav className="container">
        {/* <!-- Logo --> */}
        <HeaderLogo />
        <div>
          <ul className="flex items-center space-x-5">
            <HeaderWrite />
            <HeaderSearch />
            <HeaderLogin />
            {auth?.user && <HeaderProfile />}
          </ul>
        </div>
      </nav>
    </header>
  );
}
