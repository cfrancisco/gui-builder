import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import { useTranslation, useStrings } from 'react-language-kit';
import locales from './locales';
import SimpleTable from '../../Components/Table/SimpleTable';
import styles from './_styles';
import tableIcons from '../../Components/MaterialTable/icons';

const useStyles = makeStyles(styles);

const Tables = () => {
    const classes = useStyles();
    const translate = useTranslation(locales);
    const strings = useStrings(locales);

    const simpleHeader = [
        translate('simpleTable.headers.desserts'),
        translate('simpleTable.headers.calories'),
        translate('simpleTable.headers.fat'),
        translate('simpleTable.headers.carbs'),
        translate('simpleTable.headers.protein'),
    ];

    const grams = 'simpleTable.data.units.grams';

    const simpleData = [
        [
            translate('simpleTable.data.desserts.frozenYoghurt'),
            translate(grams, { g: 159 }),
            translate(grams, { g: 6.0 }),
            translate(grams, { g: 24 }),
            translate(grams, { g: 4 }),
        ], [
            translate('simpleTable.data.desserts.iceCreamSandwich'),
            translate(grams, { g: 237 }),
            translate(grams, { g: 9.0 }),
            translate(grams, { g: 2 }),
            translate(grams, { g: 37 }),
        ], [
            translate('simpleTable.data.desserts.eclair'),
            translate(grams, { g: 262 }),
            translate(grams, { g: 16.0 }),
            translate(grams, { g: 24 }),
            translate(grams, { g: 6.0 }),
        ], [
            translate('simpleTable.data.desserts.cupcake'),
            translate(grams, { g: 305 }),
            translate(grams, { g: 3.7 }),
            translate(grams, { g: 67 }),
            translate(grams, { g: 4.3 }),
        ], [
            translate('simpleTable.data.desserts.gingerbread'),
            translate(grams, { g: 356 }),
            translate(grams, { g: 16.0 }),
            translate(grams, { g: 49 }),
            translate(grams, { g: 3.9 }),
        ], [
            translate('simpleTable.data.desserts.frozenBananaCerealPops'),
            translate(grams, { g: 316 }),
            translate(grams, { g: 1 }),
            translate(grams, { g: 12 }),
            translate(grams, { g: 2.3 }),
        ], [
            translate('simpleTable.data.desserts.chilledStrawberries'),
            translate(grams, { g: 33 }),
            translate(grams, { g: 0.3 }),
            translate(grams, { g: 8 }),
            translate(grams, { g: 0 }),
        ],
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
        {
            title: translate('materialTable.columns.name'),
            field: 'name',
        }, {
            title: translate('materialTable.columns.surname.title'),
            field: 'surname',
            initialEditValue: translate('materialTable.columns.surname.initialEditValue'),
        }, {
            title: translate('materialTable.columns.birthYear'),
            field: 'birthYear',
            type: 'numeric',
        }, {
            title: translate('materialTable.columns.birthPlace'),
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
                        title={translate('materialTable.title')}
                        columns={columns}
                        data={rawData}
                        editable={{
                            onRowAdd: onRowAddMethod,
                            onRowUpdate: onRowUpdateMethod,
                            onRowDelete: onRowDeleteMethod,
                        }}
                        localization={strings.materialTable.localization}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Tables;
