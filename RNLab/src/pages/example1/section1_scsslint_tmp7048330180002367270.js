import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import ChildComponent from './childComponent';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Section1 extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '父组件向子组件通信',
  })

  constructor(props) {
    super(props);
    this.state = {
      value1: 0,
    };
  }

  changeValue1 = () => {
    /* 单向数据流父组件值发生变化，子组件会跟着发生改变 */
    this.setState({
      value1: this.state.value1 + 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeValue1}>
          <View>
            <Text style={styles.instructions}>使用props单向数据流传值</Text>
            <ChildComponent value={this.state.value1} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
