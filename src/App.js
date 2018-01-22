import React, { Component } from 'react';
import {Route} from 'react-router'
import RoleList from './components/RoleList'
import AddRole from './components/AddRole'
import { Link } from 'react-router-dom'
import {FlatButton} from 'material-ui'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App.css">
          <Link to={'/roles'}><FlatButton primary={true}>Roles</FlatButton></Link>
          <Link to={'/roles/add'}><FlatButton primary={true}>Add Role</FlatButton></Link>
          <Link to={'/roles/edit'}><FlatButton primary={true}>Edit Role</FlatButton></Link>
          <Link to={'/roles/delete'}><FlatButton primary={true}>Delete Role</FlatButton></Link>
          <Route path="/roles" component={RoleList} />
          <Route path="/roles/add" component={AddRole} />
          {/*<Route path="/edit/:id" component={EditRole}/>*/}
          {/*<Route path="/delete/:id" component={DeleteRole}/>*/}
      </div>
    );
  }
}

export default App;
