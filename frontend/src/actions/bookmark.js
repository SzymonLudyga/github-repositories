import { postBookmark, getBookmarks, deleteBookmark } from '../api/bookmark'

export const BOOKMARKS_RECEIVED = 'BOOKMARKS_RECEIVED'

const _bookmarksReceived = bookmarks => {
    return {
        type: BOOKMARKS_RECEIVED,
        bookmarks,
    };
}

export const addBookmark = id => {
    return async (dispatch) => {
        try {
            const res = await postBookmark(id);
        } catch (e) {
            console.log(e);
        }
    };
}

export const fetchBookmarks = () => {
    return async (dispatch) => {
        try {
            const res = await getBookmarks();
            console.log(res.data)
            dispatch(_bookmarksReceived(res.data));
        } catch (e) {
            console.log(e);
        }
    };
}

export const removeBookmark = id => {
    return async (dispatch) => {
        try {
            const res = await deleteBookmark(id);
        } catch (e) {
            console.log(e);
        }
    };
}