import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView} from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-web';

export default function App() {

  const [showSplash, setShowSplash] = useState(true)
  useEffect (() => {
    const timer = setTimeout(()=>{
      setShowSplash(false);
    }, 4000);
    return()=> clearTimeout(timer); 
  },[]);
    if(showSplash){
    return (
    <View style={styles.splashcontainer}>
      <Text style={styles.splashtitle}>Bienvenido a la app!</Text>
    </View>
  );  
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <ImageBackground
       source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkOIVpwM21Nwpu6vdXRcP6Z37ktS2KlZbmtw&s'
       }}
       style={styles.background}
      >
        <View style={styles.overlay}>
       <Text>Hola</Text>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashcontainer:{
    flex: 1,
    backgroundColor: '',
    justifyContent: 'center',
    alignItems: 'center'
  },
  splashtitle:{
    fontSize: 28,
    color: '',
    marginBottom: 10,
    textAlign:'center',
  },
  background:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay:{
    backgroundColor:'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 10,
  },
});
