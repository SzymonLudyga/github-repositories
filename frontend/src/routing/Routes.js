import React from 'react';
import { Switch, Route } from 'react-router';
import route from './route';
import RoutesProvider from './RoutesProvider';
import HomeContainer from '../containers/HomeContainer';
import BookmarkContainer from '../containers/BookmarkContainer';

export default () => (
    <RoutesProvider>
        <Switch>
            <Route exact path={route.bookmarks} component={BookmarkContainer} />
            <Route component={HomeContainer} />
        </Switch>
    </RoutesProvider>
);
