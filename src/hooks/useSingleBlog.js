import { useContext } from "react"
import { SingleBlogContext } from "../context"

export const useSingleBlog = () => {
    return useContext(SingleBlogContext)
}