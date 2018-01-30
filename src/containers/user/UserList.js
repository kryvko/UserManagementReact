import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteUser, fetchAllUsers} from "../../actions/users";
import {User} from "../../components/User";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from "material-ui";

class UserList extends Component {

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    handleDelete = id => {
        this.props.deleteUser(id)
    };

    render() {
        let users = this.props.users.map(user =>
            <User user={user} key={user.id} onDelete={this.handleDelete}/>
        );
        return (
            <div>
                <Table>
                    <TableHeader displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>LOGIN</TableHeaderColumn>
                            <TableHeaderColumn>EMAIL</TableHeaderColumn>
                            <TableHeaderColumn>PASSWORD</TableHeaderColumn>
                            <TableHeaderColumn>FIRST NAME</TableHeaderColumn>
                            <TableHeaderColumn>LAST NAME</TableHeaderColumn>
                            <TableHeaderColumn>ROLE</TableHeaderColumn>
                            <TableHeaderColumn>ACTION</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users}
                    </TableBody>
                </Table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    users: state.userStore.users
});

export default connect(mapStateToProps, {fetchAllUsers, deleteUser})(UserList);