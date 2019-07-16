
const STAGES = [
  'INTRO',
  'SPACE_SUIT_FIND',
  'SPACE_SUIT_QUESTION',
  'SATURN_V_FIND',
  'SATIUN_V_QUESTION',
  'TRAVEL_V_FIND',
  'TRAVEL_V_QUESTION',
  'EAGLE_V_FIND',
  'EAGLE_V_QUESTION',
  'MOON_V_FIND',
  'MOON_V_QUESTION',
  'END'
]

const getNextStage = (cuurrent) => STAGES[STAGES.indexOf(cuurrent) + 1]

const initialState = {
  currentStage: STAGES[0]
}

const getters = {
  group (state) { return state.group }
}

const mutations = {
  nextStage (state) {
    state.currentStage = getNextStage(state.currentStage)
  }
}

const actions = {
  async getGroupWithNoMembers ({ commit, state }, input) {
    commit('getGroupRequest')
  }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
}
