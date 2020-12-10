import { login, getCurrentUser, updateProfile } from '@/api/user'
import { getToken, setToken, removeToken, setAuthorization } from '@/utils/auth'

export const state = () => ({
  token: getToken(),
  user: {}
})

export const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_USER: (state, user) => {
    state.user = user
  },
}

export const actions = {
  async login ({ commit }, { loginForm: { username, password }, config }) {
    const response = await login({ login: username.trim(), password }, config);
    const { data } = response
    const { error, message, token } = data;
    if (error) {
      throw new Error(message)
    }
    commit('SET_TOKEN', token)
    setToken(token)
  },
  async getCurrentUser ({ commit, state }, config) {
    try {
      setAuthorization(state.token)
      const response = await getCurrentUser(config);
      const { data } = response
      const { error, message, user } = data;
      if (error) {
        throw new Error(message)
      }
      if (!user) {
        commit('SET_TOKEN', '')
        commit('SET_USER', user)
        throw new Error("Invalid token")
      }
      commit('SET_USER', user)
      return user;
    } catch (error) {
      throw error
    }
  },
  async updateProfile ({ commit }, { profileForm, config }) {
    console.log({ profileForm, config })
    const response = await updateProfile(profileForm, config);
    const { data } = response
    const { error, message } = data;
    if (error) {
      throw new Error(message)
    }
    return true;
  },
  logout ({ commit, state, dispatch }) {
    commit('SET_TOKEN', null)
    removeToken()
  }

}
export const getters = {
  token: state => state.user.token,
  user: state => state.user.user,
}

