import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { actions } from "../../../actions";
import { useSingleBlog } from "../../../hooks/useSingleBlog";
import BlogComments from "./BlogComments";
import Floating from "./Floating";
import SingleBlog from "./SingleBlog";

export default function SingleBlogContent() {
  const { blogId } = useParams();
  const { dispatch, error, loading, singleBlog } = useSingleBlog();

  useEffect(() => {
    const fetchSingleBlog = async () => {
      dispatch({ type: actions.blogs.BLOGS_DATA_FETCHING });
      try {
        const response = await axios.get(`${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${blogId}`);
        if (response.status === 200) {
          const data = response.data;
          dispatch({ type: actions.blogs.BLOGS_DATA_FETCHED, payload: { data } });
        }
      } catch (error) {
        dispatch({ type: actions.blogs.BLOGS_DATA_ERROR, payload: { error: true } });
      }
    };
    fetchSingleBlog();
  }, []);

  let content = null;
  if (loading && !error) {
    content = <div>Loading...</div>;
  }
  if (!error && !loading && Object.keys(singleBlog).length === 0) {
    content = <div className="text-slate-400 font-medium">No blog</div>;
  }
  if (!error && !loading && Object.keys(singleBlog).length > 0) {
    content = (
      <>
        {" "}
        <SingleBlog />
        <BlogComments />
        <Floating />
      </>
    );
  }
  if (error && !loading) {
    content = <div className="text-slate-400 font-medium">An error has occurred</div>;
  }

  return <main>{content}</main>;
}
