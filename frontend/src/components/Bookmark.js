import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import Row from './Row';
import Header from './Header';
import ErrorModal from './ErrorModal';

export default class Bookmark extends Component {
    componentDidMount() {
        this.props.fetchBookmarks();
    }

    render() {
        const {
            history,
            classes,
            removeBookmark,
            bookmarks,
            fetching, 
            errorMessage,
            hideErrorModal
        } = this.props;
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
                {errorMessage && 
                    <ErrorModal
                        message={errorMessage}
                        onSubmit={hideErrorModal}
                    />
                }   
            </>
        );
    }
}

Bookmark.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    fetchBookmarks: PropTypes.func.isRequired,
    hideErrorModal: PropTypes.func.isRequired,
    removeBookmark: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    bookmarks: PropTypes.array.isRequired
};
