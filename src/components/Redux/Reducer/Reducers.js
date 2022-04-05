import {
  CREATE_TASK_LISTS,
  FETCH_COMPANY_EMPLOYEES,
  FETCH_COMPANY_USER,
  FETCH_COMPANY_USER_BIO,
  FETCH_COMPANY_USER_PROFILE_DETAILS,
  FETCH_CONTACT_INFORMATION_DATA,
  FETCH_EDIT_BIO_DATA,
  FETCH_EDUCATION_DATA,
  FETCH_EMERGENCY_CONTACT_DATA,
  FETCH_LICENSES_AND_CERTIFICATIONS_DATA,
  FETCH_PROFILE_DETAILS_DATA,
  FETCH_USER_DATA,
  GET_TASK_LISTS,
  PARAM_LISTS_DATA,
  PRIMARY_COLOR,
  PRIMARY_HOVER_COLOR,
} from '../Action/ActionTypes';

const initialState = {
  currUserData: {},
  profileData: {},
  bioData: {},
  contactData: {},
  contactInfoData: {},
  educationData: {},
  licenseAndCertificationsData: {},
  primaryColor: null,
  primaryHoverColor: null,
  companyTaskLists: [],
  createListsData: [],
  taskData: {},
  companyEmployees: ['kuch nh he bc'],
  companyUser: {},
  companyUserBio: {},
  companyUserProfileDetails: {},
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
    case FETCH_EMERGENCY_CONTACT_DATA:
      return {
        ...state,
        contactData: action.payload,
      };
    case FETCH_CONTACT_INFORMATION_DATA:
      return {
        ...state,
        contactInfoData: action.payload,
      };
    case FETCH_EDUCATION_DATA:
      return {
        ...state,
        educationData: action.payload,
      };
    case FETCH_LICENSES_AND_CERTIFICATIONS_DATA:
      return {
        ...state,
        licenseAndCertificationsData: action.payload,
      };
    case PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: action.payload,
      };
    case PRIMARY_HOVER_COLOR:
      return {
        ...state,
        primaryHoverColor: action.payload,
      };
    case GET_TASK_LISTS:
      return {
        ...state,
        companyTaskLists: action.payload,
      };
    case CREATE_TASK_LISTS:
      return {
        ...state,
        createListsData: action.payload,
      };
    case PARAM_LISTS_DATA:
      return {
        ...state,
        taskData: action.payload,
      };
    case FETCH_COMPANY_EMPLOYEES:
      return {
        ...state,
        companyEmployees: action.payload,
      };
    case FETCH_COMPANY_USER:
      return {
        ...state,
        companyUser: action.payload,
      };
    case FETCH_COMPANY_USER_BIO:
      return {
        ...state,
        companyUserBio: action.payload,
      };
    case FETCH_COMPANY_USER_PROFILE_DETAILS:
      return {
        ...state,
        companyUserProfileDetails: action.payload,
      };
    default:
      return state;
  }
};
