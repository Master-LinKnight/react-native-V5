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

export default class Section2 extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: '子组件向夫组件通信',
    })

    render() {
      return (
        <View style={styles.container} />
      );
    }
}
