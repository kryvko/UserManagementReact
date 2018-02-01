import React, {Component} from 'react';
import {Field, Form, reduxForm} from "redux-form";
import {FlatButton} from "material-ui";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {TextField} from 'redux-form-material-ui'
import SmartSelectField from "../../components/SmartSelectField";

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

    render() {
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
                        <Field name='role' component={SmartSelectField}/>
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
    initialValues: state.userStore.user
}))(UserForm)