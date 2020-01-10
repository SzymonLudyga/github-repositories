import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
    Modal, Paper, Typography, Button
} from '@material-ui/core';

const styles = () => ({
    container: {
        maxWidth: 400,
        padding: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    message: {
        textAlign: 'center',
        fontSize: 30,
        margin: 10
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        fontSize: 20,
        padding: 2,
        margin: 10
    }
});

const ErrorModal = ({
    classes,
    message,
    onSubmit
}) => {
    return (
        <Modal
            className={classes.center}
            open={message}
        >
            <Paper className={classes.container}>
                <Typography
                    className={classes.message}
                    variant="h5"
                    component="h3"
                >
                    {message}
                </Typography>
                <div>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={onSubmit}
                    >
                        OK
                    </Button>
                </div>
            </Paper>
        </Modal>
    );
}

ErrorModal.propTypes = {
    classes: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(ErrorModal);