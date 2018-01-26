import React, {Component} from 'react';
import {Role} from './Role'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui'
import {restHost} from "../resources/properties";


export default class RoleList extends Component {
    state = {
        roles: []
    };

    componentDidMount() {
        this.fetchAll();
    }

    fetchAll = () => {
        fetch(`${restHost}/roles`)
            .then(resp => resp.json())
            .then(data => this.setState({roles: data}));
    };

    handleDelete = id => {
        fetch(`${restHost}/roles?ID=${id}`, {
            method: 'delete'
        })
            .then(resp => {
                if (resp.ok) {
                    this.fetchAll();
                }
            });
    };

    render() {
        let roles = this.state.roles.map(role =>
            <Role role={role} key={role.id} onDelete={this.handleDelete}/>
        );
        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>NAME</TableHeaderColumn>
                            <TableHeaderColumn>ACTION</TableHeaderColumn>
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