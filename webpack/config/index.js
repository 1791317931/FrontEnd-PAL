module.exports = {
    'development': { // 91开发环境
        proxyTarget: 'https://rapper-test.miyupp.com/',
        contentBase: '../web',
    },
    'dev-prev': { // 预发布开发环境
        proxyTarget: 'https://ezone.esn.ren',
        contentBase: '../web',
    },
    'production': {
        proxyTarget: 'https://ezone.esn.ren',
        contentBase: '../web',
    }
}
