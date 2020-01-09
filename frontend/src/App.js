import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store, { history } from './store';
import Routes from './routing/Routes';
import './App.css';

export default function App() {
    const persistor = persistStore(store);
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ConnectedRouter history={history}>
                    <Routes />
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    );
}
