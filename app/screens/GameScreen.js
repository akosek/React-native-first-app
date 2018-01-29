
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { Component } from 'react';
import { CardBoard } from '../components/CardBoard.js';

class GameScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
            <CardBoard />
					</View>
        );
    }
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:10
  }
});
