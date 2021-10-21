import Vue from "vue"
import Router from "vue-router"
import VueCookies from 'vue-cookies'
import httpAuthCLient from "./api/httpAuthClient";
import Home from "./views/Home.vue"
import Shop from "./views/Shop.vue"
import RecommendedProducts from "./views/RecommendedProducts.vue"
import PopularProducts from "./views/PopularProducts.vue"
import LatestProducts from "./views/LatestProducts.vue"
import ShopByCategory from "./views/ShopByCategory.vue"
import Search from "./views/Search.vue"
import SingleProduct from "./views/SingleProduct.vue"
import Cart from "./views/Cart.vue"
import Checkout from "./views/Checkout.vue"
import CheckoutSuccessful from "./views/CheckoutSuccessful.vue"
import OrdersView from "./views/OrdersView.vue"
import SingleOrder from "./views/SingleOrder.vue"
import Review from "./views/Review.vue"
import AccountView from "./views/AccountView.vue"
import AccountMobileView from "./views/AccountMobileView.vue"
import AccountProfile from "./views/AccountProfile.vue"
import AccountAddress from "./views/AccountAddress.vue"
import AccountSupport from "./views/AccountSupport.vue"
import AccountPolicy from "./views/AccountPolicy.vue"
import Notification from "./views/Notification.vue"
import Signin from "./views/Signin.vue"
import Signup from "./views/Signup.vue"

Vue.use(VueCookies)
Vue.use(Router)

let router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior(){
        return {x:0, y:0}
    },
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/shop",
            name: "Shop",
            component: Shop
        },
        {
            path: "/recommended",
            name: "RecommendedProducts",
            component: RecommendedProducts
        },
        {
            path: "/popular",
            name: "PopularProducts",
            component: PopularProducts
        },
        {
            path: "/latest",
            name: "LatestProducts",
            component: LatestProducts
        },
        {
            path: "/product/:id",
            name: "SingleProduct",
            component: SingleProduct
        },
        {
            path: "/category/:cat",
            name: "ShopByCategory",
            component: ShopByCategory
        },
        {
            path: "/search/:searchParam",
            name: "Search",
            component: Search
        },
        {
            path: "/cart",
            name: "Cart",
            component: Cart
        },
        {
            path: "/checkout",
            name: "Checkout",
            component: Checkout,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/checkout-successful",
            name: "CheckoutSuccessful",
            component: CheckoutSuccessful
        },
        {
            path: "/orders",
            name: "Orders",
            component: OrdersView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/order/:id",
            name: "SingleOrder",
            component: SingleOrder,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/review/:id",
            name: "Review",
            component: Review,
            meta: {
                requiresAuth: true
            }
        },
        {
            path:"/account",
            component:AccountView,
            children:[
                {
                    path: "user",
                    name: "AccountMobile",
                    component: AccountMobileView,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: "profile",
                    name: "AccountProfile",
                    component: AccountProfile,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: "address",
                    name: "AccountAddress",
                    component: AccountAddress,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: "support",
                    name: "AccountSupport",
                    component: AccountSupport,
                    meta: {
                        requiresAuth: true
                    }
                },
                {
                    path: "policy",
                    name: "AccountPolicy",
                    component: AccountPolicy,
                    meta: {
                        requiresAuth: true
                    }
                },
            ]
        },       
        {
            path: "/notification",
            name: "Notification",
            component: Notification
        },
        {
            path: "/login",
            name: "Signin",
            component: Signin
        },
        {
            path: "/signup",
            name: "Signup",
            component: Signup
        },
        {
            path: "/logout",
            beforeEnter: (to, from, next) => {
                router.app.$store.dispatch("setLoginStatus", true);
                router.app.$store.dispatch("setUserInfo", {});
                Vue.$cookies.remove("userData")
                next("/login")
            }
        }
        ,
        {
            path: "/redirect",
            beforeEnter: (to, from, next) => {
                next(to.query.route)
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    
    if (to.matched.some(record => record.meta.requiresAuth)){
        if (Vue.$cookies.isKey("userData")){
            httpAuthCLient.get("/user/verifytoken").then((res)=>{
                if (res.data.status == 'error') {
                    next({
                        path: '/login'
                    })
                } else if (res.data.status == 'success'){
                    next()
                }
            })
        } else {
            next({
                path: '/login'
            })
        }
    }else{
        next()  
    }    
})

export default router