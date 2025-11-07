import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Button, Alert, ScrollView} from 'react-native';
import { useState, useEffect } from 'react';


export default function App() {


  const mostrarAlerta = () =>
    {
      alert(<Button
      title='Guardar'
      />);
    }  
  
  
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
        <ScrollView>
      <View style={styles.overlay}>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Estudiante de la universidad UPQ</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Andre Alexander Sierra Martinez</Text>
       <Text style={styles.text}>Soy un chico que le gusta mucho el deporte y el estudio</Text>
       <Text style={styles.text}>124051521@upq.edu.mx</Text>
       <Text style={styles.text}>4424734727</Text>
        </View>
        <View>
          <Button
       title="Editar Perfil"
       onPress={mostrarAlerta}
       color={'#de6417ff'}
       />
        </View>
        </ScrollView>
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
  text:{
    fontSize:25,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
});
