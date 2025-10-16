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
                    <View>
                    <Text>Menu Practicas</Text>
                    <Button onPress={()=>setScreen('contador')} title='Practica:Contador'/>
                    <Button onPress={()=>setScreen('botones')} title='Practica:Buttons'/>
                    <Button onPress={()=>setScreen('textImput')} title='Practica:TextImput'/>
                    <Button onPress={()=>setScreen('ImageBackground')} title='Practica:ImageBackground'/>
                    <Button onPress={()=>setScreen('scrollview')} title='Practica:ScrollView'/>
                    <Button onPress={()=>setScreen('activityindicator')} title='Practica:ActivityIndicator'/>
                    <Button onPress={()=>setScreen('flatList')} title='Practica:FlatList'/>
                    <Button onPress={()=>setScreen('modal')} title='Practica:Modal'/>
                    <Button onPress={()=>setScreen('bottom')} title='Practica:Bottom'/>
                    </View>
    )

    }

    

  }

const styles = StyleSheet.create({
    contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    gap:20,
  },
})