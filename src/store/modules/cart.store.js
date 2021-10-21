const state = {
    // ======= Cart State =========
    cart: {
        items: [],
        total: 0,
        formatedTotal: "0",
        serviceCharge: 0,
        grandTotal: 0
    },
}
const mutations = {
    //======= Cart Mutations =======
    initializeCart(state, cart){
        state.cart.items = cart.items
        state.cart.total = cart.total
        state.cart.formatedTotal = cart.formatedTotal
        state.cart.serviceCharge = cart.serviceCharge
        state.cart.grandTotal = cart.grandTotal
    },
    addNewCartItem(state, { product, qty }) {
        let newItem = {
            productID: product.productID,
            name: product.name,
            qty: qty,
            price: product.price,
            image: product.images[0].url,
            size: product.size,
            itemTotal: 0,
        }
        state.cart.items.push(newItem)
    },
    updateCart(state, { productID, qty }) {
        for (let item of state.cart.items) {
            if (item.productID === productID) {
                item.qty += qty
                break
            }
        }
    },
    reduceQtyUpdateCart(state, { productID, qty }) {
        for (let item of state.cart.items) {
            if (item.productID === productID) {
                item.qty -= qty
                break
            }
        }
    },
    setQtyUpdateCart(state, { productID, qty }){
        for (let item of state.cart.items) {
            if (item.productID === productID) {
                item.qty = qty
                break
            }
        }
    },
    removeCartItem(state, productID) {
        for (let i = 0; i < state.cart.items.length; i++) {
            let item = state.cart.items[i]
            if (item.productID === productID) {
                state.cart.items.splice(i, 1)
            }
        }
    },
    emptyCart(state){
        state.cart.items = []
        state.cart.total = 0
        state.cart.formatedTotal = "0"
        state.cart.serviceCharge = 0
        state.cart.grandTotal = 0
        // save cart
    },
    saveCart(state){
        localStorage.setItem('cart',JSON.stringify(state.cart))
    },
    calculateTotal(state) {
        state.cart.total = 0
        state.cart.items.forEach(item => {
            let price = item.price
            let qty = item.qty
            let amount = price * qty
            item.itemTotal = amount.toFixed(2)
            state.cart.total += amount
        })
        if (state.cart.total <= 10000){
            state.cart.serviceCharge = 1000
        }
        state.cart.grandTotal = state.cart.serviceCharge + state.cart.total
        state.cart.total = state.cart.total.toFixed(2)
    },
    setFormattedTotal(state) {
        state.cart.formatedTotal = new Intl.NumberFormat().format(state.cart.total)
    },
}
const actions = {
    //======= Cart Actions =======
    initializeCart(contex, cart){
        contex.commit("initializeCart", cart)
    },
    calculateTotal(contex) {
        contex.commit("calculateTotal")
        contex.commit("setFormattedTotal")
    },
    addToCart(contex, { product, qty }) {
        let found = false
        contex.state.cart.items.forEach(item => {
            if (item.productID === product.productID) found = true
        })
        if (!found) {
            contex.commit("addNewCartItem", { product, qty })
            contex.dispatch("calculateTotal")
            contex.commit('setFormattedTotal')
            contex.commit('saveCart')
        } else {
            contex.commit("updateCart", { productID: product.productID, qty })
            contex.dispatch("calculateTotal")
            contex.commit('saveCart')
        }
    },
    increaseQtyUpdateCart(contex, { productID, qty }){
        contex.commit("updateCart", { productID, qty })
        contex.dispatch("calculateTotal")
        contex.commit('saveCart')
    },
    reduceQtyUpdateCart(contex, { productID, qty }){
        contex.commit("reduceQtyUpdateCart", { productID, qty })
        contex.dispatch("calculateTotal")
        contex.commit('saveCart')
    },
    setQtyUpdateCart(contex, { productID, qty }){
        contex.commit("setQtyUpdateCart", { productID, qty })
        contex.dispatch("calculateTotal")
        contex.commit('saveCart')
    },
    removeCartItem(contex, productID) {
        contex.commit("removeCartItem", productID)
        contex.dispatch("calculateTotal")
        contex.commit('saveCart')
    },
    emptyCart(contex){
        contex.commit("emptyCart")
        contex.commit('saveCart')
    },
}
const getters = {
    //======= Cart Getters ========
    cartItems(state){
        return state.cart.items
    },
    cartItemCount(state) {
        return state.cart.items.length
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}