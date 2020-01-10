import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Bookmark from '../components/Bookmark';

import { fetchBookmarks, removeBookmark, handleError } from '../actions/bookmark';


const styles = () => ({
    loading: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

function mapStateToProps(state) {
    return {
        bookmarks: state.bookmark.bookmarks,
        fetching: state.bookmark.fetchingBookmarks,
        errorMessage: state.error.errorMessage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBookmarks: () => dispatch(fetchBookmarks()),
        removeBookmark: (id) => dispatch(removeBookmark(id)),
        hideErrorModal: () => dispatch(handleError(null))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Bookmark));
