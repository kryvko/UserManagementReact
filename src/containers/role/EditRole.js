import React, { Component } from 'react';
import RoleForm from "./RoleForm";
import { Redirect } from 'react-router-dom'
import {fetchRole, updateRole} from "../../actions/roles";
import {connect} from "react-redux";

class EditRole extends Component {

    state = {
        isUpdated: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.fetchRole(id);
    }

    handleSave = role => {
        const id = this.props.match.params.id;
        this.props.updateRole(id, role)
            .then(() => this.setState({ isUpdated: true}));
    };

    render() {
        return (
            <div>
                ${this.state.isUpdated ? <Redirect to="/roles" /> : <RoleForm onSubmit={this.handleSave}/>}
            </div>
        );
    };
}

const mapStateToProps = state => ({
    roles: state.roleStore.roles
});

export default connect(mapStateToProps, {fetchRole, updateRole})(EditRole)