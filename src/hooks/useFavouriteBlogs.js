import { useContext } from "react";
import { FavouriteBlogsContext } from "../context";

export const useFavouriteBlogs = () => {
    return useContext(FavouriteBlogsContext);
}