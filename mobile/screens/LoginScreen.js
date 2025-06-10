import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../theme';

export default function LoginScreen({ navigation, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit() {
    onLogin({ email });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <PrimaryButton title="Entrar" onPress={handleSubmit} />
      <PrimaryButton
        title="Cadastrar"
        onPress={() => navigation.navigate('Register')}
        style={styles.secondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, gap: 8, backgroundColor: theme.colors.background },
  title: { fontSize: 20, marginBottom: 20 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, width: '100%', paddingHorizontal: 8 },
  secondary: { backgroundColor: theme.colors.card }
});
