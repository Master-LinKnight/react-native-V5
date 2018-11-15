import React, { Component } from 'react';
import {
  View, StyleSheet, TouchableOpacity, Text,
} from 'react-native';
import ChildComponent1 from './childComponent1';
import ChildComponent2 from './childComponent2';

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

export default class Section2 extends Component {
    static navigationOptions = ({ navigation }) => ({
      title: '子组件向夫组件通信',
    })

    constructor(props) {
      super(props);
      this.state = {
        value01: 0,
        value02: 0,
      };
    }

    onChildChanged = (msg) => {
      this.setState({
        value01: msg,
      });
    }

    clickSectionEvent = () => {
      const msg = this.refs.childComponent2.clickEvent();
      this.setState({
        value02: msg,
      });
    }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.instructions}>方式一：子组件调用父组件方法完成传值</Text>
          <Text style={styles.instructions}>{`父组件值发生改变${this.state.value01}`}</Text>
          <ChildComponent1 callbackParent={this.onChildChanged} />
          <Text style={styles.instructions}>方式二：父组件调用子组件方法</Text>
          <Text style={styles.instructions}>{`父组件值发生改变${this.state.value02}`}</Text>
          <ChildComponent2 ref="childComponent2" />
          <TouchableOpacity onPress={this.clickSectionEvent}>
            <Text style={styles.instructions}>点击父组件</Text>
          </TouchableOpacity>
        </View>
      );
    }
}
