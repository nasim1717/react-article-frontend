import { actions } from "../actions"

export const initialPopularState = {
    popularBlogs: [],
    loading: false,
    error: false
}


export const popularReducer = (state, action) => {
    switch (action.type) {
        case actions.popularBlogs.POPULAR_DATA_FETCHING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case actions.popularBlogs.POPULAR_DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                popularBlogs: [...action.payload.data],
            }
        }
        case actions.popularBlogs.POPULAR_DATA_DELETE: {
            return {
                ...state,
                popularBlogs: state.popularBlogs.filter(data => data.id !== action.payload.id),
                loading: false
            }
        }
        case actions.popularBlogs.POPULAR_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        }
        default: {
            return state
        }

    }
}