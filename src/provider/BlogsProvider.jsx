import { useReducer } from "react";
import { BlogsContext } from "../context";
import { blogsReducer, initiaBlogslState } from "../reducer/blogsReducer";

export default function BlogsProvider({ children }) {
  const [state, dispatch] = useReducer(blogsReducer, initiaBlogslState);
  const { blogs, page, error, allVisibale, blogsFound } = state;
  return (
    <BlogsContext.Provider value={{ blogs, page, error, allVisibale, blogsFound, dispatch }}>
      {children}
    </BlogsContext.Provider>
  );
}
