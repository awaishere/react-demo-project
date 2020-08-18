import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import axios from 'axios'
import NavigationBar from './NavigationBar'

function EditArticle(props) {

  const [article, setArticle] = useState({
    title: '',
    description: '',
    id: null
  })

  useEffect(() => {
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem("auth_token")}`
    }
    axios.get(`https://m-alpha-blog.herokuapp.com/api/v1/articles/${props.match.params.id}`, {
      headers: headers
    })
      .then(res => {
        console.log(res)
        setArticle({
          title: res.data.title,
          description: res.data.description,
          id: res.data.id
        })
      })
      .catch(err => {

      })
    document.title = "Edit Article"
  }, [])

  const handleInput = (event) => {
    console.log(article, event.target.value)
    setArticle({ ...article, [event.target.name]: event.target.value })
  }

  const editArticle = async (payload, token) => {
    console.log("token is here", token)
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    axios.patch(`https://m-alpha-blog.herokuapp.com/api/v1/articles/${article.id}`, { article: payload }, {
      headers: headers
    })
      .then(res => {
        console.log("---->", res)
        if (res.data.data) {
          alert("Article is edited")
          props.history.push(`/article/${res.data.data.id}`)
        } else {
          alert("Invalid title or description")
        }
      })
      .catch(err => {

      })
  }

  const handleSubmit = e => {
    e.preventDefault();
    let auth_token = localStorage.getItem("auth_token")
    let articlePayload = {
      title: article.title,
      description: article.description
    }
    editArticle(articlePayload, auth_token)
  }

  return (
    <>
      <NavigationBar />

      <Container style={{ marginTop: '10%' }}>
        <Row style={{ marginTop: '20px' }}>
          <Col className="d-flex flex-column container-style" xs={6} style={{ margin: '0 auto' }}>
            <p id="header" className="align-self-center">Alpha Blog Application</p>

            <Form className="d-flex flex-column">
              <Form.Group controlId="formBasicText">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" value={article.title} name="title" placeholder="Enter title"
                  onChange={handleInput} />
              </Form.Group>

              <Form.Group controlId="formBasicText">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={article.description} name="description" placeholder="Enter description"
                  onChange={handleInput} />
              </Form.Group>

              <Button style={{ width: '40%' }} className="align-self-center" variant="outline-success"
                type="submit"
                onClick={handleSubmit}>
                Edit Article
            </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default EditArticle