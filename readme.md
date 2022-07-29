Web应用课中期项目——拳皇

## 项目的初始构建
1. 先创建两个文件夹 static 存放静态文件（css, js, 图片声音视频等），templates存放html文件
2. 创建css的基文件base.css和js的基文件base.js，在templates创建index.html，并将css引入html
> 写游戏时往往采用面向对象的写法
3. 在js文件中创建游戏对象类KOF，将其export出去，在html文件中引入KOF类并创建对象
4. 编写KOF类的属性，设置长宽并添加背景图片