import axios from 'axios'

const apiClient = axios.create({
  withCredentials: false,
  headers: {
    Accept: 'text/xml',
    'Content-Type': 'text/xml',
  },
  timeout: 10000,
})

export default {
  getPage(baseURL, page) {
    return apiClient.get(`${baseURL}/${page}.xml`)
  },
}
