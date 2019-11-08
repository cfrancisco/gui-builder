import React from 'react';
import PropTypes from 'prop-types';

import CustomMap from 'Components/CustomMap/CustomMap';
import LineChart from 'Components/Charts/LineChart/LineChart';
import BarChart from 'Components/Charts/BarChart/BarChart';
import PieChart from 'Components/Charts/PieChart/PieChart';
import RadarChart from 'Components/Charts/RadarChart/RadarChart';
import SimpleTable from 'Components/Table/SimpleTable';

import Users from 'Services/Users';
import { withData } from 'utils';

const EnhancedSimpleTable = withData(SimpleTable);

const simpleHeader = [
    'id',
    'email',
    'first_name',
    'last_name',
    'avatar',
];

const lineChartDataset = [
    {
        label: 'Temperatura',
        data: [
            { label: '05/06', value: 19 },
            { label: '06/06', value: 26 },
            { label: '07/06', value: 31 },
        ],
    },
    {
        label: 'Umidade',
        data: [
            { label: '05/06', value: 40 },
            { label: '06/06', value: 32 },
            { label: '07/06', value: 19 },
        ],
    },
];

const barChartDataset = [
    {
        label: 'LineDataset01',
        data: [
            { label: 'data01', value: 1 },
            { label: 'data02', value: 13 },
            { label: 'data03', value: 6 },
        ],
    },
    {
        label: 'LineDataset02',
        data: [
            { label: 'data01', value: 6 },
            { label: 'data02', value: 1 },
            { label: 'data03', value: -3 },
        ],
    },
];

const pieChartDataset = [
    { label: 'Protocolo A', value: 9 },
    { label: 'Protocolo B', value: 13 },
    { label: 'Protocolo C', value: 6 },
];


const Widget = ({ elementType }) => {
    const data = Users.getPlainUsers;

    const element = {
        map() {
            return <CustomMap />;
        },
        linechart() {
            return (
                <LineChart
                    data={lineChartDataset}
                    title="Gráfico de Linhas"
                />
            );
        },
        barchart() {
            return (
                <BarChart
                    data={barChartDataset}
                    title="Gráfico de Barras"
                />
            );
        },
        piechart() {
            return (
                <PieChart
                    data={pieChartDataset}
                    title="Gráfico de Pizza"
                />
            );
        },
        radarchart() {
            return (
                <RadarChart
                    data={lineChartDataset}
                    title="Gráfico de Radar"
                />
            );
        },
        table() {
            return (
                <EnhancedSimpleTable
                    data={data}
                    header={simpleHeader}
                    promiseData={data}
                />
            );
        },
    };

    return (element[elementType])();
};

Widget.propTypes = {
    elementType: PropTypes.string.isRequired,
};

export default Widget;
