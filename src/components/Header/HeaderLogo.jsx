import { Link } from "react-router-dom";
import LWSLogo from "../../assets/logo.svg";

export default function HeaderLogo() {
  return (
    <div>
      <Link to={"/"}>
        <img className="w-32" src={LWSLogo} alt="lws" />
      </Link>
    </div>
  );
}
