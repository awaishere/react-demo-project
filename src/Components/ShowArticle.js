import React, { useState, useEffect } from 'react'
import { Card, Container, Button } from 'react-bootstrap'
import axios from 'axios'

function ShowArticle(props) {
  const [article, setArticle] = useState({
    title: 'title',
    description: 'description',
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
          id: res.data.id,
          title: res.data.title,
          description: res.data.description
        })
      })
      .catch(err => {

      })
  }, [])

  const handleDelete = async () => {
    const headers = {
      'Authorization': `Bearer ${localStorage.getItem("auth_token")}`
    }
    axios.delete(`https://m-alpha-blog.herokuapp.com/api/v1/articles/${article.id}`, {
      headers: headers
    })
      .then(res => {
        console.log(res)
        // if 
        alert("Article is deleted")
        props.history.push('/profile')
      })
      .catch(err => {

      })
  }

  return (
    <Container style={{ marginTop: '20px', width: '60%' }}>
      <Card className="text-center" style={{ marginBottom: '20px' }}>
        <Card.Header><i>ARTICLE</i></Card.Header>
        <Card.Body>
          <Card.Title>{article.title}</Card.Title>
          <Card.Text>
            {article.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => {
            props.history.push(`/edit_article/${article.id}`)
          }}
            variant="outline-info">Edit Article</Button>{' '}
          <Button onClick={handleDelete} variant="outline-danger">Delete Article</Button>{' '}
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default ShowArticle
