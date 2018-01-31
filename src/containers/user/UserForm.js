import React, {Component} from 'react';
import {Field, Form, reduxForm} from "redux-form";
import {FlatButton, MenuItem} from "material-ui";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchAllRoles} from "../../actions/roles";
import {TextField, SelectField} from 'redux-form-material-ui'

const validate = values => {
    const requiredField = [
        'login',
        'email',
        'password',
        'firstName',
        'lastName',
        'role'
    ];

    const labels = {
        login: 'Login',
        email: 'Email',
        password: 'Password',
        firstName: 'First Name',
        lastName: 'Last Name',
        role: 'Select Role'
    };

    let errors = {};
    requiredField.forEach(field => {
        if (!values[field]) {
            errors[field] = `${labels[field]} field is required`;
        }
    });

    return errors;
};

class UserForm extends Component {

    componentDidMount() {
        this.props.fetchAllRoles();
    }


    render() {
        let roles = this.props.roles.map(role =>
            <MenuItem value={role.id} key={role.id} primaryText={role.name}/>
        );
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <div>
                        <Field name='login' hintText='Login' component={TextField}/>
                    </div>
                    <div>
                        <Field name='email' hintText='Email' component={TextField}/>
                    </div>
                    <div>
                        <Field name='password' hintText='Password' component={TextField}/>
                    </div>
                    <div>
                        <Field name='firstName' hintText='First Name' component={TextField}/>
                    </div>
                    <div>
                        <Field name='lastName' hintText='Last Name' component={TextField}/>
                    </div>
                    <div>
                        <Field name='role' component={SelectField} hintText='Select Role'>
                            {roles}
                        </Field>
                    </div>
                    <div>
                        <FlatButton primary={true} type='submit'>Save</FlatButton>
                        <Link to='/users'><FlatButton secondary={true}>Cancel</FlatButton></Link>
                    </div>
                </Form>
            </div>
        );
    }
}

UserForm = reduxForm({form: 'userForm', validate, enableReinitialize: true})(UserForm);
export default connect(state => ({
    initialValues: state.userStore.user,
    roles: state.roleStore.roles
}), {fetchAllRoles})(UserForm)