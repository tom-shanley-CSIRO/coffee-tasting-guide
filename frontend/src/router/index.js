import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CoffeeView from '../views/CoffeeView.vue'
import CoffeeLogsView from '../views/CoffeeLogsView.vue'
import LogView from '../views/LogView.vue'
import RegisterView from '../views/RegisterView.vue'
import SignInView from '../views/SignInView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/coffee',
            name: 'coffee',
            component: CoffeeView
        },
        {
            path: '/coffee-logs/:coffee',
            name: 'coffee-logs',
            component: CoffeeLogsView
        },
        {
            path: '/log',
            name: 'log',
            component: LogView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/sign-in',
            name: 'sign-in',
            component: SignInView
        }
    ]
})

const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            getAuth(),
            (user) => {
                removeListener()
                resolve(user)
            },
            reject
        )
    })
}

router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next()
        } else {
            alert('You do not have permission to access this page')
            next('/sign-in')
        }
    } else {
        next()
    }
})

export default router
