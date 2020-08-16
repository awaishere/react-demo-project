import React from 'react'
import Article from './Article'
import { Container } from 'react-bootstrap'

function ShowArticle() {
  return (
    <Container style={{ marginTop: '30px', width: '60%' }}>
      <Article />
    </Container>
  )
}

export default ShowArticle
