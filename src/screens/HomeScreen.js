import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  
  return (
    <View>
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
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
