import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { actions } from "../../../actions";
import { useBlogs } from "../../../hooks/useBlogs";
import BlogCard from "./BlogCard";

export default function BlogContents() {
  const { blogs, page, error, allVisibale, blogsFound, dispatch } = useBlogs();
  const loaderRef = useRef(null);
  const [actionPopUp, setActionPopUp] = useState(null);

  // blog data fetching infinity scroll
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs?page=${page}`
        );
        if (response?.data?.blogs?.length === 0) {
          dispatch({ type: actions.blogs.BLOGS_ALL_VISIBALE, payload: { data: [] } });
        } else {
          dispatch({
            type: actions.blogs.BLOGS_DATA_FETCHED,
            payload: { data: response.data.blogs },
          });
        }
      } catch (error) {
        dispatch({ type: actions.blogs.BLOGS_DATA_ERROR, payload: { error: true } });
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && !allVisibale) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onIntersection);
    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [page]);

  const content = blogs.map((blog) => (
    <BlogCard
      key={blog?.id}
      blog={blog}
      setActionPopUp={setActionPopUp}
      actionPopUp={actionPopUp}
    />
  ));

  let loadingShow = null;
  if (error) {
    loadingShow = "Was an error";
  } else if (!error && blogs.length === 0 && blogsFound && !allVisibale) {
    loadingShow = "Loading....";
  } else if (!error && blogs.length > 0 && blogsFound && !allVisibale) {
    loadingShow = "Loading More Blogs...";
  } else if (!error && blogs.length === 0 && !blogsFound && !allVisibale) {
    loadingShow = "Blogs Not Found!";
  } else if (!error && blogs.length > 0 && blogsFound && allVisibale) {
    loadingShow = "No more blogs all blogs visible";
  }

  return (
    <div className="space-y-3 md:col-span-5">
      {content}
      <div ref={loaderRef} className={`${allVisibale && "hidden"}`}>
        {loadingShow}
      </div>
      {allVisibale && <div>{loadingShow}</div>}
    </div>
  );
}
