import React from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid';
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

const parseDataset = ({ props }) => {
    const { label, children } = props;
    const dataA = children.map((child) => {
        const { label: auxLabel, value } = child.props;
        return { label: auxLabel, value };
    });

    return { label, data: dataA };
};

function CustomLineChart(props) {
    const classes = useStyles();
    const {
        title,
        children = [],
        showLegend,
        theme,
    } = props;

    /*  const { primary, secondary, error } = theme.palette;
    const presetColors = [
        primary, secondary, error,
    ];
    const colors = presetColors.map((color) => ({ stroke: color.main, fill: color.light })); */
    const fontColor = theme.typography.subtitle1.color;

    // Loads data from children into a known structure
    const datasets = React.Children.map(children, (child) => parseDataset(child));

    const chartData = [];
    // Currently is [ { label: set1, data: [ {}, {} ] }, { label: set2, data: [ {}, {} ] }, ... ]
    // Has to be [ { set1: val1, set2: val2 }, {set1: val3, set2: val4 }, ... ]
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
        <div className={`${classes.chartRoot} ${classes.mySvg}`}>
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
                    {datasets.map((set) => (
                        <Line
                            className={classes.mySvg}
                            key={uuid.v1()}
                            type="monotone"
                            isAnimationActive={false}
                            dataKey={set.label}
                            // stroke={colors[colorIndex].stroke}
                            activeDot={{ r: 8 }}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

function Dataset(props) {
    // eslint-disable-next-line no-console
    console.log('Dataset props is', props);
}

function Data(props) {
    // eslint-disable-next-line no-console
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
