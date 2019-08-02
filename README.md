# nodeSeed
用于快速创建模块
## Installation
`npm install test-tool-createmodule moment`
## Basic Usage
在package.json文件下设置执行命令
```
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "new": "create new"
  },
```
在命令行执行
```
npm run new --name login
```
name后面是模块名

项目所需的目录结构
```
--src
  --modules
    --components
    --services
```