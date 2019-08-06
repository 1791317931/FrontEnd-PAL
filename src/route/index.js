import Home from '../view/home/'

import ResidenceAgreement from '../view/residence/' // 入驻协议

import UploadMusic from '../view/upload/music'  // 上传音乐
import UploadBeat from '../view/upload/beat'
import UploadArticle from '../view/upload/article'

import UserInfo from '../view/user/'    // 用户信息
import Identity from '../view/user/identity'    // 用户认证
import IdentityWait from '../view/user/identity_wait'    // 用户认证

import BeatShop from '../view/beat-shop/' // beat商城
import Article from '../view/article/'    // 文章
import Music from '../view/music/'        // 音乐
export default [{
    path: '/',
    component: Home,
    name: 'Home',
}, {
    path: '/beat-shop',
    component: BeatShop,
    name: 'BeatShop',
}, {
    path: '/article',
    component: Article,
    name: 'Article'
}, {
    path: '/music',
    component: Music,
    name: 'Music',
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
    path: '/user/identity',
    component: Identity,
    name: 'identity'
}, {
    path: '/residence',
    component: ResidenceAgreement,
    name: 'residence-agreement',
}, {
    path: '/user/identity/wait',
    component: IdentityWait,
    name: 'identity-wait',
}, {
    path: '*',
    redirect: '/'
}]