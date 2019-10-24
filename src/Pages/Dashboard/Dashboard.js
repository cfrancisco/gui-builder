import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Fab from '@material-ui/core/Fab';
import withStyles from '@material-ui/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Loader from '../../Components/Loader/Loader';

import CustomMap from '../../Components/CustomMap/CustomMap';

import LineChart from '../../Components/Charts/LineChart/LineChart';
import BarChart from '../../Components/Charts/BarChart/BarChart';
import PieChart from '../../Components/Charts/PieChart/PieChart';
import RadarChart from '../../Components/Charts/RadarChart/RadarChart';

import Button from '../../Components/Button/Button';
import SimpleTable from '../../Components/Table/SimpleTable';


import styles from './_styles';

import Users from '../../Services/Users';


function withData(WrappedComponent) {
    return (props) => {
        const [myData, setMyData] = useState({});
        const { promiseData, children, ...newProps } = props;

        useEffect(() => {
            promiseData().then((data) => {
                setMyData(data);
            });
        }, []);

        newProps.data = myData;

        if (newProps.data.length) {
            return (
                <WrappedComponent {...newProps}>
                    {children}
                </WrappedComponent>

            );
        }
        return (<Loader />);
    };
}

const EnhancedSimpleTable = withData(SimpleTable);


const ResponsiveReactGridLayout = WidthProvider(Responsive);

const uuidv1 = require('uuid/v1');

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */

const simpleHeader = [
    'Dessert (g)', 'Calories (g)', 'Fat (g)', 'Carbs (g)', 'Protein (g)',
];

const lineChartDataset = [
    {
        label: 'Temperatura',
        data: [
            { label: '05/06', value: 19 },
            { label: '06/06', value: 26 },
            { label: '07/06', value: 31 },
        ],
    },
    {
        label: 'Umidade',
        data: [
            { label: '05/06', value: 40 },
            { label: '06/06', value: 32 },
            { label: '07/06', value: 19 },
        ],
    },
];
const sampleData = [
    ['Frozen yoghurt', 159, 6.0, 24, 4],
    ['Ice cream sandwich', 237, 9.0, 2, 37],
    ['Eclair', 262, 16.0, 24, 6.0],
    ['Cupcake', 305, 3.7, 67, 4.3],
    ['Gingerbread', 356, 16.0, 49, 3.9],
];

const barChartDataset = [
    {
        label: 'LineDataset01',
        data: [
            { label: 'data01', value: 1 },
            { label: 'data02', value: 13 },
            { label: 'data03', value: 6 },
        ],
    },
    {
        label: 'LineDataset02',
        data: [
            { label: 'data01', value: 6 },
            { label: 'data02', value: 1 },
            { label: 'data03', value: -3 },
        ],
    },
];

const pieChartDataset = [
    { label: 'Protocolo A', value: 9 },
    { label: 'Protocolo B', value: 13 },
    { label: 'Protocolo C', value: 6 },
];

function getFromLS(key) {
    let ls = {};
    if (global.localStorage) {
        try {
            ls = JSON.parse(global.localStorage.getItem('rgl-7')) || {};
        } catch (e) {
            /* Ignore */
        }
    }
    return ls[key];
}

function saveToLS(key, value) {
    if (global.localStorage) {
        global.localStorage.setItem(
            'rgl-7',
            JSON.stringify({
                [key]: value,
            }),
        );
    }
}

const originalLayout = getFromLS('layout') || [];

