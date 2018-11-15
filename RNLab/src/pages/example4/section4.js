import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import ChildComponent1 from './childComponent1';
import ChildComponent2 from './childComponent2';

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

export default class Section4 extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: '非嵌套组件间通信',
    })

    render() {
      return (
        <View style={styles.container}>
          <ChildComponent1 />
          <ChildComponent2 />
        </View>
      );
    }
}
