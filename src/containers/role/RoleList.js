import React, {Component} from 'react';
import {Role} from '../../components/Role'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui'
import {fetchAllRoles, deleteRole} from "../../actions/roles";
import {connect} from 'react-redux';

class RoleList extends Component {

    componentDidMount() {
        this.props.fetchAllRoles();
    }

    handleDelete = id => {
        this.props.deleteRole(id)
    };

    render() {
        let roles = this.props.roles.map(role =>
            <Role role={role} key={role.id} onDelete={this.handleDelete}/>
        );
        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>NAME</TableHeaderColumn>
                            <TableHeaderColumn>ACTION</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {roles}
                    </TableBody>
                </Table>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    roles: state.roleStore.roles
});

export default connect(mapStateToProps, {fetchAllRoles, deleteRole})(RoleList);