import React, { useEffect, useState } from 'react'
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Spinner
} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

import { UserActions } from '../store/actions'
import { connect } from 'react-redux'

let connectProps = {
  ...UserActions,
};

let connectState = state => ({
  loader: state.User.meta.get('showHUD'),
});

let enhancer = connect(connectState, connectProps);

function Signup(props) {

  let history = useHistory()

  useEffect(() => {
    document.title = "Signup"
  }, [])

  const handleInput = (event) => {
    console.log(person, event.target.value)
    setPerson({ ...person, [event.target.name]: event.target.value })
  }

  const [person, setPerson] = useState({
    email: '',
    password: '',
    username: ''
  })

  const createUser = async () => {
    let user = {
      username: person.username,
      password: person.password,
      email: person.email
    }

    let res = await props.signUp(user);
    if (res) {
      history.push('/profile')
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    createUser();

  }

  let { loader } = props

  return (
    <Container style={{ marginTop: '10%' }}>
      <Row style={{ marginTop: '20px' }}>
        <Col className="d-flex flex-column container-style" xs={6} style={{ margin: '0 auto' }}>
          <p id="header" className="align-self-center">Alpha Blog Application</p>

          <Form className="d-flex flex-column">
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={person.username} name="username" placeholder="Enter username"
                onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={person.email} name="email" placeholder="Enter email"
                onChange={handleInput} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={person.password} name="password" placeholder="Password"
                onChange={handleInput} />
            </Form.Group>

            <Button style={{ width: '40%' }} className="align-self-center" variant="outline-success"
              type="submit"
              disabled={loader}
              onClick={handleSubmit}>
              Sign up

              {loader && <Spinner
                style={{ marginLeft: '10px' }}
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />}
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

export default enhancer(Signup)
