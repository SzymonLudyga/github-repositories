import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import Row from './Row';
import Header from './Header';

export default class Bookmark extends Component {
    componentDidMount() {
        this.props.fetchBookmarks();
    }

    render() {
        const { history, classes, removeBookmark, bookmarks, fetching } = this.props;
        return (
            <>
                <Header bookmark history={history} />
                {fetching ? (
                    <div className={classes.loading}>
                        <CircularProgress />
                    </div>
                ) : bookmarks.map(bookmark => (
                    <Row item={bookmark} removeBookmark={removeBookmark} />
                ))}
            </>
        );
    }
}

Bookmark.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    fetchBookmarks: PropTypes.func.isRequired,
    removeBookmark: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    bookmarks: PropTypes.array.isRequired
};
