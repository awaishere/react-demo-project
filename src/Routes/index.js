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
import EditArticle from '../Components/EditArticle'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

function Routes() {
  return (
    <Router>
      <Switch>
        <PublicRoute component={Login} path={["/", "/login"]} exact />
        <PublicRoute component={Signup} path="/signup" />

        <PrivateRoute component={Profile} path="/profile" />
        <PrivateRoute component={CreateArticle} path="/create_article" />
        <PrivateRoute component={Logout} path="/logout" />
        <PrivateRoute component={ShowArticle} path="/article/:id" />
        <PrivateRoute component={EditArticle} path="/edit_article/:id" />
      </Switch>
    </Router>
  )
}

export default Routes
