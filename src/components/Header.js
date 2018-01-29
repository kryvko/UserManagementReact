import React from 'react';
import { Link } from 'react-router-dom';
import { FlatButton } from 'material-ui';

export const Header = () => (
    <header>
        <Link to="/roles"><FlatButton>Roles</FlatButton></Link>
        <Link to="/roles/add"><FlatButton>Add Role</FlatButton></Link>
        <Link to="/users"><FlatButton>Users</FlatButton></Link>
        <Link to="/users/add"><FlatButton>Add User</FlatButton></Link>
    </header>
);