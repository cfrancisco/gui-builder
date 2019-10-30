import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Itens from './_itens';
import styles from './_styles';

const useStyles = makeStyles(styles);


const Menu = ({ open, handleDrawerClose }) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div>
            <Drawer
                className={clsx(open ? classes.drawer : classes.hide, classes.menuOverlaid)}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <List>
                    {Itens.map((item) => (
                        <ListItem
                            button
                            key={item.childKey}
                            component={Link}
                            to={item.pathname}
                            onClick={handleDrawerClose}
                        >
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
            <div
                className={clsx(open ? classes.drawer : classes.hide, classes.boxShadow)}
                role="presentation"
                onClick={handleDrawerClose}
                open={open}
            />
        </div>
    );
};

Menu.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
};

export default Menu;
