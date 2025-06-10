import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../theme';

export default function HomeScreen({ navigation, onLogout }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo \u00e0 Cl\u00ednica CIST</Text>
      <PrimaryButton title="Agendar Consulta" onPress={() => navigation.navigate('Schedule')} />
      <PrimaryButton title="Enviar Documentos" onPress={() => navigation.navigate('Upload')} />
      <PrimaryButton title="Suporte" onPress={() => navigation.navigate('Chat')} />
      <PrimaryButton title="Sair" onPress={onLogout} style={styles.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: theme.colors.background },
  title: { fontSize: 20, marginBottom: 20 },
  secondary: { backgroundColor: theme.colors.card }
});
