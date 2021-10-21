import { getAllProducts, getPopularProducts, getRecommendedProducts, getLatestProducts } from "../../api/products.api"

const state = {
    // ======= Product State =========
    products: [],
    popularProducts: [],
    recommendedProducts: [],
    latestProducts: []
}
const mutations = {
    //====== Product Mutations =======
    setProducts(state, products) {
        state.products = products
    },
    setPopularProducts(state, products) {
        state.popularProducts = products
    },
    setRecommendedProducts(state, products) {
        state.recommendedProducts = products
    },
    setLatestProducts(state, products) {
        state.latestProducts = products
    },
}
const actions = {
    //======= Product Actions =======
    async fetchAllProducts(contex) {
        try{
            const response = await getAllProducts()
            contex.commit("setProducts", response.data)
        } catch(err){
            console.log(err)
        }
    },
    async fetchPopularProducts(contex, limit) {
        try{
            const response = await getPopularProducts(limit)
            contex.commit("setPopularProducts", response.data)
        } catch(err){
            console.log(err)
        }
    },
    async fetchRecommendedProducts(contex, limit) {
        try{
            const response = await getRecommendedProducts(limit)
            contex.commit("setRecommendedProducts", response.data)
        } catch(err){
            console.log(err)
        }
    },
    async fetchLatestProducts(contex, limit) {
        try{
            const response = await getLatestProducts(limit)
            contex.commit("setLatestProducts", response.data)
        } catch(err){
            console.log(err)
        }
    },
}
const getters = {
    getProducts(state) {
        return state.products
    },
    getPopularProducts(state) {
        return state.popularProducts
    },
    getRecommendedProducts(state) {
        return state.recommendedProducts
    },
    getLatestProducts(state) {
        return state.latestProducts
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}