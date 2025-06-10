import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PrimaryButton from '../components/PrimaryButton';
import theme from '../theme';

export default function HomeScreen({ navigation, onLogout }) {
  const [appointments, setAppointments] = useState([]);

  useFocusEffect(
    useCallback(() => {
      AsyncStorage.getItem('appointments').then(data => {
        if (data) setAppointments(JSON.parse(data));
        else setAppointments([]);
      });
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo \u00e0 Cl\u00ednica CIST</Text>
      {appointments.length > 0 && (
        <View style={styles.list}>
          <Text style={styles.subtitle}>Pr\u00f3ximas Consultas:</Text>
          {appointments.map(a => (
            <Text key={a.id} style={styles.item}>
              {a.specialty} - {a.doctor} \u00e0s {a.time}
            </Text>
          ))}
        </View>
      )}
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
  list: { width: '100%', marginBottom: 20, paddingHorizontal: 20 },
  subtitle: { fontWeight: 'bold', marginBottom: 5 },
  item: { alignSelf: 'flex-start' },
  secondary: { backgroundColor: theme.colors.card }
});
