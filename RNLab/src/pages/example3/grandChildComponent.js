import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class GrandChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contextValue: 0,
    };
  }

    static contextTypes = {
      value3: PropTypes.number,
      callback: PropTypes.func,
    }

    render() {
      const { value3 } = this.context;
      const cb = msg => () => {
        this.context.callback(msg);
        this.setState({
          contextValue: this.state.contextValue + 1,
        });
      };

      return (
        <TouchableOpacity onPress={cb(this.state.contextValue)}>
          <View>
            <Text style={styles.instructions}>跨级组件之间通信</Text>
            <Text style={styles.instructions}>{value3}</Text>
          </View>
        </TouchableOpacity>
      );
    }
}
