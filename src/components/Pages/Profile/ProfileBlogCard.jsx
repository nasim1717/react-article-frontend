import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { getFormateDate } from "../../../utils/getFormateDate";
import ProfileBlogActionDot from "./ProfileBlogActionDot";

export default function ProfileBlogCard({ blog, setActionPopUp, actionPopUp }) {
  const { auth } = useAuth();
  return (
    <div className="blog-card">
      <Link to={`/blog/${blog?.id}`}>
        <img
          className="blog-thumb"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${blog?.thumbnail}`}
          alt="thubnail"
        />
      </Link>
      <div className="mt-2 relative">
        <Link to={`/blog/${blog?.id}`}>
          <h3 className="text-slate-600 text-xl lg:text-2xl">{blog?.title}</h3>
          <p className="mb-6 text-base text-slate-500 mt-1">{blog?.content}</p>
        </Link>
        <Link to={`/blog/${blog?.id}`}>
          {" "}
          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-orange-600 text-white">
                {auth?.user?.avatar ? (
                  <img
                    className="rounded-full"
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
                      auth?.user?.avatar
                    }`}
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

            <div className="text-sm px-2 py-1 text-slate-500">
              <span>{blog?.likes?.length} Likes</span>
            </div>
          </div>
        </Link>

        {auth?.user?.id === blog?.author?.id && (
          <ProfileBlogActionDot
            setActionPopUp={setActionPopUp}
            actionPopUp={actionPopUp}
            blogId={blog?.id}
          />
        )}
      </div>
    </div>
  );
}
