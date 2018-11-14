import React, { Component } from 'react';
import {
  View, StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class Section1 extends Component {
  render() {
    return (
      <View style={styles.container} />
    );
  }
}
