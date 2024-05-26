import { useEffect, useRef, useState } from "react";
import { actions } from "../../../actions";
import { useProfile } from "../../../hooks/useProfile";
import ProfileBlogCard from "./ProfileBlogCard";

export default function YourProfileBlogs() {
  const { state, dispatch } = useProfile();
  const [actionPopUp, setActionPopUp] = useState(null);
  const loaderRef = useRef(null);

  // infinity scroll data loading
  useEffect(() => {
    const blogDataLoad = () => {
      dispatch({ type: actions.profile.PROFILE_INFINITY_SCROLL_DATA_LOAD });
    };
    const onIntersection = (items) => {
      const loaderItem = items[0];
      if (loaderItem.isIntersecting && !state.allBlogsVisible) {
        blogDataLoad();
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
  }, [state.infinityScrollBlogs.length, state.allBlogsVisible]);

  let content = state.infinityScrollBlogs?.map((blog) => (
    <ProfileBlogCard
      key={blog?.id}
      blog={blog}
      setActionPopUp={setActionPopUp}
      actionPopUp={actionPopUp}
    />
  ));

  return (
    <>
      <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl text-slate-600 font-semibold">Your Blogs</h4>
      <div className="my-6 space-y-4">
        {content}
        {!state.allBlogsVisible ? (
          <div ref={loaderRef} className="text-center text-base text-slate-500 mt-1">
            Loading blogs...
          </div>
        ) : (
          <div className="text-center text-base text-slate-500 mt-1">
            {state.infinityScrollBlogs.length > 0 ? "No More blogs all blogs visible" : "No Blogs"}
          </div>
        )}
      </div>
    </>
  );
}
