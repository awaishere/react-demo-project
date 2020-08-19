import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { isLoggedIn } from '../utils/utilities';

function PublicRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn() ? (
          <Redirect to={'/profile'} />
        ) : (
            <Component {...props} />
          )
      } />
  )
}

export default PublicRoute
