## 多端统一开发框架

#### 简介

> <https://taro.aotu.io/>

多端统一开发框架，支持用 React 的开发方式编写一次代码，生成能运行在微信/百度/字节跳动/支付宝小程序、H5、React Native 等平台的应用。

---

#### 特性 Features

* 多端运行：一键生成可以在微信小程序/H5/ReactNative等端运行的代码
* 语法风格：采用React语法标准，支持JSX书写，让代码更具表现性
* 组件化：支持组件化开发，让代码可以复用，让功能开发更加清晰
* TypeScript： 全面支持TypeScript，提供更强大的生产力
* 开发体验：贴心的代码智能提示,实时代码检查,让开发效率大幅提升
* 现代化开发流程：配套的开发工具Taro CLI让开发流程自动化，一切都从一行命令开始

---

#### 安装及使用

安装 Taro 开发工具 `@tarojs/cli`

使用 npm 或者 yarn 全局安装，或者直接使用[npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b)

```js

# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

使用命令创建模板项目
```js
$ taro init myApp
```

![1557131959753](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/W9YlhYzxKEPWiPqATdwj2*DPwdHelsae*K608uVu19c!/b/dFMBAAAAAAAA&bo=zANDAwAAAAADB60!&rf=viewer_4)

> <https://share.weiyun.com/5IKXrmZ>

---

#### 代码案例

```js
import Taro, { Component } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      title: '首页',
      list: [1, 2, 3]
    }
  }

  componentWillMount () {}

  componentDidMount () {}

  componentWillUpdate (nextProps, nextState) {}

  componentDidUpdate (prevProps, prevState) {}

  shouldComponentUpdate (nextProps, nextState) {
    return true
  }

  add = (e) => {
    // dosth
  }

  render () {
    return (
      <View className='index'>
        <View className='title'>{this.state.title}</View>
        <View className='content'>
          {this.state.list.map(item => {
            return (
              <View className='item'>{item}</View>
            )
          })}
          <Button className='add' onClick={this.add}>添加</Button>
        </View>
      </View>
    )
  }
}
```

*** 生命周期函数 *** 

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

---

#### 项目目录结构

* 所有项目源代码请放在项目根目录 `src` 目录下，项目所需最基本的文件包括 **入口文件** 以及 **页面文件**
  * 入口文件为 `app.js`
  * 页面文件建议放置在 `src/pages` 目录下

```js
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── components         公共组件目录
|   ├── pages              页面文件目录
|   |   ├── index          index 页面目录
|   |   |   ├── banner     页面 index 私有组件
|   |   |   ├── index.js   index 页面逻辑
|   |   |   └── index.css  index 页面样式
|   ├── utils              公共方法库
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json
```

> <https://share.weiyun.com/54hpFO0>

![1557134560498](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/sL3T6v7y1XNDnCFCC8cvJSkndZyD05Dh0ZzWmKYvhOE!/b/dLYAAAAAAAAA&bo=IAGfAgAAAAADF44!&rf=viewer_4)

---

#### 代码运行

* 微信小程序

```js
$ yarn dev:weapp
$ yarn build:weapp
# npm script
$ npm run dev:weapp
$ npm run build:weapp
# 仅限全局安装
$ taro build --type weapp --watch
$ taro build --type weapp
# npx 用户也可以使用
$ npx taro build --type weapp --watch
$ npx taro build --type weapp
```

* 支付宝小程序（alipay）
* 百度小程序（swan）
* 字节跳动（tt）
* h5 （h5）
* React Native（rn）

#### taro实例之--todoList

* app.js 

> <https://nervjs.github.io/taro/docs/tutorial.html>

```js
import Taro, { Component, Config } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/index/index',
      "pages/recommend/recommend",
      "pages/my/my",
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      selectedColor: "#6190E8",
      list: [
        {
          "pagePath": "pages/index/index",
          "iconPath": "./assets/home.png",
          "selectedIconPath": "./assets/home_active.png",
          "text": "首页"
        },
        {
          "pagePath": "pages/recommend/recommend",
          "iconPath": "./assets/recommend.png",
          "selectedIconPath": "./assets/recommend_active.png",
          "text": "推荐"
        },
        {
          "pagePath": "pages/my/my",
          "iconPath": "./assets/my.png",
          "selectedIconPath": "./assets/my_active.png",
          "text": "我的"
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

```

* pages/index/index.js

  ```js
  import Taro, { Component, Config } from '@tarojs/taro'
  import { View, Text, Input } from '@tarojs/components'
  import { AtList, AtListItem, AtButton } from "taro-ui"
  import './index.scss'
  
  export default class Index extends Component {
  
    /**
     * 指定config的类型声明为: Taro.Config
     *
     * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
     * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
     * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
     */
    config: Config = {
      navigationBarTitleText: '首页',
    }
  
    constructor(props){
      super(props);
      this.state = {      
        // todos: [
        //   { title: '利拉德50分+超远三分压哨绝杀', done: false },
        //   { title: '利拉德超神三分绝杀 多角度回顾利拉德绝杀瞬间', done: false},
        //   { title: '天生大心脏！利拉德超远绝杀雷霆vs读秒干翻火箭', done: false}
        // ],
        todos: Taro.getStorageSync('todos') || [],
        inputValue: ''
      }
    }
  
    // 显示输入内容
    handleInput = (e) => {
      console.log(e.detail.value);
      this.setState({
        inputValue: e.detail.value
      })
    }
  
    // 添加列表
    handleAdd = () => {
      if(this.state.inputValue){
        this.setState({
          todos: [...this.state.todos, {title: this.state.inputValue, done: false}],
          inputValue: ''
        },this.saveStorage)
      }else{
        return false;
      }
    }
  
    // 数据缓存
    saveStorage = () => {
      Taro.setStorageSync('todos', this.state.todos);
    }
  
  
    // switch切换
    handleChange = (e, index) => {
      console.log(e, index)
      const todos = [...this.state.todos];
      todos[index].done = e.detail.value;
      this.setState({
        todos
      })
    }
  
    // 删除列表
    handleDelete = (index) => {
      console.log(index)
      const todos = [...this.state.todos];
      console.log(todos);
      todos.splice(index, 1);
      this.setState({
        todos
      },this.saveStorage)
    }
  
  
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
      return (
        <View className='index'>
          <Text>当前环境：{Taro.getEnv()}</Text>
          <View>
            <View className='at-row'>
              <View className='at-col at-col-8'>
                <Input className="input" value={this.state.inputValue} onChange={this.handleInput}></Input>
              </View>
              <View className='at-col at-col-4'>
              <AtButton type='primary' size='small' onClick={this.handleAdd}>添加</AtButton>
              </View>
            </View>
          </View>
          {
            this.state.todos.map((item, index) => {
              // return <View className="list" key={index}>{item.title}</View>
  
              return <View className='at-row'>
  
                        <View className='at-col at-col-9'>
                          <AtList>
                            <AtListItem
                              className = {{'okDone': item.done}}
                              title={item.title}
                              isSwitch
                              switchIsCheck = {item.done}
                              onSwitchChange={(e) => this.handleChange(e, index)}
                            />
                          </AtList>
                        </View>
                        <View className='at-col at-col-3'>
                          <AtButton className="delete" type='secondary' size='small' onClick={() => this.handleDelete(index)}>删除</AtButton>
                        </View>
                      </View>
  
            })
          }
        </View>
      )
    }
  }
  ```

  

#### API环境判断

```js
<Text>当前环境：{Taro.getEnv()}</Text>
```

![1557135267776](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/UBWvq32iQRy*9NHH64Mty*hySeQnmxZCGYBgpo20M1M!/b/dLgAAAAAAAAA&bo=ugAqAAAAAAADF6I!&rf=viewer_4)

---

#### Taro-UI 库

> <https://aotu.io/notes/2018/08/27/the-birth-of-taro-ui/>
>
> <https://taro-ui.aotu.io/#/>

![image](https://user-images.githubusercontent.com/13499146/44502719-6d75b980-a6c5-11e8-8491-b6b47d87ee3d.png)

- **简单易用**：支持 npm 安装，自动处理 npm 资源之间的依赖关系
- **框架支持**：基于 Taro 开发组件，与 Taro 无缝衔接
- **多端适配**：一套组件可以在微信小程序/ H5 / ReactNative 等多端适配运行
- **样式美观**：小明哥([AT-UI](https://github.com/at-ui/at-ui) 设计者、主程)亲自设计，细节把关，符合现代扁平化设计审美
- **组件丰富**：提供丰富的基础组件，覆盖大部分使用场景，满足各种功能需求
- **按需引用**：可按需使用独立的组件，不必引入所有文件，可最小化注入到项目中
- **多套主题**：内置多套主题颜色，任君选择（将在 1.1 版本开放此特性）

---

**taro-ui主题自定义**

> <https://nervjs.github.io/taro-ui-theme-preview/>

[![1557137164224](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/RL4ipI45eU7eVYAp8cS56C5zb6CB4d.vfYZ548zeFPI!/b/dIQAAAAAAAAA&bo=ngZHAwAAAAADF.4!&rf=viewer_4)]()

---

**安装**

```node
$ npm i taro-ui
or
$ yarn add taro-ui
```

* 样式全局引用，入口为app.scss

  ```scss
  @import "~taro-ui/dist/style/index.scss";
  ```

* index.jsx

  ```jsx
  import { AtList, AtListItem, AtButton } from "taro-ui"
  ```

  ```jsx
  <View className='at-row'>
      <View className='at-col at-col-8'>
      <Input className="input" value={this.state.inputValue} onChange={this.handleInput}></Input>
      </View>
      <View className='at-col at-col-4'>
      <AtButton type='primary' size='small' onClick={this.handleAdd}>添加</AtButton>
      </View>
  </View>
  ```

> 注：H5需要额外一个小配置，在 taro 项目的  config/index.js
> 中新增如下配置项：

```js
h5: {
	esnextModules: ['taro-ui']
}
```

---

#### Taro原理

[![1557137486148](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/9pSowAB0WZcHVFC8FPHgCGCFO6RnRww0hz*zSOTrVvU!/b/dL8AAAAAAAAA&bo=nQN2AwAAAAADN*k!&rf=viewer_4)

![1557137495506](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/.yIJ5OX0THA887QHn2hsOAZx3S.uDEGoV.0wqL1mZC8!/b/dDYBAAAAAAAA&bo=mwO6AQAAAAADFxE!&rf=viewer_4)

![1557137503671](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/hn7qMkXUzi9VAOOIjnD*EjvRwsFlhH2kpJrB6WvBJ0E!/b/dMIAAAAAAAAA&bo=nAO4AQAAAAADFxQ!&rf=viewer_4)

![1557137520616](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/zES7waBbiuWCY.fi2Fo2cETLnmcSBlBWvhADNyquTw4!/b/dFQBAAAAAAAA&bo=mwPnAQAAAAADF0w!&rf=viewer_4)

![1557137528838](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/sglNJj4Hdbs5wsg932B8I3EW0icmyX25.64TtwEyNJo!/b/dLYAAAAAAAAA&bo=tgMYAgAAAAADF50!&rf=viewer_4)

#### 框架对比

* WEPY <https://tencent.github.io/wepy/document.html>
   　　腾讯团队开源的一款类vue语法规范的小程序框架,借鉴了Vue的语法风格和功能特性,支持了Vue的诸多特征，比如父子组件、组件之间的通信、computed属性计算、wathcer监听器、props传值、slot槽分发，还有很多高级的特征支持：Mixin混合、拦截器等;WePY发布的第一个版本是2016年12月份，也就是小程序刚刚推出的时候，到目前为止，WePY已经发布了52个版本, 最新版本为1.7.2 (2018-05-08)
* MpVue <http://mpvue.com/mpvue/#-html>
   　　美团团队开源的一款使用 Vue.js 开发微信小程序的前端框架。使用此框架，开发者将得到完整的 Vue.js 开发体验，同时为 H5 和小程序提供了代码复用的能力。mpvue在发布后的几天间获得2.7k的star,上升速度飞起,截至目前为止已经有17.6k的star
* Taro <https://taro.aotu.io/>
   　　京东凹凸实验室开源的一款使用 React.js 开发微信小程序的前端框架。它采用与 React 一致的组件化思想，组件生命周期与 React 保持一致，同时支持使用 JSX 语法，让代码具有更丰富的表现力，使用 Taro 进行开发可以获得和 React 一致的开发体验。,同时因为使用了react的原因所以除了能编译h5, 小程序外还可以编译为ReactNative

![1557137818299](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/xmsB5fCV5xCEwk3ggi*fJlUzg1Fn0dqyYEJaTGidqd4!/b/dLYAAAAAAAAA&bo=igIsAgAAAAADF5Q!&rf=viewer_4)

![1557137565835](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/GcGV24igDf4yQH.QcvDc1MS0iPeIywE.pSeZpR9iKYY!/b/dMQAAAAAAAAA&bo=WgN3AgAAAAADJy4!&rf=viewer_4)

![1557137833113](http://m.qpic.cn/psb?/V10HvuSQ1rHCWL/OJ3fiCCCUU2kLooEwgpeXJZ8A9**N*6GeI*wHK4.*aU!/b/dMIAAAAAAAAA&bo=zgLMAQAAAAADJwM!&rf=viewer_4)
