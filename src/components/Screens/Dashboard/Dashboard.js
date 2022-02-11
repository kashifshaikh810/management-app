import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfileDetails} from '../../Redux/Action/Actions';
import DashboardMarkup from './DashboardMarkup';

const Dashboard = props => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const dispatch = useDispatch();
  const {profileData} = useSelector(state => state.reduc);
  const [profileDetailsData, setProfileDetailsData] = useState({});

  useEffect(() => {
    setProfileDetailsData(profileData);
  }, [profileData]);

  useEffect(() => {
    setIsDataLoading(true);
    dispatch(fetchProfileDetails());
    setTimeout(() => {
      setIsDataLoading(false);
    }, 2000);
  }, []);

  console.log(isDataLoading);
  return (
    <DashboardMarkup
      {...props}
      profileDetailsData={profileDetailsData}
      isDataLoading={isDataLoading}
    />
  );
};

export default Dashboard;
