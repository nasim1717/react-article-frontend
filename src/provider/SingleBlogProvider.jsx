import { useReducer } from "react";
import { SingleBlogContext } from "../context";
import { initialSingleBlogState, singleBlogReducer } from "../reducer/singleBlogReducer";

export default function SingleBlogProvider({ children }) {
  const [state, dispatch] = useReducer(singleBlogReducer, initialSingleBlogState);
  const { singleBlog, loading, error } = state;
  return (
    <SingleBlogContext.Provider value={{ singleBlog, loading, error, dispatch }}>
      {children}
    </SingleBlogContext.Provider>
  );
}
