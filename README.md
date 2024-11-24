## 1. 环境配置  

（1）管理员模式打开该文件夹的终端命令窗口。  

（2）输入命令：  

'''npm install vue-router -g'''
''' npm i --save axios --legacy-peer-deps '''  

''' npm install '''  

''' npm run dev '''  

注：这里再安装axios时发现npm install axios -g命令无法安装，原因附网址：[我是链接](https://blog.csdn.net/weixin_48567232/article/details/136171199)  

 (3) 将网址复制粘贴进浏览器地址栏  
 
## 2. src文件夹内代码说明  

（1） views文件夹：login.vue，register.vue分别为登录和注册界面代码，后端接口和跳转主页在里面有说明，dentify.vue本来想做一个滑块验证，bug太多放弃了  

（2） routers文件夹：index.js为路由，负责login和register之间的跳转,之后有其他界面用总路由串起来就行了  

（3） asserts文件夹：里面picture有背景图片  

（4） request文件夹：封装axios库的核心方法，用来帮助axios类发起网络请求（代码纯照搬），在这里时用来处理前后端的，不过连接后端代码暂时只给了个示例方法，具体看后端怎么操作  

