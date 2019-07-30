import Home from '../view/home/'

import residenceAgreement from '../view/common/residenceAgreement'

import UploadMusic from '../view/upload/music'
import UploadBeat from '../view/upload/beat'
import UploadArticle from '../view/upload/article'

import UserInfo from '../view/user/userInfo'

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
    path: '/user/info',
    component: UserInfo,
    name: 'user-info',
}, {
    path: '/residence',
    component: residenceAgreement,
    name: 'residence-agreement',
}, {
    path: '*',
    redirect: '/'
}]