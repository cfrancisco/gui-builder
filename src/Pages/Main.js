import React from 'react';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DatePicker } from 'antd';
import Loader from '../Components/Loader/Loader';
import Avatar from '../Components/Avatar/Avatar';
import { DojotButton, CleanButton, CustomButton } from '../Components/Button';
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


const Main = () => (
    <Container>
        <Typography paragraph>
            donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
            accumsan lacus vel facilisis. Nulla posuere
            sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Checkboxes />
        <CleanButton a="x">CleanButton</CleanButton>
        <DojotButton a="x">DojotButton</DojotButton>
        <CustomButton a="x">CustomButton</CustomButton>
        <Button> Material Button</Button>
        <DatePicker onChange={onChange} />
        <Avatar />
        <Loader />
    </Container>
);

export default Main;
