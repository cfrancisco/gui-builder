import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import SimpleTable from 'Components/Table/SimpleTable';
import tableIcons from 'Components/MaterialTable/icons';
import styles from './_styles';

const useStyles = makeStyles(styles);

const Tables = () => {
    const classes = useStyles();
    const simpleHeader = [
        'Dessert (g)', 'Calories (g)', 'Fat (g)', 'Carbs (g)', 'Protein (g)',
    ];
    const simpleData = [
        ['Frozen yoghurt', 159, 6.0, 24, 4],
        ['Ice cream sandwich', 237, 9.0, 2, 37],
        ['Eclair', 262, 16.0, 24, 6.0],
        ['Cupcake', 305, 3.7, 67, 4.3],
        ['Gingerbread', 356, 16.0, 49, 3.9],
    ];
    const [rawData, setRawData] = useState([]);

    useEffect(() => {
        setRawData([
            {
                name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63,
            },
            {
                name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34,
            },
        ]);
    }, []);

    const columns = [
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname', initialEditValue: 'initial edit value' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        },
    ];

    const onRowAddMethod = (newData) => new Promise((resolve) => {
        const auxData = [...rawData];
        auxData.push(newData);
        setRawData(auxData);
        resolve();
    });

    const onRowUpdateMethod = (newData, oldData) => new Promise((resolve) => {
        const auxData = [...rawData];
        const index = auxData.indexOf(oldData);
        auxData[index] = newData;
        setRawData(auxData);
        resolve();
    });


    const onRowDeleteMethod = (oldData) => new Promise((resolve) => {
        const auxData = [...rawData];
        const index = auxData.indexOf(oldData);
        auxData.splice(index, 1);
        setRawData(auxData);
        resolve();
    });

    return (
        <div className={classes.root}>
            <Grid spacing={10} alignItems="center" justify="center" container>
                <Grid item xs={12} md={12}>
                    <SimpleTable header={simpleHeader} data={simpleData} />
                </Grid>
                <Grid item xs={12} md={12}>
                    <MaterialTable
                        icons={tableIcons}
                        title="Editable Table"
                        columns={columns}
                        data={rawData}
                        editable={{
                            onRowAdd: onRowAddMethod,
                            onRowUpdate: onRowUpdateMethod,
                            onRowDelete: onRowDeleteMethod,
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Tables;
