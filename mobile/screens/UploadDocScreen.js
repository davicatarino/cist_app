import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../theme';
import * as DocumentPicker from 'expo-document-picker';

export default function UploadDocScreen() {
  const [file, setFile] = useState(null);

  async function pickFile() {
    const result = await DocumentPicker.getDocumentAsync({});
    if (result.canceled) return;
    setFile(result.assets[0]);
  }

  function handleSubmit() {
    if (file) {
      Alert.alert('Enviar', `Enviado: ${file.name}`);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviar Documentos</Text>
      <PrimaryButton title="Escolher arquivo" onPress={pickFile} />
      {file && <Text>{file.name}</Text>}
      <PrimaryButton title="Enviar" onPress={handleSubmit} style={styles.secondary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8, backgroundColor: theme.colors.background },
  title: { fontSize: 20, marginBottom: 20 },
  secondary: { backgroundColor: theme.colors.card }
});
