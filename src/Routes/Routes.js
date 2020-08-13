import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} exact component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  )
}

export default Routes
