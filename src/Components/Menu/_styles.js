import configs from '../../settings';

const styles = (theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: configs.drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: configs.drawerWidth,
    },
});

export default styles;
