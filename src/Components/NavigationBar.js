import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" style={{ height: '75px', paddingLeft: '50px' }}>
      <Navbar.Brand href="#home">Alpha Blog Application</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link><Link style={{ textDecoration: 'none', color: 'lightgrey' }} to="/create_article">Create Article</Link></Nav.Link>
      </Nav>
      <Nav.Link><Link style={{ color: 'white' }} to="/logout">Logout</Link></Nav.Link>
    </Navbar >
  )
}

export default NavigationBar
