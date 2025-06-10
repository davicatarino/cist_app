import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const specialties = ['Cardiologia', 'Dermatologia', 'Ortopedia'];
const doctors = {
  Cardiologia: ['Dr. Silva', 'Dra. Souza'],
  Dermatologia: ['Dr. Gomes'],
  Ortopedia: ['Dr. Lima']
};
const times = ['09:00', '10:00', '11:00'];

export default function ScheduleScreen() {
  const [specialty, setSpecialty] = useState('Cardiologia');
  const [doctor, setDoctor] = useState('Dr. Silva');
  const [time, setTime] = useState('09:00');

  function handleSubmit() {
    Alert.alert('Agendamento', `Consulta marcada com ${doctor} \u00e0s ${time}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agendar Consulta</Text>
      <Picker
        selectedValue={specialty}
        onValueChange={value => {
          setSpecialty(value);
          setDoctor(doctors[value][0]);
        }}>
        {specialties.map(s => (
          <Picker.Item key={s} label={s} value={s} />
        ))}
      </Picker>
      <Picker selectedValue={doctor} onValueChange={setDoctor}>
        {doctors[specialty].map(d => (
          <Picker.Item key={d} label={d} value={d} />
        ))}
      </Picker>
      <Picker selectedValue={time} onValueChange={setTime}>
        {times.map(t => (
          <Picker.Item key={t} label={t} value={t} />
        ))}
      </Picker>
      <Button title="Agendar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, marginBottom: 20, textAlign: 'center' }
});
