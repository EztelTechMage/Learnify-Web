// client/src/lib/api.js
import axios from 'axios'

const baseURL = "https://learnify-api-u407.onrender.com"

export const api = axios.create({
  baseURL,
  withCredentials: true, 
})

export function setAuthToken(token) {
  if (token) {
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  } else {
    delete api.defaults.headers.common.Authorization
  }
}