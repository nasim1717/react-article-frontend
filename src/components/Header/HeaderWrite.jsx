import { Link } from "react-router-dom";

export default function HeaderWrite() {
  return (
    <li>
      <Link
        to={"/create-blog"}
        className="bg-slate-600 text-white px-6 py-2 md:py-[14px] rounded-md hover:bg-slate-700 transition-all duration-200"
      >
        Write
      </Link>
    </li>
  );
}
