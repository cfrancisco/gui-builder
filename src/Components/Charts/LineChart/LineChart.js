import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LineChart } from '../Charts';

function CustomLineChart(props) {
    const { data, title, childKey } = props;
    const [lineChartData] = useState(JSON.parse(JSON.stringify(data)));

    console.log('lineChartDataStringfy', lineChartDataStringfy);
    console.log('lineChartData', lineChartData);

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
