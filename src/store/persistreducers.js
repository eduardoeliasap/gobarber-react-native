import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'gobarber',
      storage: AsyncStorage,
      whitelist: ['auth', 'user'], // reducers name that I want storage informations
    },
    reducers
  );

  return persistedReducer;
}; // Function that receive the reducers as a parammeter
