/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Pop from './rn-global-modal'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome} onPress={this._showPop.bind(this)}>
          Show Pop
        </Text>

      </View>
    );
  }

  _showPop(){
      Pop.show(
          <View style={{height: 300, width: '80%', backgroundColor:'red'}}/>
          ,{animationType: 'slide-up', maskClosable: true, onMaskClose: ()=>{}})
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
