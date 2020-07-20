import React, { useMemo } from 'react'; // useMeno is to memorise valeu and do not recalculary the value when not necessary
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { TouchableOpacity  } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

// This data and onCancle are have been returned of Dasboard Page
export default function Appointment({ data, onCancel }) {
  const dateParserd = useMemo(
    () => {
      return formatRelative(parseISO(data.date), new Date(), {
        locale: pt,
        addSuffix: true,
      });
    }, [data.date]);

  return (
    // data.past is being used on style.js for opacity function
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{ uri: data.provider.avatar
            ? data.provider.avatar.url
            : `http://api.adorable.io/avatar/50/${data.provider.name}.png` }}
        />

        <Info>
          <Name>{data.provider.name}</Name>
          <Time>{dateParserd}</Time>
        </Info>
      </Left>

      {/* If I can cancel the appointment I show de icon */}
      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}


    </Container>
  )
}
