import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Picker,
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, Header } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown } from 'react-native-material-dropdown';


const OPTIONS = [{value: 'Easy'}, {value: 'Medium'}, {value: 'Hard'}];

class HomeScreen extends Component {
	constructor(){
		super();
		this.state = {
			level: 'Easy'
		}
	}
	onValueChange(key, value){
		this.setState({level: value});
	}

    render() {
			return(
      /*  <View>
          <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        </View>*/
        <View style={styles.container}>

          <View style={styles.navBar}>
            <Text style={styles.helloText}>Welcome to Memory Chalange</Text>
          </View>

        <View style={styles.body}>
          <Image source={require('../../src/images/brain.png')} style={{height: 160, width:160}} />

					<View style={styles.pickerBox}>

						<Picker style={styles.pickerStyle}
							selectedValue ={this.state.level}
							onValueChange = {this.onValueChange.bind(this, 'level')}
							>
							<Picker.Item label='Easy' value='Easy'/>
							<Picker.Item label='Medium' value='Medium'/>
							<Picker.Item label='Hard' value='Hard'/>

						</Picker>

						<Text style={styles.levelText}>Selected Level: {this.state.level}</Text>
					</View>

					<View style={styles.buttonBox}>
          	<Button
            	icon={{name: 'play', type: 'evilicon', size: 35}}
            	buttonStyle={{backgroundColor: "#FC5D65", borderRadius: 15, padding:15}}
            	textStyle={{textAlign: 'center'}}
            	title={`PLAY`}
            	onPress={()=>this.props.navigation.navigate('GameScreen')}
          	/>
					</View>
        </View>


          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem}>
                <Icon name='home' color='#ea4d57' size={30}/>
                <Text style={styles.tabText}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
                <Icon name='trophy'
                type='evilicon'
                color='#ea4d57' size={30}/>
                <Text style={styles.tabText}>Scores</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItem}>
                <Icon name='gear'
                type='evilicon'
                color='#ea4d57' size={30}/>
                <Text style={styles.tabText}>Settings</Text>
            </TouchableOpacity>
          </View>

				</View>
		);
	}
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    navBar: {
      marginBottom: 20
    },
		helloText: {
			fontSize: 22,
			textAlign: 'center',
      color: '#50CEB4',
      marginTop: 10,
			marginBottom: 10,
			fontWeight: 'bold'
		},
		buttonPlay:{
			fontSize: 40,
			backgroundColor: '#000',
		},
    body: {
      flex:2,
      backgroundColor: 'white',
      alignItems: 'center',
    },
		pickerBox: {
			flex: 1,
			marginBottom: 90,
		},
		pickerStyle: {
			top:10,
			maxHeight: 10,
			borderColor: '#FC5D65',
		},
		levelText: {
			color: '#FC5D65',
			fontSize: 18,
			marginTop:10,
			fontWeight: 'bold'
		},
		buttonBox: {
			flex:1,
			marginTop:30
		},
    tabBar: {
      backgroundColor: 'white',
      height: 50,
      borderTopWidth: 0.5,
      borderColor: "#E5E5E5",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    tabText: {
      color: '#ea4d57'
    },
    dropdownView: {
      flexDirection: 'row',
      marginBottom: 50,
      alignItems:'center',
    }
});
