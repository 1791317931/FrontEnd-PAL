import Home from '../view/home/'
import UploadMusic from '../view/upload/Music'

export default [{
    path: '/',
    component: Home,
    name: 'Home',
}, {
    path: '/upload/music',
    component: UploadMusic,
    name: 'upload-music',
}, {
    path: '*',
    redirect: '/'
}]