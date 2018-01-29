import React, { Component } from 'react';
import {restHost} from "../resources/properties";
import { Redirect } from 'react-router-dom'
import UserForm from './UserForm'

export default class EditUser extends Component {

    state = {
        user: {},
        isUpdated: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        fetch(`${restHost}/users?ID=${id}`)
            .then(resp => resp.json())
            .then(data => this.setState({ user: data }));
    }

    handleSave = user => {
        fetch(`${restHost}/users`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(resp => {
                if (resp.ok) {
                    this.setState({ isUpdated: true});
                }
            });
    };

    render() {
        return (
            <div>
                ${this.state.isUpdated ? <Redirect to="/users" /> : <UserForm user={this.state.user} onSubmit={this.handleSave} />};
            </div>
        );
    }
}