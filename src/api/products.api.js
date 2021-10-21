import httpClient from "./httpClient";

const getAllProducts = () => httpClient.get('/product/all')
const searchProducts = (searchParam) => httpClient.get(`/product/search/${searchParam}`)
const getProductsByCategory = (category) => httpClient.get(`/product/category/${category}`)
const getPopularProducts = (limit) => httpClient.get(`/product/popular/${limit}`)
const getRecommendedProducts = (limit) => httpClient.get(`/product/recommended/${limit}`)
const getLatestProducts = (limit) => httpClient.get(`/product/latest/${limit}`)
const getSingleProduct = (id) => httpClient.get(`/product/${id}`)

export {
    getAllProducts,
    searchProducts,
    getProductsByCategory,
    getPopularProducts,
    getRecommendedProducts,
    getLatestProducts,
    getSingleProduct
}