import React from 'react';
import {
    Button, Checkbox, List, ListItem, ListItemText, Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker } from 'antd';
import Loader from '../../Components/Loader/Loader';
import Avatar from '../../Components/Avatar/Avatar';
import { DojotButton, CleanButton, CustomButton } from '../../Components/Button';
import 'antd/dist/antd.css';


function Checkboxes() {
    return (
        <>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked color="primary" />
            <Checkbox defaultChecked color="secondary" />
        </>
    );
}

function onChange() {
    // console.log(date, dateString);
}


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
const useStyles = makeStyles(styles);

const Main = () => {
    const classes = useStyles();
    return (
        <List className={classes.root}>
            <ListItem>
                <Divider variant="inset" />
            </ListItem>
            <ListItem>
                <Checkboxes />
            </ListItem>
            <ListItem>
                <CleanButton a="x">CleanButton</CleanButton>
            </ListItem>
            <ListItem>
                <DojotButton a="x">DojotButton</DojotButton>
            </ListItem>
            <ListItem>
                <CustomButton a="x">CustomButton</CustomButton>
            </ListItem>
            <ListItem>
                <Button> Material Button</Button>
            </ListItem>
            <ListItem>
                <DatePicker onChange={onChange} />
            </ListItem>
            <ListItem>
                <Loader />
            </ListItem>
            <ListItem>
                <Avatar />
            </ListItem>
            <ListItem>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
            </ListItem>
        </List>
    );
};

export default Main;
