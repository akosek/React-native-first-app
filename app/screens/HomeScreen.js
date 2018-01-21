import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
		Button
} from 'react-native';

class HomeScreen extends Component {
    render() {
			return(
				<View style={styles.menu}>
					<Text style={styles.helloText}>Welcome to Memory Chalange</Text>

					<View style={styles.buttonView}>
						<Button color="white" onPress={()=>this.props.navigation.navigate('GameScreen')} title="Play" ></Button>
					</View>

				</View>
		);
	}
}

export default HomeScreen;

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
		helloText: {
			fontSize: 30,
			marginBottom: 60,
			textAlign: 'center',
		},
		buttonPlay:{
			fontSize: 40,
			backgroundColor: '#000',
		},
		buttonView: {
			padding:15,
			borderRadius: 15,
			shadowRadius: 4,
			shadowOpacity: 0.5,
			backgroundColor: "#841584",
		},

});
