import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  return (
    <View style={styles.viewStyleHome}>
      <Text style={styles.text}>ProtocolMass</Text>
      <Button 
        onPress={() => navigation.navigate('Components')}
        title='Cadastre-se'/>
      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>
          Já possúi uma conta? Acesse
        </Text>
      </TouchableOpacity>
      <Button 
        onPress={() => navigation.navigate('ClassGrid') }
        title='Workout Content'
      />
      <Button 
        onPress={() => navigation.navigate('Counter')}
        title='press button counter'
      />
      <Button
        onPress={() => navigation.navigate('Color')}
        title='Color Screen'
      />
      <Button 
        onPress={() => navigation.navigate('Square')}
        title='square screen'
      />
      <Button 
        onPress={() => navigation.navigate('Text')}
        title='text Screen'
      />      
      <Button
        onPress={() => navigation.navigate('Box')}
        title='box screen'
        />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  viewStyleHome: {
    alignItems: 'center',
    justifyContent: 'space-around'
  }
});

export default HomeScreen;
