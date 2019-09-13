import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import { addTodo } from './Action';

import Button from '../../Components/Button/Button';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

let priority;

const AddTodo = ({ dispatch }) => {

    const classes = useStyles();
    let input;
    
    //used to set default value to radio buttons
    const [value, setValue] = React.useState('low');

    function handleChange(event) {
        setValue(event.target.value);
        priority = event.target.value;
    }
    
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return;
                }
                dispatch(addTodo(input.value, priority));
                input.value = '';
            }}
        >
            <Grid
                container
                spacing={2}
            >
                <Grid item xs={3}>
                    <TextField
                        id="todo-text"
                        label="Todo"
                        inputRef={node => (input = node)}
                        margin="normal"
                    />
                </Grid>

                <Grid item xs={3}>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Prioridade</FormLabel>
                        <RadioGroup aria-label="priority" name="prioriry" value={value} onChange={handleChange}>
                        <FormControlLabel
                            value="low"
                            control={<Radio color="primary" />}
                            label="Baixa"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="medium"
                            control={<Radio color="primary" />}
                            label="Média"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="high"
                            control={<Radio color="primary" />}
                            label="Alta"
                            labelPlacement="end"
                        />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={3}>
                    <Button type="submit" size="small">Add Todo</Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default connect()(AddTodo);
