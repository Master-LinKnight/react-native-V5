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
  render() {
    const { value } = this.props;
    return (
      <Text style={styles.instructions}>{`子组件变化${value}`}</Text>
    );
  }
}
