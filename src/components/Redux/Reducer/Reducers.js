import {FETCH_USER_DATA} from '../Action/ActionTypes';

const initalState = {
  currUserData: {},
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return {
        ...state,
        currUserData: action.payload,
      };
    default:
      return state;
  }
};
