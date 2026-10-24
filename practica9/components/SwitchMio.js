import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SwitchMio({ oscuro, cambiarModo }) {
  return (
    <View style={styles.container}>

      <Text style={[styles.titulo,{color: oscuro ? 'white' : 'black'}]}>
        Modo oscuro
      </Text>

    <View style={styles.switchContainer}>
      <Switch
        value={oscuro}
        onValueChange={cambiarModo}
      />
    </View>

      <Text style={[styles.estado,{color: oscuro ? '#fff7f7' : '#555555'}]}>
        {oscuro ? 'Está activado' : 'Está desactivado'}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  estado: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 8,
  },
  switchContainer: {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
},
});
