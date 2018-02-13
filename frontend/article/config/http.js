import axios from 'axios'
import url from '../../httpConfig'

export const http = axios.create({
 // baseURL: 'https://artempichugin.herokuapp.com/api', //base URL goes here
    baseURL: url, //base URL goes here
})