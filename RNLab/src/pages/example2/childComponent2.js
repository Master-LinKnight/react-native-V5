import React, { Component } from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
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

export default class ChildComponent2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value02: 1,
    };
  }

    clickEvent = () => {
      this.setState({
        value02: this.state.value02 + 1,
      });
      return this.state.value02;
    }

    render() {
      return (
        <View>
          <TouchableOpacity onPress={this.clickEvent}>
            <Text style={styles.instructions}>{`子组件值发生变化${this.state.value02}`}</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
