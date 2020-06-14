import koa from 'koa'
import http from 'http'
import logger from 'koa-logger'
import bodyParser from 'koa-bodyparser'
import DBPool from './Utils/dbPool.js'
import blogRouter from './Routes/blogRouter.js'
import mongodb from 'mongodb'

const app = new koa()
const server = http.createServer(app.callback())
server.listen(8181)
console.log('Server running...')

app.use(logger())
app.use(bodyParser())
app.use( async (ctx, next)=>{
  ctx.db = await DBPool()
  ctx.ObjectId = mongodb.ObjectId
  await next()
})

app.use(blogRouter.routes()).use(blogRouter.allowedMethods())
