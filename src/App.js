import Navbar from './components/navbar'
import LogIn from './components/sign-in/sign-in'
import Registration from './components/sign-up/sign-up'
import CreateContact from './components/create-contact/create-contact'
import ContactList from './components/contact-list/contact-list'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import React, {useState} from 'react'

function App() {

  const [authed, setAuthed] = useState(false)
  
  return (
      <Router>
        <Navbar  />
        <Switch>
          <Route exact path='/' 
            render={() => authed ? 
              <ContactList />
              :
              <LogIn setAuthed={setAuthed} />} />
            
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

export default App;
