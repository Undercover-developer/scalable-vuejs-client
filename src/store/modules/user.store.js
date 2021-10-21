import Vue from "vue"
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)
const state = {
    // ======= User State ==========
    loggedin: false,
    user: {},
}
const mutations = {
    //====== User Mutations ========
    setLoginStatus(state, status) {
        state.loggedin = status
    },
    setUserInfo(state, userInfo) {
        state.user = userInfo
    },
}
const actions = {
    //======= User Actions =========
    setLoginStatus(contex, status) {
        contex.commit("setLoginStatus", status)
    },
    setUserInfo(contex, userInfo) {
        contex.commit("setUserInfo", userInfo)
    },
    saveUserInfo(context, userInfo) {
        Vue.$cookies.set("userData", userInfo, 60 * 60)
    },
    updateUserInfo(context, userInfo) {
        Vue.$cookies.set("userData", userInfo, 60 * 60)
    },
}
const getters = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}