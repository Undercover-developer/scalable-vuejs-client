import httpClient from "./httpClient"

const signup = (userData) => httpClient.post("/user/signup", userData)
const signupWithGoogle = (idToken) => httpClient.post(`/user/google/signup/${idToken}`, idToken)
const login = (userData) => httpClient.post("/user/login", userData)
const loginWithGoogle = (idToken) => httpClient.post(`/user/google/login/${idToken}`)

export {
    signup,
    signupWithGoogle,
    login,
    loginWithGoogle,
}

