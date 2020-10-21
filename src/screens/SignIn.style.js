import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
	},
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: "#bbb",
        fontSize: 18,
        backgroundColor: "#ddd",
        paddingHorizontal: 20,
        paddingVertical: 7,
        fontWeight: "300"
    },
    passwordInput: {
        marginTop: 15
    },
    errorInput: {
        borderColor: '#f06262',
    },
    errorText: {
        width: '80%',
        color: 'red',
        textAlign: 'center'
    },
    globalErrorText: {
        marginTop: 10
    },
    signInPane: {
        marginTop: 30,
        backgroundColor: 'green'
    },
    buttonContainer: {
        width: 100
    }
})
