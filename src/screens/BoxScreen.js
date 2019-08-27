import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.viewBox}/>
            <Text style={styles.viewBoxTwo}/>
            <Text style={styles.viewBox}/>
            
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        // alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    viewBox: {
        borderWidth: 3,
        borderColor: 'red',
        height: 30,
        width: 30,
        
    },
    viewBoxTwo: {
        borderWidth: 3,
        borderColor: 'red',
        height: 30,
        width: 30,
        // marginTop: 30,
        alignSelf: 'flex-end'
    }
})

export default BoxScreen