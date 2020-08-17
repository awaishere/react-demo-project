import React, { useEffect, useState } from 'react'
import {
  Form,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup(props) {

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

    await axios.post('https://m-alpha-blog.herokuapp.com/api/v1/signup', {
      "user": user
    })
      .then(res => {
        console.log(res)
        if (res.data.data) {
          alert("User is created!")

          localStorage.setItem("user", JSON.stringify({
            id: res.data.data.id,
            username: res.data.data.attributes.username,
            email: res.data.data.attributes.email
          }))

          props.history.push('profile')
        } else {
          alert("Invalid Username or password")
        }

      })
      .catch(err => {
        alert("Something went wrong")

      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    createUser();

  }

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
              onClick={handleSubmit}>
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
