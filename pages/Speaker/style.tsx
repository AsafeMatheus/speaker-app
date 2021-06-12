import react from 'react'
import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image:{
        width: 250,
        height: 250,
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 10
    },
    buttonImage:{
        color: '#3676ec'
    },
    button:{
        marginBottom: 15,
        marginTop: 8
    },
    input:{
        borderWidth: 1,
        width: 250,
        height: 45,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        marginTop: 20,
        maxWidth: '80%'
    }
})