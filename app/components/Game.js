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
import { CardBoard } from 'CardBoard';


class Game extends React.Component {
	constructor(props){
		super(props);

	}

	setTimeout(function(){
			this.setState({visible:true});
		}.bind(this),3000);

	render(){




		return();
	}
}
<ModalDropdown style={styles.dropdownLevel}
          options={OPTIONS}
          onSelect={(idx, value) => this._dropdown_6_onSelect(idx, value)}>
</ModalDropdown>


<View style={styles.dropdownView}>
  <Dropdown style={styles.dropStyle}
    label='Level'
    data={OPTIONS}
    itemPadding={10}
    autoWidth = 'true'
    baseColor='#21b7a8'

  />
</View>
