import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { actions } from "../../../actions";
import ThredotsIcon from "../../../assets/icons/3dots.svg";
import DeleteIcon from "../../../assets/icons/delete.svg";
import EditIcon from "../../../assets/icons/edit.svg";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";
import { useProfile } from "../../../hooks/useProfile";

export default function ProfileBlogActionDot({ blogId, actionPopUp, setActionPopUp }) {
  const { api } = useAxios();
  const { setAuth } = useAuth();
  const { dispatch } = useProfile();

  const handleDeleteBlog = async (id) => {
    try {
      const response = await api.delete(`/blogs/${id}`);
      if (response.status === 200) {
        dispatch({ type: actions.profile.PROFILE_BLOG_DELETE, payload: { id } });
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
