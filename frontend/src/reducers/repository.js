import { REPOSITORIES_RECEIVED } from '../actions/repository'

const initialState = {
    repositories: []
};

export default function repository(state = initialState, action) {
    if (action.type === REPOSITORIES_RECEIVED) {
        return {
            ...state,
            repositories: action.repositories
        };
    }
    return state;
};