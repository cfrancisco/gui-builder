import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import styles from './_styles';

const useStyles = makeStyles(styles);

const External = () => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div className={classes.root}>
            <Grid
                spacing={4}
                alignItems="center"
                justify="center"
                container
                className={classes.grid}
            >
                <Grid className={classes.gridItem} item xs={12} md={4}>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography variant="h5" component="h2">
                                be
                                {bull}
                                nev
                                {bull}
                                o
                                {bull}
                                lent
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid className={classes.gridItem} item xs={12} md={8}>
                    <Paper className={classes.paper}>
                        <div className={classes.box}>
                            <Typography style={{ textTransform: 'uppercase' }} color="secondary" gutterBottom>
                                Another box
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                A default box
                            </Typography>
                        </div>
                    </Paper>
                </Grid>
                <Grid className={classes.gridItem} item xs={12}>
                    <Paper className={classes.paper}>
                        <div>
                            Full box
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default External;
