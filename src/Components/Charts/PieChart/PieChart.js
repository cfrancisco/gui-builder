import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid';
import { PieChart } from '../Charts';


function CustomPieChart(props) {
    const { data, title } = props;
    const [pieChartData] = useState([...data]);

    return (
        <PieChart title={title}>
            {pieChartData.map((entry) => (
                <PieChart.Data key={uuid.v1()} label={entry.label} value={entry.value} />
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
