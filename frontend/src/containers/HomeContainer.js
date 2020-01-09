import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Home from '../components/Home';

import { fetchRepositories } from '../actions/repository'

const styles = () => ({
    
});

function mapStateToProps(state) {
    return {
        repositories: state.repository.repositories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchRepositories: query => dispatch(fetchRepositories(query))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Home));