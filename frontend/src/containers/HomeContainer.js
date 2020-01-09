import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Home from '../components/Home';

import { fetchRepositories } from '../actions/repository'
import { addBookmark } from '../actions/bookmark'

const styles = () => ({
    
});

function mapStateToProps(state) {
    return {
        repositories: state.repository.repositories
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