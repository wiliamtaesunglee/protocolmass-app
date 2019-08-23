import React, { useReducer } from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const reducer = (state, action) => {
    // state === { count: number}
    // action === {type: 'increment' || type: 'decrement', payload: 1}
    return {...state, count: state.count + action.payload}
    // switch (action.type) {
    //     case ('increment'):
    //         return {...state, count: state.count + action.payload}
    //     // case ('decrement'):
    //     //     return {...state, count: state.count - action.payload}
    //     default:
    //         return state
    // }
}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})
    

    return(
        <View>
            <Button title='Increase'
                onPress={() => dispatch({payload: 1})}
            />
            <Button title='Decrease'
                onPress={() => dispatch({payload: -1})}
            />
            <Text>
                counter screen: {state.count}
            </Text>

            
        </View>
    )
}

const styles = StyleSheet.create({

}) 

export default CounterScreen;