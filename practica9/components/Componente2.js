
import { StyleSheet, Text, View, Pressable } from 'react-native';

export const Componente2=()=> {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          { 
            backgroundColor: pressed ? 'green' : 'blue',
            padding: 10,
          },
        ]}
      >
        {({ pressed }) => (
          <Text style={{ color: 'white' }}>
            {pressed ? 'se mantiene presionado' : 'Presióname'}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
  },
});