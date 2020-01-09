import { getRepositories } from '../api/repository'

export const REPOSITORIES_RECEIVED = 'REPOSITORIES_RECEIVED'

const _repositoriesReceived = repositories => {
    return {
        type: REPOSITORIES_RECEIVED,
        repositories,
    };
}

export const fetchRepositories = query => {
    return async (dispatch) => {
        try {
            const res = await getRepositories(query);
            console.log(res.data)
            dispatch(_repositoriesReceived(res.data));
        } catch (e) {
            console.log(e);
        }
    };
}