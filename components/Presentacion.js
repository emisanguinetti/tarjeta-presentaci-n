import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Linking,
  Pressable,
  Alert,
} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context"
export default function Presentacion() {

  const [mostrarGaleria, setMostrarGaleria] = useState(false);

  const abrirInstagram = () => {
    Linking.openURL(
      'https://www.instagram.com/emisanguinettii'
    );
  };

  const abrirSpotify = () => {
    Linking.openURL(
      'https://open.spotify.com/playlist/07ZsmKnuLmIaHGFQPld78J?si=Mc9vEIrtTTiTW2ERdoUObA&pi=JexljTULSt2Vx'
    );
  };

  const mostrarMensaje = (titulo, mensaje) => {
    Alert.alert(titulo, mensaje);
  };

  /* ---------------- GALERÍA ---------------- */

  if (mostrarGaleria) {

    return (

      <SafeAreaView style={styles.safeArea}>

        <ScrollView contentContainerStyle={styles.container}>

          <Text style={styles.titulo}>
            Mi galería
          </Text>

          <Image
            source={require('../assets/foto5.jpeg')}
            style={styles.fotoGaleriaGrande}
          />

          <Image
            source={require('../assets/foto6.jpeg')}
            style={styles.fotoGaleriaGrande}
          />

          <Image
            source={require('../assets/foto7.jpeg')}
            style={styles.fotoGaleriaGrande}
          />

           <Image
            source={require('../assets/foto8.jpeg')}
            style={styles.fotoGaleriaGrande}
          />

           <Image
            source={require('../assets/foto9.jpeg')}
            style={styles.fotoGaleriaGrande}
          />

          <Pressable

            onPress={() => setMostrarGaleria(false)}

            onPressIn={() =>
              console.log('Tocando volver')
            }

            onPressOut={() =>
              console.log('Soltaste volver')
            }

            onLongPress={() =>
              Alert.alert(
                'Volver',
                'Mantuviste el botón'
              )
            }

            delayLongPress={800}

            hitSlop={{
              top: 30,
              bottom: 30,
              left: 30,
              right: 30,
            }}

            style={({ pressed, hovered }) => [
              styles.boton,
              pressed && styles.botonPresionado,
              hovered && styles.botonHover
            ]}
          >

            {({ pressed }) => (

              <Text style={styles.botonTexto}>
                {pressed
                  ? 'Volviendo...'
                  : 'Volver'}
              </Text>

            )}

          </Pressable>

        </ScrollView>

      </SafeAreaView>

    );
  }

  /* ---------------- PANTALLA PRINCIPAL ---------------- */

  return (

    <SafeAreaView style={styles.safeArea}>

      <ScrollView contentContainerStyle={styles.container}>

        <Text style={styles.titulo}>
          Emilia
        </Text>

        <Text style={styles.subtitulo}>
          Bienvenidos a mi tarjeta de presentación
        </Text>

        <Image
          source={require('../assets/foto1.jpeg')}
          style={styles.fotoPrincipal}
        />

        {/* CARD 1 */}

        <View style={styles.card}>

          <Text style={styles.texto}>
            Amo los gatitos
          </Text>

          <Image
            source={require('../assets/foto2.jpeg')}
            style={styles.imagenCard}
          />

        </View>

        {/* CARD 2 */}

        <View style={styles.card}>

          <Text style={styles.texto}>
            Me gustan MUCHO las mandarinas
          </Text>

          <Image
            source={require('../assets/foto3.jpeg')}
            style={styles.imagenCard}
          />

        </View>

        {/* CARD 3 */}

        <View style={styles.card}>

          <Text style={styles.texto}>
            Disfruto estar con mis amigas
          </Text>

          <Image
            source={require('../assets/foto4.jpeg')}
            style={styles.imagenCard}
          />

        </View>

        <Text style={styles.frase}>
          "little things make life beautiful"
        </Text>

        {/* BOTÓN INSTAGRAM */}

        <Pressable

          onPress={abrirInstagram}

          onPressIn={() =>
            console.log('Tocando Instagram')
          }

          onPressOut={() =>
            console.log('Soltaste Instagram')
          }

          onLongPress={() =>
            Alert.alert(
              'Instagram',
              'Mantuviste presionado el botón'
            )
          }

          delayLongPress={800}

          hitSlop={{
            top: 30,
            bottom: 30,
            left: 30,
            right: 30,
          }}

          style={({ pressed, hovered }) => [
            styles.boton,
            pressed && styles.botonPresionado,
            hovered && styles.botonHover
          ]}
        >

          {({ pressed }) => (

            <Text style={styles.botonTexto}>
              {pressed
                ? 'Abriendo Instagram...'
                : 'Instagram'}
            </Text>

          )}

        </Pressable>

        {/* BOTÓN SPOTIFY */}

        <Pressable

          onPress={abrirSpotify}

          onPressIn={() =>
            console.log('Tocando Spotify')
          }

          onPressOut={() =>
            console.log('Soltaste Spotify')
          }

          onLongPress={() =>
            Alert.alert(
              'Spotify',
              'Mantuviste presionado el botón'
            )
          }

          delayLongPress={800}

          hitSlop={{
            top: 30,
            bottom: 30,
            left: 30,
            right: 30,
          }}

          style={({ pressed, hovered }) => [
            styles.boton,
            pressed && styles.botonPresionado,
            hovered && styles.botonHover
          ]}
        >

          {({ pressed }) => (

            <Text style={styles.botonTexto}>
              {pressed
                ? 'Abriendo Spotify...'
                : 'Spotify'}
            </Text>

          )}

        </Pressable>

        {/* BOTÓN GALERÍA */}

        <Pressable

          onPress={() => setMostrarGaleria(true)}

          onPressIn={() =>
            console.log('Tocando galería')
          }

          onPressOut={() =>
            console.log('Soltaste galería')
          }

          onLongPress={() =>
            Alert.alert(
              'Galería',
              'Mantuviste presionado el botón'
            )
          }

          delayLongPress={800}

          hitSlop={{
            top: 30,
            bottom: 30,
            left: 30,
            right: 30,
          }}

          style={({ pressed, hovered }) => [
            styles.boton,
            pressed && styles.botonPresionado,
            hovered && styles.botonHover
          ]}
        >

          {({ pressed }) => (

            <Text style={styles.botonTexto}>
              {pressed
                ? 'Abriendo galería...'
                : 'Mi galería'}
            </Text>

          )}

        </Pressable>

        {/* BOTÓN RANDOM */}

        <Pressable

          onPress={() =>
            mostrarMensaje(
              'Dato random',
              'Lloro muchisimo por todo ;)'
            )
          }

          onPressIn={() =>
            console.log('Tocando dato random')
          }

          onPressOut={() =>
            console.log('Soltaste dato random')
          }

          onLongPress={() =>
            Alert.alert(
              'Dato random',
              'Mantuviste presionado el botón'
            )
          }

          delayLongPress={800}

          hitSlop={{
            top: 30,
            bottom: 30,
            left: 30,
            right: 30,
          }}

          style={({ pressed, hovered }) => [
            styles.boton,
            pressed && styles.botonPresionado,
            hovered && styles.botonHover
          ]}
        >

          {({ pressed }) => (

            <Text style={styles.botonTexto}>
              {pressed
                ? 'Cargando dato random...'
                : 'Dato random'}
            </Text>

          )}

        </Pressable>

      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7D3',
  },

  container: {
    alignItems: 'center',
    padding: 25,
  },

  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#122A13',
    marginTop: 10,
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 16,
    color: '#4B5D3A',
    marginBottom: 20,
    textAlign: 'center',
  },

  fotoPrincipal: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginBottom: 25,
    borderWidth: 4,
    borderColor: '#122A13',
  },

  card: {
    width: '90%',
    backgroundColor: '#122A13',
    padding: 18,
    borderRadius: 20,
    marginBottom: 18,
    elevation: 5,
  },

  texto: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '600',
  },

  imagenCard: {
    width: '100%',
    height: 220,
    borderRadius: 15,
  },

  frase: {
    marginTop: 10,
    marginBottom: 15,
    fontSize: 15,
    color: '#4B5D3A',
    fontStyle: 'italic',
    textAlign: 'center',
  },

  boton: {
    width: '85%',
    backgroundColor: '#CBDB8C',
    paddingVertical: 15,
    borderRadius: 18,
    marginTop: 12,
    alignItems: 'center',
    elevation: 4,
  },

  botonPresionado: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
    backgroundColor: '#dceca8',
  },

  botonHover: {
    backgroundColor: '#E6F2B3',
    transform: [{ scale: 1.03 }],
  },

  botonTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#122A13',
  },

  fotoGaleriaGrande: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 20,
  },

});