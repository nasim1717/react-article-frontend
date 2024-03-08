import { useState } from "react";
import { toast } from "react-toastify";
import { actions } from "../../../actions";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";
import { useSingleBlog } from "../../../hooks/useSingleBlog";
import CommentDelete from "./CommentDelete";

export default function BlogComments() {
  const { singleBlog, dispatch } = useSingleBlog();
  const { auth, setAuth } = useAuth();
  const { api } = useAxios();
  const [comment, setComment] = useState("");
  const [openDelBtn, setOpenDelBtn] = useState(null);

  // handle post comment
  const handleComment = async (id) => {
    if (auth?.user) {
      try {
        if (comment) {
          const response = await api.post(`/blogs/${id}/comment`, { content: comment });
          if (response.status === 200) {
            const comment = response?.data?.comments;
            dispatch({ type: actions.blogs.BLOG_COMMENT, payload: { comment } });
            window.scroll({
              top: document.body.scrollHeight,
              behavior: "smooth",
            });
            setComment("");
          }
        } else {
          toast.warning("Blank comments cannot be posted");
        }
      } catch (error) {
        localStorage.removeItem("auth");
        setAuth({});
      }
    } else {
      toast.warning("Login first then comment", { autoClose: 2000 });
    }
  };

  // all blog comments
  const blogComments = singleBlog?.comments?.map((comment) => (
    <div key={comment?.id} className="flex items-start space-x-4 my-8 relative">
      <div className="avater-img bg-indigo-600 text-white">
        {comment?.author?.avatar ? (
          <img
            className="rounded-full"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
              comment?.author?.avatar
            }`}
            alt="avatar"
          />
        ) : (
          <span className="capitalize">{comment?.author?.firstName.charAt(0)}</span>
        )}
      </div>
      <div className="w-full">
        <h5 className="text-slate -500 font-bold">
          {comment?.author?.firstName + " " + comment?.author?.lastName}
        </h5>
        <p className="text-slate-300">{comment?.content}</p>
      </div>
      {comment?.author?.id === auth?.user?.id && (
        <CommentDelete
          commentId={comment?.id}
          setOpenDelBtn={setOpenDelBtn}
          openDelBtn={openDelBtn}
        />
      )}
    </div>
  ));

  return (
    <section id="comments">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">Comments ({singleBlog?.comments?.length})</h2>
        <div className="flex items -center space-x-4">
          <div className="avater-img bg-indigo-600 text-white">
            {auth?.user?.avatar ? (
              <img
                className="rounded-full"
                src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${auth?.user?.avatar}`}
                alt="avatar"
              />
            ) : (
              <span className="capitalize">{auth?.user?.firstName.charAt(0)}</span>
            )}
          </div>

          <div className="w-full">
            <textarea
              disabled={!auth?.user && true}
              className={`w-full bg-[#030317] border text-slate-300 border-slate-500 p-4 rounded-md focus:outline-none`}
              placeholder="Write a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                onClick={() => handleComment(singleBlog?.id)}
              >
                Comment
              </button>
            </div>
          </div>
        </div>

        {blogComments}
      </div>
    </section>
  );
}
