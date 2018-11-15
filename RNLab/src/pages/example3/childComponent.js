import React, { Component } from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import GrandChildComponent from './grandChildComponent';

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class ChildComponent extends Component {
  render() {
    return (
      <View>
        <GrandChildComponent />
      </View>
    );
  }
}
