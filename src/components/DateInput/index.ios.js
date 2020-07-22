import React, { useState, useMemo } from 'react';
import { DatePickerIOS } from 'react-native';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  // If I will show the dateInput component
  const [opned, setOpned] = useState(false);

  const dateFormat = useMemo(() => format(date, "dd 'de' MMMM 'de' yyyy", { locale: pt } ), [date]);

  return (
    <Container>
      <DateButton onPress={() => setOpned(!opned)} >
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormat}</DateText>
      </DateButton>

      {opned && (
        <Picker>
          <DatePickerIOS
            date={date}
            onChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locate="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  )
}
