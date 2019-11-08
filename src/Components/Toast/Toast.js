import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import IconButton from '@material-ui/core/IconButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';

// import I18nProvider from '../i18nProvider/i18nProvider';

import { makeStyles } from '@material-ui/core/styles';
import styles from './_styles';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

const useStyles1 = makeStyles(styles);

function MySnackbarContentWrapper(props) {
    const classes = useStyles1();
    const {
        className,
        message,
        onClose,
        variant,
        ...other
    } = props;
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={clsx(classes[variant], className)}
            aria-describedby="client-snackbar"
            message={(
                <span
                    id="client-snackbar"
                    className={classes.message}
                >
                    <Icon className={clsx(classes.icon, classes.iconVariant)} />
                    {message}
                </span>
            )}
            action={[
                <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

const useStyles2 = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    topRight: {
        margin: theme.spacing(4),
    },
}));

function Toast(props) {
    const classes = useStyles2();

    const {
        message,
        originHorizontal,
        originVertical,
        variant,
        closeToast,
    } = props;

    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        closeToast();
    };

    return (
        <div>
            <Snackbar
                className={classes.topRight}
                anchorOrigin={{
                    horizontal: `${originHorizontal}`,
                    vertical: `${originVertical}`,
                }}
                open={open}
                autoHideDuration={0}
            >
                <MySnackbarContentWrapper
                    variant={variant}
                    className={classes.margin}
                    message={message}
                    onClose={handleClose}
                />
            </Snackbar>
        </div>
    );
}

Toast.propTypes = {
    closeToast: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    originHorizontal: PropTypes.string.isRequired,
    originVertical: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default Toast;
