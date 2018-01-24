
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
          <View>
            <CardBoard />
					</View>
        );
    }
}

export default GameScreen;
