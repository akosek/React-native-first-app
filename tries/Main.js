'use strict';

var React = require('react-native');
var {
  StyleSheet,
  View,
} = React;

import { BoardView } from 'BoardView.js';

export default class Main extends React.Component{
  render() {
    return <View style={styles.container}>
             <BoardView/>
           </View>;
				 }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#644B62',
  },
});
