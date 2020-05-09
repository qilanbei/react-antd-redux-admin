import React, { Component } from 'react';

import { Provider } from 'react-redux'
// 局部热更新 依赖webpack 的 热更新组件
import { hot } from 'react-hot-loader/root'
import store from '@/redux/store'

import "antd/dist/antd.css";
import './App.styl';

import Router from '@/router/index'

// 定义一个react组件 - App  必须继承于一个组件
class App extends Component {
  render() {
    // jsx 语法
    return (
        // https://react-redux.js.org/api/provider
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default hot(App);
