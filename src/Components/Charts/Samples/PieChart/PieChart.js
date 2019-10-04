import React from 'react';

import PropTypes from 'prop-types';
import {
    PieChart, Pie, Cell, ResponsiveContainer, Tooltip,
} from 'recharts';

import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styles from './_styles';

const useStyles = makeStyles(styles);

// const RADIAN = Math.PI / 180;
/* const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
}; */

function CustomPieChart(props) {
    console.log('Rendering mPieChart with props', props);

    const classes = useStyles();

    const {
        title = 'Pie chart \'title\' props',
        children = [],
        theme,
    } = props;

    const { primary, secondary, error } = theme.palette;
    const presetColors = [
        primary, secondary, error,
    ];
    const colors = presetColors.map((color) => ({ stroke: color.main, fill: color.light }));
    // const fontColor = theme.typography.subtitle1.color;

    // Loads data from children into a known structure
    const chartData = React.Children.map(children, (child) => {
        const { label, value } = child.props;
        return { name: label, value };
    });

    console.log('ChartData set as', chartData);

    return (
        <div className={classes.chartRoot}>
            <Typography variant="h6">
                {title}
            </Typography>
            <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
                <PieChart>
                    <Pie
                        data={chartData}
                        labelLine={false}
                        // label={renderCustomizedLabel}
                        dataKey="value"
                        margin={{
                            top: 16,
                            right: 40,
                            bottom: 24,
                            left: 0,
                        }}
                    >
                        {chartData.map((entry, index) => {
                            const colorIndex = index % colors.length;
                            const childKey = index + 1;
                            return <Cell key={`cell-${childKey}`} fill={colors[colorIndex].fill} />;
                        })}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

function Data(props) {
    console.log('Rendering Data with props', props);
}

CustomPieChart.Data = Data;

CustomPieChart.defaultProps = {
    title: 'Gráfico de Pizza',
    theme: styles,
};

CustomPieChart.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string,
    ]).isRequired,

    theme: PropTypes.instanceOf(Object),
};

export default withStyles(styles, { withTheme: true })(CustomPieChart);
