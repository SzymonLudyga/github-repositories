import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Home from '../components/Home';

import { fetchRepositories } from '../actions/repository'
import { addBookmark } from '../actions/bookmark'

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
        fetching: state.repository.fetchingRepositories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchRepositories: query => dispatch(fetchRepositories(query)),
        addBookmark: id => dispatch(addBookmark(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Home));