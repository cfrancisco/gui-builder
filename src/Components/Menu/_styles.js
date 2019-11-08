import configs from 'settings';

const styles = (theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        flexShrink: 0,
        width: configs.drawerWidth,
    },
    drawerPaper: {
        width: configs.drawerWidth,
    },
    menuOverlaid: {
        position: 'absolute',
        zIndex: theme.zIndex.modal,
    },
    boxShadow: {
        backgroundColor: '#000',
        height: '100%',
        opacity: 0.5,
        overflow: 'hidden',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: theme.zIndex.drawer,
    },
});

export default styles;
