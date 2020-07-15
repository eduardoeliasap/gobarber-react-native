import React from 'react';
import { ActivityIndicator } from 'react-native'; // Para adionar um sinal de loading
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

// children retorna todo o conteudo de dentro das tags do botão;
// loading pode ser true ou false.
// e o restante das propriedades "...rest"
export default function Button({ children, loading, ...rest }) {
  return (
    // Passo todo o restante das propriedades para dentro do Container
    <Container {...rest}>
      {/* Apresento o ActivityIndicator se existir um loading, senão apresento Text */}
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
      <Text>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
}
