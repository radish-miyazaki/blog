import axios from 'axios'

const state = {
  user: null
}

const getters = {}

const mutations = {
  setUser (state: any, user: any) {
    state.user = user
  }
}

const actions = {
  async register({ commit }: any, data: any) {
    const response = await axios.post('api/register', data)
    commit('setUser', response.data)
  },

  async login({ commit }: any, data: any) {
    const response = await axios.post('api/login', data)
    commit('setUser', response.data)
  },

  async logout({ commit }: any) {
    const response = await axios.post('/api/logout')
    commit('setUser', null)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
