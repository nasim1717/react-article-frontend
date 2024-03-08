import { useEffect } from "react";
import { Link } from "react-router-dom";
import { actions } from "../../../actions";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";
import { useFavouriteBlogs } from "../../../hooks/useFavouriteBlogs";

export default function YourFavourites() {
  const { loading, error, favouriteBlogs, dispatch } = useFavouriteBlogs();
  const { api } = useAxios();
  const { setAuth } = useAuth();

  useEffect(() => {
    const fetchFavouriteBlogs = async () => {
      dispatch({ type: actions.favouriteBlos.FAVOURITE_DATA_FETCHING });
      try {
        const response = await api.get(`/blogs/favourites`);
        if (response.status === 200) {
          const data = response?.data?.blogs;
          dispatch({ type: actions.favouriteBlos.FAVOURITE_DATA_FETCHED, payload: { data } });
        }
      } catch (error) {
        dispatch({
          type: actions.favouriteBlos.FAVOURITE_DATA_ERROR,
          payload: { error: true },
        });
        setAuth({});
        localStorage.removeItem("auth");
      }
    };
    fetchFavouriteBlogs();
  }, []);

  let content = null;
  if (loading && !error) {
    content = <div>Loading...</div>;
  }
  if (!error && !loading && favouriteBlogs?.length === 0) {
    content = <div className="text-slate-400 font-medium">Your no favourite blogs</div>;
  }
  if (!error && !loading && favouriteBlogs?.length > 0) {
    content = favouriteBlogs.map((data) => (
      <li key={data?.id}>
        <Link to={`/blog/${data?.id}`}>
          <h3 className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer">
            {data?.title}
          </h3>
          <p className="text-slate-600 text-sm">
            {data?.tags.split(" ").map((value) => `#${value} `)}
          </p>
        </Link>
      </li>
    ));
  }
  if (error && !loading) {
    content = <div className="text-slate-400 font-medium">Your no favourite blogs</div>;
  }

  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">Your Favourites ❤️</h3>
      <ul className="space-y-5 my-5">{content}</ul>
    </div>
  );
}
