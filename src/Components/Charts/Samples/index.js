import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import LineChartSample from '../LineChart/LineChart';
import BarChartSample from '../BarChart/BarChart';
import PieChartSample from '../PieChart/PieChart';
import RadarChartSample from '../RadarChart/RadarChart';

function Charts(props) {
    const {
        classes,
    } = props;

    return (
        <Grid spacing={2} xs={12} container direction="row">

            <Grid item xs={12} md={6}>
                <Card>
                    <LineChartSample />
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card>
                    <BarChartSample />
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card>
                    <PieChartSample />
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card>
                    <RadarChartSample />
                </Card>
            </Grid>

        </Grid>
    );
}

export default Charts;
