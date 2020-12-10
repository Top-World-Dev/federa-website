import axios from 'axios';
import request from '@/utils/request'

// export function login(data) {
//   return request({
//     url: '/vue-element-admin/user/login',
//     method: 'post',
//     data
//   })
// }

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export async function login({ login, password }, { baseURLAPI }) {
  const params = new URLSearchParams();
  params.append('login', login);
  params.append('password', password);
  return await axios.post(`${baseURLAPI}/admin/login`, params);
}
export async function getCurrentUser({ baseURLAPI }) {
  return await axios.get(`${baseURLAPI}/admin/me`);
}
export async function updateProfile({ userId, firstName, lastName, password }, { baseURLAPI }) {
  const params = new URLSearchParams();
  params.append('userId', userId);
  params.append('firstName', firstName);
  params.append('lastName', lastName);
  params.append('password', password);
  return await axios.put(`${baseURLAPI}/admin/user/${userId}`, params);
}
