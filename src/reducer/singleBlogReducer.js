import { actions } from "../actions"

export const initialSingleBlogState = {
    singleBlog: {},
    loading: false,
    error: false
}

export const singleBlogReducer = (state, action) => {
    switch (action.type) {
        case actions.blogs.BLOGS_DATA_FETCHING: {
            return {
                ...state,
                error: false,
                loading: true,
            }
        }
        case actions.blogs.BLOGS_DATA_FETCHED: {
            return {
                ...state,
                singleBlog: { ...action.payload.data },
                loading: false
            }
        }
        case actions.blogs.BLOGS_DATA_ERROR: {
            return {
                ...state,
                error: true,
                loading: false
            }
        }
        case actions.blogs.BLOG_LIKE: {
            console.log("redu-->", action.payload.data)
            return {
                ...state,
                singleBlog: {
                    ...state.singleBlog,
                    likes: [...action.payload.data]
                }

            }
        }
        default: {
            return state
        }
    }
}