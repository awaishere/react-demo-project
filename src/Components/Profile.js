import React, { useEffect, useState } from 'react'
import Article from './Article'
import {
  Jumbotron,
  Container,
  Card
} from 'react-bootstrap'
import NavigationBar from './NavigationBar'
import { Link } from 'react-router-dom'
import { UserActions } from '../store/actions'
import { connect } from 'react-redux'

let connectProps = {
  ...UserActions,
};

let connectState = state => ({
  articles: state.User.current.get('articles'),
  user: state.User.current.get('currentUser')
});

let enhancer = connect(connectState, connectProps);

function Profile(props) {

  useEffect(() => {
    props.getArticles();
    document.title = "User Profile"
  }, [])

  return (
    <>
      <NavigationBar />

      <Jumbotron style={{ backgroundColor: 'white' }}>
        <Container style={{ marginTop: '30px', width: '100%', marginBottom: '40px' }}>
          <Card style={{ width: '100%' }}>
            <div style={{
              height: '80px',
              background: 'grey',
              color: 'white',
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
            }}>
              <h2>Welcome {props.user && props.user.attributes.username}</h2>
            </div>
            <Card.Body>
              <Card.Title>username: {props.user && props.user.attributes.username}</Card.Title>
              <Card.Text>
                email: <i>{props.user && props.user.attributes.email}</i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>

        {
          props.articles && props.articles.length !== 0 ?
            (<Container>
              <h3>Articles Created</h3>
              {
                props.articles.map((item, index) => (
                  <Article key={item.id}
                    number={index + 1}
                    title={item.attributes.title}
                    description={item.attributes.description}>
                    <Link to={`/article/${item.id}`}>Show article</Link>
                  </Article>
                ))
              }
            </Container>) : null
        }
      </Jumbotron>
    </>
  )
}

export default enhancer(Profile)
