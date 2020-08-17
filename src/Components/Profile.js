import React, { useEffect, useState } from 'react'
import Article from './Article'
import {
  Jumbotron,
  Container,
  Card
} from 'react-bootstrap'
import axios from 'axios'
import NavigationBar from './NavigationBar'

function Profile() {

  const [user, setUser] = useState({
    username: '',
    email: 'gmail.com'
  })
  const [articles, setArticles] = useState([])

  const getArticles = async (token) => {
    return await axios.get('https://m-alpha-blog.herokuapp.com/api/v1/articles', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {

        return res.data.data
      })
      .catch(err => {

      })
  }

  const getUser = (token) => {
    axios.get('https://m-alpha-blog.herokuapp.com/api/v1/auto_login', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {

        setUser({
          email: res.data.email,
          username: res.data.username
        })
      })
      .catch(err => {

      })
  }

  useEffect(() => {
    if (localStorage.getItem("auth_token")) {

      let auth_token = localStorage.getItem("auth_token")
      setUser({
        email: 'email',
        username: 'username'
      })
      const fetchData = async () => {
        getUser(auth_token)
        let articles = await getArticles(auth_token);
        setArticles(articles)
      }
      fetchData();
      document.title = "User Profile"
    }
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
              <h2>Welcome {user.username}</h2>
            </div>
            <Card.Body>
              <Card.Title>username: {user.username}</Card.Title>
              <Card.Text>
                email: <i>{user.email}</i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Container>

        {
          articles && articles.length !== 0 ?
            (<Container>
              <h3>Articles Created</h3>
              {
                articles.map((item, index) => <Article key={item.id}
                  number={index + 1}
                  title={item.attributes.title}
                  description={item.attributes.description}
                />)
              }
            </Container>) : null
        }
      </Jumbotron>
    </>
  )
}

export default Profile
