import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, CircularProgress, TextField } from '@material-ui/core';
import Row from './Row';
import Header from './Header';
import ErrorModal from './ErrorModal';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            query: '',
        };
    }

    componentWillUnmount() {
        const { clearRepositories } = this.props;
        clearRepositories();
    }

    _submit = () => {
        const { query } = this.state;
        const { fetchRepositories } = this.props;
        fetchRepositories(query);
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
        const {
            classes,
            history,
            addBookmark,
            fetching,
            repositories,
            errorMessage,
            hideErrorModal
        } = this.props;
        const { message } = this.state;
        return (
            <>
                <Header history={history} />
                <div className={classes.inputWithButton}>
                    <TextField
                        className={classes.input}
                        autoFocus
                        onKeyDown={this._onEnter}
                        onChange={this._handleChange}
                        value={message}
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
                ) : repositories.map((repository) => (
                    <Row item={repository} addBookmark={addBookmark} />
                ))}
                {errorMessage
                    && (
                        <ErrorModal
                            message={errorMessage}
                            onSubmit={hideErrorModal}
                        />
                    )}
            </>
        );
    }
}

Home.propTypes = {
    errorMessage: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    clearRepositories: PropTypes.func.isRequired,
    fetchRepositories: PropTypes.func.isRequired,
    addBookmark: PropTypes.func.isRequired,
    hideErrorModal: PropTypes.func.isRequired,
    fetching: PropTypes.bool.isRequired,
    repositories: PropTypes.array.isRequired
};
