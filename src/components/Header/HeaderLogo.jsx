import { Link } from "react-router-dom";
import LWSLogo from "../../assets/logo.png";

export default function HeaderLogo() {
  return (
    <div>
      <Link to={"/"}>
        <img className="w-32 rounded-md" src={LWSLogo} alt="lws" />
      </Link>
    </div>
  );
}
