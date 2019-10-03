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
    paper: {
        height: '100%',
        padding: theme.spacing(3),
        overflow: 'hidden',
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: theme.spacing(2),
    },
});

export default styles;
