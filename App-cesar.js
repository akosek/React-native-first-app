import React from 'react';
import {StyleSheet,
        Text,
        View,
        Image,
        TouchableHighlight,
        Alert
} from 'react-native';

/*let images = [
        {id:0, src:"😜", visible: true, paired: false, clickable: false},
        {id:1, src:"🌴", visible: true, paired: false, clickable: false},
        {id:2, src:"💖", visible: true, paired: false, clickable: false},
        {id:3, src:"😂", visible: true, paired: false, clickable: false},
        {id:4, src:"💩", visible: true, paired: false, clickable: false},
        {id:5, src:"😘", visible: true, paired: false, clickable: false},
        {id:6, src:"👺", visible: true, paired: false, clickable: false},
        {id:7, src:"🤐", visible: true, paired: false, clickable: false},
        {id:8, src:"😴", visible: true, paired: false, clickable: false},
        {id:9, src:"🤕", visible: true, paired: false, clickable: false},
    ];*/

    let images = [
            {src:"😜", visible: true, paired: false, clickable: false},
            {src:"🌴", visible: true, paired: false, clickable: false},
            {src:"💖", visible: true, paired: false, clickable: false},
            {src:"😂", visible: true, paired: false, clickable: false},
            {src:"💩", visible: true, paired: false, clickable: false},
            {src:"😘", visible: true, paired: false, clickable: false},
            {src:"👺", visible: true, paired: false, clickable: false},
            {src:"🤐", visible: true, paired: false, clickable: false},
            {src:"😴", visible: true, paired: false, clickable: false},
            {src:"🤕", visible: true, paired: false, clickable: false},
        ];

        let cardImages = images.concat(images);
        cardImages.sort(() => {
          return(0.5 - Math.random());
        })

        for (var j = 0; j < cardImages.length; j++){
          cardImages[j].caca = j;
        }

        console.log(cardImages);

//console.log(cardImages);

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {cards: cardImages};
    this.updateBoard = this.updateBoard.bind(this);
  }

  updateBoard(newPressed) {

  //  let flippedCard = this.state.cards.filter(card => card.src == newPressed);
  //  let notFlippedCards = this.state.cards.filter(card => card.src != newPressed);


    this.state.cards.forEach(function (arrayItem)
    {
      if(arrayItem.id == newPressed){
        arrayItem.visible = true;
      }
    });

    this.setState({cards: this.state.cards});


    }


  /*  this.setState({lastPressed: this.state.lastPressed.concat(newPressed)});
    if (this.state.lastPressed.length == 2){
      console.log('dos pulsados');
      if (this.state.lastPressed[0] === this.state.lastPressed[1]){
        console.log('pareja correcta');
      }
      this.setState({lastPressed: []});
    }*/


  //  const newPair = this.state.lastPressed.concat(newPressed).slice(1);
  //  this.setState({lastPressed: newPair});
  //  if (this.state.lastPressed[0] === this.state.lastPressed[1]){
  //    console.log('same images');
  //  }
  //  console.log('last pressed ' + this.state.lastPressed);



  componentDidMount () {

    this.state.cards.forEach(function (arrayItem)
    {
        arrayItem.visible = false;
        arrayItem.clickable = true;
    });

    setTimeout(function(){
      this.setState({cards: this.state.cards});
    }.bind(this), 5000);
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

     let pickedImages = this.state.cards.map((image,id) =>
          <Card key={id}
                image={image.src}
                id={id}
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
    backgroundColor: 'red'
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2'
  },
  imageHide: {
    display: 'none',
  },
  imageStyle: {
    fontSize: 60,
    alignItems: 'center',
	},
});
