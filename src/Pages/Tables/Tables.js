import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleTable from '../../Components/Table/SimpleTable';


const styles = (theme) => ({
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

const Tables = () => {
    const classes = useStyles();
    const header = [
        'Dessert (g)', 'Calories (g)', 'Fat (g)', 'Carbs (g)', 'Protein (g)',
    ];
    const data = [
        ['Frozen yoghurt', 159, 6.0, 24, 4],
        ['Ice cream sandwich', 237, 9.0, 2, 37],
        ['Eclair', 262, 16.0, 24, 6.0],
        ['Cupcake', 305, 3.7, 67, 4.3],
        ['Gingerbread', 356, 16.0, 49, 3.9],
    ];
    return (
        <div className={classes.root}>
            <Grid spacing={10} alignItems="center" justify="center" container className={classes.grid}>
                <Grid item xs={12}>
                    <SimpleTable header={header} data={data} />
                </Grid>
                <Grid item xs={12}>
                    Complex Table
                </Grid>
            </Grid>
        </div>
    );
};

export default Tables;
