const styles = (theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(3),
    },
    leaflet: {
        height: '100%',
        width: '100%',
    },
    gridItem: {
        height: '250px',
        alignItems: 'stretch',

    },
    paper: {
        height: '100%',
        width: '100%',
        padding: theme.spacing(1),
        overflow: 'hidden',
    },
    grid: {
        alignItems: 'stretch',
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 20px)',
        },
    },
});

export default styles;
