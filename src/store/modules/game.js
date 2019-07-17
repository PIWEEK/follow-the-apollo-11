
const STAGES = [
  'INTRO',
  'HELMET_FIND',
  'HELMET_QUESTION',
  'ROCKET_FIND',
  'ROCKET_QUESTION',
  'TRAJECTORY_FIND',
  'TRAJECTORY_QUESTION',
  'EAGLE_FIND',
  'EAGLE_QUESTION',
  'MAP_FIND',
  'MAP_QUESTION',
  'END'
]

const getNextStage = (cuurrent) => STAGES[STAGES.indexOf(cuurrent) + 1]

const initialState = {
  currentStage: STAGES[0],
  inventory: {
    helmet: false,
    rocket: false,
    trajectory: false,
    eagle: false,
    map: false
  }
}

const getters = {
  showHelmetMarker (state) { return !state.inventory.helmet && state.currentStage.startsWith('HELMET') },
  showRocketMarker (state) { return !state.inventory.rocket && state.currentStage.startsWith('ROCKET') },
  showTrajectoryMarker (state) { return !state.inventory.trajectory && state.currentStage.startsWith('TRAJECTORY') },
  showEagleMarker (state) { return !state.inventory.eagle && state.currentStage.startsWith('EAGLE') },
  showMapMarker (state) { return !state.inventory.map && state.currentStage.startsWith('MAP') }
}

const mutations = {
  nextStage (state) { state.currentStage = getNextStage(state.currentStage) },
  addHelmetToInventory (state) { state.inventory.helmet = true },
  addRocketToInventory (state) { state.inventory.rocket = true },
  addTrajectoryToInventory (state) { state.inventory.trajectory = true },
  addEagleToInventory (state) { state.inventory.eagle = true },
  addMapToInventory (state) { state.inventory.map = true }
}

const actions = {
  // async getGroupWithNoMembers ({ commit, state }, input) {
  //   commit('getGroupRequest')
  // }
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions
}
