import produce from 'immer'; // Lib to handle states

/**
 * I receive an email and password inside my redux-saga and make the call to the back end
 * I recive provider's data and the Token of the back-end with JDK Auth;
 * Store information and data inside of the Reducer.
 */
const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

// reducer is always a function
// The action return data reducer
export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }

      default:
      // return state;
    }
  }); // draft to handle
}