class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            items: [...originalLayout],
            values: { element: '' },
            layoutElement: [],
            layout: [...originalLayout],
        };

        this.generateDOM = this.generateDOM.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);

        this.onLayoutChange = this.onLayoutChange.bind(this);
        this.resetLayout = this.resetLayout.bind(this);

        this.configs = {
            breakpoints: {
                lg: 1200,
                md: 996,
                sm: 768,
                xs: 480,
                xxs: 0,
            },
            cols: {
                lg: 12,
                md: 10,
                sm: 6,
                xs: 4,
                xxs: 2,
            },
        };
    }

    componentDidMount() {
        const boxes = [];
        const { layout } = this.state;
        layout.forEach((el) => {
            // console.log('el did mount', el);
            boxes.push(this.generateDOM(el, this.retrieveWidget(el.type)));
        });
        this.setState({ layoutElement: boxes });
    }


    /**
     * Function used to remove an item from Dashboard component. Receive an
     * event of click and the index of element. Return a state with the
     * new layout of Dashboard
     *
     * @param {*} event
     * @param {*} index
     * @memberof DashboardLayout
     */
    onRemoveItem(event, index) {
        //   const index = event.target.dataset.itemKey;
        //   console.log('items', items, layoutElement);
        const { layoutElement, items } = this.state;
        const xItems = items.filter((item) => item.i !== index);
        const newLayout = layoutElement.filter((item) => item.key !== index);
        this.setState({ layoutElement: newLayout, items: xItems });
    }

    /**
     * Adds an item to Dashboard. Updates the state with new layout,
     * increases the number of elements and concatenates a new item
     * into an array
     *
     * @memberof DashboardLayout
     */
    onAddItem() {
        const {
            values,
            layoutElement,
            items,
        } = this.state;

        const newPoints = {
            i: uuidv1(),
            x: 2,
            y: Infinity, // puts it at the bottom
            w: 2,
            h: 2,
            type: values.element,
            endpoint: 'https://endpoint.dojot.com.br/devices/0928439',
        };

        const widget = this.retrieveWidget(newPoints.type);

        this.setState({
            layoutElement: [...layoutElement, this.generateDOM(newPoints, widget)],
            items: items.concat(newPoints),
        });
    }

    onLayoutChange(layout) {
        const { onLayoutChange } = this.props;
        let { items } = this.state;
        if (items.length === 0) {
            items = layout;
        }

        const newDashboardLayout = layout.map((element) => {
            const el = element;
            for (let i = 0; i < items.length; i += 1) {
                if (el.i === items[i].i) {
                    el.type = items[i].type;
                    el.endpoint = items[i].endpoint;
                }
            }

            return el;
        });

        saveToLS('layout', newDashboardLayout);
        this.setState({
            layout: newDashboardLayout,
            items: layout,
        });
        onLayoutChange(newDashboardLayout); // updates status display
    }


    retrieveWidget(elementType) {
        let {
            data,
        } = this.state;

        let el;

        if (data.length === 0) {
            data = sampleData;
        }

        switch (elementType) {
            case ('map'):
                el = <CustomMap />;
                break;
            case ('linechart'):
                el = (
                    <LineChart
                        data={lineChartDataset}
                        title="Gráfico de Linhas"
                    />
                );
                break;
            case ('barchart'):
                el = (
                    <BarChart
                        data={barChartDataset}
                        title="Gráfico de Barras"
                    />
                );
                break;
            case ('piechart'):
                el = (
                    <PieChart
                        data={pieChartDataset}
                        title="Gráfico de Pizza"
                    />
                );
                break;
            case ('radarchart'):
                el = (
                    <RadarChart
                        data={lineChartDataset}
                        title="Gráfico de Radar"
                    />
                );
                break;
            case ('table'):
                el = <EnhancedSimpleTable data={[]} header={simpleHeader} promiseData={Users.getPlainUsers} />;
                break;
            default:
                el = <br />;
                break;
        }

        return el;
    }

    resetLayout() {
        this.setState({
            layoutElement: [],
            items: [],
        });
    }

    generateDOM(el, elem) {
        const { classes } = this.props;
        return (
            <div key={el.i} data-grid={el}>
                {elem}
                <Fab
                    size="small"
                    color="secondary"
                    onClick={(e) => this.onRemoveItem(e, el.i)}
                    aria-label="remove"
                    className={classes.fab}
                >
                    <CloseIcon />
                </Fab>
            </div>
        );
    }

    handleChange(event) {
        const { values } = this.state;
        values[event.target.name] = event.target.value;
        this.setState({ values });
    }

    render() {
        const {
            values,
            configs,
            layoutElement,
        } = this.state;
        const { classes } = this.props;

        return (
            <Grid
                container
                spacing={2}
            >
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="addElement">New Element</InputLabel>
                    <Select
                        value={values.element}
                        onChange={this.handleChange}
                        label="Add a new Element"
                        inputProps={{
                            name: 'element',
                            id: 'addElement',
                        }}
                    >
                        <MenuItem value="map">Map</MenuItem>
                        <MenuItem value="linechart">Line Chart</MenuItem>
                        <MenuItem value="barchart">Bar Chart</MenuItem>
                        <MenuItem value="piechart">Pie Chart</MenuItem>
                        <MenuItem value="radarchart">Radar Chart</MenuItem>
                        <MenuItem value="table">Table</MenuItem>
                        <MenuItem value="empty">Box</MenuItem>
                    </Select>

                    <Button className={classes.button} onClick={this.onAddItem} type="button" size="small">
                        Add Item
                    </Button>
                    <Button onClick={this.resetLayout} type="button" size="small">
                        Reset Layout
                    </Button>
                </FormControl>
                <ResponsiveReactGridLayout
                    {...configs}
                    className={classes.reactGridLayout}
                    {...this.props}
                    onLayoutChange={this.onLayoutChange}
                >
                    {layoutElement}
                </ResponsiveReactGridLayout>
            </Grid>
        );
    }
}

DashboardLayout.defaultProps = {
    onLayoutChange() { },
};

DashboardLayout.propTypes = {
    classes: PropTypes.objectOf(PropTypes.shape).isRequired,
    onLayoutChange: PropTypes.func,
};

export default withStyles(styles)(DashboardLayout);
