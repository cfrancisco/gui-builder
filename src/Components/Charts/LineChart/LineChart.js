import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid';
import { LineChart } from '../Charts';


function CustomLineChart(props) {
    const { data, title } = props;
    const [lineChartData] = useState([...data]);

    return (
        <LineChart title={title}>
            {lineChartData.map((set) => (
                <LineChart.Dataset key={uuid.v1()} label={set.label}>
                    {set.data.map(
                        (entry) => (
                            <LineChart.Data
                                key={uuid.v1()}
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
};

export default CustomLineChart;
