import React, {Component} from 'react';
import {Role} from './Role'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui'


export default class RoleList extends Component {
    state = {
        roles: []
    };

    componentDidMount() {
        this.fetchAll();
    }

    fetchAll = () => {
        fetch('http://localhost:8080/UserManagement/roles')
            .then(resp => resp.json())
            .then(data => this.setState({roles: data}));
    };

    render() {
        let roles = this.state.roles.map(role =>
            <Role role={role} key={role.id}/>
        );
        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>ID</TableHeaderColumn>
                        <TableHeaderColumn>NAME</TableHeaderColumn>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                        {roles}
                    </TableBody>
                </Table>
            </div>
        );
    }
};