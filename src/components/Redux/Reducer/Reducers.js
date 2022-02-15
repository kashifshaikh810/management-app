import {
  FETCH_EDIT_BIO_DATA,
  FETCH_PROFILE_DETAILS_DATA,
  FETCH_USER_DATA,
} from '../Action/ActionTypes';

const initialState = {
  currUserData: {},
  profileData: {},
  bioData: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        currUserData: action.payload,
      };
    case FETCH_PROFILE_DETAILS_DATA:
      return {
        ...state,
        profileData: action.payload,
      };
    case FETCH_EDIT_BIO_DATA:
      return {
        ...state,
        bioData: action.payload,
      };
    default:
      return state;
  }
};
