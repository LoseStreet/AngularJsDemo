#angular2项目如何使用sass

##angular/cli支持使用sass

####新建工程
如果是新建一个angular工程采用sass：
ng new My_New_Project --style=sass
这样所有样式的地方都将采用sass样式，如果需要使用sass的scss语法，还可以如下方式：
ng new My_New_Project --style=scss
然后需要手动安装node-sass:
npm install node-sass --save-dev
这样就可以实现用sass语法做样式了。
已有angular-cli工程改为sass

####如果是已经新建了工程，需要切换到sass，则采用如下方法：
首先同样安装sass需要的node-sass包
npm install node-sass --save-dev 
然后修改已有项目的.angular-cli.json配置文件：
首先修改最后的defaults标签
SASS 语法修改为
"defaults": {
     "styleExt": "sass",
}
SCSS语法修改为
"defaults": {
     "styleExt": "scss",
}
然后修改styles标签
"styles": [
        "styles.css"
      ],
其中的css修改为sass或scss。
并把全局style.css文件改为style.scss或style.sass。

安装node-sass注意事项
另外，安装node-sass由于需要连接github在连接aws，很难成功，需要在.npmrc文件中再加入如下内容，让这些连接也都只连接淘宝镜像：
目前尝试的这种样式写法不支持内置在组建当中的styles，主要在组建中庸styleUrls引用外部sass文件。
