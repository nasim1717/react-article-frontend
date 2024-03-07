import { useReducer } from "react";
import { PopularBlogsContext } from "../context";
import { initialPopularState, popularReducer } from "../reducer/popularReducer";

export default function PopularBlogsProvider({ children }) {
  const [state, dispatch] = useReducer(popularReducer, initialPopularState);
  const { popularBlogs, loading, error } = state;
  return (
    <PopularBlogsContext.Provider value={{ popularBlogs, loading, error, dispatch }}>
      {children}
    </PopularBlogsContext.Provider>
  );
}
