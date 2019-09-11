import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey.A500,
        overflow: 'hidden',
        marginTop: 20,
        padding: 20,
        paddingBottom: 200,
    },
    grid: {
        width: 1000,
    },
});

const useStyles = makeStyles(styles);

const Cards = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container justify="center">
                <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
                    <Grid item xs={12}>
                        Sample
                        {/* <SectionHeader title="Cards" subtitle="One page with a list of a collection" /> */}
                        {/* <CardItem /> */}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;
