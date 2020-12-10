import axios from 'axios'
import cookies from 'js-cookie'
import { getToken, setAuthorization, resetAuthorization } from '~/utils/auth'

const token = getToken();

if (token){
  setAuthorization(token)
}
else{
  resetAuthorization()
}
