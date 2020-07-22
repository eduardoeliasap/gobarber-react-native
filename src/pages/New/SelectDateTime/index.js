import React, { useState } from 'react';

import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';
import DateInput from '~/components/DateInput';

import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        {/* // All the time that I call onChange inside the DateInput component, I will change setDate value */}
        <DateInput date={date} onChange={setDate} />
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
