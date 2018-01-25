import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RoleList from './RoleList';
import AddRole from './AddRole';
import EditRole from './EditRole';

export const Main = () => (
    <main>
        <Switch>
            <Route exact path="/roles" component={ RoleList } />
            <Route path="/roles/add" component={ AddRole } />
            <Route path="/roles/edit/:id" component={ EditRole } />
        </Switch>
    </main>
);