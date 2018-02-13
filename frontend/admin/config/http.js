import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://artempichugin.herokuapp.com/api', //base URL goes here
})