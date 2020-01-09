import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Divider } from '@material-ui/core';
import route from '../routing/route'

export default class Bookmark extends Component {
    componentDidMount() {
        this.props.fetchBookmarks();
    }

    render() {
        return (
            <div>
                <Typography key={1} variant="h3">Bookmarks</Typography>
                <Button onClick={() => this.props.history.push(route.home)}>Repositories</Button>
                <Divider />
                {this.props.bookmarks && this.props.bookmarks.map(bookmark => (
                    <>
                        <Typography
                            variant="h6"
                            key={bookmark.id}
                        >
                            {bookmark.name} ({bookmark.owner})
                        </Typography>
                        <Button onClick={() => this.props.removeBookmark(bookmark.id)}>Remove Bookmark</Button>
                    </>
                ))}
            </div>
        );
    }
}

Bookmark.propTypes = {};