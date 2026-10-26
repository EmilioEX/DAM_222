import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';

export const Componente4=({oscuro})=> {
  const [likes, setLikes] = useState(0);
  const [modo, setModo]=useState('out');

  const fondo=oscuro ? 'gray': 'rgb(103, 231, 103)';
  const fondo2=oscuro ? 'rgb(96, 102, 117)': '#bdcfbd';
  const colorTexto= oscuro ? 'white': 'black';



  const estilosModo = {
    out: {
      backgroundColor: fondo2,
      transform: [{ scale: 1 }],
    },
    in: {
      backgroundColor: '#83c537',
      transform: [{ scale: 1.15 }],
    },
    long: {
      backgroundColor: '#5900ff',
      transform: [{ scale: 1.15 }],
    },
  };
  return (
    <View style={[styles.container, {backgroundColor:fondo}]}>
      <Text style={{ fontSize:24, fontWeight: 800, color: colorTexto}}>Pressable con una Imagen</Text>

      {/* Pressable que envuelve una tarjeta con imagen */}
      <Pressable
        onPressIn={()=>setModo('in')}
        onPressOut={()=>setModo('out')}
        onLongPress={()=>{setModo('long'); setLikes(0)}}
        onPress={() => setLikes(likes + 1)}
        style={[styles.tarjeta, estilosModo[modo]]}
      >
        {/* Imagen de ejemplo desde internet */}
        <Image
          source={{ uri: 'https://cdn.pariscityvision.com/library/image/5449.jpg' }}
          style={{width: 200,height: 300,borderRadius:20,}}
        />

        <View style={{margin:10}}>
          <Text selectable={false} style={{color: colorTexto, fontSize:16,fontWeight: 800}}>Una Obra Genial</Text>
          <Text selectable={false} style={{color: colorTexto}}>Toca esta tarjeta para darle likes (<Text style={{color:'red', fontWeight: 'bold'}}>{likes}</Text>)</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius:16,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:10,
  },
  tarjeta: {
    padding:10,
    borderRadius: 16,
    width: 250,
    alignItems: 'center',
    margin: 10,
    overflow: 'hidden', 
  },
});