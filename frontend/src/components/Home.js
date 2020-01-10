import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress, TextField } from '@material-ui/core';
import Row from './Row';
import Header from './Header';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
        };
    }

    _submit = () => {
        const { query } = this.state;
        this.props.fetchRepositories(query);
        this.setState({ query: '' });
    };

    _handleChange = (e) => {
        this.setState({ query: e.target.value });
    }

    _onEnter = (e) => {
        if (e.keyCode === 13) {
            this._submit();
        }
    }

    render() {
        const { classes, history, addBookmark, fetching, repositories } = this.props;
        return (
            <>
                <Header history={history} />
                <div className={classes.inputWithButton}>
                    <TextField
                        className={classes.input}
                        autoFocus
                        onKeyDown={this._onEnter}
                        onChange={this._handleChange}
                        value={this.state.message}
                        placeholder="Type in repository name..."
                    />
                    <Button
                        className={classes.button}
                        onClick={this._submit}
                        variant="contained"
                        color="primary"
                    >
                        Search
                    </Button>
                </div>
                {fetching ? (
                    <div className={classes.loading}>
                        <CircularProgress />
                    </div>
                ) : repositories.map(repository => (
                    <Row item={repository} addBookmark={addBookmark} />
                ))}
            </>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    fetchRepositories: PropTypes.func.isRequired,
    addBookmark: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    repositories: PropTypes.array.isRequired
};
