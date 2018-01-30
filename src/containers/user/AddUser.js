import React, {Component} from 'react'
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {createUser, newUser} from '../../actions/users'
import UserForm from "./UserForm";

class AddUser extends Component {

    state = {
        isAdded: false
    };

    componentDidMount() {
        this.props.newUser();
    }

    handleSave = user => {
        this.props.createUser(user)
            .then(() => {
                    this.setState({isAdded: true})
                }
            );
    };

    render() {
        return (
            <div>
                {this.state.isAdded ? <Redirect to='/users'/> : <UserForm onSubmit={this.handleSave}/>}
            </div>
        );
    }

}

export default connect(state => state.userStore, {createUser, newUser})(AddUser);