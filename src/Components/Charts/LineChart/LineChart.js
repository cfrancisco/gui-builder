import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LineChart } from '../Charts';

const uuidv1 = require('uuid/v1');

function CustomLineChart(props) {
    const { data, title } = props;
    const [lineChartData] = useState(JSON.parse(JSON.stringify(data)));

    return (
        <LineChart title={title}>
            {lineChartData.map((set) => (
                <LineChart.Dataset key={uuidv1()} label={set.label}>
                    {set.data.map(
                        (entry) => (
                            <LineChart.Data
                                key={uuidv1()}
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
