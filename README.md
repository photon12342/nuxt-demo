## 本地运行
`npm install` 安装依赖包
`node server/api.js`  启动后台服务，用于本地模拟接口

`npm run dev` 启动本地开发环境
- 启动时报错
  `Warning: Accessing non-existent property 'filename' of module exports inside circular dependency `
  
  `Warning: Accessing non-existent property 'lineno' of module exports inside circular dependency `
- 解决：
在\node_modules\stylus\lib\nodes\index.js 头部添加
`exports.column = null; 

exports.filename = null; 

exports.lineno = null; `
## 部署
`npm run build`

打包生成之后的文件在.nuxt文件夹下的dist文件夹中

将dist文件夹与nuxt.config.js、package.json、static全部放到一个文件夹中，然后放到服务器上

`npm install`

`npm start`即可启动服务
