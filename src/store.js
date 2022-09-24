import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        isLoggedIn: false,
    },
    getters: {
        user(state) {
            return state.user
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        },
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user
        },
        SET_IS_LOGGED_IN(state, isLoggedIn) {
            state.isLoggedIn = isLoggedIn
            console.log(isLoggedIn)
        },
    },
    actions: {
        async GET_USER(context) {
            await axios.get('/user')
                .then((res) => {
                    context.commit('SET_USER', res.data)
                }).catch(() => {
                    // context.commit('LOADER_STATUS_CHANGE',false)
                })
        }
    },
});