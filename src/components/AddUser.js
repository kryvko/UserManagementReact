import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import UserForm from './UserForm';
import {restHost} from "../resources/properties";

export default class AddUser extends Component {

    state = {
        isAdded: false
    };

    handleSave = user => {
        fetch(`${restHost}/users`, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(user)
        })
            .then(resp => {
                if (resp.ok) {
                    this.setState({isAdded: true});
                }
            });
    };

    render() {
        return (
            <div>
                {this.state.isAdded ? <Redirect to='/users'/> : <UserForm onSubmit={this.handleSave}/>}
            </div>
        );
    };
}