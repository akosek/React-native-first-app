import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Picker
} from 'react-native';
import { Icon } from 'react-native-elements';
import { Button, Header } from 'react-native-elements';
import ModalDropdown from 'react-native-modal-dropdown';
import { Dropdown } from 'react-native-material-dropdown';


const OPTIONS = [{value: 'Easy'}, {value: 'Medium'}, {value: 'Hard'}];

class HomeScreen extends Component {


  handleChange = (event, index, value) => this.setState({value});

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
          <Image source={require('../../src/images/brain.png')} style={{marginBottom:10}}/>


          <View style={styles.dropdownView}>
            <Dropdown style={styles.dropStyle}
              label='Level'
              data={OPTIONS}
              itemPadding={10}
              autoWidth = 'true'
              baseColor='#21b7a8'
            
            />
          </View>

          <Button
            icon={{name: 'play', type: 'evilicon', size: 35}}
            buttonStyle={{backgroundColor: "#FC5D65", borderRadius: 15, padding:15}}
            textStyle={{textAlign: 'center'}}
            title={`PLAY`}
            onPress={()=>this.props.navigation.navigate('GameScreen')}
          />

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
      marginBottom: 40
    },
		helloText: {
			fontSize: 25,
			textAlign: 'center',
      color: '#50CEB4',
      marginTop: 10
		},
		buttonPlay:{
			fontSize: 40,
			backgroundColor: '#000',
		},
    body: {
      flex:1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    dropdownLevel: {
      marginBottom:10,
      height: 30,
      width: 80,
      borderColor: 'cornflowerblue',
      borderWidth: 2,
      borderRadius: 3,
      backgroundColor: 'cornflowerblue',
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
    },
    cos: {
        flex:1,
    },
    dropStyle: {
      width: 40,
      padding: 50
    }
});
