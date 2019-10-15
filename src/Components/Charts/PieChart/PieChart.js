import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PieChart } from '../Charts';

const uuidv1 = require('uuid/v1');

function CustomPieChart(props) {
    const { data, title } = props;
    const [pieChartData] = useState(JSON.parse(JSON.stringify(data)));

    return (
        <PieChart title={title}>
            {pieChartData.map((entry) => (
                <PieChart.Data key={uuidv1()} label={entry.label} value={entry.value} />
            ))}
        </PieChart>
    );
}


CustomPieChart.defaultProps = {
    title: 'Gráfico de Pizza',
};

CustomPieChart.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
    title: PropTypes.string,
};


export default CustomPieChart;
