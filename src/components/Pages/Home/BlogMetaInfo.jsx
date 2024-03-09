import { Link } from "react-router-dom";
import { getFormateDate } from "../../../utils/getFormateDate";

export default function BlogMetaInfo({ blog }) {
  return (
    <div className="flex justify-between items-center">
      <Link to={`/profile/${blog?.author?.id}`}>
        <div className="flex items-center capitalize space-x-2">
          <div className="avater-img bg-indigo-600 text-white ">
            {blog?.author?.avatar ? (
              <img
                className="rounded-full"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
                  blog?.author?.avatar
                }`}
                alt="avatar"
              />
            ) : (
              <span className="capitalize">{blog?.author?.firstName.charAt(0)}</span>
            )}
          </div>

          <div>
            <h5 className="text-slate-500 text-sm">
              {blog?.author?.firstName + " " + blog?.author?.lastName}
            </h5>
            <div className="flex items-center text-xs text-slate-700">
              <span>{getFormateDate(blog?.createdAt)}</span>
            </div>
          </div>
        </div>
      </Link>

      <div className="text-sm px-2 py-1 text-slate-700">
        <span>{blog?.likes?.length} Likes</span>
      </div>
    </div>
  );
}
