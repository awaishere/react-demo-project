import { API_URL } from '../constants'

export default {
    authenticateUser: () => `${API_URL}/authenticate/`,
    getProducts: () => `${API_URL}/products/`,
}