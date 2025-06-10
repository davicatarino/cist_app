import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo \u00e0 Cl\u00ednica CIST</Text>
      <Button title="Agendar Consulta" onPress={() => navigation.navigate('Schedule')} />
      <Button title="Enviar Documentos" onPress={() => navigation.navigate('Upload')} />
      <Button title="Suporte" onPress={() => navigation.navigate('Chat')} />
      <Button title="Sair" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  title: { fontSize: 20, marginBottom: 20 }
});
