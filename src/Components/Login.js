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
import { Loader } from './Loader';

import { UserActions } from '../store/actions'
import { connect } from 'react-redux'

let connectProps = {
  ...UserActions,
};

let connectState = state => ({
  loader: state.User.meta.get('showHUD'),
  user: state.User.current.get('currentUser')
});

let enhancer = connect(connectState, connectProps);

function Login(props) {

  let histroy = useHistory();

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
    await props.signIn(user)
      .then((data) => {
        if (data) {
          histroy.push("/profile")
        }
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

  let { loader } = props;

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
              variant="outline-success" type="submit" disabled={loader}>
              Login

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
