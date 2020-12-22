import axios from 'axios'

const state = {
  user: null
}

const getters = {
  check: (state: any) => !! state.user,
  nickname: (state: any) => state.user ? state.user.nickname : ''
}

const mutations = {
  setUser (state: any, user: any) {
    state.user = user
  }
}

const actions = {
  /**
   * ユーザ登録時にデータをAPIにPOSTする
   * @param commit
   * @param data
   */
  async register({ commit }: any, data: any) {
    const response = await axios.post('api/register', data)
    commit('setUser', response.data)
  },

  /**
   * ログイン時にデータをAPIにPOSTする
   * @param commit
   * @param data
   */
  async login({ commit }: any, data: any) {
    const response = await axios.post('api/login', data)
    commit('setUser', response.data)
  },

  /**
   * ログアウト時に空のデータをPOSTする
   * @param commit
   */
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
