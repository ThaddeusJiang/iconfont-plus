# iconfont-plus

a react component for icons of [iconfont.cn](http://iconfont.cn/)

[![npm version](https://badge.fury.io/js/iconfont-plus.svg)](https://badge.fury.io/js/iconfont-plus)

# Use
1. Install
```
npm i iconfont-plus
```
2. upload your svg to [iconfont.cn](http://iconfont.cn/)
3. download your iconfont's zip
4. add zip/iconfont.js for your project
```html
<script src="./iconfont.js"></script>
```
5. use
```js
import React, { Component } from 'react'
import Icon from 'iconfont-plus'

class App extends Component {
  render() {
    return <Icon code="pen" />
  }
}

export default App
```

> how to upload?
![upload svg](https://user-images.githubusercontent.com/17308201/39859876-417f380c-5476-11e8-93b7-acd655b02ab6.gif)

# Dev

```
git clone https://github.com/ThaddeusJiang/iconfont-plus.git && cd $_

npm i
npm run build
npm link

cd example
npm link iconfont-plus

yarn 
yarn start
```

# Deploy
```
npm run publish
```