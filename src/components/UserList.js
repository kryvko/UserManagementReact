import React, {Component} from 'react';
import {restHost} from "../resources/properties";
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow} from 'material-ui';
import {User} from './User'

export default class UserList extends Component {

    state = {
        users: []
    };

    componentDidMount() {
        this.fetchAll();
    };

    fetchAll = () => {
        fetch(`${restHost}/users`)
            .then(resp => resp.json())
            .then(data => this.setState({users: data}));
    };

    handleDelete = userId => {
        fetch(`${restHost}/users?ID=${userId}`, {
            method: 'delete'})
            .then(resp => {
                if (resp.ok) {
                    this.fetchAll();
                }
            })
    }

    render() {
        let users = this.state.users.map(
            user => <User user={user} onDelete={this.handleDelete} key={user.id}/>
        );
        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>LOGIN</TableHeaderColumn>
                            <TableHeaderColumn>EMAIL</TableHeaderColumn>
                            <TableHeaderColumn>PASSWORD</TableHeaderColumn>
                            <TableHeaderColumn>FIRST NAME</TableHeaderColumn>
                            <TableHeaderColumn>LAST NAME</TableHeaderColumn>
                            <TableHeaderColumn>ROLE</TableHeaderColumn>
                            <TableHeaderColumn>ACTION</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users}
                    </TableBody>
                </Table>
            </div>
        );
    }

}