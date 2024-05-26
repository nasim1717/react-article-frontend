import { actions } from "../actions";

export const initialProfileState = {
    profileData: {},
    infinityScrollBlogs: [],
    loading: false,
    error: false,
    allBlogsVisible: false,
    blogCopyIncrementCount: 0
}


const blogsArraySplice = (state) => {
    let sliceArray = [];
    if (state.blogCopyIncrementCount >= 0) {
        sliceArray = state.profileData?.blogs?.slice(state.blogCopyIncrementCount, state.blogCopyIncrementCount + 2);
    }
    if (sliceArray.length === 0) {
        return {
            ...state,
            infinityScrollBlogs: [...state.infinityScrollBlogs, ...sliceArray],
            allBlogsVisible: true,
            blogCopyIncrementCount: 0
        }
    }
    else {
        return {
            ...state,
            infinityScrollBlogs: [...state.infinityScrollBlogs, ...sliceArray],
            blogCopyIncrementCount: state.blogCopyIncrementCount + 2
        }
    }
}

export const profileReducer = (state, action) => {
    switch (action.type) {
        case actions.profile.PROFILE_DATA_FETCHING: {
            return {
                ...state,
                loading: true,
                error: false,
                infinityScrollBlogs: []
            }
        }
        case actions.profile.PROFILE_DATA_FETCHED: {
            return {
                ...state,
                loading: false,
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
        case actions.profile.PROFILE_INFINITY_SCROLL_DATA_LOAD: {
            return blogsArraySplice(state);
        }
        case actions.profile.PROFILE_BLOG_DELETE: {
            return {
                ...state,
                infinityScrollBlogs: state.infinityScrollBlogs.filter(blog => blog.id !== action.payload.id)
            }
        }
        default: {
            return state
        }

    }
}