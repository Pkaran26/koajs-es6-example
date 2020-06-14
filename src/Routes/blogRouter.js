import Router from 'koa-router'
import {
  getBlog,
  blogDetail,
  postBlog
} from '../Views/blogViews.js'

const blogRouter = new Router({ prefix: '' })

blogRouter.get('/', getBlog)
blogRouter.get('/:id', blogDetail)
blogRouter.post('/', postBlog)

export default blogRouter
