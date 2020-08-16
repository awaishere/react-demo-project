import React, { useEffect, useState } from 'react'
import Article from './Article'
import {
  Jumbotron,
  Container,
  Card
} from 'react-bootstrap'
import axios from 'axios'

function Profile() {

  const [person, setPerson] = useState({
    username: '',
    age: 22
  })
  const [articles, setArticles] = useState([])

  const getPerson = async () => {
    var formData = new FormData();
    formData.append('username', "awais")
    formData.append('password', "123")

    let response = await axios.post('http://demo-api-here.herokuapp.com/api/v1/login', formData)
      .then(res => {
        setPerson({
          username: res.data.user.username,
          age: res.data.user.age
        })
        return res.data.user.id;
      })
      .catch(err => {
        return -1;
      })
    return response
  }

  const getArticles = async user_id => {
    return await axios.get('http://demo-api-here.herokuapp.com/api/v1/articles', {
      params: {
        user_id: user_id
      }
    })
      .then(res => {
        console.log(res)
        return res.data
      })
      .catch(err => {
        console.log(err)
      })
  }



  useEffect(() => {
    const fetchData = async () => {
      let personId = await getPerson()
      let articles = await getArticles(personId);
      setArticles(articles)
    }
    fetchData();
    document.title = "User Profile"
  }, [])

  return (
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
            <h2>Welcome {person.username}</h2>
          </div>
          <Card.Body>
            <Card.Title>username: <i>{person.username}</i></Card.Title>
            <Card.Text>
              age: <i>{person.age}</i>
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
                title={item.title}
                description={item.description}
              />)
            }
          </Container>) : null
      }
    </Jumbotron>
  )
}

export default Profile
