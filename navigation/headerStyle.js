import { StyleSheet } from "react-native";

const headerStyles = StyleSheet.create({
	name: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			marginLeft: 10,
	},
	title: {
		color: 'grey',
		padding: 10,
	},
	backgroundBlack: {
		backgroundColor: 'black'
	}
});

export default headerStyles;
