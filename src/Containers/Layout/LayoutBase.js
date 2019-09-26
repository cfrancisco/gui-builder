import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import TopBar from '../../Components/TopBar/TopBar';
import Menu from '../../Components/Menu/Menu';
import configs from '../../settings';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        width: '100%',
    },
    containerBase: {
        transition: theme.transitions.create(['width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        width: '100%',
        marginTop: 70,
        display: 'flex',
    },
    containerBaseShift: {
        width: `calc(100% - ${configs.drawerWidth}px)`,
    },

}));


const LayoutBase = (props) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    function handleDrawerToggle() {
        setOpen(!open);
    }

    function handleDrawerClose() {
        setOpen(false);
    }
    const { children } = props;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <TopBar open={open} handleDrawerToggle={handleDrawerToggle} />
            <div className={classes.content}>
                <Menu open={open} handleDrawerClose={handleDrawerClose} />
                <Container
                    className={clsx(classes.containerBase, {
                        [classes.containerBaseShift]: open,
                    })}
                >
                    {children}
                </Container>
            </div>
        </div>
    );
};


LayoutBase.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

export default LayoutBase;
