import React from 'react';
import './App.css';
import Nav from './components/UI/Nav';
import { Route, Switch } from 'react-router-dom'
import Employee from './containers/Employee';
import UpdateEmplyee from './containers/UpdateEmployee';

function App() {
  return (
    <div className="container">
      <Nav />
      <div>
        <Switch>
          <Route exact path="/" component={Employee} />
          <Route path="/update" component={UpdateEmplyee} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
