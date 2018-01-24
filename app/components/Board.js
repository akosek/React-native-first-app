import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
	Image,
  TouchableHighlight,
  Animated
} from 'react-native';
import { List, ListItem, Button } from 'react-native-elements';
import ReactCardFlip from 'react-card-flip';
import FlipCard from 'react-native-flip-card';
import { Card } from './Card';

let images = [
        {id:0, src:"😜", visible: false},
        {id:1, src:"🌴", visible: false},
        {id:2, src:"💖", visible: false},
        {id:3, src:"😂", visible: false},
        {id:4, src:"💩", visible: false},
        {id:5, src:"😘", visible: false},
        {id:6, src:"😲", visible: false},
        {id:7, src:"🤐", visible: false},
        {id:8, src:"😴", visible: false},
        {id:8, src:"🤕", visible: false},

    ];

export default class Board extends React.Component {
	render(){
		let pickedImages = images.map((image,id) =>
			 <Card
					 key={id}
					 image={image.src}
			 />
	 );

	return (
		<View style={styles.container}>
		 <Text>{pickedImages}</Text>
	 </View>);

 };
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%',
		height:'100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
