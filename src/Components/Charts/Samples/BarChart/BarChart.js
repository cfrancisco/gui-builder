import React from 'react';
import PropTypes from 'prop-types';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

import Typography from '@material-ui/core/Typography';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import styles from './_styles';

const useStyles = makeStyles(styles);

const parseDataset = (datasetComponent) => {
    const { label, children } = datasetComponent.props;
    const dataA = children.map((child) => {
        // eslint-disable-next-line no-shadow
        const { label, value } = child.props;
        return { label, value };
    });
    return { label, data: dataA };
};

function CustomBarChart(props) {
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

    const chartData = [];
    datasets.forEach((set) => {
        set.data.map((entry, index) => {
            if (index >= chartData.length) {
                chartData.push({});
            }
            chartData[index][set.label] = entry.value;
            chartData[index].name = entry.label;
            return chartData;
        });
    });

    return (
        <div className={classes.chartRoot}>
            <Typography variant="h6">
                {title}
            </Typography>
            <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 16, right: 40, bottom: 24, left: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fill: fontColor }} />
                    <YAxis tick={{ fill: fontColor }} />
                    <Tooltip />
                    <Legend formatter={(value) => (
                        <span style={{ color: fontColor }}>{value}</span>
                    )}
                    />
                    {datasets.map((set, index) => {
                        const colorIndex = index % colors.length;
                        const childKey = index + 1;
                        return (
                            <Bar
                                key={childKey}
                                dataKey={set.label}
                                fill={colors[colorIndex].fill}
                            />
                        );
                    })}
                </BarChart>
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

CustomBarChart.Dataset = Dataset;
CustomBarChart.Data = Data;

CustomBarChart.defaultProps = {
    title: 'Gráfico de Barras',
    theme: styles,
};

CustomBarChart.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,

    theme: PropTypes.instanceOf(Object),
};

export default withStyles(styles, { withTheme: true })(CustomBarChart);
