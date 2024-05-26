import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function HeaderProfile() {
  const { auth } = useAuth();

  return (
    <li className="flex items-center">
      {/* <!-- Circular Div with background color --> */}
      <Link to={`/profile/${auth?.user?.id}`}>
        <div className="avater-img bg-orange-600 text-white">
          {auth?.user?.avatar ? (
            <img
              className="rounded-full"
              src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${auth?.user?.avatar}`}
              alt="avatar"
            />
          ) : (
            <span className="capitalize ">{auth?.user?.firstName?.charAt(0)}</span>
          )}
        </div>
      </Link>

      {/* <!-- Logged-in user's name --> */}
      <Link to={`/profile/${auth?.user?.id}`}>
        <span className="ml-2 text-slate-500">
          {auth?.user?.firstName + " " + auth?.user?.lastName}
        </span>
      </Link>
      {/* <!-- Profile Image --> */}
    </li>
  );
}
