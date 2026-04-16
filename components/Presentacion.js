import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Linking } from 'react-native';

export default function Presentacion() {
  const abrirEnlace = () => { 
    Linking.openURL ('https://www.instagram.com/emisanguinettii?igsh=MWtvZGxhemR1cGc5OQ%3D%3D&utm_source=qr')
  }
  return (
  <ScrollView 
    style={styles.fondo} 
    contentContainerStyle={styles.container}
  >
      <View style={styles.bloque}>
        <Text style={styles.texto}>Hola, soy Emilia</Text>
        <Image 
        source={require('../assets/foto1.jpeg')}
        style={styles.imagen}
        />
      </View>

      <View style={styles.bloque}>
        <Text style={styles.texto}>amo los gatitos</Text>
        <Image 
          source={require('../assets/foto2.jpeg')} 
          style={styles.imagen}
        />
      </View>

      <View style={styles.bloque}>
        <Text style={styles.texto}>me gustan MUCHO las mandarinas</Text>
        <Image 
          source={require('../assets/foto3.jpeg')} 
          style={styles.imagen}
        />
      </View>

      <View style={styles.bloque}>
        <Text style={styles.texto}>y disfruto estar con mis amigas</Text>
        <Image 
          source={require('../assets/foto4.jpeg')} 
          style={styles.imagen}
        />
      </View>

      <Text style={styles.link} onPress={abrirEnlace}>
  Ir a mi Instagram
</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: '#CBDB8C',
  },
  container: {
    alignItems: 'center',
    padding: 20,
  },
  bloque: {
    backgroundColor: '#122A13', 
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',

    elevation: 5,
  },
  texto: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  link: {
  color: '#122A13',
  fontSize: 16,
  marginTop: 15,
  marginBottom: 30,
  textDecorationLine: 'underline'
}
});