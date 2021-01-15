const state = {
  code: null
}

const mutations = {
  setCode (state: any, code: number) {
    state.code = code
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
