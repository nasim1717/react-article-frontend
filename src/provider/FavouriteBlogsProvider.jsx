import { useReducer } from "react";
import { FavouriteBlogsContext } from "../context";
import { favouriteReducer, initialFavouriteState } from "../reducer/favouriteReducer";

export default function FavouriteBlogsProvider({ children }) {
  const [state, dispatch] = useReducer(favouriteReducer, initialFavouriteState);
  const { loading, error, favouriteBlogs } = state;
  return (
    <FavouriteBlogsContext.Provider value={{ loading, error, favouriteBlogs, dispatch }}>
      {children}
    </FavouriteBlogsContext.Provider>
  );
}
