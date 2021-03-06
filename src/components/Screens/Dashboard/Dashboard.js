import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Auth} from '../../firebaseTools';
import {
  fetchCompanyImage,
  fetchCompanyProfileDetails,
  fetchContactInformationData,
  fetchCurrentCompanyEmployees,
  fetchEditBioData,
  fetchEducationData,
  fetchEmergencyContactData,
  fetchLicensesAndCertificationsData,
  fetchProfileDetails,
  fetchTaskListData,
  fetchUser,
} from '../../Redux/Action/Actions';
import DashboardMarkup from './DashboardMarkup';

const Dashboard = props => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const dispatch = useDispatch();
  const {currUserData} = useSelector(state => state.reduc);
  const [currentUserData, setCurrentUserData] = useState({});

  useEffect(() => {
    setCurrentUserData(currUserData);
    LogBox.ignoreLogs(['react-native-gesture-handler']);
    LogBox.ignoreLogs(['Cannot update a component']);
    LogBox.ignoreLogs(['Require cycle']);
    let uid = Auth()?.currentUser?.uid;
    console.log(currUserData);
    if (currUserData.userType === 'employee') {
      dispatch(fetchCurrentCompanyEmployees(currUserData.companyId));
    } else {
      dispatch(fetchCurrentCompanyEmployees(uid));
    }
  }, [currUserData]);

  useEffect(() => {
    setIsDataLoading(true);
    dispatch(fetchUser());
    dispatch(fetchProfileDetails());
    dispatch(fetchEditBioData());
    dispatch(fetchCompanyImage());
    dispatch(fetchEmergencyContactData());
    dispatch(fetchContactInformationData());
    dispatch(fetchEducationData());
    dispatch(fetchLicensesAndCertificationsData());
    dispatch(fetchTaskListData());
    dispatch(fetchCompanyProfileDetails());
    setIsDataLoading(false);
  }, []);

  return (
    <DashboardMarkup
      {...props}
      currentUserData={currentUserData}
      isDataLoading={isDataLoading}
    />
  );
};

export default Dashboard;
