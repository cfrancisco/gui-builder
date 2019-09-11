import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Topbar from '../Components/Topbar/Topbar';
import Menu from '../Components/Menu/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));


const LayoutBase = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

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
            <Menu open={open} handleDrawerClose={handleDrawerClose} />

            <div className={classes.drawerHeader} />
            <Container>
                {children}
            </Container>
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
