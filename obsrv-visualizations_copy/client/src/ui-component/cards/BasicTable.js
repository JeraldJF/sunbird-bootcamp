import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import _ from 'lodash'

const BasicTable = (props) => {

    const { columns, data } = props;

    const renderHeader = (column) => {
        return <TableCell>{_.capitalize(column)}</TableCell>
    }

    const renderCell = (payload) => {
        const [key, value] = payload
        return <TableCell component="th" scope="row">
            {value}
        </TableCell>
    }

    const renderRow = (row) => {
        return <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            {_.map(_.entries(_.pick(row, columns)), renderCell)}
        </TableRow>
    }

    return <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                    {_.map(columns, renderHeader)}
                </TableRow>
            </TableHead>
            <TableBody>
                {_.map(data, renderRow)}
            </TableBody>
        </Table>
    </TableContainer>
}

export default BasicTable