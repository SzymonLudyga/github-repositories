import apiCall from '../api/api';

export const BOOKMARKS_RECEIVED = 'BOOKMARKS_RECEIVED';
export const BOOKMARKS_FETCHING = 'BOOKMARKS_FETCHING';
export const ERROR = 'ERROR';

const _bookmarksReceived = (bookmarks) => ({
    type: BOOKMARKS_RECEIVED,
    bookmarks,
});

const _loadingIndicator = (fetching) => ({
    type: BOOKMARKS_FETCHING,
    fetching,
});

export const handleError = (error) => ({
    type: ERROR,
    error,
});

export const addBookmark = (id) => async (dispatch) => {
    dispatch(_loadingIndicator(true));
    try {
        const res = await apiCall('post', `bookmarks/${id}`);
        if (res.status === 200) {
            dispatch(_loadingIndicator(false));
        }
    } catch (e) {
        dispatch(_loadingIndicator(false));
        dispatch(handleError(e.response.data.error));
    }
};

export const fetchBookmarks = () => async (dispatch) => {
    dispatch(_loadingIndicator(true));
    try {
        const res = await apiCall('get', 'bookmarks');
        dispatch(_loadingIndicator(false));
        dispatch(_bookmarksReceived(res.data));
    } catch (e) {
        dispatch(_loadingIndicator(false));
        dispatch(handleError(e.response.data.error));
    }
};

export const removeBookmark = (id) => async (dispatch) => {
    dispatch(_loadingIndicator(true));
    try {
        const res = await apiCall('delete', `bookmarks/${id}`);
        dispatch(_loadingIndicator(false));
        dispatch(_bookmarksReceived(res.data));
    } catch (e) {
        dispatch(_loadingIndicator(false));
        dispatch(handleError(e.response.data.error));
    }
};
