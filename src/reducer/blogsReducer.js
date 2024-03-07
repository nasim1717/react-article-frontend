import { actions } from "../actions";

export const initiaBlogslState = {
    blogs: [],
    error: "",
    page: 1,
    allVisibale: false,
    blogsFound: true
};

export const blogsReducer = (state, action) => {
    switch (action.type) {
        case actions.blogs.BLOGS_DATA_FETCHED: {
            return {
                ...state,
                blogs: [...state.blogs, ...action.payload.data],
                page: state.page + 1,
                error: "",
                blogsFound: action.payload.data.length > 0 ? true : state.blogs.longth > 0 ? true : false
            }
        }
        case actions.blogs.BLOGS_ALL_VISIBALE: {
            return {
                ...state,
                error: "",
                allVisibale: (state.blogs.length > 0 && action.payload.data.length === 0),
            }
        }
        case actions.blogs.BLOGS_DATA_DELETE: {
            return {
                ...state,
                blogs: state.blogs.filter(data => data.id !== action.payload.id)
            }
        }
        case actions.blogs.BLOGS_DATA_ERROR: {
            return {
                ...state,
                error: action.payload.error
            }
        }
        default: {
            return state
        }

    }
}
