import React, { useState } from 'react';
import PropTypes from 'prop-types';
/* import { makeStyles } from '@material-ui/core/styles';
import styles from './_styles'; */

import { LineChart } from '../Charts';

// const useStyles = makeStyles(styles);

function CustomLineChart(props) {
    // const classes = useStyles();
    const { data, title, childKey } = props;
    const [lineChartData] = useState(JSON.parse(JSON.stringify(data)));

    // const [lineChartData, setLineChartData] = useState(JSON.parse(JSON.stringify(lineChart)));

    // const resetLineChartValues = () => setLineChartData(JSON.parse(JSON.stringify(lineChart)));

    /* const addLineChartValue = () => {
        console.log('Adding value to lineChart');
        const sets = lineChartData;
        sets.map((set) => {
            const dataSize = set.data.length;
            const randomVal = Math.round(10 * Math.random());
            return set.data.push({ label: `data0${dataSize + 1}`, value: randomVal });
        });
        console.log('now with data:', sets);
        setLineChartData([...sets]);
    }; */

    // console.log('Rendering with lineChart data', lineChartData);

    return (
        <LineChart title={title}>
            {lineChartData.map((set) => (
                <LineChart.Dataset key={childKey} label={set.label}>
                    {set.data.map(
                        (entry) => (
                            <LineChart.Data
                                key={childKey}
                                label={entry.label}
                                value={entry.value}
                            />
                        ),
                    )}
                </LineChart.Dataset>
            ))}
        </LineChart>
    );
}

CustomLineChart.defaultProps = {
    title: 'Gráfico de Linhas',
};

CustomLineChart.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
    title: PropTypes.string,
    childKey: PropTypes.number.isRequired,
};

export default CustomLineChart;
