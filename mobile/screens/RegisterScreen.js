import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../theme';

const schema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('Obrigatório'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Obrigatório')
});

export default function RegisterScreen({ navigation, onRegister }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(values) {
    setLoading(true);
    await new Promise(r => setTimeout(r, 500));
    setLoading(false);
    onRegister({ email: values.email });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
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
              <PrimaryButton title="Cadastrar" onPress={handleSubmit} />
            )}
            <PrimaryButton title="Voltar" onPress={() => navigation.goBack()} style={styles.secondary} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20, gap: 8, backgroundColor: theme.colors.background },
  title: { fontSize: 20, marginBottom: 20 },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, width: '100%', paddingHorizontal: 8 },
  secondary: { backgroundColor: theme.colors.card },
  error: { color: 'red', alignSelf: 'flex-start' }
});
