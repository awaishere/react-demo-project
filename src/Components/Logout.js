import React, { useEffect } from 'react'

function Logout(props) {

  useEffect(() => {
    localStorage.clear()
    props.history.push('/')
  }, [])

  return (
    <div>
      Redirecting...
    </div>
  )
}

export default Logout
