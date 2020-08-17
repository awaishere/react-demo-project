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
import CreateArticle from '../Components/CreateArticle'
import Logout from '../Components/Logout'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path={["/", "/login"]} exact component={Login} />
        <Route path={["/profile"]} component={Profile} />
        <Route path="/signup" component={Signup} />
        <Route path="/article" component={ShowArticle} />
        <Route path="/create_article" component={CreateArticle} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </Router>
  )
}

export default Routes
