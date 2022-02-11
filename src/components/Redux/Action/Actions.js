import {Auth, Database} from '../../firebaseTools/index';
import {FETCH_USER_DATA, FETCH_PROFILE_DETAILS_DATA} from './ActionTypes';

export const fetchUser = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/userSignUp/${uid}`)
    .on('value', snapshot => {
      let userData = snapshot.val();
      dispatch({
        type: FETCH_USER_DATA,
        payload: userData,
      });
    });
};

export const fetchProfileDetails = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/profileDetails/${uid}`)
    .on('value', snapshot => {
      let data = snapshot.val();
      dispatch({
        type: FETCH_PROFILE_DETAILS_DATA,
        payload: data,
      });
    });
};
