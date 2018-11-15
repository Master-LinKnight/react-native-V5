import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  Home, Section1, Section3, Section4,
} from './pages/index';

export default class Router extends Component {
  render() {
    const AppScreen = createStackNavigator({
      Home: {
        screen: Home,
        path: '/pages/home',
      },
      Section1: {
        screen: Section1,
        path: 'pages/example1/section1',
      },
      Section3: {
        screen: Section3,
        path: 'pages/example3/section3',
      },
      Section4: {
        screen: Section4,
        path: 'pages/example4/section4',
      },
    },
    {
      initialRouteName: 'Home',
      mode: 'card', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
      headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
      onTransitionStart: () => { console.log('导航栏切换开始'); }, // 回调
      onTransitionEnd: () => { console.log('导航栏切换结束'); }, // 回调
    });

    const AppNavigation = () => (
      <AppScreen />
    );

    return (
      <AppNavigation>
        <Home />
      </AppNavigation>
    );
  }
}
