import React from 'react';
import PropTypes from 'prop-types';

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import styles from './_styles';

const useStyles = makeStyles(styles);

const parseDataset = (datasetComponent) => {
    // console.log('mapping Dataset with props', datasetComponent.props);
    const { label, children } = datasetComponent.props;
    const dataA = children.map((child) => {
        const { label, value } = child.props;
        return { label, value };
    });

    console.log('Label', label, 'has data', dataA);
    return { label, data: dataA };
};

function CustomLineChart(props) {
    const classes = useStyles();

    console.log('CustomLineChart props is', props);

    const {
        title,
        children = [],
        showLegend,
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

    const chartData = [];
    // Currently is [ { label: set1, data: [ {}, {} ] }, { label: set2, data: [ {}, {} ] }, ... ]
    // Has to be [ { set1: val1, set2: val2 }, {set1: val3, set2: val4 }, ... ]
    datasets.forEach((set) => {
        set.data.map((entry, index) => {
            console.log('Adding entry', entry, 'into chartData');
            if (index >= chartData.length) {
                console.log('Must add one to chartData');
                chartData.push({});
            }
            chartData[index][set.label] = entry.value;
            chartData[index].name = entry.label;
        });
    });

    console.log('ChartData set as', chartData);

    console.log('Chart title is', title);
    // margin={{top:40, right: 40, bottom: 24, left: 0}}
    return (
        <div className={classes.chartRoot}>
            {title && title}
            <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                <LineChart
                    data={chartData}
                    margin={{
                        top: 16, right: 40, bottom: 24, left: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="name"
                        tick={{ fill: fontColor }}
                        tickMargin={4}
                    />
                    <YAxis tick={{ fill: fontColor }} />
                    <Tooltip />
                    {
                        showLegend
                        && (
                            <Legend
                                formatter={(value) => (
                                    <span style={{ color: fontColor }}>
                                        {value}
                                    </span>
                                )}
                            />
                        )
                    }
                    {datasets.map((set, index) => {
                        const colorIndex = index % colors.length;
                        const childKey = index + 1;
                        return <Line key={childKey} type="monotone" isAnimationActive={false} dataKey={set.label} stroke={colors[colorIndex].stroke} activeDot={{ r: 8 }} />;
                    })}
                </LineChart>
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

CustomLineChart.Dataset = Dataset;
CustomLineChart.Data = Data;


CustomLineChart.defaultProps = {
    title: 'Gráfico de Linhas',
    showLegend: false,
    theme: styles,
};

CustomLineChart.propTypes = {
    showLegend: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,
    theme: PropTypes.instanceOf(Object),
};

export default withStyles(styles, { withTheme: true })(CustomLineChart);
