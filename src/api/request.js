import axios from 'axios'
import NProgress from 'nprogress' // 进度条库

// const baseUrl = process.env.NODE_ENV === 'production' ? 'https://www.lixinyi0622.com/v1/' : 'http://localhost:4200/v1/' // 项目运行在开发环境还是生产环境，根据不同环境对应不同webpack配置
const baseUrl = 'http://120.78.219.91:4200/v1/' // 项目运行在开发环境还是生产环境，根据不同环境对应不同webpack配置

axios.interceptors.request.use( // http拦截器，统一处理所有http请求和响应
  function (config) {
    NProgress.start()
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  function (response) {
    NProgress.done()
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 获取所有的文章
export const getArticleAll = (params = {}) => axios.get(`${baseUrl}articles`, {
  params
})

// 获取文章详情
export const getDetail = (postId) => axios.get(`${baseUrl}details?postId=${postId}`)

// 获取所有的标签
export const getTagsAll = () => axios.get(`${baseUrl}tags`)

// 获取标签下所有的文章
export const getTagArticle = (tagId) => axios.get(`${baseUrl}tags?tagId=${tagId}`)

// 文章阅读次数
export const readCountIncrease = (postId) => axios.post(`${baseUrl}readNum`, {
  postId: postId
})
