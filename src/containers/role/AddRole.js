import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import RoleForm from './RoleForm'
import {connect} from "react-redux";
import {createRole, newRole} from "../../actions/roles";

class AddRole extends Component {

    state = {
        isAdded: false
    };

    componentDidMount() {
        this.props.newRole();
    }

    handleSave = role => {
        this.props.createRole(role)
            .then(() => {
                this.setState({isAdded: true})
            });
    };

    render() {
        return (
            <div>
                {this.state.isAdded ? <Redirect to="/roles"/> : <RoleForm onSubmit={this.handleSave}/>}
            </div>
        );
    };
};

export default connect(state => state.roleStore, {createRole, newRole})(AddRole);