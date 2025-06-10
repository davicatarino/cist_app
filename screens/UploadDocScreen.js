import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
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
      <Button title="Escolher arquivo" onPress={pickFile} />
      {file && <Text>{file.name}</Text>}
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  title: { fontSize: 20, marginBottom: 20 }
});
