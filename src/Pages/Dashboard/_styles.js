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
    reactGridLayout: {
        width: '100%',
        background: '#eee',
        '& .react-grid-item': {
            padding: '1px',
            overflow: 'auto',
            border: '2px solid #c7c7c7',
            'font-size': '17px',
            'font-weight': '800',
            background: '#f5f5f5',
        },
    },
});

export default styles;
