
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { Component } from 'react';
/*import { CardBoard } from '../components/CardBoard.js';*/
import { Sets } from '../components/Sets.js';


class GameScreen extends Component {
    render() {
        return (
          <View style={styles.container}>
            <Sets levelName={this.props.levelName}/>
					</View>
        );
    }
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex:1
  }
});
