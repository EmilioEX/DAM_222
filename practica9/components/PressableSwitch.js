
/* 1. Zona de importaciones */
import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import SwitchMio from '../components/SwitchMio';

/* 2. Zona Main */
export default function PressableSwitch() {
  const [oscuro, setOscuro] = useState(false);

  return (
    <View
      style={[styles.container, {backgroundColor: oscuro ? '#2c2b2b' : '#FFFFFF'}]}
    >
      <Text
        style={[styles.texto, {color: oscuro ? '#FFFFFF' : '#000000'}]}
      >
        {oscuro ? 'Modo oscuro activado' : 'Modo claro activado'}
      </Text>

      <SwitchMio
        oscuro={oscuro}
        cambiarModo={setOscuro}
      />
    </View>
  );
}

/* 3. Zona de estilos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
});
