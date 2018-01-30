import React, {Component} from 'react';
import {Field, Form, reduxForm} from "redux-form";
import {FlatButton, MenuItem, SelectField, TextField} from "material-ui";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchAllRoles} from "../../actions/roles";

const createTextField = ({input, label, meta: {touched, error}}) => (
    <TextField floatingLabelText={label} {...input} errorText={touched && error}/>
);

const validate = values => {
    const requiredField = [
        'login',
        'email',
        'password',
        'firstName',
        'lastName',
        'roleId'
    ];

    const labels = {
        login: 'Login',
        email: 'Email',
        password: 'Password',
        firstName: 'First Name',
        lastName: 'Last Name',
        roleId: 'Role'
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
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <div>
                        <Field name='login' label='Login' component={createTextField}/>
                    </div>
                    <div>
                        <Field name='email' lable='Email' component={createTextField}/>
                    </div>
                    <div>
                        <Field name='password' lable='Password' component={createTextField}/>
                    </div>
                    <div>
                        <Field name='firstName' lable='First Name' component={createTextField}/>
                    </div>
                    <div>
                        <Field name='lastName' lable='Last Name' component={createTextField}/>
                    </div>
                    <div>

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