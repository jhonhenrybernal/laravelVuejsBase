import App from './components/AppComponent.vue'
import Login from './components/auth/LoginComponent.vue'
import Register from './components/auth/RegisterComponent.vue'

export const routes = [
    {
		path: '/',
        component: App
    },
	{
		path: '/home',
        component: App
    },
    {
		path:'/login',
        component: Login
    },
	{
		path:'/register',
        component: Register
    }
];