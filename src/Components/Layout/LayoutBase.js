import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import TopBar from '../TopBar/TopBar';
import Menu from '../Menu/Menu';
import styles from './_styles';

const useStyles = makeStyles(styles);


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
