### v1.7.2
- 修复`gulp php` 时，修改include 内容导致页面没有正确注入 rooturl 

### v1.7.1
- 移除widget 相关任务，考虑到weui 已经提供了较为成熟的基础组件（如dialog、toast等） 
- 完善示例页面

### v1.7.0
- 增加`weui` `weui.js`，作为基础的交互组件，如：alert、dialog、toast 等
- 增加`config.json` 配置项，将sass 配置抽出
- 增加使用示例
- 移除默认的font 字体图标

### v1.6.2
- 增加`gulp php` 命令用于在不改变源码资源路径的情况下，方便和后端联调
- 增加`config.json` 配置项，控制notify 和eslint 的提示
- 修改 readme.md

### v1.6.1
- 修改`gulp build`命令的实现方式
- 修改eslint配置
- 修改handlebars 预编译的命名空间
- 修改checkPhone函数
- 完善组件的md文档
- 修改loading组件
- 修改示例代码

### v1.6.0
- 启动eslint检查
- 提供雪碧图功能

### v.1.5.0
- 提供基于yeoman的自动化构建功能
- 完善handlerbars预编译功能

### v1.4.0
- 页面loading示范
- 增加omiture监控代码
- 增加monitor监控代码
- 统一插件和组件命名空间
- 精简index.html

### v.1.3.0
- 重写gulpfile.js文件
- 改变项目组织结构
- 增加插件
	- loading
	- dialog

### v1.2.0
- 修改sass目录结构
- 引入underscore
- 引入util.js
	- 手机号码检查
	- 网址参数提取
- 实现文件include功能
- js文件代码组织方式改变
- gulp功能完善
	- 增加js合并功能
	- 增加js内联功能
	- 更改MD5戳实现方式
- 修改模板引擎使用方式,改用预编译的方式执行

### v1.1.1
- 修改gulpfile中的默认unit

### v1.1.0
- 加入色板
- 用sass重写button组件
- 完善ajax请求示例代码，加入新的loading效果
- flexbile文字使用固定大小，并且取消头部viewport声明
- 更换模板引擎
- 添加模板引擎使用示例代码
- 引入pace.js，添加进度条

### v1.0.2
- 完善ajax请求示例代码，添加避免重复请求和请求loading效果
- 修改模板变量到global中
- 引入_animation.scss

### v1.0.1
- 引入网站图标
- 默认引入touch.js
- 修改样式重置代码 精简全局代码
- 修改按钮组件样式
