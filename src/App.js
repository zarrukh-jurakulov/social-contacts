import Navbar from './components/navbar'
import LogIn from './components/sign-in/sign-in'
import Registration from './components/sign-up/sign-up'
import CreateContact from './components/create-contact/create-contact'
import Profile from './components/profile/profile'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import React from 'react'


function App() {
    return (
      <Router>

        <Navbar  />

        <Switch>

          <Route exact path='/'>
            <LogIn  />
          </Route>

            <Route path='/profile'>
               <Profile />
            </Route>
             
            <Route  path="/registration">
              <Registration />
            </Route>

            <Route path="/createContact">
              <CreateContact />
            </Route>

        </Switch>

      </Router>
  );
}


export default App
