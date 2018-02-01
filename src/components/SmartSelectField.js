import React, {Component} from 'react';
import {fetchAllRoles} from "../actions/roles";
import {connect} from "react-redux";
import {MenuItem, SelectField} from "material-ui";

class SmartSelectField extends Component {

    componentDidMount() {
        this.props.fetchAllRoles();
    }

    render() {
        const {input: {value, onChange}} = this.props;
        return (
            <div>
                <SelectField value={value.id} hintText='Select Role' onChange={(event, index, value) => {
                    onChange(this.props.roles.find(role => role.id === value))
                }}>
                    {this.props.roles.map(role =>
                        <MenuItem value={role.id} key={role.id} primaryText={role.name}/>)
                    }
                </SelectField>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    roles: state.roleStore.roles
});

export default connect(mapStateToProps, {fetchAllRoles})(SmartSelectField)