import { Link } from "react-router-dom";

export default function SearchBlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog?.id}`}>
      <div className="flex gap-6 py-2">
        <img
          className="h-28 object-contain"
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${blog?.thumbnail}`}
          alt="thubnail"
        />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl font-bold">{blog?.title}</h3>
          {/* <!-- Meta Informations --> */}
          <p className="mb-6 text-sm text-slate-500 mt-1">{blog?.content}</p>
        </div>
      </div>
    </Link>
  );
}
