// 此文件并非nuxt生成，它为演示项目提供数据服务接口
const Koa = require('koa');
const app = new Koa();

const bodyparser = require('koa-bodyparser');
const router = require('koa-router')({prefix: '/api'});
app.keys = ["some secret", "another secret"];

const language = [
  { id: 1, text: "web前端", count: 2000 },
  { id: 2, text: "Java", count: 1000 },
  { id: 3, text: "Python", count: 500 },
];

// 配置路由

// 列表接口
router.get('/list', ctx => {
  ctx.body = {
    ok: 1,
    data: language
  }
})
// 详情
router.get('/detail', ctx => {
  ctx.body = {
    ok: 1,
    data: language.find(lan => lan.id == ctx.query.id)
  }
})
// 登录
router.post('/login', ctx => {
  const user = ctx.request.body;
  if (user.username === "admin" && user.password === "admin") {
    // 将token存入cookie
    const token = 'a mock token';
    ctx.cookies.set('token', token);
    ctx.body = { ok: 1, token };
  } else {
    ctx.body = { ok: 0 };
  }
})

// 解析post数据并注册路由
app.use(bodyparser());
// 注册路由
app.use(router.routes());
app.listen(8088, () => console.log('api服务已启动'))
