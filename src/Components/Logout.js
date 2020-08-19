import React, { useEffect } from 'react'
import { UserActions } from '../store/actions'
import { connect } from 'react-redux'

let connectProps = {
  ...UserActions,
};


let enhancer = connect(null, connectProps);

function Logout(props) {

  useEffect(() => {
    localStorage.clear()
    props.logoutPressed();
    props.history.push('/')
  }, [])

  return (
    <div>
      Redirecting...
    </div>
  )
}

export default enhancer(Logout)
