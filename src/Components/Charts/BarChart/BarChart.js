import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid';
import { BarChart } from '../Charts';


function CustomBarChart(props) {
    const { data, title } = props;
    const [barChartData] = useState([...data]);

    return (
        <BarChart title={title}>
            {barChartData.map((set) => (
                <BarChart.Dataset label={set.label} key={uuid.v1()}>
                    {set.data.map((entry) => (
                        <BarChart.Data
                            label={entry.label}
                            value={entry.value}
                            key={uuid.v1()}
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
