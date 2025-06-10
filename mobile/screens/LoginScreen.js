import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../theme';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Obrigatório'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Obrigatório')
});

export default function LoginScreen({ navigation, onLogin }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(values) {
    setLoading(true);
    await new Promise(r => setTimeout(r, 500));
    setLoading(false);
    onLogin({ email: values.email });
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://via.placeholder.com/100?text=Logo' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Login</Text>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {touched.password && errors.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            {loading ? (
              <ActivityIndicator color={theme.colors.primary} />
            ) : (
              <PrimaryButton title="Entrar" onPress={handleSubmit} />
            )}
            <PrimaryButton
              title="Cadastrar"
              onPress={() => navigation.navigate('Register')}
              style={styles.secondary}
            />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, gap: 8, backgroundColor: theme.colors.background },
  logo: { width: 120, height: 120, marginBottom: 10 },
  title: { fontSize: 20, marginBottom: 20 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, width: '100%', paddingHorizontal: 8 },
  secondary: { backgroundColor: theme.colors.card },
  error: { color: 'red', alignSelf: 'flex-start' }
});
