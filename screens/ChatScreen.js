import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  function sendMessage() {
    setMessages([...messages, { from: 'Voc\u00ea', text: input }, { from: 'Bot', text: 'Ol\u00e1, em breve responderemos.' }]);
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Suporte com IA</Text>
      <ScrollView style={styles.messages}>
        {messages.map((m, i) => (
          <Text key={i}><Text style={styles.bold}>{m.from}:</Text> {m.text}</Text>
        ))}
      </ScrollView>
      <TextInput style={styles.input} value={input} onChangeText={setInput} />
      <Button title="Enviar" onPress={sendMessage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' },
  messages: { flex: 1, marginBottom: 10 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, paddingHorizontal: 8, marginBottom: 10 },
  bold: { fontWeight: 'bold' }
});
