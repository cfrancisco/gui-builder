import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Topbar from '../../Components/Topbar/Topbar';
import Menu from '../../Components/Menu/Menu';

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexGrow: 1,
    },
    content: {
        display: 'flex',
        width: '100%',
    },
    containerBase: {
        flexGrow: 1,
        marginTop: 70,
        display: 'flex',
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
            <Topbar open={open} handleDrawerToggle={handleDrawerToggle} />
            <div className={classes.content}>
                <Menu open={open} handleDrawerClose={handleDrawerClose} />
                <Container
                    className={classes.containerBase}
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
