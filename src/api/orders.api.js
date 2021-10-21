import httpAuthClient from "./httpAuthClient"

const fetchOrders = () => httpAuthClient.get("/user/orders")
const fetchSingleOrder = (id) => httpAuthClient.get(`/user/order/${id}`)

export {
    fetchOrders,
    fetchSingleOrder
}