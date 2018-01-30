import React from 'react';
import {TableRow, TableRowColumn, FlatButton} from 'material-ui'
import {Link} from 'react-router-dom';

export const User = ({user, onDelete}) => (
    <TableRow>
        <TableRowColumn>{user.id}</TableRowColumn>
        <TableRowColumn>{user.login}</TableRowColumn>
        <TableRowColumn>{user.email}</TableRowColumn>
        <TableRowColumn>{user.password}</TableRowColumn>
        <TableRowColumn>{user.firstName}</TableRowColumn>
        <TableRowColumn>{user.lastName}</TableRowColumn>
        <TableRowColumn>{user.role.name}</TableRowColumn>
        <TableRowColumn>
            <Link to={`/users/edit/${user.id}`}><FlatButton primary={true}>Edit</FlatButton></Link>
            <FlatButton secondary={true} onClick={() => onDelete(user.id)}>Delete</FlatButton>
        </TableRowColumn>
    </TableRow>
);