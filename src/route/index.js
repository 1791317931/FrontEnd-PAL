import Home from '../view/home/'
import UploadMusic from '../view/upload/music'
import UploadBeat from '../view/upload/beat'
import UploadArticle from '../view/upload/article'

export default [{
    path: '/',
    component: Home,
    name: 'Home',
}, {
    path: '/upload/music',
    component: UploadMusic,
    name: 'upload-music',
}, {
    path: '/upload/beat',
    component: UploadBeat,
    name: 'upload-beat',
}, {
    path: '/upload/article',
    component: UploadArticle,
    name: 'upload-article',
}, {
    path: '*',
    redirect: '/'
}]