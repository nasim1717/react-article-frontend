import { Link } from "react-router-dom";
import { getFormateDate } from "../../../utils/getFormateDate";
import { useAuth } from "../../../hooks/useAuth";

export default function BlogMetaInfo({ blog }) {
  const { auth } = useAuth();
  return (
    <div className="flex justify-between items-center">
      <Link to={`/profile/${blog?.author?.id}`}>
        <div className="flex items-center capitalize space-x-2">
          <div className="avater-img bg-indigo-600 text-white ">
            {auth?.user?.avatar ? (
              <img
                className="rounded-full"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${auth?.user?.avatar}`}
                alt="avatar"
              />
            ) : (
              <span className="capitalize">{blog?.author?.firstName?.charAt(0)}</span>
            )}
          </div>

          <div>
            <h5 className="text-slate-500 text-sm">
              {blog?.author?.firstName + " " + blog?.author?.lastName}
            </h5>
            <div className="flex items-center text-xs text-slate-500">
              <span>{getFormateDate(blog?.createdAt)}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="text-sm px-2 py-1 text-slate-500">
        <span>{blog?.likes?.length} Likes</span>
      </div>
    </div>
  );
}
