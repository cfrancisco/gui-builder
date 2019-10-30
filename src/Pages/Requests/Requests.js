import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Highlight from 'react-highlight.js';
import styles from './_styles';
import Users from 'Services/Users';

const useStyles = makeStyles(styles);

const Requests = () => {
    const classes = useStyles();
    const [firstData, setFirstData] = useState([]);
    const [secondData, setSecondData] = useState([]);
    const [thirdData, setThirdData] = useState([]);

    // example showing an async request
    useEffect(() => {
        async function fetchUserData() {
            const dataUsers = await Users.getUsers();
            setFirstData(dataUsers);
        }
        fetchUserData();
    }, []);

    // using aysnc request waiting promess
    useEffect(() => {
        Users.getMoreUsers().then((res) => {
            setSecondData(res.data);
        })
            .catch((err) => { // error handling inside page
                setSecondData(err);
            });
    }, []);


    // aysnc request waiting promess with error
    useEffect(() => {
        Users.getInvalidUsers().then((data) => {
            setThirdData([data]);
        })
            .catch((err) => { // error handling inside page
                setThirdData([err]);
            });
    }, []);


    return (
        <div className={classes.root}>
            <Grid
                spacing={4}
                alignItems="center"
                justify="center"
                container
                className={classes.grid}
            >
                <Grid className={classes.gridItem} item xs={12} md={!2}>
                    Requests
                    <br />
                    <Highlight className={classes.pre} language="json">
                        {JSON.stringify(firstData)}
                    </Highlight>
                    <br />
                    <Highlight className={classes.pre} language="json">
                        {JSON.stringify(secondData)}
                    </Highlight>
                    <br />
                    <Highlight className={classes.pre} language="json">
                        {JSON.stringify(thirdData)}
                    </Highlight>
                </Grid>
            </Grid>
        </div>
    );
};

export default Requests;
