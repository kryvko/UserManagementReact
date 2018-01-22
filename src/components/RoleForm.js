import React, {Component} from 'react'
import {TextField, FlatButton} from 'material-ui'

export default class RoleForm extends Component {

    state = {
        name: ''
    };

    handleChange = event => {
       this.setState({[event.target.name]: event.target.value})
    };


    handleSubmit = event => {
      event.preventDefault();
      const { name } = this.state;
      this.props.onSubmit({ name });
    };

    componentWillReceiveProps(nextProps) {
        if ( nextProps.role ) {
            const name  = nextProps.role.name;
            this.setState({ name });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <TextField name="name" onChange={this.handleChange} value={this.state.name} hintText="Role Name"/>
                    <FlatButton primary={true} type={"submit"}>Save</FlatButton>
                </form>
            </div>
        );
    }

}