import React, {Component} from 'react'
import {connect} from "react-redux";
import {fetchUser, updateUser} from "../../actions/users";
import {Redirect} from "react-router-dom";
import UserForm from "./UserForm";

class EditUser extends Component {

    state = {
        isUpdated: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchUser(id);
    }

    handleSave = user => {
        const id = this.props.match.params.id;
        this.props.updateUser(id, user)
            .then(() => this.setState({isUpdated: true}))
    };

    render() {
        return (
            <div>
                ${this.state.isUpdated ? <Redirect to="/users" /> : <UserForm onSubmit={this.handleSave} />};
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: this.userStore.users
});

export default connect(mapStateToProps, {fetchUser, updateUser})(EditUser);