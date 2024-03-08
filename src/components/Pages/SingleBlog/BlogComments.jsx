import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";
import { useSingleBlog } from "../../../hooks/useSingleBlog";

export default function BlogComments() {
  const { singleBlog } = useSingleBlog();
  const { auth } = useAuth();

  const handleComment = () => {
    if (auth?.user) {
      //  to do
    } else {
      toast.warning("Login first then comment", { autoClose: 3000 });
    }
  };

  const blogComments = singleBlog?.comments?.map((comment) => (
    <div key={comment?.id} className="flex items-start space-x-4 my-8">
      <div className="avater-img">
        {comment?.author?.avatar ? (
          <img
            className="rounded-full"
            src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
              comment?.author?.avatar
            }`}
            alt="avatar"
          />
        ) : (
          <span className="bg-indigo-600 text-white capitalize">
            {comment?.author?.firstName.charAt(0)}
          </span>
        )}
      </div>
      <div className="w-full">
        <h5 className="text-slate -500 font-bold">
          {comment?.author?.firstName + " " + comment?.author?.lastName}
        </h5>
        <p className="text-slate-300">{comment?.content}</p>
      </div>
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
              className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
              placeholder="Write a comment"
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
                onClick={handleComment}
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
