import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import repository from './repository'
import bookmark from './bookmark'
import error from './error'

export default function createRootReducer(history) {
    return combineReducers({
        router: connectRouter(history),
        repository,
        bookmark,
        error,
    });
}
