import { USER_ACTION_TYPES } from "./../actions";

const intialState = {
    repos: [],
    userData: {}
}

export const userReducers = (state = intialState, action) => {
    switch (action.type){
		case USER_ACTION_TYPES.FETCH_USER_INFO:
			return {
				...state,
				userData: action.payload
            };
        case USER_ACTION_TYPES.FETCH_USER_REPOS:
			return {
				...state,
				repos: action.payload
			};
		default:
			return state;
	}
}