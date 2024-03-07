import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import BlogMetaInfo from "./BlogMetaInfo";
import BlogActionDot from "./BlogactionDot";

export default function BlogCard({ blog }) {
  const { auth } = useAuth();
  return (
    <Link to={`/blog/${blog?.id}`}>
      <div className="blog-card">
        <img
          className="blog-thumb"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${blog?.thumbnail}`}
          alt="thumbnail"
        />
        <div className="mt-2 relative">
          <h3 className="text-slate-300 text-xl lg:text-2xl">{blog?.title}</h3>
          <p className="mb-6 text-base text-slate-500 mt-1">{blog?.content}</p>
          <BlogMetaInfo blog={blog} />
          {auth?.user?.id === blog?.author?.id && <BlogActionDot authorId={blog?.auhor?.id} />}
        </div>
      </div>
    </Link>
  );
}
