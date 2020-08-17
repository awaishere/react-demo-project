import React from 'react'
import { Card } from 'react-bootstrap'

function Article({ number, title, description, children }) {
  return (
    <Card className="text-center" style={{ marginBottom: '20px' }}>
      <Card.Header><i>ARTICLE {number}</i></Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>{children}</Card.Footer>
    </Card>
  )
}

export default Article
