import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';

export default class Home extends Component {
    componentDidMount() {
        this.props.fetchRepositories('tetris');
    }

    render() {
        return (
            <div>
                <Typography key={1} variant="h3">Repositories</Typography>
                {this.props.repositories && this.props.repositories.map(repository => (
                    <Typography
                        variant="h6"
                        key={repository.id}
                    >
                        {repository.name} ({repository.owner.login})
                    </Typography>
                ))}
            </div>
        );
    }
}

Home.propTypes = {};
