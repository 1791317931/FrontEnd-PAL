import Layout from '../view/layout/'

import Home from '../view/home/'

export default [{
    path: '/',
    component: Home,
    name: 'Home',
}, {
    path: '*',
    redirect: '/'
}]