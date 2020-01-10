import { BOOKMARKS_RECEIVED, BOOKMARKS_FETCHING } from '../actions/bookmark';

const initialState = {
    bookmarks: [],
    fetchingBookmarks: false
};

export default function bookmark(state = initialState, action) {
    if (action.type === BOOKMARKS_RECEIVED) {
        return {
            ...state,
            bookmarks: action.bookmarks
        };
    } if (action.type === BOOKMARKS_FETCHING) {
        return {
            ...state,
            fetchingBookmarks: action.fetching
        };
    }
    return state;
}
