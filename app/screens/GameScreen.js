import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { Component } from 'react';
import {Card} from '../components/Card'

class GameScreen extends Component {
    render() {
        return (
          <View>
						<Text>Heeej tu bedzie gra!</Text>
						<Card/>
					</View>
        );
    }
}

export default GameScreen;
