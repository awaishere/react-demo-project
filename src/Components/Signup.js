import React, { useEffect, useState } from 'react'
import {
  Form,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Signup() {

  useEffect(() => {
    document.title = "Signup"
  }, [])

  const handleInput = (event) => {
    setPerson({ ...person, [event.target.name]: event.target.value })
    console.log(person)
  }

  const [person, setPerson] = useState({
    email: '',
    password: '',
    age: 0
  })

  return (
    <Container style={{ marginTop: '10%' }}>
      <Row style={{ marginTop: '20px' }}>
        <Col className="d-flex flex-column container-style" xs={6} style={{ margin: '0 auto' }}>
          <p id="header" className="align-self-center">Alpha Blog Application</p>

          <Form className="d-flex flex-column">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={person.email} name="email" placeholder="Enter email" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={person.password} name="password" placeholder="Password" onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" value={person.age} name="age" placeholder="Enter your age" onChange={handleInput} />
            </Form.Group>

            <Button style={{ width: '40%' }} className="align-self-center" variant="outline-success" type="submit">
              Sign up
            </Button>

            <p className="align-self-center mt-4">
              Already have an account? {' '}
              <Link to="/login">
                Login
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup
