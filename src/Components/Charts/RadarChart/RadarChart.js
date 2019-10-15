import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { RadarChart } from '../Charts';

const uuidv1 = require('uuid/v1');

function CustomRadarChart(props) {
    const { data, title } = props;
    const [radarChartData] = useState(JSON.parse(JSON.stringify(data)));

    return (
        <RadarChart title={title}>
            {radarChartData.map((set) => (
                <RadarChart.Dataset key={uuidv1()} label={set.label}>
                    {set.data.map((entry) => (
                        <RadarChart.Data
                            key={uuidv1()}
                            label={entry.label}
                            value={entry.value}
                        />
                    ))}
                </RadarChart.Dataset>
            ))}
        </RadarChart>
    );
}

CustomRadarChart.defaultProps = {
    title: 'Gráfico de Radar',
};

CustomRadarChart.propTypes = {
    data: PropTypes.instanceOf(Array).isRequired,
    title: PropTypes.string,
};


export default CustomRadarChart;
