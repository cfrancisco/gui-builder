import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import Button from '../Components/Button/Button';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */

const styles = () => ({
    root: {
        flexGrow: 1,
        paddingTop: 20,
    },
    fab: {
        position: 'absolute',
        right: '10px',
        top: '10px',
    },
    reactGridLayout: {
        width: '100%',
        background: '#eee',
        '& .react-grid-item': {
            border: '2px solid #c7c7c7',
            'font-size': '17px',
            padding: '12px',
            'font-weight': '800',
            background: '#f5f5f5',
        },
    },
});

const useStyles = makeStyles(styles);

const DashboardLayout = (props) => {
    const classes = useStyles();
    const configs = {
        breakpoints: {
            lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0,
        },
        cols: {
            lg: 12, md: 10, sm: 6, xs: 4, xxs: 2,
        },
    };

    const [items, setItems] = React.useState([0, 1, 2, 3, 4].map(i => ({
        i: i.toString(),
        x: i * 2,
        y: Math.floor(i / 6),
        w: 1 + Math.floor(Math.random() * 2),
        h: 1 + Math.floor(Math.random() * 2),
    })));
    const [newCounter, setNewCounter] = React.useState(0);

    const onRemoveItem = (el) => {
        const xItems = items.filter(item => item.i !== el.i);
        setItems(xItems);
    };

    const generateDOM = () => {
        // Generating the items with properties from the layout, rather than pass the layout directly
        const layout = items;
        return layout.map(el => (
            <div key={el.i} data-grid={el}>
                <span className="text">{el.i}</span>
                <Fab size="small" color="secondary" onClick={() => onRemoveItem(el)} aria-label="remove" className={classes.fab}>
                    <CloseIcon />
                </Fab>
            </div>
        ));
    };


    const onAddItem = () => {
        // Add a new item. It must have a unique key!
        const xItems = items.concat({
            i: `n${newCounter}`,
            x: 2,
            y: Infinity, // puts it at the bottom
            w: 2,
            h: 2,
        });
        // Increment the counter to ensure key is always unique.
        setNewCounter(newCounter + 1);
        setItems(xItems);
    };


    return (
        <div className={classes.root}>
            <Button onClick={onAddItem} type="button" size="small">Add Item</Button>
            <ResponsiveReactGridLayout
                {...configs}
                className={classes.reactGridLayout}
                {...props}
            >
                {generateDOM()}
            </ResponsiveReactGridLayout>
        </div>
    );
};

export default DashboardLayout;
