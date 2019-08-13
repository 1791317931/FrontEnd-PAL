import http from '@src/http/'

// 根据验证场景获取验证码详情{scene决定二维码样式},默认为default,captcha/default
export function getCaptcha(data) {
  return http({
    url: `/captchaInfo/${data.scene}`
  });
}

// 发送短信验证码
export function getSmscode(data) {
  return http({
    url: `/api/utils/smscode`,
    method: 'post',
    data
  });
}

export function regist(data) {
  return http({
    url: '/register',
    method: 'post',
    data
  });
}