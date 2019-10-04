import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { RadarChart } from '../Charts';

function CustomRadarChart(props) {
    const { data, title, childKey } = props;
    const [radarChartData] = useState(JSON.parse(JSON.stringify(data)));
    // const [radarChartData, setRadarChartData] = useState(JSON.parse(JSON.stringify(radarChart)));

    // const resetRadarChartValues = () => setRadarChartData(JSON.parse(JSON.stringify(radarChart)));

/*     const addRadarChartValue = () => {
        console.log('Adding value to radarChart');
        const sets = radarChartData;
        const setSize = sets[0].data.length;
        const newSet = {};
        newSet.label = `RadarDataset0${sets.length + 1}`;
        newSet.data = [];
        for (let i = 0; i < setSize; i += 1) {
            const newSetData = {};
            newSetData.label = `data0${i + 1}`;
            const randomVal = Math.round(10 * Math.random());
            newSetData.value = randomVal;
            console.log('ADDING DATA', newSetData, 'TO NEWSET', newSet);
            newSet.data.push(newSetData);
        }
        console.log('OMG ADDING NEWSET', newSet);
        sets.push(newSet);
        console.log('now with data:', sets);
        setRadarChartData([...sets]);
    }; */

    console.log('Rendering with radarChart data', radarChartData);

    return (
        <RadarChart title={title}>
            {radarChartData.map((set) => {
                console.log('SET', set);
                return (
                    <RadarChart.Dataset key={childKey} label={set.label}>
                        {set.data.map((entry) => (
                            <RadarChart.Data
                                key={childKey}
                                label={entry.label}
                                value={entry.value}
                            />
                        ))}
                    </RadarChart.Dataset>
                );
            })}
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
