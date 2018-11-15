import React, { Component } from 'react';
import {
  View, StyleSheet, Text,
} from 'react-native';
import GrandChildComponent from './grandChildComponent';

export default class ChildComponent extends Component {
  render() {
    return (
      <View>
        <GrandChildComponent />
      </View>
    );
  }
}
