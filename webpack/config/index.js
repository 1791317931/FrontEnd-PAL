module.exports = {
    'development': { // 91开发环境
        proxyTarget: '//123.103.9.204:6058',
        contentBase: '../web',
    },
    'dev-prev': { // 预发布开发环境
        proxyTarget: 'https://ezone.esn.ren',
        contentBase: '../web',
    },
}
