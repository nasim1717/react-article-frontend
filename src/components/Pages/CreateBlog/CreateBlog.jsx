import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../../hooks/useAuth";
import { useAxios } from "../../../hooks/useAxios";

export default function CreateBlog() {
  const { blogId } = useParams();
  const fileUploaderRef = useRef();
  const { setAuth } = useAuth();
  const [imgLocalUrl, setImgLocalUrl] = useState(null);
  const [blogThumbnail, setBlogThumbnail] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editThumbnail, setEditThumbnail] = useState(blogId && true);
  const { api } = useAxios();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // edit blog data fetching
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${blogId}`);
        if (response.status === 200) {
          setValue("title", response?.data?.title);
          setValue("tags", response?.data?.tags);
          setValue("content", response?.data?.content);
          setImgLocalUrl(response?.data?.thumbnail);
          setBlogThumbnail(response?.data?.thumbnail);
        }
      } catch (error) {
        toast.error("Something went wrong. Please log in and try again");
        localStorage.removeItem("auth");
        setAuth({});
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, []);

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    const thumbnail = fileUploaderRef.current.files[0];
    const thubnailLocalUrl = URL.createObjectURL(thumbnail);
    setEditThumbnail(false);
    setBlogThumbnail(thumbnail);
    setImgLocalUrl(thubnailLocalUrl);
  };

  // handle create blog function
  const handleNewBlogCreate = async (data) => {
    setLoading(true);
    const formData = new FormData();
    if (blogThumbnail) {
      formData.append("title", data.title);
      formData.append("tags", data.tags.split(","));
      formData.append("content", data.content);
      formData.append("thumbnail", blogThumbnail);
      try {
        const response = await api.post(`/blogs/`, formData);
        if (response.status === 201) {
          toast.success("New blog created successfully");
          navigate(`/blog/${response?.data?.blog?.id}`);
        }
      } catch (error) {
        toast.warning("Something went wrong. Please log in and try again");
        localStorage.removeItem("auth");
        setAuth({});
      } finally {
        setLoading(false);
      }
    } else {
      toast.warning("Blog thumbnail is required");
      setLoading(false);
    }
  };

  // handle blog data update function
  const handleBlogUpdated = async (data) => {
    setLoading(true);
    const formData = new FormData();
    if (blogThumbnail) {
      formData.append("title", data.title);
      formData.append("tags", data.tags.split(","));
      formData.append("content", data.content);
      formData.append("thumbnail", blogThumbnail);
      try {
        const response = await api.patch(`/blogs/${blogId}`, formData);
        if (response.status === 200) {
          toast.success("Updated blog successfully");
          navigate(`/blog/${response?.data?.id}`);
        }
      } catch (error) {
        toast.warning("Something went wrong. Please log in and try again");
        localStorage.removeItem("auth");
        setAuth({});
      } finally {
        setLoading(false);
      }
    } else {
      toast.warning("Blog thumbnail is required");
      setLoading(false);
    }
  };

  // handle form submit
  const handleBlogSubmit = (formData) => {
    if (blogId) {
      handleBlogUpdated(formData);
    } else {
      handleNewBlogCreate(formData);
    }
  };

  return (
    <main>
      <section>
        <div className="container">
          {/* <!-- Form Input field for creating Blog Post --> */}
          <form onSubmit={handleSubmit(handleBlogSubmit)} className="createBlog">
            {!imgLocalUrl && (
              <div
                onClick={handleImageUpload}
                className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4"
              >
                <div className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                  <p>Upload Your Image</p>
                </div>
              </div>
            )}
            <input id="file" type="file" accept="image/*" ref={fileUploaderRef} hidden />
            {imgLocalUrl && (
              <div>
                <img
                  className="mx-auto w-full md:w-10/12 object-cover h-80 md:h-[370px]"
                  src={
                    editThumbnail && imgLocalUrl
                      ? `${import.meta.env.VITE_SERVER_BASE_URL}/uploads/blog/${imgLocalUrl}`
                      : imgLocalUrl
                  }
                  alt="thumbnail"
                />
                <div className="flex flex-row-reverse">
                  <div
                    onClick={handleImageUpload}
                    className="flex items-center gap-4 cursor-pointer p-3 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    <p>Change Your Image</p>
                  </div>
                </div>
              </div>
            )}
            <div className="mb-6">
              <input
                {...register("title", { required: "Title is required" })}
                type="text"
                id="title"
                name="title"
                placeholder="Enter your blog title"
              />
              {errors?.title?.message && <h1 className="text-red-400">Title is required</h1>}
            </div>

            <div className="mb-6">
              <input
                {...register("tags", { required: "Tags is required" })}
                type="text"
                id="tags"
                name="tags"
                placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
              />
              {errors?.tags?.message && <h1 className="text-red-400">Tags is required</h1>}
            </div>

            <div className="mb-6">
              <textarea
                {...register("content", { required: "Content is required" })}
                id="content"
                name="content"
                placeholder="Write your blog content"
                rows="8"
              ></textarea>
              {errors?.content?.message && <h1 className="text-red-400">Content is required</h1>}
            </div>

            {blogId ? (
              <button
                disabled={loading}
                type="submit"
                className="bg-indigo-600 text-white px-6 pt-4 pb-4 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                {loading ? "Loading..." : "Update Blog"}
              </button>
            ) : (
              <button
                disabled={loading}
                type="submit"
                className="bg-indigo-600 text-white px-6 pt-4 pb-4 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                {loading ? "Loading..." : "Create Blog"}
              </button>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
