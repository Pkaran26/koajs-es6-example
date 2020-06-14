import {
  blog,
  tags
} from '../Schema/blog.js'
import {
  dbError,
  dbMessage
} from '../Shared/messgaes.js'

const getBlog = async ctx=>{
  try {
    ctx.body = await ctx.db.collection('blog').find({}).toArray()
  } catch (e) {
    ctx.body = dbError(e)
  }
}
const blogDetail = async ctx=>{
  try {
    ctx.body = await ctx.db.collection('blog').find({ _id: new ctx.ObjectId(ctx.params.id) }).toArray()
  } catch (e) {
    ctx.body = dbError(e)
  }
}

const postBlog = async ctx=>{
  const { err, value } = blog.validate(ctx.request.body)
  try {
    const result = await ctx.db.collection('blog').insertOne({
      ...value,
    })

    if(result && result.insertedCount){
      ctx.body = dbMessage(true, 'post added')
    }
  } catch (e) {
    ctx.body = dbError(e)
  }
}

export {
  getBlog,
  blogDetail,
  postBlog
}
