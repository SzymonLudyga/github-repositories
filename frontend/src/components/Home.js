import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Typography, Divider } from '@material-ui/core';
import route from '../routing/route'

export default class Home extends Component {
    componentDidMount() {
        this.props.fetchRepositories('tetris');
    }

    render() {
        return (
            <div>
                <Typography key={1} variant="h3">Repositories</Typography>
                <Button onClick={() => this.props.history.push(route.bookmarks)}>Bookmarks</Button>
                <Divider />
                {this.props.repositories && this.props.repositories.map(repository => (
                    <>
                        <Typography
                            variant="h6"
                            key={repository.id}
                        >
                            {repository.name} ({repository.owner.login})
                        </Typography>
                        <Button onClick={() => this.props.addBookmark(repository.id)}>Add Bookmark</Button>
                    </>
                ))}
            </div>
        );
    }
}

Home.propTypes = {};
