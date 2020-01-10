import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Typography, Divider } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = () => ({
    row: {
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        margin: 15
    },
    icon: {
        position: 'absolute',
        right: 0
    }, 
    url: {
        color: 'black',
        fontWeight: 700,
        textDecoration: 'none',
        marginTop: 4,
        fontFamily: 'Roboto, Helvetica, Arial, sans-serif'
    }
});

const Row = ({ classes, item, addBookmark, removeBookmark }) => {
    return (
        <div className={classes.row}>
            <Divider />
            <Typography
                variant="h4"
            >
                {item.name}
                {addBookmark ? <IconButton
                    className={classes.icon}
                    onClick={() => addBookmark(item.id)}
                >
                    <StarIcon />
                </IconButton> : 
                <IconButton
                    className={classes.icon}
                    onClick={() => removeBookmark(item.id)}
                >
                    <DeleteIcon />
                </IconButton>
                }
            </Typography>
            <Typography
                variant="subtitle1"
            >
                > {item.owner || item.owner.login}
            </Typography>
            <Typography
                variant="subtitle2"
                key={item.description}
            >
                {item.description}
            </Typography>
            <a className={classes.url} href={item.html_url}>
                See this project here!
            </a>
        </div>
    );
}

Row.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    addBookmark: PropTypes.func,
    removeBookmark: PropTypes.func,
};

export default withStyles(styles)(Row);
