import { TokenKey, getToken, setAuthorization, resetAuthorization } from '@/utils/auth'

export const actions = {
  nuxtServerInit({ commit, dispatch }, { req, $config }) {
    const cookie = process.server ? require('cookie') : undefined
    let token = null
    if (req.headers.cookie) {
      return new Promise((resolve, reject) => {
        try {
          const parsed = cookie.parse(req.headers.cookie)
          token = (parsed && parsed[TokenKey]) ? parsed[TokenKey] : ''
        } catch (err) {
          console.error('No valid cookie found')
        }
        commit('user/SET_TOKEN', token)
        if (!token) {
          resetAuthorization();
          resolve(false)
        } else {
          dispatch('user/getCurrentUser', $config).then((user) => {
            resolve(true)
          }).catch(error => {
            //console.log('get current user error: ' + error.message)
            commit('user/SET_TOKEN', '')
            resetAuthorization();
            resolve(false)
          })
        }

      })
    }

  },
}
