import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Topbar from '../Components/Topbar/Topbar';

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

const Cards = (props) => {
    const { classes } = props;
    return (
        <>
            <Topbar />
            <div className={classes.root}>
                <Grid container justify="center">
                    <Grid spacing={24} alignItems="center" justify="center" container className={classes.grid}>
                        <Grid item xs={12}>
                            Sample
                            {/* <SectionHeader title="Cards" subtitle="One page with a list of a collection" /> */}
                            {/* <CardItem /> */}
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

Cards.propTypes = {
    props: PropTypes.shape({}).isRequired,
};


export default withStyles(styles)(Cards);
