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

export default class ChildComponent1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value01: 1,
    };
  }

  clickEvent = () => {
    this.props.callbackParent(this.state.value01);
    this.setState({
      value01: this.state.value01 + 1,
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.clickEvent}>
          <Text style={styles.instructions}>子组件点击</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
