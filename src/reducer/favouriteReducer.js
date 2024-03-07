import { actions } from "../actions"

export const initialFavouriteState = {
    favouriteBlogs: [],
    loading: false,
    error: false
}

export const favouriteReducer = (state, action) => {
    switch (action.type) {
        case actions.favouriteBlos.FAVOURITE_DATA_FETCHING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case actions.favouriteBlos.FAVOURITE_DATA_FETCHED: {
            return {
                ...state,
                favouriteBlogs: [...action.payload.data],
                loading: false
            }
        }
        case actions.favouriteBlos.FAVOURITE_DATA_DELETE: {
            return {
                ...state,
                favouriteBlogs: state.favouriteBlogs.filter(data => data.id !== action.payload.id),
                loading: false
            }
        }
        case actions.favouriteBlos.FAVOURITE_DATA_ERROR: {
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