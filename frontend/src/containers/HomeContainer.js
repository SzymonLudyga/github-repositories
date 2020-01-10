import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Home from '../components/Home';

import { fetchRepositories, clearRepositories } from '../actions/repository'
import { addBookmark, handleError } from '../actions/bookmark'

const styles = () => ({
    inputWithButton: {
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'space-around',
        width: '100%',
        marginBottom: 10,
    },
    input: {
        width: '70%'
    },
    button: {
        width: '25%'
    },
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function mapStateToProps(state) {
    return {
        repositories: state.repository.repositories,
        fetching: state.repository.fetchingRepositories,
        errorMessage: state.error.errorMessage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        clearRepositories: () => dispatch(clearRepositories()),
        fetchRepositories: query => dispatch(fetchRepositories(query)),
        addBookmark: id => dispatch(addBookmark(id)),
        hideErrorModal: () => dispatch(handleError(null))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Home));