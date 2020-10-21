import React from 'react'
import {
	View,
	Text,
	TextInput,
	Button,
	ActivityIndicator
} from 'react-native'
import { styles } from './SignIn.style.js'
import { AuthContext } from '../contexts/auth.js'

const SignIn = () => {
	const [ email, setEmail ] = React.useState( "asd" )
	const [ password, setPassword ] = React.useState( "asd" )
	const { signIn, authState } = React.useContext( AuthContext )

	return (
		<View style={ styles.container }>
			<TextInput
				 style={{
					 ...styles.input,
					 ...( _ => authState.errors.emailHint ? styles.errorInput : {} )()
				 }}
				 onChangeText={ v => setEmail( v ) }
				 value={ email }
				 placeholder="Email"
				 autoCompleteType="email"
				 autoCapitalize="none"/>
			<TextInput
				 style={{
					 ...styles.input,
					 ...styles.passwordInput,
					 ...( _ => authState.errors.passwordHint ? styles.errorInput : {} )()
				 }}
				 onChangeText={ v => setPassword( v ) }
				 value={ password }
				 placeholder="Password"
				 autoCapitalize="none"
				 autoCompleteType="password"
				 secureTextEntry={true}/>
			{
				authState.errors.message !== null
					? (
						<Text style={{ ...styles.errorText, ...styles.globalErrorText }}>
							{
								authState.errors.message
							}
						</Text>
					) : null
			}
			<View style={ styles.signInPane }>
				{
					authState.isLoading === false
						? (
							<View style={ styles.buttonContainer }>
								<Button
									title="Sign in"
									color="#45a2ef"
									onPress={ _ => signIn({ email, password }) }/>
							</View>
						) : (
							<ActivityIndicator size="large" color="#45a2ef" />
						)
				}
			</View>
		</View>
	)
}

export default SignIn
