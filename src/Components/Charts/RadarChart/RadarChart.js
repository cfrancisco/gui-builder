import React, { useState } from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid';
import { RadarChart } from '../Charts';


function CustomRadarChart(props) {
    const { data, title } = props;
    const [radarChartData] = useState([...data]);

    return (
        <RadarChart title={title}>
            {radarChartData.map((set) => (
                <RadarChart.Dataset key={uuid.v1()} label={set.label}>
                    {set.data.map((entry) => (
                        <RadarChart.Data
                            key={uuid.v1()}
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
