const state = {
    // ======== Order State ========
    order: {
        items: [],
        serviceCharge:0,
        total: 0,
        grandTotal: 0,
        deliveryAddress: {},
        deliverySchedule: {}
    }
}
const mutations = {
    //====== Order Mutations ======
    setOrder(state, order) {
        state.order.items = order.items
        state.order.serviceCharge = order.serviceCharge
        state.order.total = order.total
        state.order.grandTotal = order.grandTotal
        state.order.deliveryAddress = order.deliveryAddress
        state.order.deliverySchedule = order.deliverySchedule
    },
    saveOrder(){
        //save order in database

    }
}
const actions = {
    //====== Order Actions ======
    setOrder(contex, order){
        contex.commit("setOrder", order)
    }
}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}