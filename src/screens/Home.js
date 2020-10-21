import React from 'react'
import {
	View,
	Text,
	Button
} from 'react-native'
import { styles } from './Home.style.js'
import { AuthContext } from '../contexts/auth.js'

const Home = () => {
	const { signOut } = React.useContext( AuthContext )

	return (
		<View style={ styles.container }>
			<Text style={ styles.text }>HOME SCREEN</Text>
			<View style={ styles.buttonContainer }>
				<Button
					title="Sign out"
					color="#1d8a65"
					onPress={ signOut }/>
			</View>
		</View>
	)
}

export default Home
