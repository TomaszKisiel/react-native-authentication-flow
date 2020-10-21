import React from 'react';
import {
      SafeAreaView,
      SafeAreaViewProvider,
      View,
      Text,
      StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './screens/SignIn'
import Home from './screens/Home'
import { initialState, authReducer } from './reducers/auth.js'
import { signInErrors, signInVerify, signIn, signOut } from './actions/auth.js'
import { AuthContext } from './contexts/auth.js'

const axios = require('axios');
const Stack = createStackNavigator();

const App: () => React$Node = () => {
    const [ state, dispatch ] = React.useReducer( authReducer, initialState )

    React.useEffect( () => {
        ( async () => {
            await new Promise( resolve => setTimeout( resolve, 1000 ) );
            // dispatch( signIn( "Token-For-Now" ) )
        } )()
    }, [])

    const authContext = {
        authState: state,
        signIn: async data => {
            const { email, password } = data

            const errors = {
                emailHint: email === "" ? true : false,
                passwordHint: password === "" ? true : false,
                message: state.errors.message !== null ? " " : null
            }

            if( errors.emailHint && errors.passwordHint ) {
                errors.message = "Pola email i hasło są wymagane!"
            } else if( errors.emailHint ) {
                errors.message = "Pole email jest wymagane!"
            } else if( errors.passwordHint ) {
                errors.message = "Pole hasło jest wymagane!"
            }

            dispatch( signInErrors( { ...errors } ) )
            if( errors.emailHint || errors.passwordHint ) return

            dispatch( signInVerify() )
            axios.post( "###", { email, password }, { timeout: 1e4 } ).then( res => {
                const token = res.data["access_token"]

                if( token !== null ) {
                    dispatch( signIn( token ) )
                } else {
                    errors.emailHint = true
                    errors.passwordHint = true
                    errors.message = "Wystąpił błąd po stronie serwera, spróbuj ponownie później!"
                    dispatch( signInErrors( { ...errors } ))
                }
            }).catch( e => {
                errors.emailHint = true
                errors.passwordHint = true

                if( e.response ) {
                    if( e.response.status === 401 ) {
                        errors.message = "Błędny email lub hasło."
                    } else {
                        errors.message = "Wystąpił błąd po stronie serwera, spróbuj ponownie później!"
                    }
                } else if( e.request ) {
                    errors.message = "Brak stabilnego połączenia z siecią internet."
                } else {
                    errors.message = "Brak stabilnego połączenia z siecią internet."
                }

                dispatch( signInErrors( { ...errors } ))
            })
        },
        signOut: () => {
            dispatch( signOut() )
        },
    }

    return (
        <AuthContext.Provider value={ authContext }>
            <StatusBar backgroundColor="#9db021" />
            <NavigationContainer navigationOptions={{
                safeAreaInsets: { top: 0 }
            }}>
                <Stack.Navigator
                    screenOptions={{
                        headerStatusBarHeight:0,
                    }}>{
                    state.authToken === null
                        ? <Stack.Screen name="SignIn" component={ SignIn } />
                        : <Stack.Screen name="Home" component={ Home } options={{ headerShown: false }}/>
                }</Stack.Navigator>
            </NavigationContainer>
        </AuthContext.Provider>
    );
};



export default App;
