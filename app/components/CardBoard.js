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
        {id:9, src:"🤕", visible: false},

    ];

export class CardBoard extends React.Component {

  render() {

    let cardImages = images.concat(images);
          cardImages.sort(
            () => {
                return(0.5 - Math.random());
                }
          )

     let pickedImages = cardImages.map((image, index) =>
          <Card
              key={image.index}
              image={image.src}
              visible={image.visible}
          />
      );

     return (
       <View style={styles.mainContainer}>
        <Text>{pickedImages}</Text>
      </View>);

  }
}

class Timer extends React.Component {
  constructor(props){
    super(props);

    this.state = {on: false, time:0};
    this.timerId = 0;
  }

  // when component is celaring up
  componentWillUnmount(){
    this.clearTimer();
  }

    update() {

    }

    startTimer(){
      this.setState({on:true});
      this.timerId = setInterval(()=> {this.update();
      }, 2000);
    }

    pauseTimer(){
      clearTimer();
    }

    clearTimer(){
      clearInterval(this.timerId);
    }
}


class Card extends React.Component {

          constructor(props){
            super(props);
            this.state = {visible: false};
          }

          onPress = () => {
            console.log('pressed ' + this.props.image);

          }

          toogleCard = () => {
            this.setState({visible: !this.state.visible});
            console.log(this.props.image);
          }

          render() {
      /*        setTimeout(function(){
                  this.setState({visible:true});
                }.bind(this),3000);*/

            return (
              <TouchableHighlight style={styles.imageContainer} onPress={this.toogleCard.bind(this)}>
                <Text style={this.state.visible ? styles.imageHide: styles.imageStyle}>
                   {this.props.image} </Text>

              </TouchableHighlight>
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
  imageHide: {
    fontSize: 50,
    display:'none',
  },
  something: {
    height: 30,
    width: 30,
  },
});
