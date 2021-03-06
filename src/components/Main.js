import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RoleList from '../containers/role/RoleList';
import AddRole from '../containers/role/AddRole';
import EditRole from '../containers/role/EditRole';
import UserList from '../containers/user/UserList'
import AddUser from '../containers/user/AddUser';
import EditUser from "../containers/user/EditUser";

export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/roles" component={ RoleList } />
            <Route path="/roles/add" component={ AddRole } />
            <Route path="/roles/edit/:id" component={ EditRole } />
            <Route exact path="/users" component={ UserList }/>
            <Route path="/users/add" component={ AddUser }/>
            <Route path="/users/edit/:id" component={ EditUser }/>
        </Switch>
    </main>
);