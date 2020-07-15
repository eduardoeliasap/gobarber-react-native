import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, TInput } from './styles';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255, 255, 255, 0.6)" /> }
      <TInput {...rest} ref={ref} />
    </Container>
  )
}

// Para cada propriedade que será passado para criar o componente (neste caso, um Input),
// devo declarar os tipos dessas propriedades (pode ser string, bool, isRequired e outros)
Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

// Para cada propriedade que será passado para criar o componente (neste caso, um button),
// devo declarar um valor default (caso não seja requerido)
Input.defaultProps = {
  icon: null,
  style: {},
};

// Permite o uso das ref dentro do componente
export default forwardRef(Input);
