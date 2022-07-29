Web应用课中期项目——拳皇

## 项目的初始构建
1. 先创建两个文件夹 static 存放静态文件（css, js, 图片声音视频等），templates存放html文件
2. 创建css的基文件base.css和js的基文件base.js，在templates创建index.html，并将css引入html
> 写游戏时往往采用面向对象的写法
3. 在js文件中创建游戏对象类KOF，将其export出去，在html文件中引入KOF类并创建对象
4. 编写KOF类的属性，设置长宽并添加背景图片

## 游戏初步--创建游戏基本对象类和地图
> 在游戏界面中，我们有三个元素，背景图片和两个玩家，它们都需要每秒钟刷新60次，因此我们可以让它们都继承自同一元素
1. 实现game_object这一游戏对象，这是一切设计动画的游戏的常用对象
2. 实现继承自game_object类的gamemap地图类，使用canvas
> canvas的特点是可以边写边查

## 游戏初步
1. 实现继承自game_object类的player玩家类
> 在实现游戏时，我们往往先把游戏对象看作是一个个矩形，最后再添加贴图
2. 由player类创建出两个对象，添加至游戏的主类中