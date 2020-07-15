import produce from 'immer'; // Lib to handle states

/**
 * I receive an email and password inside my redux-saga and make the call to the back end
 * I recive provider's data and the Token of the back-end with JDK Auth;
 * Store information and data inside of the Reducer.
 */
const INITIAL_STATE = {
  profile: null, // User data (null initialization).
};

// reducer is always a function
// The action return data reducer
export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.profile = action.payload.user; // draft to handle
        break;
      }
      case '@user/UPDATE_PROFILE_SUCCESS': {
        draft.profile = action.payload.profile;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.profile = null;
        break;
      }

      default:
    }
  });
}
