import {
  FETCH_CONTACT_INFORMATION_DATA,
  FETCH_EDIT_BIO_DATA,
  FETCH_EDUCATION_DATA,
  FETCH_EMERGENCY_CONTACT_DATA,
  FETCH_LICENSES_AND_CERTIFICATIONS_DATA,
  FETCH_PROFILE_DETAILS_DATA,
  FETCH_USER_DATA,
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
    default:
      return state;
  }
};
