import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Profile from '../Components/Profile'
import ShowArticle from '../Components/ShowArticle'


function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/profile"]} exact component={Profile} />
        <Route path={["/", "/login"]} exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/article" component={ShowArticle} />
      </Switch>
    </Router>
  )
}

export default Routes
