import React, {useState, useEffect} from 'react'
import {
    TextInput,
    Image,
    View,
    Platform,
    TouchableOpacity,
    Text
} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Speech from 'expo-speech'
import styles from './style'

export default function({navigation, route}:any){
    const [image, setImage] = useState('https://cdn.pixabay.com/photo/2019/07/25/16/29/background-image-4363006_1280.png')
    const [text, setText] = useState('')

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!')
            }
          }
        })()
    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
    
        if (!result.cancelled) {
          setImage(result.uri)
        }
    }

    const speak = (thingToSay:any) => {
      Speech.speak(thingToSay, {language: route.params.language})
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={() => pickImage()} style={styles.button}>
                <Text style={styles.buttonImage}>Image</Text>
            </TouchableOpacity>
            <Image source={{uri: image}} style={styles.image} />
            <TextInput 
                placeholder='Escreva...'
                style={styles.input}
                value={text}
                onChangeText={text => setText(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => speak(text)}>
                <Text style={styles.buttonImage}>Falar</Text>
            </TouchableOpacity>
        </View>
    )
}