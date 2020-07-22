import React, { useState, useEffect } from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  // These data are coming from the previous navigation via parameters
  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(), // Convert in TimeStamps
        }
      });

      setHours(response.data)
      // console.log(response.data);
    }

    loadAvailable();
  }, [date, provider.id]); // Always that my date changes, my useEffect will be called

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        {/* // All the time that I call onChange inside the DateInput component, I will change setDate value */}
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          extraData={date}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            // *** PENDENCY ***
            // The button remains clickable even with items.available false
            <Hour onPress={() => handleSelectHour(item.value)} enabled={item.available}>
              <Title>{item.time}</Title>
            </Hour>
          )}/>
      </Container>

    </Background>
  )
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
