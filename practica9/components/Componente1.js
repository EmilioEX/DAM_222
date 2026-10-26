
//Importamos nuestro componente "Pressable"
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState } from 'react';


export const Componente1=()=>{
  const [mantener, setMantener] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable
        onLongPress={() => setMantener(true)}
        delayLongPress={500}
        onPressOut={() => setMantener(false)}
        style={{ 
            padding: 10,
        }}
      >
        <Text style={{color: mantener ? 'red': 'black',fontWeight:800, fontSize: 20,}}>{mantener ? 'se mantiene presionado' : 'Soy texto, pero me puedes presionar'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
  },
});