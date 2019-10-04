import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import Fab from '@material-ui/core/Fab';
import withStyles from '@material-ui/styles/withStyles';
import CloseIcon from '@material-ui/icons/Close';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CustomMap from '../../Components/CustomMap/CustomMap';


import LineChart from '../../Components/Charts/LineChart/LineChart';
import BarChart from '../../Components/Charts/BarChart/BarChart';
import PieChart from '../../Components/Charts/PieChart/PieChart';
import RadarChart from '../../Components/Charts/RadarChart/RadarChart';

import Button from '../../Components/Button/Button';
import Avatar from '../../Components/Avatar/Avatar';
import SimpleTable from '../../Components/Table/SimpleTable';

import Users from '../../Services/Users';
import styles from './_styles';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */

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

class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [0, 1, 2, 3, 4].map((i) => ({
                i: i.toString(),
                x: i * 2,
                y: Math.floor(i / 6),
                w: 1 + Math.floor(Math.random() * 2),
                h: 1 + Math.floor(Math.random() * 2),
            })),
            values: { element: '' },
            newCounter: 0,
            header: [],
            data: [],
            layoutElement: [],
        };

        this.generateDOM = this.generateDOM.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onRemoveItem = this.onRemoveItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);

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

    getUsers = async () => {
        const header = ['id', 'email', 'first_name', 'last_name', 'avatar'];
        let dt = await Users.getUsers();
        console.log('dt', dt);
        const data = dt.map((i) => {
            return [i.email,
            i.first_name,
            i.id,
            i.last_name]
        });
        this.setState({ header, data });
    };

    componentDidMount() {
        this.data = this.getUsers();
        const layout = [];
        const { items } = this.state;
        items.forEach((el) => {
            layout.push(this.generateDOM(el, <span className="text">{el.i}</span>));
        });
        this.setState({ layoutElement: layout });
    }

    /**
     * Function used to remove and item from Dashboard component. Receive an
     * event of click and the index of element. Return a state with the
     * new layout of Dashboard
     *
     * @param {*} event
     * @param {*} index
     * @memberof DashboardLayout
     */
    onRemoveItem(event, index) {
        //     const index = event.target.dataset.itemKey;
        //   console.log('items', items, layoutElement, newCounter);
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
            newCounter,
            layoutElement,
            items,
            childKey = 0,
            data,
            header,
        } = this.state;
        const newPoints = {
            i: `n${newCounter}`,
            x: 2,
            y: Infinity, // puts it at the bottom
            w: 2,
            h: 2,
        };
        let el;

        if (values.element === 'map') {
            el = <CustomMap />;
        }
        if (values.element === 'linechart') {
            el = (
                <LineChart
                    childKey={childKey}
                    data={lineChartDataset}
                    title="Gráfico de Linhas"
                />
            );
        }
        if (values.element === 'barchart') {
            el = (
                <BarChart
                    childKey={childKey}
                    data={lineChartDataset}
                    title="Gráfico de Barras"
                />
            );
        }
        if (values.element === 'piechart') {
            el = (
                <PieChart
                    childKey={childKey}
                    data={pieChartDataset}
                    title="Gráfico de Pizza"
                />
            );
        }
        if (values.element === 'radarchart') {
            el = (
                <RadarChart
                    childKey={childKey}
                    data={lineChartDataset}
                    title="Gráfico de Radar"
                />
            );
        }
        if (values.element === 'table') {
            el = <SimpleTable data={data} header={header} />;
        }
        if (values.element === 'empty') {
            el = <br />;
        }
        if (values.element === 'avatar') {
            el = <Avatar />;
        }

        this.setState((prevState) => ({
            layoutElement: [...layoutElement, this.generateDOM(newPoints, el)],
            newCounter: newCounter + 1,
            items: items.concat(newPoints),
            childKey: prevState.childKey + 1,
        }));
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
        const { values, configs, layoutElement } = this.state;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
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
                        <MenuItem value="avatar">Avatar</MenuItem>
                        <MenuItem value="linechart">Line Chart</MenuItem>
                        <MenuItem value="barchart">Bar Chart</MenuItem>
                        <MenuItem value="piechart">Pie Chart</MenuItem>
                        <MenuItem value="radarchart">Radar Chart</MenuItem>
                        <MenuItem value="table">Table</MenuItem>
                        <MenuItem value="empty">Box</MenuItem>
                    </Select>
                    <Button onClick={this.onAddItem} type="button" size="small">
                        Add Item
                    </Button>
                </FormControl>
                <br />
                <ResponsiveReactGridLayout
                    {...configs}
                    className={classes.reactGridLayout}
                    {...this.props}
                >
                    {layoutElement}
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

DashboardLayout.propTypes = {
    classes: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default withStyles(styles)(DashboardLayout);
