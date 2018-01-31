import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Picker,
		Item
} from 'react-native';
import { Icon } from 'react-native-elements';


export default class App extends React.Component {

let secondsElapsed = 0

  getInitialState(){
    return {secondsElapsed: 0};
  }

/*  constructor(props){
    super(props);
    this.state = {time: new Date()};
    this.timerId = 0;
  }

  currentTime(){
    this.setState({
      time: new Date()
    })

  }

  componentWillMount(){
    setInterval(()=> this.currentTime(), 1000)
  }*/
    render(){
      return(
        <View style={styles.container}>
          <Text>{this.state.secondsElapsed}</Text>
        </View>
      );
    }

}

const styles = StyleSheet.create ({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
