import React, { Component } from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import { event } from '../common/index';

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class ChildComponent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: null,
    };
    this.eventEmitter = this.eventEmitter.bind();
  }

  componentDidMount() {
    // 声明一个自定义事件
    // 在组件装载完成以后
    this.eventEmitter();
  }

  // 组件销毁前移除事件监听
  componentWillUnmount() {
    event.removeListener('fun', this.eventEmitter);
  }

    eventEmitter = () => {
      event.addListener('callMe', (msg) => {
        this.setState({
          msg,
        });
      });
    }

    render() {
      return (
        <Text style={styles.instructions}>{`非嵌套子组件1    ${this.state.msg}`}</Text>
      );
    }
}
