const styles = (theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(3),
    },
    gridItem: {
        minHeight: 250,
        alignItems: 'stretch',
    },
    grid: {
        alignItems: 'stretch',
        [theme.breakpoints.down('sm')]: {
            width: 'calc(100% - 20px)',
        },
    },
    pre: {
        padding: theme.spacing(2),
        color: 'white',
        background: '#222',
        border: 'none',
    },
});

export default styles;
