import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { PieChart } from '../Charts';

function CustomPieChart(props) {
    const { data, title, childKey } = props;
    const [pieChartData] = useState(JSON.parse(JSON.stringify(data)));

    return (
        <PieChart title={title}>
            {pieChartData.map((entry) => (
                <PieChart.Data key={childKey} label={entry.label} value={entry.value} />
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
    childKey: PropTypes.number.isRequired,
};


export default CustomPieChart;
