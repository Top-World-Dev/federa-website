import Cookies from 'js-cookie'
import axios from 'axios'

export const TokenKey = 'Admin-Token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

export function setAuthorization (token) {
  axios.defaults.headers.common['Authorization'] = token
}

export function resetAuthorization () {
  delete axios.defaults.headers.common['Authorization']
}
