import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './style';

export default function App() {

  const [valor, setValor] = useState()
  const [contador, setContador] = useState()

  const evento = (e) => {
    setValor(e)
    setContador(e)
  }

  const addContador = () => {
    setValor(valor - 1)

    if (valor <= 0) {
      alert("O contador não pode ser um número negativo")
      setValor(contador)
    }
  }

  const resetaContador = () => {
    setValor(contador)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello!</Text>
      <Text style={styles.estiloText}>digite um número para inicar o contador</Text>

      <TextInput onChangeText={evento}
        placeholder='digite aqui...'
        style={styles.input}
      />

      <Text style={styles.contador}>{valor}</Text>

      <TouchableOpacity onPress={() => addContador()}>
        <Text style={styles.button}>contar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => resetaContador()}>
        <Text style={styles.reset}>resetar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}
