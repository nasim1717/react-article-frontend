import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { actions } from "../../../actions";
import ThredotsIcon from "../../../assets/icons/3dots.svg";
import DeleteIcon from "../../../assets/icons/delete.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";
import { useBlogs } from "../../../hooks/useBlogs";
import { useFavouriteBlogs } from "../../../hooks/useFavouriteBlogs";
import { usePopularBlogs } from "../../../hooks/usePopularBlogs";

export default function BlogActionDot({ blogId, setActionPopUp, actionPopUp }) {
  const { api } = useAxios();
  const { dispatch } = useBlogs();
  const { dispatch: favouriteDispatch } = useFavouriteBlogs();
  const { dispatch: popularDispatch } = usePopularBlogs();
  const { setAuth } = useAuth();

  // delete blog funtion
  const handleDeleteBlog = async (id) => {
    try {
      const response = await api.delete(`/blogs/${id}`);
      if (response.status === 200) {
        dispatch({ type: actions.blogs.BLOGS_DATA_DELETE, payload: { id } });
        favouriteDispatch({ type: actions.favouriteBlos.FAVOURITE_DATA_DELETE, payload: { id } });
        popularDispatch({ type: actions.popularBlogs.POPULAR_DATA_DELETE, payload: { id } });
        toast.success("Blog Deleted successfully");
      }
    } catch (error) {
      localStorage.removeItem("auth");
      setAuth({});
      toast.error("Something went wrong. Please log in and try again");
    }
  };

  return (
    <div className="absolute right-0 top-0">
      <button onClick={() => setActionPopUp(blogId === actionPopUp ? null : blogId)}>
        <img src={ThredotsIcon} alt="3dots of Action" />
      </button>

      {/* <!-- Action Menus Popup --> */}
      {actionPopUp === blogId && (
        <div className="action-modal-container">
          <Link to={`/edit/${blogId}`}>
            <button className="action-menu-item hover:text-lwsGreen">
              <img src={EditIcon} alt="Edit" />
              Edit
            </button>
          </Link>

          <button
            onClick={() => handleDeleteBlog(blogId)}
            className="action-menu-item hover:text-red-500"
          >
            <img src={DeleteIcon} alt="Delete" />
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
