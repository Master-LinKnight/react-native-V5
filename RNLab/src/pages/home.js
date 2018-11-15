/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity, StyleSheet, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  section: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
  })

  skipToExample1 = () => {
    const { navigation } = this.props;
    navigation.navigate('Section1');
  }

  skipToExample3 = () => {
    const { navigation } = this.props;
    navigation.navigate('Section3');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.skipToExample1}>
          <Text style={styles.section}>父组件向子组件通信</Text>
        </TouchableOpacity>
        <Text style={styles.section}>子组件向夫组件通信</Text>
        <TouchableOpacity onPress={this.skipToExample3}>
          <Text style={styles.section}>跨级组件之间通信</Text>
        </TouchableOpacity>
        <Text style={styles.section}>非嵌套组件间通信</Text>
      </View>
    );
  }
}
