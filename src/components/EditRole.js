import React, { Component } from 'react';
import RoleForm from "./RoleForm";
import { Redirect } from 'react-router-dom'

export default class EditRole extends Component {

    state = {
        role: {},
        isUpdated: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`http://localhost:8080/UserManagement/roles?ID=${id}`)
            .then(resp => resp.json())
            .then(data => this.setState({ role: data }));
    }

    handleSave = role => {
        const id = this.props.match.params.id;
        fetch(`http://localhost:8080/UserManagement/roles?ID=${id}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(role)
        })
            .then( resp => {
                if (resp.ok) {
                    this.setState({isUpdated: true});
                }
            });
    };

    render() {
        return (
            <div>
                ${this.state.isUpdated ? <Redirect to="/roles" /> : <RoleForm role={this.state.role} onSubmit={this.handleSave}/>}
            </div>
        );
    };
}