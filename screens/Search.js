import React, { createRef } from 'react';
import {Keyboard,Text, View, Icon, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const windowWidth = Dimensions.get('window').width



const SearchScreen = ({ navigation }) => {
	
	return (
	  <View style={{backgroundColor:'black' ,flex:1, alignItems:'center', justifyContent:'center' }}>
			<SearchBar
				platform='android'
				inputStyle={{color: 'white'}}
				inputContainerStyle={styles.defaultInput}
				containerStyle={{width: windowWidth * 0.95, backgroundColor: 'black'}}
				clearIcon={{
					iconStyle: {color: 'grey'}
				}}
				searchIcon={{
					iconStyle: {color: 'grey'}
				}}
				cancelIcon={{
					iconStyle: {color: 'grey'}
				}}
				placeholder="Title, actor, genre..."
				
      />
			<Text style={{color: 'red'}}>Search Screen</Text>
	  </View>
	);
};

const styles = StyleSheet.create({
	defaultInput: {
		backgroundColor: 'grey'
	},
	defaultInput: {
		backgroundColor: 'green'
	}

})
export default SearchScreen;