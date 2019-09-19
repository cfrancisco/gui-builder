import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    TextField,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { connect } from 'react-redux';
import addTodo from './Action';

import Button from '../../Components/Button/Button';

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

    handleSubmit(event) {
        event.preventDefault();
        const { input, priority } = this.state;
        if (!input.trim()) {
            return;
        }

        const { dispatch } = this.props;
        dispatch(addTodo(input, priority));
        this.setState({ input: '' });
    }

    handleInput(event) {
        event.preventDefault();
        this.setState({ input: event.target.value });
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ priority: event.target.value });
    }

    render() {
        const { input, priority } = this.state;
        return (
            <form
                onSubmit={this.handleSubmit}
            >
                <Grid
                    container
                    spacing={2}
                >
                    <Grid item xs={2} />
                    <Grid item xs={3}>
                        <TextField
                            id="todo-text"
                            label="Todo"
                            value={input}
                            onChange={this.handleInput}
                            margin="normal"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Prioridade</FormLabel>
                            <RadioGroup aria-label="priority" name="prioriry" value={priority} onChange={this.handleChange}>
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
                    <Grid item xs={2} />
                </Grid>
            </form>
        );
    }
}

AddTodo.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
