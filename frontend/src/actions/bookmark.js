import { apiCall } from '../api/api';

export const BOOKMARKS_RECEIVED = 'BOOKMARKS_RECEIVED'
export const BOOKMARKS_FETCHING = 'BOOKMARKS_FETCHING'

const _bookmarksReceived = bookmarks => {
    return {
        type: BOOKMARKS_RECEIVED,
        bookmarks,
    };
}

const _loadingIndicator = fetching => {
    return {
        type: BOOKMARKS_FETCHING,
        fetching,
    };
}

export const addBookmark = id => {
    return async (dispatch) => {
        try {
            const res = await apiCall('post', `bookmarks/${id}`);
        } catch (e) {
            console.log(e);
        }
    };
}

export const fetchBookmarks = () => {
    return async (dispatch) => {
        dispatch(_loadingIndicator(true));
        try {
            const res = await apiCall('get', 'bookmarks');
            dispatch(_loadingIndicator(false));
            dispatch(_bookmarksReceived(res.data));
        } catch (e) {
            dispatch(_loadingIndicator(false));
            console.log(e);
        }
    };
}

export const removeBookmark = id => {
    return async (dispatch) => {
        dispatch(_loadingIndicator(true));
        try {
            const res = await apiCall('delete', `bookmarks/${id}`);
            dispatch(_loadingIndicator(false));
            dispatch(_bookmarksReceived(res.data));
        } catch (e) {
            console.log(e);
            dispatch(_loadingIndicator(false));
        }
    };
}