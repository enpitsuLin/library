import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMobile: false
    },
    mutations: {
        change_device(state) {
            state.isMobile = !state.isMobile
        }
    },
    actions: {
        CHANGE_DEVICE({ commit }) { commit('change') }
    },
    modules: {}
})
