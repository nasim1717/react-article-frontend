import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import BlogMetaInfo from "./BlogMetaInfo";
import BlogActionDot from "./BlogactionDot";

export default function BlogCard({ blog, setActionPopUp, actionPopUp }) {
  const { auth } = useAuth();

  return (
    <div className="blog-card">
      <Link to={`/blog/${blog?.id}`}>
        <img
          className="blog-thumb"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${blog?.thumbnail}`}
          alt="thumbnail"
        />
      </Link>
      <div className="mt-2 relative">
        <Link to={`/blog/${blog?.id}`}>
          <h3 className="text-slate-600 text-xl lg:text-2xl">{blog?.title}</h3>
          <p className="mb-6 text-base text-slate-500 mt-1">{blog?.content}</p>
          <BlogMetaInfo blog={blog} />
        </Link>

        {auth?.user?.id === blog?.author?.id && (
          <BlogActionDot
            blogId={blog?.id}
            setActionPopUp={setActionPopUp}
            actionPopUp={actionPopUp}
          />
        )}
      </div>
    </div>
  );
}
