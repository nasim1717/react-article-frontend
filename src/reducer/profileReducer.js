import { actions } from "../actions"

export const initialProfileState = {
    profileData: {},
    blogs: [],
    infinityScrollBlogs: [],
    loading: false,
    error: false,
    allBlogsVisible: false,
}

export const profileReducer = (state, action) => {
    switch (action.type) {
        case actions.profile.PROFILE_DATA_FETCHING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }
        case actions.profile.PROFILE_DATA_FETCHED: {
            return {
                ...state,
                loading: false,
                blogs: [...action.payload.data.blogs],
                profileData: action.payload.data
            }
        }
        case actions.profile.PROFILE_DATA_ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }
        case actions.profile.PROFILE_BIO_UPDATE: {
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    bio: action.payload.bio
                }
            }
        }
        case actions.profile.PROFILE_IMGAGE_UPDATE: {
            return {
                ...state,
                profileData: {
                    ...state.profileData,
                    avatar: action.payload.avatar
                }
            }
        }
        default: {
            return state
        }

    }
}