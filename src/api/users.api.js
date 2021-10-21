import httpAuthClient from "./httpAuthClient"

const updateProfile = (userData) => httpAuthClient.post("/user/update/profile", userData)
const changePassword = (userData) => httpAuthClient.post("/user/update/password", userData)
const updatePhoto = (file) => httpAuthClient.post("/user/update/photo", file, { headers: { "Content-Type": "multipart/form-data", } })
const addNewAddress = (address) => httpAuthClient.post("/user/new/address", address)
const updateAddress = (address) => httpAuthClient.post("/user/update/address", address)
const deleteAddress = (id) => httpAuthClient.post("/user/delete/address", id)
const contactSupport = (formData) => httpAuthClient.post("/user/support", formData)
const checkout = (order) => httpAuthClient.post("/user/checkout", order)
const fetchOrders = () => httpAuthClient.get("/user/orders")
const fetchSingleOrder = (id) => httpAuthClient.get(`/user/order/${id}`)
const reviewOrder = (id, rating) => httpAuthClient.post(`/user/review/${id}`, rating)

export {
    updateProfile,
    changePassword,
    updatePhoto,
    contactSupport,
    addNewAddress, 
    updateAddress,
    deleteAddress,
    checkout,
    fetchOrders,
    fetchSingleOrder,
    reviewOrder
}