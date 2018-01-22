import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
	Image,
  TouchableHighlight,
  Animated,
  List,
  Button,
  ListItem
} from 'react-native';
import ReactCardFlip from 'react-card-flip';
import FlipCard from 'react-native-flip-card';

let images = [
        {id:0, src:"😜", visible: false},
        {id:1, src:"🌴", visible: false},
        {id:2, src:"💖", visible: false},
        {id:3, src:"😂", visible: false},
        {id:4, src:"💩", visible: false},
        {id:5, src:"😘", visible: false},

    ];

export class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(e){
      e.preventDefault();
      this.setState({isFlipped: !this.state.isFlipped});
    }

   clickedItem (){
    alert("You cliked me!");
  }

	render(){

 let pickedImages = images.map((image, id) =>

  <TouchableHighlight  style={styles.imageContainer} onPress ={this.clickedItem.bind(this)} >
    <Text style={styles.imageStyle}>{image.src}</Text>
  </TouchableHighlight>);

    return (
      <View style={styles.mainContainer}>
       <Text>{pickedImages}</Text>
      </View>
		);
	}

}

/*<List containerStyle={{marginBottom: 20}}>
  {
    list.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={i}
        title={l.name}
      />
    ))
  }
</List>*/


/* Random Image choica
<Image style={styles.randomImage} source={randomImages[Math.floor(Math.random()*randomImages.length)]}>
</Image>

  <Text>{this.props.image.src}</Text>

<Image source={require('../../src/images/img1.png')} style={styles.imageStyle}></Image>


/*export class Image extends React.Component {
 statelessFunctionComponentClass(props) {
	let source = '././src/images/' + props.source;

	render(){

	}
  return (
		<View>
    	<Image source={source} style={styles.imageStyle}></Image>
		</View>
		);
	};
}*/

/*export default Image;
*/
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
    height:'100%',
    alignItems: 'center',
    marginTop: 50,
  },

	imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BEE1D2',

	},
	imageStyle: {
    fontSize: 60,
    alignItems: 'center',
	},
  face:{
    height: 100,
    width: 100,
  },
  back:{
    height: 100,
    width: 100,
  },

});
