const styles = (theme) => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    fab: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
    },
    button: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(1),
    },
    reactGridLayout: {
        width: '100%',
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(1),
        background: '#eee',
        '& .react-grid-item': {
            border: '2px solid #c7c7c7',
            padding: '1px',
            overflow: 'auto',
            fontSize: '17px',
            fontWeight: '800',
            background: '#f5f5f5',
        },
    },
});

export default styles;
