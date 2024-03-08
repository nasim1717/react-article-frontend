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
            return {
                ...state,
                singleBlog: {
                    ...state.singleBlog,
                    likes: [...action.payload.data]
                }

            }
        }
        case actions.blogs.BLOG_COMMENT: {
            return {
                ...state,
                singleBlog: {
                    ...state.singleBlog,
                    comments: [...action.payload.comment]
                }
            }
        }
        default: {
            return state
        }
    }
}