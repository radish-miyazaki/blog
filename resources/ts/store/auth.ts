import axios from 'axios'
import {CREATED, OK, UNPROCESSABLE_ENTITY} from '../util'

const state = {
  user: null,
  apiStatus: null,
  loginErrorMessage: null,
  registerErrorMessage: null
}

const getters = {
  check: (state: any) => !! state.user,
  id: (state: any) => state.user ? state.user.id : '',
  nickname: (state: any) => state.user ? state.user.nickname : '',
  email: (state: any) => state.user ? state.user.email : '',
  first_name: (state: any) => !! state.user ? state.user.first_name : '',
  last_name: (state: any) => !! state.user ? state.user.last_name : '',
  name: (state: any) => state.user ? (state.user.first_name + ' ' + state.user.last_name) : '',
  admin: (state: any) => !! state.user ? state.user.isAdmin : '',
}

const mutations = {
  setUser (state: any, user: any) {
    state.user = user
  },

  setApiStatus(state: any, status: any) {
    state.apiStatus = status
  },

  setLoginErrorMessages(state: any, message: string) {
    state.loginErrorMessage = message
  },

  setRegisterErrorMessages(state: any, message: string) {
    state.registerErrorMessage = message
  }
}

const actions = {
  /**
   * ユーザ登録時にデータをAPIにPOSTする
   * @param commit
   * @param data
   */
  async register({ commit }: any, data: any) {
    commit('setApiStatus', null)
    const response = await axios.post('/api/register', data)

    if (response.status === CREATED) {
      commit('setApiStatus', true)
      commit('setUser', response.data)
      return false
    }

    commit('setApiStatus', false)
    if(response.status === UNPROCESSABLE_ENTITY) {
      commit('setRegisterErrorMessages', response.data.errors)
    } else {
      commit('error/setCode', response.status, { root: true })
    }
    return true
  },

  /**
   * ログイン時にデータをAPIにPOSTする
   * @param commit
   * @param data
   */
  async login({ commit }: any, data: any) {
    commit('setApiStatus', null)
    const response = await axios.post('/api/login', data)
      .catch(e => e.response || e)

    if(response.status === OK) {
      commit('setApiStatus', true)
      commit('setUser', response.data)
      return false
    }

    commit('setApiStatus', false)
    if(response.status === UNPROCESSABLE_ENTITY) {
      commit('setLoginErrorMessages', response.data.errors)
    } else {
      commit('error/setCode', response.status, { root: true })
    }
    return true
  },

  /**
   * ログアウト時に空のデータをPOSTする
   * @param commit
   */
  async logout({ commit }: any) {
    commit('setApiStatus', null)
    const response = await axios.post('/api/logout')

    if(response.status === OK) {
      commit('setApiStatus', true)
      commit('setUser', null)
      return false
    }

    commit('setApiStatus', false)
    commit('error/setCode', response.status, { root: true })
    return true
  },

  /**
   * ログイン中のユーザを取得する
   * @param commit
   */
  async currentUser({ commit }: any) {
    commit('setApiStatus', null)
    const response = await axios.get('/api/user')
    const user = response.data || null

    if(response.status === OK) {
      commit('setUser', user)
      commit('setApiStatus', true)
      return false
    }

    commit('setApiStatus', false)
    commit('error/setCode', response.status, { root: true })

    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
