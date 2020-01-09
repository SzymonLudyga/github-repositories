import { BOOKMARKS_RECEIVED } from '../actions/bookmark'

const initialState = {
    bookmarks: []
};

export default function bookmark(state = initialState, action) {
    if (action.type === BOOKMARKS_RECEIVED) {
        return {
            ...state,
            bookmarks: action.bookmarks
        };
    }
    return state;
};