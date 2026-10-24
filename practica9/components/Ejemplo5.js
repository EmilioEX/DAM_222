import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export const Ejemplo5=()=> {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize:24, fontWeight: 800, margin:20}}>Pressable con una Imagen</Text>

      {/* Pressable que envuelve una tarjeta con imagen */}
      <Pressable
        onPress={() => setLikes(likes + 1)}
        style={({ pressed }) => [
          styles.tarjeta,
          {
            // Efecto visual al presionar la tarjeta completa
            backgroundColor: pressed ? '#d6943d' : '#ffffff',
          },
        ]}
      >
        {/* Imagen de ejemplo desde internet */}
        <Image
          source={{ uri: 'https://cdn.pariscityvision.com/library/image/5449.jpg' }}
          style={{width: 200,height: 180,}}
        />

        <View style={{margin:10}}>
          <Text style={{color:'#080808', fontSize:16,fontWeight: 800}}>Una Obra Genial</Text>
          <Text style={{color: 'gray'}}>Toca esta tarjeta para darle likes ({likes})</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  tarjeta: {
    backgroundColor: '#fff',
    borderRadius: 16,
    width: 250,
    alignItems:'center',
    margin:20,
    gap:20,
  },
});