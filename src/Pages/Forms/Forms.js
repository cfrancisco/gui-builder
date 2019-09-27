import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { LinearProgress, MenuItem } from '@material-ui/core';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import { DojotButton } from '../../Components/Button';
import styles from './_styles';

//
// More info: https://jaredpalmer.com/formik/docs/guides/validation
//

const ranges = [
    {
        value: 'none',
        label: 'None',
    },
    {
        value: '0-20',
        label: '0 to 20',
    },
    {
        value: '21-50',
        label: '21 to 50',
    },
    {
        value: '51-100',
        label: '51 to 100',
    },
];

const useStyles = makeStyles(styles);

const Forms = () => {
    const classes = useStyles();

    // https://jaredpalmer.com/formik/docs/api/formik#onsubmit-values-values-formikbag-formikbag-void
    return (
        <div className={classes.root}>
            <Grid
                spacing={10}
                alignItems="center"
                justify="center"
                container
            >
                <Grid item xs={12}>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                            select: 'none',
                            tags: [],
                            rememberMe: true,
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                setSubmitting(false);
                            }, 500);
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string()
                                .email()
                                .required('Email is required'),
                        })}
                        render={({
                            handleSubmit, isSubmitting,
                        }) => (
                            <Form>
                                <Field
                                    name="email"
                                    type="email"
                                    label="Email"
                                    component={TextField}
                                />
                                <br />
                                <br />
                                <Field
                                    type="password"
                                    label="Password"
                                    name="password"
                                    component={TextField}
                                />
                                <br />
                                <br />
                                <Field
                                    type="text"
                                    name="select"
                                    label="With Select"
                                    select
                                    helperText="Please select Range"
                                    margin="normal"
                                    component={TextField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    {ranges.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </Field>
                                <br />
                                <br />
                                {isSubmitting && <LinearProgress />}
                                <br />
                                <DojotButton
                                    variant="contained"
                                    color="primary"
                                    disabled={isSubmitting}
                                    onClick={handleSubmit}
                                >
                                        Submit
                                </DojotButton>
                            </Form>
                        )}
                    />
                </Grid>
            </Grid>
        </div>
    );
};

export default Forms;
