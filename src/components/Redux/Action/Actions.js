import {Auth, Database} from '../../firebaseTools/index';
import {
  FETCH_USER_DATA,
  FETCH_PROFILE_DETAILS_DATA,
  FETCH_EDIT_BIO_DATA,
  FETCH_EMERGENCY_CONTACT_DATA,
} from './ActionTypes';

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

export const fetchEditBioData = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/editBio/${uid}`)
    .on('value', snapshot => {
      let editBioData = snapshot.val();
      dispatch({
        type: FETCH_EDIT_BIO_DATA,
        payload: editBioData,
      });
    });
};

export const fetchEmergencyContactData = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/emergencyContact/${uid}`)
    .on('value', snapshot => {
      let emergencyContactData = snapshot.val();
      dispatch({
        type: FETCH_EMERGENCY_CONTACT_DATA,
        payload: emergencyContactData,
      });
    });
};
