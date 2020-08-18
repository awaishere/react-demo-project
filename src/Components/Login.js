import React, { useEffect, useState } from 'react'
import {
  Form,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from 'axios'

import { UserActions } from 'app/store/actions'
import { connect } from 'react-redux'

let connectProps = {
  ...UserActions,
};

let connectState = state => ({});

let enhancer = connect(connectState, connectProps);

function Login(props) {

  useEffect(() => {
    document.title = "Login"
  }, [])

  const [person, setPerson] = useState({
    username: '',
    password: ''
  })

  const validateUser = async () => {
    let user = {
      username: person.username,
      password: person.password
    }

    await axios.post('https://m-alpha-blog.herokuapp.com/api/v1/login', {
      "user": user
    })
      .then(res => {
        console.log(res)
        if (res.data.data) {
          alert("Logged in successfully")
          localStorage.setItem("auth_token", res.data.data.attributes.auth_token)
          props.history.push('profile')
        } else {
          alert("Invalid credentials")
        }

      })
      .catch(err => {
        alert("Something went wrong")

      })
  }

  const handleInput = (event, field) => {
    console.log(person, event.target.value)
    setPerson({ ...person, [field]: event.target.value })
  }

  const handleLogin = e => {
    e.preventDefault();
    validateUser()
  }

  return (
    <Container style={{ marginTop: '10%' }}>
      <Row style={{ marginTop: '20px' }}>
        <Col className="d-flex flex-column container-style" xs={6} style={{ margin: '0 auto' }}>
          <p id="header" className="align-self-center">Alpha Blog Application</p>

          <Form className="d-flex flex-column" onSubmit={handleLogin}>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={person.username} placeholder="Enter username"
                onChange={e => handleInput(e, "username")} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={person.password} placeholder="Password"
                onChange={e => handleInput(e, "password")} />
            </Form.Group>

            <Button style={{ width: '40%' }} className="align-self-center"
              variant="outline-success" type="submit">
              Login
            </Button>

            <p className="align-self-center mt-4">
              Don't have an account? {' '}
              <Link to="/signup">
                Signup
              </Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default enhancer(Login)
