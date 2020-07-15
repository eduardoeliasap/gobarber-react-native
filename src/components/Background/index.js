import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

// Uso attrs para passar propriedades por dentro de styledcomponents
export default styled(LinearGradient).attrs({
  colors: ['#7159c1', '#ab59c1'], // Vai de uma cor a outra formando um gradient
})`
  flex: 1;
`;
