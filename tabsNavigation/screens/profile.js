import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil usuario</Text>

      <Button
        title="Detalles de Usuario"
        onPress={() => navigation.navigate("Detalle")}
        color="blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' },

  title: { 
    fontSize: 22, 
    color: "green", 
    marginBottom: 20 }
});