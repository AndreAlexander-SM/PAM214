//1. imports: Zona de importaciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react'; 

//2. Main: Zona de componentes 
export default function ContadorScreen() {

  const[contador, setContador]=useState(0);

  return (

    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>
       <Text style={styles.texto2}>{contador}</Text>

      <View style={styles.contenedorBotones}>
      <Button color="#8015bfff" title='Agregar' onPress={()=>setContador(contador+1)}/>
      <Button color="#bf15a5ff" title='Quitar' onPress={()=>setContador(contador-1)}/>
      <Button color="#bf153aff" title='Reiniciar' onPress={()=>setContador(0)}/>
      </View>

      <StatusBar style="auto" />

    </View>

  );
}

//3. Estilos: Zona estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6f5050ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    color:'#1f1f22ff',
    fontSize: 30,
    fontFamily:'Time New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },

  texto2:{
    color:'#1717d2ff',
    fontSize: 40,
    fontFamily:'Courier',
    fontWeight:'900',
    textDecorationLine:'underline',
  },

  contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    gap:20,
  },

});
