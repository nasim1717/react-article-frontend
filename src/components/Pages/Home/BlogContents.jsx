import axios from "axios";
import { useEffect, useRef, useState } from "react";
import BlogCard from "./BlogCard";

export default function BlogContents() {
  const [hasMore, setHasMore] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const loaderRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/blogs?page=${page}`
        );
        if (response?.data?.blogs?.length === 0) {
          setHasMore(false);
        } else {
          setBlogs([...blogs, ...response.data.blogs]);
          setPage((prev) => prev + 1);
        }
      } catch (error) {
        setError(true);
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && hasMore) {
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
  }, [page, hasMore]);

  let content = null;

  if (blogs.length > 0 && !error) {
    content = blogs.map((blog) => <BlogCard key={blog?.id} blog={blog} />);
  }
  if (blogs.length === 0 && !error) {
    content = <div>Blogs Not Found</div>;
  }

  if (error) {
    content = <div>Was an error!</div>;
  }

  return (
    <div className="space-y-3 md:col-span-5">
      {content}
      {hasMore && <div ref={loaderRef}>Loading more Blogs...</div>}
    </div>
  );
}
