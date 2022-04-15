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
  GET_TASK_LISTS,
  CREATE_TASK_LISTS,
  PARAM_LISTS_DATA,
  FETCH_COMPANY_EMPLOYEES,
  FETCH_COMPANY_USER,
  FETCH_COMPANY_USER_BIO,
  FETCH_COMPANY_USER_PROFILE_DETAILS,
  FETCH_COMPANY_USER_EDUCATION,
  FETCH_COMPANY_NOTE_FOR_EMPLOYEE,
  FETCH_COMPANY_IMAGE,
  FETCH_COMPANY_PROFILE_DETAILS,
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

export const fetchTaskListData = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/companyAddList/${uid}`)
    .on('value', snapshot => {
      let listData = snapshot.val() ? snapshot.val() : [];
      dispatch({
        type: GET_TASK_LISTS,
        payload: listData,
      });
    });
};

export const fetchCreateTaskListData = index => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/createCompanyTasks/${uid}/${index}`)
    .on('value', snapshot => {
      let createListData = snapshot.val() ? snapshot.val() : [];
      dispatch({
        type: CREATE_TASK_LISTS,
        payload: createListData,
      });
    });
};

export const paramsListsData = items => dispatch => {
  dispatch({
    type: PARAM_LISTS_DATA,
    payload: items,
  });
};

export const fetchCurrentCompanyEmployees = uid => dispatch => {
  Database()
    .ref(`/newEmployess/${uid}`)
    .on('value', snapshot => {
      let companyEmployees = snapshot ? snapshot.val() : {};
      dispatch({
        type: FETCH_COMPANY_EMPLOYEES,
        payload: companyEmployees,
      });
    });
};

export const fetchCompanyUser = employeeId => dispatch => {
  Database()
    .ref(`/userSignUp/${employeeId}`)
    .on('value', snapshot => {
      let companyUser = snapshot.val();
      dispatch({
        type: FETCH_COMPANY_USER,
        payload: companyUser,
      });
    });
};

export const fetchCompanyUserBio = employeeId => dispatch => {
  Database()
    .ref(`/editBio/${employeeId}`)
    .on('value', snapshot => {
      let employeeBio = snapshot.val();
      dispatch({
        type: FETCH_COMPANY_USER_BIO,
        payload: employeeBio,
      });
    });
};

export const fetchCompanyEmployeeProfileDetails = employeeId => dispatch => {
  Database()
    .ref(`/profileDetails/${employeeId}`)
    .on('value', snapshot => {
      let data = snapshot.val();
      dispatch({
        type: FETCH_COMPANY_USER_PROFILE_DETAILS,
        payload: data,
      });
    });
};

export const fetchCompanyEmployeeEducation = employeeId => dispatch => {
  Database()
    .ref(`/education/${employeeId}`)
    .on('value', snapshot => {
      let companyEmployeeEducation = snapshot.val();
      dispatch({
        type: FETCH_COMPANY_USER_EDUCATION,
        payload: companyEmployeeEducation,
      });
    });
};

export const fetchCompanyNoteForEmployee = employeeId => dispatch => {
  Database()
    .ref(`/companyNoteForEmployee/${employeeId}`)
    .on('value', snapshot => {
      let companyNote = snapshot.val();
      dispatch({
        type: FETCH_COMPANY_NOTE_FOR_EMPLOYEE,
        payload: companyNote,
      });
    });
};

export const fetchCompanyImage = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/companyImage/${uid}`)
    .on('value', snapshot => {
      let image = snapshot.val();
      dispatch({
        type: FETCH_COMPANY_IMAGE,
        payload: image,
      });
    });
};

export const fetchCompanyProfileDetails = () => dispatch => {
  let uid = Auth()?.currentUser?.uid;
  Database()
    .ref(`/companyDetails/${uid}`)
    .on('value', snapshot => {
      let companyData = snapshot.val();
      dispatch({
        type: FETCH_COMPANY_PROFILE_DETAILS,
        payload: companyData,
      });
    });
};
