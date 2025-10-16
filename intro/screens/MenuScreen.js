import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import TextImputScreen from './TextImputScreen';
import ImageBackgroundScreen from './ImageBackgroundScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottomScreen from './BottomScreen';

export default function MenuScreen() {

    const[screen,setScreen]=useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'textImput':
            return <TextImputScreen/>
        case 'ImageBackground':
            return <ImageBackgroundScreen/>
        case 'scrollview':
            return <ScrollViewScreen/>
        case 'activityindicator':
            return <ActivityIndicatorScreen/>
        case 'flatList':
            return <FlatListScreen/>
        case 'modal':
            return <ModalScreen/>
        case 'bottom':
            return <BottomScreen/>
        case 'menu':
            default:
                return (
                    <View style={styles.container}>
                    <Text style={styles.texto}>Menu Practicas</Text>
                    <View style={styles.contenedorBotones}>
                    <Button color='#8015bfff' onPress={()=>setScreen('contador')} title='Practica:Contador'/>
                    <Button color='#bf2c15ff' onPress={()=>setScreen('botones')} title='Practica:Buttons'/>
                    <Button color='#151bbfff' onPress={()=>setScreen('textImput')} title='Practica:TextImput'/>
                    <Button color='#bf1562ff' onPress={()=>setScreen('ImageBackground')} title='Practica:ImageBackground'/>
                    <Button color='#15bf48ff' onPress={()=>setScreen('scrollview')} title='Practica:ScrollView'/>
                    <Button color='#bfb415ff' onPress={()=>setScreen('activityindicator')} title='Practica:ActivityIndicator'/>
                    <Button color='#15bfa5ff' onPress={()=>setScreen('flatList')} title='Practica:FlatList'/>
                    <Button color='#bf1551ff' onPress={()=>setScreen('modal')} title='Practica:Modal'/>
                    <Button color='#84bf15ff' onPress={()=>setScreen('bottom')} title='Practica:Bottom'/>
                    </View>
                    </View>
    )

    }

    

  }

const styles = StyleSheet.create({

    container: {
    flex: 1,
    backgroundColor: '#f8f8f8ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    color:'#1f1f22ff',
    fontSize: 30,
    fontFamily:'Time New Roman',
    fontWeight:'bold',
    textDecorationLine:'underline',
  },

    contenedorBotones:{
    marginTop:15,
    flexDirection:'column',
    gap:20,
  },
})