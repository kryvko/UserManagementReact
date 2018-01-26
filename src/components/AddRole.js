import React, { Component } from 'react'
import { Redirect } from  'react-router-dom'
import RoleForm from './RoleForm'
import { restHost } from "../resources/properties";

export default class AddRole extends Component {

    state = {
        isAdded: false
    };

    handleSave = role => {
        fetch(`${restHost}/roles`, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(role)
        })
            .then(resp => {
                if(resp.ok) {
                    this.setState({isAdded: true})
                }
            })
    };

    render() {
        return (
            <div>
                {this.state.isAdded ? <Redirect to="/roles" /> : <RoleForm onSubmit={this.handleSave} />}
            </div>
        );
    };
}