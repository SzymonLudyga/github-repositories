import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import repository from './repository'
import bookmark from './bookmark'

export default function createRootReducer(history) {
    return combineReducers({
        router: connectRouter(history),
        repository,
        bookmark,
    });
}
