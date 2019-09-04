import React from 'react';
import { Button } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import Loader from '../Components/Loader/Loader';
import { DojotButton, CleanButton, CustomButton } from '../Components/Button';
import Topbar from '../Components/Topbar/Topbar';

function Checkboxes() {
    return (
        <>
            <Checkbox defaultChecked />
            <Checkbox defaultChecked color="primary" />
            <Checkbox defaultChecked color="secondary" />
        </>
    );
}

const Main = () => (
    <>
        <Topbar />
        <Container>
            <Checkboxes />
            <CleanButton a="x">CleanButton</CleanButton>
            <DojotButton a="x">DojotButton</DojotButton>
            <CustomButton a="x">CustomButton</CustomButton>
            <Button> Material Button</Button>
            <Loader />
        </Container>
    </>
);

export default Main;
