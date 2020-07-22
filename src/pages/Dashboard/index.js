import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Alert } from 'react-native';
import api from '~/services/api';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/Background';
import Appointment from '~/components/Appointment';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Title, List } from './styles';

const data = [1, 2, 3, 4, 5, 6];

export default function Dashboard() {
  const dispatch = useDispatch();

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments').catch(() => { dispatch(signOut()) });

      setAppointments(response.data);
    }

    loadAppointments();
  }, []);

  async function handleCancel(id) {
    const response = await api.delete(`appointments/${id}`);

    setAppointments(
      appointments.map(appointment =>
        appointment.id === id
        ? {
          ...appointment,
          canceled_at: response.data.canceled_at,
        }
        :appointment
      )
    );
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          // Item is receiving data of the appointments
          keyExtractor={item => String(item.id)}
          // The data proprery is passing to Appointment component
          renderItem={({ item }) => <Appointment onCancel={() => handleCancel(item.id)} data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarBabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
