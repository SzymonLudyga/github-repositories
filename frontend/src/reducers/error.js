import { ERROR } from '../actions/bookmark'

const initialState = {
    errorMessage: null,
};

export default function bookmark(state = initialState, action) {
    if (action.type === ERROR) {
        return {
            ...state,
            errorMessage: action.error
        };
    }
    return state;
};