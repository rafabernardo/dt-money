import axios from 'axios'
import { API_URL } from '../config/environment'

export const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
})
