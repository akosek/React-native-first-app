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
  {src:"🐶", visible: true, paired: false, clickable: false},
  {src:"🐭", visible: true, paired: false, clickable: false},
  {src:"🐱", visible: true, paired: false, clickable: false},
  {src:"🐹", visible: true, paired: false, clickable: false},
  {src:"🐰", visible: true, paired: false, clickable: false},
  {src:"🐼", visible: true, paired: false, clickable: false},
  {src:"🐨", visible: true, paired: false, clickable: false},
  {src:"🐯", visible: true, paired: false, clickable: false},
  {src:"🦁", visible: true, paired: false, clickable: false},
  {src:"🐮", visible: true, paired: false, clickable: false},
  {src:"🐷", visible: true, paired: false, clickable: false},
  {src:"🐵", visible: true, paired: false, clickable: false},
  {src:"🐸", visible: true, paired: false, clickable: false}
    ];

    let cardImages = images.concat(images);

    cardImages.sort(() => {
      return(0.5 - Math.random());
    })

    let finalCards = cardImages.map((_card,index) => ({
      id: index,
      src: _card.src,
      visible: _card.visible,
      paired: _card.paired,
      clickable: _card.clickable})
    );

    let tapNum = false;
    let tmpImage = '';

export class CardBoard extends React.Component {


    constructor(props){
      super(props);
      this.state = {cards: finalCards};
      this.updateBoard = this.updateBoard.bind(this);
    }

    updateBoard(newPressed) {

      console.log(newPressed);

      this.state.cards.forEach(function (arrayItem)
      {
        if(arrayItem.id == newPressed && !tapNum){
          arrayItem.visible = true;
          arrayItem.clickable = false;
          tmpImage = arrayItem.src;
          tapNum = true;
        }

        else if(arrayItem.id == newPressed && tapNum){
          arrayItem.visible = true;
          arrayItem.clickable = false;
          if (tmpImage == arrayItem.src){
            alert('match');
          }
          tapNum=false;
        }
      });

      tapNum = true;
      this.setState({cards: this.state.cards});

      }

    componentDidMount () {

      this.state.cards.forEach(function (arrayItem)
      {
          arrayItem.visible = false;
          arrayItem.clickable = true;
      });

      setTimeout(function(){
        this.setState({cards: this.state.cards});
      }.bind(this), 3000);
    }

    render() {

    //   console.log(cardImages);

       let debug = false;

       //DEBUG FUNCTION DELETE LATER
       if (debug) {
         setInterval(function(){
           console.log('last pressed ' + this.state.lastPressed);;
         }.bind(this), 5000);
       }

    //   console.log(this.state);
       let pickedImages = this.state.cards.map((image,index) =>
            <Card key={index}
                  image={image.src}
                  id={image.id}
                  visible={image.visible}
                  clickable={image.clickable}
                  paired={image.paired}
                  onPress={this.updateBoard}/>
        );

       return (
         <View style={styles.container}>
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
      }, 4000);
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
    this.toogleCard = this.toogleCard.bind(this);
    }


  toogleCard(){
    if (this.props.clickable)
      this.props.onPress(this.props.id);
  }

  render() {
    return (

      <TouchableHighlight style={styles.imageContainer} onPress={this.toogleCard}>
        <Text style={this.props.visible ? styles.imageStyle: styles.imageHide}> {this.props.image} </Text>
      </TouchableHighlight>

          );
        }
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor: 'white'
  },
  imageContainer: {
    flex:1,
    width: 70,
    height: 70,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7d867'
  },
  imageHide: {
    display: 'none',
  },
  imageStyle: {
    fontSize: 40,
    alignItems: 'center',
	},
});
