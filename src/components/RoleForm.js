import React, {Component} from 'react'
import {TextField, FlatButton} from 'material-ui'

export default class RoleForm extends Component {

    state = {
        name: ''
    }

    handleChange = event => {
        this.setState({name: event.currentTarget.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.role) {
            const { id, name } = nextProps.role;
            this.setState({ id, name });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField name="name" hintText="Role Name" onChange={this.handleChange} value={this.state.name}/>
                    <FlatButton type={"submit"}>Save</FlatButton>
                </form>
            </div>
        );
    }

}