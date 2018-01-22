import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
	Image,
  TouchableHighlight,
  Animated,
  Button
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import ReactCardFlip from 'react-card-flip';
import FlipCard from 'react-native-flip-card';

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

let cardImages = images.concat(images);
      cardImages.sort(
        () => {
            return(0.5 - Math.random());
            }
      )

export class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    };

  }
/*  visibleHide (){
    const { hide } = this.state;
    this.setState({hide: !hide })
  }*/
	render(){
/*  const WholeNews =[];
   cardImages.forEach(function(image, id, visible){
      WholeNews.push(
        <View key={id} style={styles.imageContainer}>
          <TouchableHighlight>
            <Text style={styles.imageStyle}>{image.src}</Text>
          </TouchableHighlight>
        </View>);
    });*/


 const pickedImages = cardImages.map((image, id, visible) =>
  <TouchableHighlight  style={styles.imageContainer} onPress={()=> this.setState({visible: !this.state.visible})}>
    <Text key={image.id} style={[styles.imageStyle, this.state.visible && styles.hideImage]}>{image.src}</Text>
  </TouchableHighlight>);

    return (
      <View style={styles.mainContainer}>
       <Text>{pickedImages}</Text>
      </View>

		);
	}

}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height:'100%',
    alignItems: 'center',
    marginTop: 50,
  },
	imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',
	},
	imageStyle: {
    fontSize: 50,
    alignItems: 'center',
	},
  hideImage: {
    display:'none',
  },
  imageHidden: {
    display: 'none',
  },
  something: {
    height: 30,
    width: 30,
  },
});
