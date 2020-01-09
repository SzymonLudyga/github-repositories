import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Bookmark from '../components/Bookmark';

import { fetchBookmarks, removeBookmark } from '../actions/bookmark'

const styles = () => ({
    
});

function mapStateToProps(state) {
    return {
        bookmarks: state.bookmark.bookmarks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBookmarks: () => dispatch(fetchBookmarks()),
        removeBookmark: id => dispatch(removeBookmark(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Bookmark));