import {Auth, Database} from '../../firebaseTools/index';
import {FETCH_USER_DATA} from './ActionTypes';

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
