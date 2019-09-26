import PropTypes from 'prop-types';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
}));

const SimpleTable = ({ header, data }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        {header.map((item) => (
                            <TableCell key={item} align="right">{item}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row[0]}>
                            {row.map((item) => (
                                <TableCell key={item} scope="row" align="right">{item}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

SimpleTable.propTypes = {
    header: PropTypes.arrayOf(
        PropTypes.string,
    ).isRequired,
    data: PropTypes.arrayOf(
        PropTypes.arrayOf(
            PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number]),
        ),
    ).isRequired,
};

export default SimpleTable;
