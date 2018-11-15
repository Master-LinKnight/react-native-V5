import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';

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

    constructor(props) {
      super(props);
      this.state = {
        value4: 0,
      };
    }

    render() {
      return (
        <View style={styles.container} />
      );
    }
}
