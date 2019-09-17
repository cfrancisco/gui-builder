import React, {Component} from 'react';
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

class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priority: '',
            input: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    /*
    const classes = useStyles();
    let input;
    
    //used to set default value to radio buttons
    const [value, setValue] = React.useState('low');
    */

    handleSubmit(event) {
        if (!this.state.input.trim()) {
            return;
        } else {
            this.setState({input: event.target.value});
        }
        this.props.dispatch(addTodo(this.state.input, this.state.priority));
        this.setState({input: ''});
        event.preventDefault();
    }

    handleInput(event) {
        this.setState({input: event.target.value});
    }
    
    handleChange(event) {
        this.setState({priority: event.target.value});
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={3}>
                        <TextField
                            id="todo-text"
                            label="Todo"
                            value={this.state.input}
                            onChange={this.handleInput}
                            margin="normal"
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Prioridade</FormLabel>
                            <RadioGroup aria-label="priority" name="prioriry" value={this.state.priority} onChange={this.handleChange}>
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
    }
}

export default connect()(AddTodo);
