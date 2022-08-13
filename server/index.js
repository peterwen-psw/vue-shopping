const Koa = require("koa")
const Router = require("koa-router")
const views = require("koa-views")
const static = require("koa-static")
const koaBody = require("koa-body")
const ToKen = require("jsonwebtoken")
const koaJwt = require("koa-jwt")
let app = new Koa()
let router = new Router()

app.use(koaBody())
app.use(views(__dirname + "/views"))
app.use(static(__dirname + "/static"))

let shops = require("./control/adduser")
let mongo = require("./control/user")
let shopcar = require("./control/shops")


//主页渲染商品
router.get("/getgoods", async ctx => {
  let goods = await shops.getdatas()
  ctx.body = goods
})
//列表页type对应总数请求
router.get("/getlist", async ctx => {
  let types = ctx.query.type
  let goods = await shops.gettype(types)
  ctx.body = goods
})
//列表页排序请求
router.post("/getsort", async ctx => {
  console.log(ctx.request.body,"/");
  let type = ctx.request.header.referer.split("=")[1]
  let parameter = ctx.request.body.choose
  let page=ctx.request.body.page
  let data = await shops.getsort(type, parameter,page)
  ctx.body = data
})
//列表页分页
router.post("/setpages", async ctx => {
  console.log(ctx.request.body);
  let type = ctx.request.body.type;
  let page = ctx.request.body.page;
  let data = await shops.getdata(type, page)
  ctx.body = data
})
//详情页请求
router.get("/getbyid", async ctx => {
  let id = ctx.request.url.split("?")[1]
  let goods = await shops.getid(id)
  ctx.body = goods
})
//登录请求
router.post("/getinfo", async ctx => {
  // console.log(ctx.request.body);
  let info = {}
  let name = ctx.request.body.username
  let pwd = ctx.request.body.userpwd
  let obj = await mongo.Serach(name, pwd)
  obj = JSON.stringify(obj)
  if (obj == "[]") {
    info.status = 1;
    info.data = "登录失败"
  } else {
    info.status = 0;
    info.data = "登录成功";
    let token = ToKen.sign({
      name: "名字参数"
    }, 'my_token', { expiresIn: '24h' });
    // 返还token，服务签发一个token返还给前端
    info.token = token
  }
  ctx.body = info
})
//注册请求
router.post("/getuser", async ctx => {
  let info = {}
  let name = ctx.request.body.username
  let pwd = ctx.request.body.userpwd
  let obj = await mongo.Serach(name)
  console.log(obj,"/");
  obj = JSON.stringify(obj)
  if (obj == "[]") {
    mongo.Create(name, pwd)
    info.status = 0;
    info.data = "注册成功"
  } else {
    info.status = 1;
    info.data = "注册失败"
  }
  ctx.body = info
})
//加入购物车请求
router.post("/setshop", async ctx => {
  // console.log(ctx.request.body);
  let info = {}
  let name = ctx.request.body.name
  let shopid = ctx.request.body.id
  let num = ctx.request.body.num
  let obj = await shopcar.Find(name, shopid)
  let arr = Object.keys(obj)
  // console.log(obj);
  if (arr.length) {
    let oldnum = obj[0].num
    let oldid = obj[0]._id
    let nums = num + oldnum
    shopcar.Updata(oldid, nums)
    info.status = 1;
    info.data = "修改成功"
  } else {
    shopcar.Create(name, shopid, num)
    info.status = 0;
    info.data = "添加成功"
  }
  ctx.body = info
})
//请求购物车数据
router.get("/getshopdata", async ctx => {
  let name = ctx.query.name
  let obj = await shopcar.Finds(name)
  // console.log(obj);
  ctx.body = obj
})
//请求购物车数据的删除
router.get("/deletedata", async ctx => {
  let shopid = ctx.query.shopid
  shopcar.Delete(shopid)
  ctx.body = "已经删除"
})


app.use(router.routes())
app.listen(9090)