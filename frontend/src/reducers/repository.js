import { REPOSITORIES_RECEIVED, REPOSITORIES_FETCHING } from '../actions/repository';

const initialState = {
    repositories: [],
    fetchingRepositories: false
};

export default function repository(state = initialState, action) {
    if (action.type === REPOSITORIES_RECEIVED) {
        return {
            ...state,
            repositories: action.repositories
        };
    } if (action.type === REPOSITORIES_FETCHING) {
        return {
            ...state,
            fetchingRepositories: action.fetching
        };
    }
    return state;
}
