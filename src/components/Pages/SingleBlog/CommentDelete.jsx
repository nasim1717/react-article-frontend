import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { actions } from "../../../actions";
import ThredotsIcon from "../../../assets/icons/3dots.svg";
import DeleteIcon from "../../../assets/icons/delete.svg";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";
import { useSingleBlog } from "../../../hooks/useSingleBlog";

export default function CommentDelete({ commentId, setOpenDelBtn, openDelBtn }) {
  const { blogId } = useParams();
  const { api } = useAxios();
  const { dispatch } = useSingleBlog();
  const { setAuth } = useAuth();

  const handleCommentDelete = async (id) => {
    try {
      if (confirm("Are you shure delete comment")) {
        const response = await api.delete(`blogs/${blogId}/comment/${id}`);
        const comment = response?.data?.comments;
        dispatch({ type: actions.blogs.BLOG_COMMENT, payload: { comment } });
        toast.success("Comment delete successfully");
      }
    } catch (error) {
      setAuth({});
      localStorage.removeItem("auth");
      toast.error("Login first then like");
    }
  };

  return (
    <>
      <div className="absolute right-0 top-0">
        <button onClick={() => setOpenDelBtn(openDelBtn === commentId ? null : commentId)}>
          <img src={ThredotsIcon} alt="3dots of Action" />
        </button>
        {openDelBtn === commentId && (
          <div className="action-modal-container p-0">
            <button
              onClick={() => handleCommentDelete(commentId)}
              className="action-menu-item hover:text-red-500"
            >
              <img src={DeleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </>
  );
}
