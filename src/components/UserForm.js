import React, {Component} from 'react';
import {TextField, FlatButton, SelectField, MenuItem } from 'material-ui';
import {restHost} from "../resources/properties";

export default class UserForm extends Component {

    state = {
        login: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        roleId: '',
        roles: []
    };

    componentDidMount() {
        this.fetchAll();
    };

    fetchAll = () => {
        fetch(`${restHost}/roles`)
            .then(resp => resp.json())
            .then(data => this.setState({ roles: data }));
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.user) {
            const {id, login, email, password, firstName, lastName, role: {id: roleId}} = nextProps.user;
            this.setState({id, login, email, password, firstName, lastName, roleId });
        }
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { login, email, password, firstName, lastName, roleId, roles } = this.state;
        this.props.onSubmit({ login, email, password, firstName, lastName, role: roles.find( role => (role.id === roleId))})
    };

    render() {
        let roles = this.state.roles.map(
            role => (<MenuItem value={role.id} key={role.id} primaryText={role.name}/>)
        );
        return (
            <div>
                <form onChange={this.handleChange}>
                    <TextField name="login" value={this.state.login} hintText="Login"/><br/>
                    <TextField name="email" value={this.state.email} hintText="Email"/><br/>
                    <TextField name="password" value={this.state.password} hintText="Password"/><br/>
                    <TextField name="firstName" value={this.state.firstName} hintText="First Name"/><br/>
                    <TextField name="lastName" value={this.state.lastName} hintText="Last Name"/><br/>
                    <SelectField name="roleId" hintText="Select Role" value={this.state.roleId}>
                        {roles}
                    </SelectField><br/>
                    <FlatButton type="submit">Save</FlatButton>
                </form>
            </div>
        );
    };
}
