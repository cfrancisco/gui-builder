import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BarChart } from '../Charts';

const uuidv1 = require('uuid/v1');

function CustomBarChart(props) {
    const { data, title } = props;
    const [barChartData] = useState(JSON.parse(JSON.stringify(data)));

    return (
        <BarChart title={title}>
            {barChartData.map((set) => (
                <BarChart.Dataset label={set.label} key={uuidv1()}>
                    {set.data.map((entry) => (
                        <BarChart.Data
                            label={entry.label}
                            value={entry.value}
                            key={uuidv1()}
                        />
                    ))}
                </BarChart.Dataset>
            ))}
        </BarChart>
    );
}

CustomBarChart.defaultProps = {
    title: 'Gráfico de Linhas',
};

CustomBarChart.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
    title: PropTypes.string,
};

export default CustomBarChart;
