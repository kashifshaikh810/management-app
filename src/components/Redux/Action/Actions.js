import {Auth, Database} from '../../firebaseTools/index';
import {
  FETCH_USER_DATA,
  FETCH_PROFILE_DETAILS_DATA,
  FETCH_EDIT_BIO_DATA,
  FETCH_EMERGENCY_CONTACT_DATA,
  FETCH_CONTACT_INFORMATION_DATA,
  FETCH_EDUCATION_DATA,
  FETCH_LICENSES_AND_CERTIFICATIONS_DATA,
  PRIMARY_COLOR,
  PRIMARY_HOVER_COLOR,
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

export const fetchContactInformationData = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/contactInformation/${uid}`)
    .on('value', snapshot => {
      let contactInfoData = snapshot.val();
      dispatch({
        type: FETCH_CONTACT_INFORMATION_DATA,
        payload: contactInfoData,
      });
    });
};

export const fetchEducationData = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/education/${uid}`)
    .on('value', snapshot => {
      let education = snapshot.val();
      dispatch({
        type: FETCH_EDUCATION_DATA,
        payload: education,
      });
    });
};

export const fetchLicensesAndCertificationsData = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/addLicenseOrCertification/${uid}`)
    .on('value', snapshot => {
      let license = snapshot.val();
      dispatch({
        type: FETCH_LICENSES_AND_CERTIFICATIONS_DATA,
        payload: license,
      });
    });
};

export const changePrimaryColor = selectedColor => dispatch => {
  dispatch({
    type: PRIMARY_COLOR,
    payload: selectedColor,
  });
};

export const changePrimaryHoverColor = selectedColor => dispatch => {
  dispatch({
    type: PRIMARY_HOVER_COLOR,
    payload: selectedColor,
  });
};
