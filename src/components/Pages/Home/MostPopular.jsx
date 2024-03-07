import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { actions } from "../../../actions";
import { useAuth } from "../../../hooks/useAuth";
import { usePopularBlogs } from "../../../hooks/usePopularBlogs";

export default function MostPopular() {
  const { popularBlogs, loading, error, dispatch } = usePopularBlogs();
  const { setAuth } = useAuth();

  useEffect(() => {
    const fetchPopularBlogs = async () => {
      dispatch({ type: actions.popularBlogs.POPULAR_DATA_FETCHING });
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/blogs/popular`);

        if (response.status === 200) {
          const data = response?.data?.blogs;
          dispatch({ type: actions.popularBlogs.POPULAR_DATA_FETCHED, payload: { data } });
        }
      } catch (error) {
        dispatch({ type: actions.popularBlogs.POPULAR_DATA_ERROR, payload: { error: true } });
        setAuth({});
        localStorage.removeItem("auth");
      }
    };
    fetchPopularBlogs();
  }, [dispatch]);

  let content = null;
  if (loading && !error) {
    content = <div>Loading...</div>;
  }
  if (!error && !loading && popularBlogs?.length === 0) {
    content = <div className="text-slate-400 font-medium">No popular blogs</div>;
  }
  if (!error && !loading && popularBlogs?.length > 0) {
    content = popularBlogs.map((data) => (
      <li key={data?.id}>
        <Link to={`/blog/${data?.id}`}>
          <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
            {data?.title}
          </h3>
          <p className="text-slate-600 text-sm">
            <Link to={`/profile`}>
              {" "}
              <span>
                {" "}
                by
                {/* to do */}
                <Link to={"/profile"}>
                  {" " + data?.author?.firstName + " " + data?.author?.lastName}
                </Link>
                <span>·</span>
              </span>
            </Link>
            {data?.likes?.length} Likes
          </p>
        </Link>
      </li>
    ));
  }
  if (error && !loading) {
    content = <div className="text-slate-400 font-medium">An error has occurred</div>;
  }

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">Most Popular 👍️</h3>

      <ul className="space-y-5 my-5">{content}</ul>
    </div>
  );
}
