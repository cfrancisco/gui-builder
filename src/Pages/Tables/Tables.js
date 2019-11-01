import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MaterialTable from 'material-table';
import { useTranslation, useStrings } from 'react-language-kit';
import i18nMap from './i18n';
import SimpleTable from '../../Components/Table/SimpleTable';
import styles from './_styles';
import tableIcons from '../../Components/MaterialTable/icons';

const useStyles = makeStyles(styles);

const Tables = () => {
    const classes = useStyles();
    const t = useTranslation(i18nMap);
    const strings = useStrings(i18nMap);

    const simpleHeader = [
        t('simpleTable.headers.desserts'),
        t('simpleTable.headers.calories'),
        t('simpleTable.headers.fat'),
        t('simpleTable.headers.carbs'),
        t('simpleTable.headers.protein'),
    ];

    const grams = 'simpleTable.data.units.grams';

    const simpleData = [
        [t('simpleTable.data.desserts.frozenYoghurt'), t(grams, { g: 159 }), t(grams, { g: 6.0 }), t(grams, { g: 24 }), t(grams, { g: 4 })],
        [t('simpleTable.data.desserts.iceCreamSandwich'), t(grams, { g: 237 }), t(grams, { g: 9.0 }), t(grams, { g: 2 }), t(grams, { g: 37 })],
        [t('simpleTable.data.desserts.eclair'), t(grams, { g: 262 }), t(grams, { g: 16.0 }), t(grams, { g: 24 }), t(grams, { g: 6.0 })],
        [t('simpleTable.data.desserts.cupcake'), t(grams, { g: 305 }), t(grams, { g: 3.7 }), t(grams, { g: 67 }), t(grams, { g: 4.3 })],
        [t('simpleTable.data.desserts.gingerbread'), t(grams, { g: 356 }), t(grams, { g: 16.0 }), t(grams, { g: 49 }), t(grams, { g: 3.9 })],
        [t('simpleTable.data.desserts.frozenBananaCerealPops'), t(grams, { g: 316 }), t(grams, { g: 1 }), t(grams, { g: 12 }), t(grams, { g: 2.3 })],
        [t('simpleTable.data.desserts.chilledStrawberries'), t(grams, { g: 33 }), t(grams, { g: 0.3 }), t(grams, { g: 8 }), t(grams, { g: 0 })],
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
        { title: t('materialTable.columns.name'), field: 'name' },
        { title: t('materialTable.columns.surname.title'), field: 'surname', initialEditValue: t('materialTable.columns.surname.initialEditValue') },
        { title: t('materialTable.columns.birthYear'), field: 'birthYear', type: 'numeric' },
        {
            title: t('materialTable.columns.birthPlace'),
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
                        title={t('materialTable.title')}
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
