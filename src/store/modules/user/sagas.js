// Module to listen the actions
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    // Desistrutured name and email and other information into the ... rest
    const { name, email, avatar_id, ...rest } = payload.data;

    // Object.assign to merge two objects
    const profile = Object.assign(
      { name, email, avatar_id },
      rest.oldPassword ? rest : {},
    );

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    // toast.success('Perfil atualizado com sucesso!');

    // I shoot a action to update profile data of the screen
    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro', 'Erro ao atualizar perfil, confira novamente seus dados!');
    //toast.error('Erro ao atualizar perfil, confira novamente seus dados!');
    // I shoot a action to update profile data of the screen
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
