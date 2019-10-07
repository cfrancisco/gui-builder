import React from 'react';
import PropTypes from 'prop-types';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styles from './_styles';

const useStyles = makeStyles(styles);

const parseDataset = (datasetComponent) => {
    console.log('mapping Dataset with props', datasetComponent.props);
    const { label, children } = datasetComponent.props;
    const dataA = children.map((child) => {
        const { label, value } = child.props;
        return { label, value };
    });
    console.log('Label', label, 'has data', dataA);
    return { label, data: dataA };
};

function CustomRadarChart(props) {
    console.log('CustomRadarChart props is', props);


    const classes = useStyles();
    const {
        title,
        children = [],
        theme,
    } = props;

    const { primary, secondary, error } = theme.palette;
    const presetColors = [
        primary, secondary, error,
    ];
    const colors = presetColors.map((color) => ({ stroke: color.main, fill: color.light }));
    const fontColor = theme.typography.subtitle1.color;

    // Loads data from children into a known structure
    const datasets = React.Children.map(children, (child) => parseDataset(child));

    console.log('Got datasets:', datasets);

    let chartData = {};

    datasets.forEach((set) => {
        const setId = set.label;
        set.data.map((entry) => {
            console.log('Adding entry', entry, 'into chartData');
            const entryId = entry.label;
            const entryValue = entry.value;

            const entryData = chartData[entryId] || {};
            entryData[setId] = entryValue;
            chartData[entryId] = entryData;
        });
    });

    chartData = Object.keys(chartData).map((dataId) => (
        { chartLabel: dataId, ...chartData[dataId] }
    ));

    console.log('ChartData finally set as', chartData);

    return (
        <div className={classes.chartRoot}>
            <Typography variant="h6">
                {title}
            </Typography>
            <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                <RadarChart data={chartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="chartLabel" tick={{ fill: fontColor }} />
                    <PolarRadiusAxis />
                    {datasets.map((set, index) => {
                        const colorIndex = index % colors.length;
                        const childkey = index + 1;
                        return (
                            <Radar
                                key={childkey}
                                name={set.label}
                                dataKey={set.label}
                                stroke={colors[colorIndex].stroke}
                                fill={colors[colorIndex].fill}
                                fillOpacity={0.6}
                            />
                        );
                    })}
                    <Tooltip />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

function Dataset(props) {
    console.log('Dataset props is', props);
}

function Data(props) {
    console.log('Data props is', props);
}

CustomRadarChart.Dataset = Dataset;
CustomRadarChart.Data = Data;


CustomRadarChart.defaultProps = {
    title: 'Gráfico de Barras',
    theme: styles,
};

CustomRadarChart.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,

    theme: PropTypes.instanceOf(Object),
};


export default withStyles(styles, { withTheme: true })(CustomRadarChart);