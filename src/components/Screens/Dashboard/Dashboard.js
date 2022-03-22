import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchEditBioData,
  fetchProfileDetails,
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
  }, [currUserData]);

  useEffect(() => {
    setIsDataLoading(true);
    dispatch(fetchUser());
    dispatch(fetchProfileDetails());
    dispatch(fetchEditBioData());
    setTimeout(() => {
      setIsDataLoading(false);
    }, 2000);
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
