import React from 'react';
import { Link } from 'react-router-dom'
import {TableRow, TableRowColumn, FlatButton } from 'material-ui'

export const Role = ({role, onDelete}) => (
    <TableRow>
        <TableRowColumn>{role.id}</TableRowColumn>
        <TableRowColumn>{role.name}</TableRowColumn>
        <TableRowColumn>
            <Link to={`/roles/edit/${role.id}`} ><FlatButton primary={true}>Edit</FlatButton></Link>
            <FlatButton secondary={true} onClick={() => onDelete(role.id)}>Delete</FlatButton>
        </TableRowColumn>
    </TableRow>
);