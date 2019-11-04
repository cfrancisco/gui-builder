import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useActiveLanguage, useAvailableLanguages } from 'react-language-kit';
import styles from './_styles';

const useStyles = makeStyles(styles);

function translateIcon() {
    return (
        <svg
            className="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
        >
            <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
        </svg>
    );
}
function downIcon() {
    return (
        <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            role="presentation"
        >
            <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
    );
}

const TopBar = ({ handleDrawerToggle, open }) => {
    const classes = useStyles();
    const [auth] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);
    const [anchorElLocale, setAnchorElLocale] = useState(null);

    const [language, setLanguage] = useActiveLanguage();
    const [languages] = useAvailableLanguages();

    const openProfileMenu = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLocaleClick = (event) => {
        setAnchorElLocale(event.currentTarget);
    };

    const handleSelectedLang = (lang) => {
        setLanguage(lang);
        setAnchorElLocale(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setAnchorElLocale(null);
    };

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerToggle}
                    edge="start"
                    className={clsx(classes.menuButton, open && classes.hide)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    GUI Builder
                </Typography>
                {auth && (
                    <>
                        <Button
                            aria-controls="customized-menu"
                            aria-haspopup="true"
                            className={classes.localeButton}
                            onClick={handleLocaleClick}
                            startIcon={translateIcon()}
                            endIcon={downIcon()}
                        >
                            {language}
                        </Button>
                        <Menu
                            id="locale-menu"
                            anchorEl={anchorElLocale}
                            keepMounted
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={Boolean(anchorElLocale)}
                            onClose={handleClose}
                        >
                            {languages.map((lang) => (
                                <MenuItem
                                    key={lang}
                                    selected={lang === language}
                                    onClick={() => handleSelectedLang(lang)}
                                >
                                    {lang}
                                </MenuItem>
                            ))}
                        </Menu>

                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-label="Current User"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={openProfileMenu}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </>
                )}
            </Toolbar>

        </AppBar>
    );
};

TopBar.propTypes = {
    handleDrawerToggle: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
};


export default TopBar;
