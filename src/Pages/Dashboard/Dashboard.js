import React, { Component } from 'react';
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

import Widget from 'Components/Widget/Widget';

import Button from 'Components/Button/Button';

import uuid from 'uuid';

import styles from './_styles';


const ResponsiveReactGridLayout = WidthProvider(Responsive);


/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */

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
            boxes.push(this.generateDOM(el, this.retrieveWidget(el.type, el.endpoint)));
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
            i: uuid.v1(),
            x: 2,
            y: Infinity, // puts it at the bottom
            w: 2,
            h: 2,
            type: values.element,
            endpoint: 'https://reqres.in/api/users?page=1',
        };

        const widget = this.retrieveWidget(newPoints.type, newPoints.endpoint);

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

    retrieveWidget(elementType, endpoint) {
        const el = (
            <Widget
                elementType={elementType}
                endpoint={endpoint}
            />
        );
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
