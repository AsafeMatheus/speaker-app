import React, {useState} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from './style'

export default function({navigation}:any){
    const [language, setLenguage] = useState('')

    return(
        <View style={styles.container}>
            <TextInput 
                placeholder='lenguage (pt-br)'
                style={styles.inputs}
                value={language}
                onChangeText={text => setLenguage(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Speaker', {language})
            }}>
                <Text style={styles.buttonText}>Começar</Text>
            </TouchableOpacity>
        </View>
    )
}