import apiAxios from '@/libs/api.request'

export function login(data) {
  return apiAxios.request({
    url: '/api/v1/sysuser/public/login',
    data,
    method: 'post'
  })
}

export function register(data) {
  return apiAxios.request({
    url: '/api/v1/sysuser/public/operation/user/register',
    data,
    method: 'post'
  })
}

export function logout() {
  return apiAxios.request({
    url: '/api/v1/sysuser/logout',
    method: 'put'
  })
}

export function getOssCdn() {
  return apiAxios.request({
    url: '/api/v1/aliyun/osscdn',
    method: 'get'
  })
}

export function getOssParam() {
  return apiAxios.request({
    url: '/api/v1/aliyun/policy',
    method: 'get'
  })
}

// --------------------------------文章----------------------------------------
export function getArticlePage(data) {
  return apiAxios.request({
    url: '/api/v1/article/query',
    method: 'post',
    data
  })
}

export function getArticleById(id) {
  return apiAxios.request({
    url: `/api/v1/article/${id}`,
    method: 'get'
  })
}

export function addArticle(data) {
  return apiAxios.request({
    url: '/api/v1/article',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return apiAxios.request({
    url: '/api/v1/article',
    method: 'put',
    data
  })
}

export function deleteArticle(id) {
  return apiAxios.request({
    url: `/api/v1/article/delete/${id}`,
    method: 'delete'
  })
}

export function updateArticleDisplay(data) {
  return apiAxios.request({
    url: `/api/v1/article/display/${data.sn}/${data.display}`,
    method: 'put'
  })
}

export function updateArticlePriority(data) {
  return apiAxios.request({
    url: '/api/v1/article/recommend',
    method: 'put',
    data
  })
}
// --------------------------------文章----------------------------------------

// --------------------------------活动----------------------------------------
export function getActivityPage(data) {
  return apiAxios.request({
    url: '/api/v1/activity/query',
    method: 'post',
    data
  })
}

export function addActivity(data) {
  return apiAxios.request({
    url: '/api/v1/activity',
    method: 'post',
    data
  })
}

export function updateActivity(data) {
  return apiAxios.request({
    url: '/api/v1/activity',
    method: 'put',
    data
  })
}

export function deleteActivity(id) {
  return apiAxios.request({
    url: `/api/v1/activity/delete/${id}`,
    method: 'delete'
  })
}

export function getActivityById(id) {
  return apiAxios.request({
    url: `/api/v1/activity/${id}`,
    method: 'get'
  })
}

export function updateActivityDisplay(data) {
  return apiAxios.request({
    url: `/api/v1/article/display/${data.sn}/${data.display}`,
    method: 'put'
  })
}
// --------------------------------活动----------------------------------------

// --------------------------------动态----------------------------------------
export function getDynamicPage(data) {
  return apiAxios.request({
    url: '/api/v1/moment/query',
    method: 'post',
    data
  })
}

export function getDynamicById(id) {
  return apiAxios.request({
    url: `/api/v1/moment/${id}`,
    method: 'get'
  })
}

export function updateDynamicDisplay(data) {
  return apiAxios.request({
    url: `/api/v1/moment/display/${data.sn}/${data.display}`,
    method: 'put'
  })
}

export function updateDynamicPriority(data) {
  return apiAxios.request({
    url: '/api/v1/article/recommend',
    method: 'put',
    data
  })
}
// --------------------------------动态----------------------------------------

// --------------------------------推荐----------------------------------------
export function cancleRecommend(id) {
  return apiAxios.request({
    url: `/api/v1/article/recommend/${id}`,
    method: 'delete'
  })
}

export function getRecommendPage(data) {
  return apiAxios.request({
    url: `/api/v1/article/recommend/query`,
    method: 'post',
    data
  })
}
// --------------------------------推荐----------------------------------------

// --------------------------------评论----------------------------------------
export function getCommentList(data) {
  return apiAxios.request({
    url: `/api/v1/topic-comment/list`,
    method: 'post',
    data
  })
}

// --------------------------------审核----------------------------------------
export function reviewArticle(data) {
  return apiAxios.request({
    url: `/api/v1/article/audit`,
    method: 'put',
    data
  })
}
export function reviewComment(data) {
  return apiAxios.request({
    url: `/api/v1/topic-comment/audit`,
    method: 'put',
    data
  })
}

// 系统管理---管理员列表
export function getSysuserList(data) {
  return apiAxios.request({
    url: `/api/v1/sysuser/list`,
    method: 'get',
    data
  })
}


// --------------------------------用户相关----------------------------------------
// 用户列表
export function getUserInfo(account) {
  return apiAxios.request({
    url: `/api/v1/app/user/profile/${account}`,
    method: 'get',
  })
}
// 用户列表
export function getUserList(data) {
  return apiAxios.request({
    url: `/api/v1/app/user/list`,
    method: 'post',
    data
  })
}
// 用户黑名单列表
export function getReportedList(data) {
  return apiAxios.request({
    url: `/api/v1/app/user/reported/list`,
    method: 'post',
    data
  })
}


// 用户拉黑
export function blocked(data) {
  return apiAxios.request({
    url: `/api/v1/app/user/blocked`,
    method: 'post',
    data
  })
}

// 获取社交信息分页列表
export function friendList(data) {
  return apiAxios.request({
    url: `/api/v1/app/user/social/list`,
    method: 'post',
    data
  })
}

// 获取社交信息分页列表
export function friendSearchList(data) {
  return apiAxios.request({
    url: `/api/v1/app/user/social/search`,
    method: 'post',
    data
  })
}

export function updateSystemUser(data) {
  return apiAxios.request({
    url: `/api/v1/sysuser`,
    method: 'put',
    data
  })
}

