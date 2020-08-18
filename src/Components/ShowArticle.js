import React, { useEffect } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import { UserActions } from '../store/actions'
import { connect } from 'react-redux'

let connectProps = {
  ...UserActions,
};

let connectState = state => ({
  article: state.User.current.get('article')
});

let enhancer = connect(connectState, connectProps);

function ShowArticle(props) {

  useEffect(() => {

    props.getArticle(props.match.params.id)
  }, [])

  const handleDelete = async () => {
    await props.deleteArticle(props.article.id)
    props.history.push('/profile')
  }

  return (
    <>
      <NavigationBar />

      <Container style={{ marginTop: '20px', width: '60%' }}>
        <Card className="text-center" style={{ marginBottom: '20px' }}>
          <Card.Header><i>ARTICLE</i></Card.Header>
          <Card.Body>
            <Card.Title>{props.article && props.article.title}</Card.Title>
            <Card.Text>
              {props.article && props.article.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button onClick={() => {
              props.history.push(`/edit_article/${props.article && props.article.id}`)
            }}
              variant="outline-info">Edit Article</Button>{' '}
            <Button onClick={handleDelete} variant="outline-danger">Delete Article</Button>{' '}
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}

export default enhancer(ShowArticle)
