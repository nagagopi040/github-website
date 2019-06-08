import { USER_ACTION_TYPES } from "./actionTypes";

export const getUserInfo = (userInfo) => {
    return (dispatch) => {
        dispatch({
            type: USER_ACTION_TYPES.FETCH_USER_INFO,
            payload: userInfo
        })
    }
}

export const getUserRepos = (repos) => {
    return (dispatch) => {
        dispatch({
            type: USER_ACTION_TYPES.FETCH_USER_REPOS,
            payload: repos
        })
    }
}