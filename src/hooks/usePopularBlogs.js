import { useContext } from "react"
import { PopularBlogsContext } from "../context"

export const usePopularBlogs = () => {
    return useContext(PopularBlogsContext)
}