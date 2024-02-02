import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0a8146c4cd59d1f0147ea7db559ed113',
    language: 'pt-BR',
    page: 1
  }
})

export default api
