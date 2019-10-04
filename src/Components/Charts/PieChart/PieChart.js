import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PieChart } from '../Charts';

function CustomPieChart(props) {
    const { data, title, childKey } = props;
    const [pieChartData] = useState(JSON.parse(JSON.stringify(data)));

    // const [pieChartData, setPieChartData] = useState(JSON.parse(JSON.stringify(pieChart)));

    /*     const resetPieChartValues = () => setPieChartData(JSON.parse(JSON.stringify(pieChart)));

    const addPieChartValue = () => {
        console.log('Adding value to pieChart');
        const sets = pieChartData;
        const dataSize = sets.length;
        const randomVal = Math.round(10 * Math.random());
        sets.push({ label: `data0${dataSize + 1}`, value: randomVal });
        console.log('now with data:', sets);
        return setPieChartData([...sets]);
    }; */

    console.log('Rendering with pieChart data', pieChartData);

    return (
        <PieChart title={title}>
            {pieChartData.map((entry) => {
                console.log('SET', entry);
                return <PieChart.Data key={childKey} label={entry.label} value={entry.value} />;
            })}
        </PieChart>
    );
}


CustomPieChart.defaultProps = {
    title: 'Gráfico de Pizza',
};

CustomPieChart.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
    title: PropTypes.string,
    childKey: PropTypes.number.isRequired,
};


export default CustomPieChart;
