import React, {Component} from 'react';
import {TextField, FlatButton, SelectField, MenuItem } from 'material-ui';
import {restHost} from "../resources/properties";

export default class UserForm extends Component {

    state = {
        id: null,
        login: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        roleId: null,
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
        const { id, login, email, password, firstName, lastName, roleId, roles } = this.state;
        this.props.onSubmit({ id, login, email, password, firstName, lastName, role: roles.find( role => (role.id === roleId))})
    };

    handleSelectChange = (event, index, value) => {
      this.setState({ roleId: value });
    };

    render() {
        let roles = this.state.roles.map(
            role => (<MenuItem value={role.id} key={role.id} primaryText={role.name}/>)
        );
        return (
            <div>
                <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
                    <TextField name="login" value={this.state.login} floatingLabelText="Login"/><br/>
                    <TextField name="email" value={this.state.email} floatingLabelText="Email"/><br/>
                    <TextField name="password" value={this.state.password} floatingLabelText="Password"/><br/>
                    <TextField name="firstName" value={this.state.firstName} floatingLabelText="First Name"/><br/>
                    <TextField name="lastName" value={this.state.lastName} floatingLabelText="Last Name"/><br/>
                    <SelectField onChange={this.handleSelectChange} name="roleId" floatingLabelText="Select Role" value={this.state.roleId}>
                        {roles}
                    </SelectField><br/>
                    <FlatButton type="submit">Save</FlatButton>
                </form>
            </div>
        );
    };
}
