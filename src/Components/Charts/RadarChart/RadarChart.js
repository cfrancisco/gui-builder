import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { RadarChart } from '../Charts';

function CustomRadarChart(props) {
    const { data, title, childKey } = props;
    const [radarChartData] = useState(JSON.parse(JSON.stringify(data)));

    return (
        <RadarChart title={title}>
            {radarChartData.map((set) => (
                <RadarChart.Dataset key={childKey} label={set.label}>
                    {set.data.map((entry) => (
                        <RadarChart.Data
                            key={childKey}
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
    childKey: PropTypes.number.isRequired,
};


export default CustomRadarChart;
