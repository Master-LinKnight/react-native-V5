import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import ChildComponent from './childComponent';

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

export default class Section3 extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: '跨级组件之间通信',
    })

    static childContextTypes = {
      value3: PropTypes.number,
      callback: PropTypes.func,
    }

    constructor(props) {
      super(props);
      this.state = {
        value3: 0,
      };
    }

    getChildContext() {
      return {
        /* 父组件向子组件传值 */
        value3: this.state.value3,
        callback: this.callback.bind(this),
      };
    }

    callback(msg) {
      /* 子组件callBack */
      alert(msg);
      this.setState({
        value3: msg,
      });
    }

    render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={this.changeValue1}>
            <View>
              <ChildComponent />
            </View>
          </TouchableOpacity>
        </View>
      );
    }
}
