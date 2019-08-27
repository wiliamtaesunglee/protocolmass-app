import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
const [name, setName] = useState('')
    return (
        <View>
            <Text>Enter name:</Text>
            <TextInput style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />

            <Text>{name.length >= 5 ? name : 'should be longer then 4'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen;