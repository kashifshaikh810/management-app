import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import EmployeeProfileMarkup from './EmployeeProfileMarkup';

const EmployeeProfile = props => {
  const [companyUserData, setCompanyUserData] = useState({});
  const [companyUserBioData, setCompanyUserBioData] = useState({});
  const [companyUserProfileDetailsData, setCompanyUserProfileDetailsData] =
    useState({});
  const [companyUserEducationData, setCompanyUserEducationData] = useState({});
  const [isFetchDataLoading, setIsFetchDataLoading] = useState(false);

  // add new note modal
  const [showAddNewNoteModal, setShowAddNewNoteModal] = useState(false);

  // redux tool
  const {
    companyUser,
    companyUserBio,
    companyUserProfileDetails,
    companyUserEducation,
  } = useSelector(state => state.reduc);

  useEffect(() => {
    setIsFetchDataLoading(true);
    setCompanyUserData(companyUser ? companyUser : []);
    setCompanyUserBioData(companyUserBio ? companyUserBio : []);
    setCompanyUserProfileDetailsData(
      companyUserProfileDetails ? companyUserProfileDetails : [],
    );
    setCompanyUserEducationData(
      companyUserEducation ? companyUserEducation : [],
    );
    setTimeout(() => {
      setIsFetchDataLoading(false);
    }, 300);
  }, [
    companyUser,
    companyUserBio,
    companyUserProfileDetails,
    companyUserEducation,
    props.navigation,
  ]);

  return (
    <EmployeeProfileMarkup
      {...props}
      companyUserData={companyUserData}
      companyUserBioData={companyUserBioData}
      companyUserProfileDetailsData={companyUserProfileDetailsData}
      companyUserEducationData={companyUserEducationData}
      isFetchDataLoading={isFetchDataLoading}
      showAddNewNoteModal={showAddNewNoteModal}
      setShowAddNewNoteModal={setShowAddNewNoteModal}
    />
  );
};

export default EmployeeProfile;
