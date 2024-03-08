import { Link } from "react-router-dom";

export default function HeaderWrite() {
  return (
    <li>
      <Link
        to={"/create-blog"}
        className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
      >
        Write
      </Link>
    </li>
  );
}
