import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { emitter } from '../../common/index';

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class ChildComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value4: 0,
    };
  }

    callBack = (msg) => {
      // 触发自定义事件
      emitter.emit('callMe', msg);
      this.setState({
        value4: this.state.value4 + 1,
      });
    };

    render() {
      return (
        <TouchableOpacity onPress={() => this.callBack(this.state.value4)}>
          <Text style={styles.instructions}>点击非嵌套子组件2</Text>
        </TouchableOpacity>
      );
    }
}
