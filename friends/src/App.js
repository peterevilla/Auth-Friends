import React from 'react';
import LoginForm from './components/LoginForm'
import {Route, Switch} from "react-router-dom";
import Header from './components/Header'
import FriendsList from './components/FriendsList'
import PrivateRoute from './components/PrivateRoute'
import AddFriend from './components/AddFriend';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={LoginForm}/>
        <Route  path='/login' component={LoginForm}/>
        <PrivateRoute path='/friends' component={FriendsList}/>
        <PrivateRoute path='/add' component={AddFriend}/>

      </Switch>
    </div>
  );
}

export default App;
