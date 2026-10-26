import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export const Componente3=({oscuro})=> {
    {/*Estado que podemos usar de contador*/}
  const [contador, setContador] = useState(0);

  const fondo=oscuro ? 'gray': 'rgb(103, 231, 103)';
  const colorTexto= oscuro ? 'white': 'black';

  return (
    <View style={[styles.container, {backgroundColor: fondo}]}>
      <Text style= {{ fontSize:24, fontWeight: 800, color: colorTexto}}>Práctica de Pressable</Text>
      <Text style= {{ fontSize:18 , color: colorTexto}}>Contador: {contador}</Text>

        {/*Cada que se detecte una pulsacion aumenta el contador*/}
      <Pressable
        hitSlop={0}
        onPress={() => setContador(contador + 1)}
        //Los estilos del pressable cambian también cuando se detecta la presión
        style={({ pressed }) => [
          styles.boton,
          {
            //cambiamos el color del background del pressable cuando se presiona o no
            backgroundColor: pressed ? '#d6943d' : '#6366F1',
          },
        ]}
        //cambiamos el delay del LongPRess
        delayLongPress={1000}
        onLongPress={()=>setContador(0)}
      >
        {({ pressed }) => (
          <Text selectable={false} style={{color:colorTexto, fontSize:16,fontWeight: 600}}>
            { pressed ? 'Estoy presionado' : 'Soy texto, pero me puedes presionar'}
          </Text>
        )}
      </Pressable>
        <Text selectable={false} style={{color: colorTexto,textAlign:'center',}}>Mantén presionado el botón durante 1 seg para hacer un reset</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    width: 340,
  },
  boton: {
    margin:20,
    borderRadius: 14,
    width:300,
    height:50,
    alignItems: 'center',
    justifyContent:'center',
  },
});