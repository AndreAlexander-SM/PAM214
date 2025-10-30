import { Text, StyleSheet, View, SafeAreaView, ImageBackground, TextInput, Button, Alert, Switch} from 'react-native'
import {useEffect, useState} from 'react'

export default function RepasoScreen() {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [showSplash, setShowSplash] = useState(true)
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const mostrarAlerta = () => 
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (nombre.trim() === '') 
        {
            Alert.alert('Error. Por favor llena el campo de Nombre.');
            alert('Error. Por favor llena el campo de Nombre.');

        } else if (correo.trim() === '') 
        {
            Alert.alert('Error. Por favor llena el campo de Correo.');
            alert('Error. Por favor llena el campo de Correo.');

        } else if (!emailRegex.test(correo))
        {
            Alert.alert('Error. Por favor inserte un correo válido.');
            alert('Error. Por favor inserte un correo válido.');
        } else if (!acceptedTerms)
        {
            Alert.alert('Debes aceptar los términos y condiciones.');
            alert('Debes aceptar los términos y condiciones.');
        
        } else
        {
            Alert.alert(`Hola, ${nombre}. Tu correo es: ${correo}`);
            alert(`Hola, ${nombre}! Tu correo es: ${correo}`);
            setNombre('');
            setCorreo('');
        };
    }

    useEffect (() => {
    const timer = setTimeout (() => {
      setShowSplash(false);
    },1000);
    return() => clearTimeout(timer);

    },[]);
    if(showSplash){
    return (
        <ImageBackground
        source ={{
            uri: 'https://turbologo.com/articles/wp-content/uploads/2019/11/Porsche-actual-logo.png'
        }}
        style={styles.background}
        resizeMode="cover"
        >
       </ImageBackground>
    );
    }
    return(
      <SafeAreaView style={{flex:1}}>
        <ImageBackground
        source ={{
          uri: 'https://img.pikbest.com/wp/202344/wooden-background-texture-of-light-brown_9899602.jpg!w700wp'
        }}
        style={styles.background}
        resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.title}>Registro de usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Nombre Completo"
                value={nombre}
                onChangeText={setNombre}
                keyboardType="default"
                autoCapitalize="words"
            />
            <TextInput
                style={styles.input}
                placeholder="Correo electronico"
                value={correo}
                onChangeText={setCorreo}
                keyboardType='default'
                autoCapitalize='words'
            />
            <View style={styles.switchContainer}>
            <Text style={styles.terminos}>ACEPTAR TERMINOS Y CONDICIONES</Text>
            <Switch
                onValueChange={(valor) => setAcceptedTerms(valor)}
                value={acceptedTerms}
            />
            </View>
            <Button
                title="REGISTRARSE"
                onPress={mostrarAlerta}
                color={'#151bbfff'}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }



// Estilos
const styles = StyleSheet.create({
  

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  
  splashText: {
    fontSize: 24, 
    color: '#fff', 
  },

  
  background: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },

  
  overlay: {
    backgroundColor: 'rgba(171, 171, 171, 0.8)',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '85%',
  },

  
  title: {
    fontSize: 28, 
    color: '#fff', 
    marginBottom: 10, 
    textAlign: 'center', 
  },

  label: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1, //Sirve para ver el borde del input
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno a los lados
    marginBottom: 20, // Espacio debajo del input
    fontSize: 16,
    color: '#fff',  
  },
 switchContainer: 
    {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
     terminos: 
    {
        color: '#ffffffff',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 10,
    },
});