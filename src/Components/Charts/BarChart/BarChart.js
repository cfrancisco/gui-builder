import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BarChart } from '../Charts';


function CustomBarChart(props) {
    const { data, title, childKey } = props;
    const [barChartData] = useState(JSON.parse(JSON.stringify(data)));
    // const [barChartData, setBarChartData] = useState(JSON.parse(JSON.stringify(barChart)));

    // const resetBarChartValues = () => setBarChartData(JSON.parse(JSON.stringify(barChart)));

    /* const addBarChartValue = () => {
        console.log('Adding value to barChart');
        const sets = barChartData;
        sets.map((set) => {
            const dataSize = set.data.length;
            const randomVal = Math.round(10 * Math.random());
            return set.data.push({ label: `data0${dataSize + 1}`, value: randomVal });
        });
        console.log('now with data:', sets);
        setBarChartData([...sets]);
    }; */

    // console.log('Rendering with barChart data', barChartData);

    return (
        <BarChart title={title}>
            {barChartData.map((set) => (
                <BarChart.Dataset label={set.label} key={childKey}>
                    {set.data.map((entry) => (
                        <BarChart.Data
                            label={entry.label}
                            value={entry.value}
                            key={childKey}
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
    childKey: PropTypes.number.isRequired,
};

export default CustomBarChart;
