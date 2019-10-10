import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BarChart } from '../Charts';


function CustomBarChart(props) {
    const { data, title, childKey } = props;
    const [barChartData] = useState([...data]);

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
