import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui'

export const Role = ({role}) => (
    <TableRow>
        <TableRowColumn>{role.id}</TableRowColumn>
        <TableRowColumn>{role.name}</TableRowColumn>
    </TableRow>
);