import HttpRequest from '@/libs/axios'

let baseUrl = process.env.VUE_APP_API
const apiAxios = new HttpRequest(baseUrl)

export default apiAxios
