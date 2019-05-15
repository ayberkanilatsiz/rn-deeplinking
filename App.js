/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';


export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      texts:[]
    }
  }

  componentDidMount() {
    Linking.addEventListener('url', this.handler);
  }
  componentWillUnmount() {
    Linking.removeEventListener('url', this.handler);
  }

  handler = (event) => {
    const { url } = event;
    const texts = url.split("//")[1].split("/");
    this.setState({texts});
  }

  render() {
    const { texts } = this.state;
    return (
      <View style={styles.container}>
        {texts.map((text,index)=>
          <Text key={`index#${index}`}>{text}</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  
});
