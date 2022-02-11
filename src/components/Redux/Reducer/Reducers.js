import {
  FETCH_PROFILE_DETAILS_DATA,
  FETCH_USER_DATA,
} from '../Action/ActionTypes';

const initalState = {
  currUserData: {},
  profileData: {},
};

export const reducer = (state = initalState, action) => {
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
    default:
      return state;
  }
};
