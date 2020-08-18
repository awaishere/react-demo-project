import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import { UserActions } from '../store/actions'
import { connect } from 'react-redux'

let connectProps = {
  ...UserActions,
};

let connectState = state => ({
  loader: state.User.meta.get('showHUD')
});

let enhancer = connect(connectState, connectProps);

function CreateArticle(props) {

  const [article, setArticle] = useState({
    title: '',
    description: ''
  })

  useEffect(() => {
    document.title = "Create Article"
  }, [])

  const handleInput = (event) => {
    console.log(article, event.target.value)
    setArticle({ ...article, [event.target.name]: event.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    let articlePayload = {
      title: article.title,
      description: article.description
    }
    let response = await props.createArticle(articlePayload)
    if (response) {
      props.history.push(`/article/${response}`)
    }
  }
  let { loader } = props;

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
                Create Article

                {loader && <Spinner
                  style={{ marginLeft: '10px' }}
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                }
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default enhancer(CreateArticle)
