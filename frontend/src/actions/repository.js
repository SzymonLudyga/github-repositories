import { apiCall } from '../api/api';
import { handleError } from './bookmark';

export const REPOSITORIES_RECEIVED = 'REPOSITORIES_RECEIVED'
export const REPOSITORIES_FETCHING = 'REPOSITORIES_FETCHING'

const _repositoriesReceived = repositories => {
    return {
        type: REPOSITORIES_RECEIVED,
        repositories,
    };
}

export const clearRepositories = () => {
    return (dispatch) => {
        dispatch(_repositoriesReceived([]));
    }
}

const _loadingIndicator = fetching => {
    return {
        type: REPOSITORIES_FETCHING,
        fetching,
    };
}

export const fetchRepositories = query => {
    return async (dispatch) => {
        dispatch(_loadingIndicator(true));
        try {
            const res = await apiCall('get', `repositories?q=${query}`);
            dispatch(_loadingIndicator(false));
            dispatch(_repositoriesReceived(res.data.details));
        } catch (e) {
            dispatch(_loadingIndicator(false));
            dispatch(handleError(e.response.data.error));
        }
    };
}