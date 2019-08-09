import React from 'react';
import  { Text, StyleSheet, View} from 'react-native';
import { AuthSession } from 'expo';

const ComponentScreen = () => {
    let name = 'wiliam lee'
    return (
    <View>
        <Text style={styles.textStyle}>77 dias para se superar</Text>
        <Text style={styles.button}>Sing in {name}</Text>
        
    </View>
        )
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        fontWeight: 'bold',
        // width: 120,
        // height: 150,
        textAlign: "center",
        marginTop: 20
    },
    button: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 20
    }
})

export default ComponentScreen;