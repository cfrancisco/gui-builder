import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        paddingLeft: 24,
        [theme.breakpoints.up('md')]: {
            paddingTop: '1.5em',
        },

    },
    tabContainer: {
        marginLeft: 32,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    tabItem: {
        paddingTop: 20,
        paddingBottom: 20,
        minWidth: 'auto',
    },
}));

const Topbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    News
                    <Link to="/" className={classes.link}>
                        Main
                    </Link>
                    <Link to="/cards" className={classes.link}>
                        Cards
                    </Link>
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
