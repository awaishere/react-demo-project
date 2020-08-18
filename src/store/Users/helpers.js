import axios from 'axios'

export const storeToken = async (token) => {
  axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: token,
  }
  try {
    await localStorage.setItem('auth_token', token)
  } catch (error) {
    console.log('Error saving token');
  }
}

export const removeToken = async () => {
  try {
    await localStorage.removeItem('auth_token');
  } catch (error) {

  }
}


