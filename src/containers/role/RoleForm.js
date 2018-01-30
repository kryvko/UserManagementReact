import React, {Component} from 'react';
import {TextField, FlatButton} from 'material-ui';
import {connect} from 'react-redux';
import {Field, Form, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";


const createTextField = ({input, label, meta: {touched, error}}) => (
    <TextField floatingLabelText={label} {...input} errorText={touched && error}/>
);

const validate = values => (values['name'] ? {} : {name: 'Name field is required'});

class RoleForm extends Component {

    render() {
        return (
            <div>
                <Form onSubmit={this.props.handleSubmit}>
                    <div>
                        <Field name="name" component={createTextField} lable="name"/>
                    </div>
                    <div>
                        <FlatButton primary={true} type={"submit"}>Save</FlatButton>
                        <Link to="/roles"><FlatButton secondary={true}>Cancel</FlatButton></Link>
                    </div>
                </Form>
            </div>
        );
    }

}

RoleForm = reduxForm({form: 'roleForm', validate, enableReinitialize: true})(RoleForm);

export default connect(state => ({initialValues: state.roleStore.role}))(RoleForm);