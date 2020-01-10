import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import route from '../routing/route';

const styles = () => ({
    button: {
        margin: 10,
        color: 'black',
        border: 'solid 1px black'
    },
    navbar: {
        width: '100%',
        backgroundColor: 'lightblue',
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'flex-end'
    },
    header: {
        margin: 10,
    },
});

const Header = ({ classes, history, bookmark }) => {
    return (
        <>
            <div className={classes.navbar}>
                <Button
                    className={classes.button}
                    color="primary"
                    onClick={() => history.push(bookmark ? route.home : route.bookmarks)}
                >
                    {bookmark ? 'Repositories' : 'Bookmarks'}
                </Button>
            </div>
            <Typography className={classes.header} key={1} variant="h3">
                {bookmark ? 'Bookmarks' : 'Github repositories search'}
            </Typography>
        </>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    bookmark: PropTypes.bool
};

export default withStyles(styles)(Header);
