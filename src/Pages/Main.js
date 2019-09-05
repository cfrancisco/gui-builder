import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Loader from '../Components/Loader/Loader';
import { DojotButton, CleanButton, CustomButton } from '../Components/Button';
import Topbar from '../Components/Topbar/Topbar';
import LayoutBase from './LayoutBase';

function Checkboxes() {
    return (
        <>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked color="primary" />
            <Checkbox defaultChecked color="secondary" />
        </>
    );
}

const useStyles = makeStyles(theme => ({
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));


const Main = () => {
    const classes = useStyles();

    return (
        <Container>
            <Typography paragraph>
                donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
                accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
            <Checkboxes />
            <CleanButton a="x">CleanButton</CleanButton>
            <DojotButton a="x">DojotButton</DojotButton>
            <CustomButton a="x">CustomButton</CustomButton>
            <Button> Material Button</Button>
            <Loader />
        </Container>
    );
};

const MainPage = () => (
    <LayoutBase><Main /></LayoutBase>
);
export default MainPage;
