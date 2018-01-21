import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { DataTable, Cell, CheckableCell, EditableCell, Header, HeaderCell, Row, Expansion, TableButton} from 'react-native-data-table';


const cards = [{cardValue:1, flipped: false}, {cardValue:2, flipped: false}, {cardValue:3, flipped: false} ];

export class Card extends React.Component{
	render(){
		return(
			<View style={styles.cardStyle}>
				<Text style={styles.imageStyle}>{this.props.card.flipped ? this.props.card.cardValue:'#'}</Text>
			</View>
		);
	}
}

export class Layout extends React.Component {
	constructor(){
		super();
		this.state = { cards: [[{cardValue:1, flipped: false}, {cardValue:2, flipped: false}, {cardValue:3, flipped: false} ]]};
	}

	cardClick(){
		alert("Card clicked!");
	}

	render(){
		const cardsRendered = cards.map((card, index)=><Card card={card} onClick={()=>this.state.cardClick()}/> );
		return(
				<View style={styles.container}>{cardsRendered}</View>
		);
	}
}

const styles = StyleSheet.create({
	continer: {
		flex:1,
		width: '100%',
		height: '100%',
	},

	cardStyle: {
		height: 70,
		width: 70,
		borderWidth: 1,
		borderColor: '#1DA6CF',
		alignItems: 'center',
	},
	imageStyle: {
		lineHeight: 70,

	}

});
