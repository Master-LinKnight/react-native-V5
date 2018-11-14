import React, { Component } from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class ChildComponent extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: '父组件向子组件通信',
    })

    render() {
      const { value } = this.props;
      return (
        <Text style={styles.instructions}>{value}</Text>
      );
    }
}
