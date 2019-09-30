import configs from '../../settings';

const styles = (theme) => ({
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
});

export default styles;
