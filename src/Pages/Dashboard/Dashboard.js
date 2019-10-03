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

import Button from '../../Components/Button/Button';
import Avatar from '../../Components/Avatar/Avatar';
import SimpleTable from '../../Components/Table/SimpleTable';

import Users from '../../Services/Users';
import styles from './_styles';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */

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
        if (values.element === 'graph') {
            el = <CustomMap />;
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

        this.setState({
            layoutElement: [...layoutElement, this.generateDOM(newPoints, el)],
            newCounter: newCounter + 1,
            items: items.concat(newPoints),
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
                        <MenuItem value="graph">Graph</MenuItem>
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
