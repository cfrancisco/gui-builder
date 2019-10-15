const styles = (theme) => ({
    chartRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(1),
        width: '100%',
        height: '100%',
    },

    mySvg: {
        color: theme.palette.primary.main,
        fill: theme.palette.secondary.main,
        stroke: theme.palette.primary.light,
    },
});

export default styles;
