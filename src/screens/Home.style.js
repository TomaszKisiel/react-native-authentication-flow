import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  	container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#d1ec23'
	},
    text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 8,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {
            width: 1,
            height: 1
        },
        textShadowRadius: 10
    },
    buttonContainer: {
        width: 100,
        alignSelf: 'center'
    },
})
