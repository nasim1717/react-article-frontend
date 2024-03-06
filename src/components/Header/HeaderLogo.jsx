import LWSLogo from "../../assets/logo.svg";

export default function HeaderLogo() {
  return (
    <div>
      <a href="./index.html">
        <img className="w-32" src={LWSLogo} alt="lws" />
      </a>
    </div>
  );
}
