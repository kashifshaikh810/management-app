import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProfileDetails, fetchUser} from '../../Redux/Action/Actions';
import DashboardMarkup from './DashboardMarkup';

const Dashboard = props => {
  const [isDataLoading, setIsDataLoading] = useState(false);
  const dispatch = useDispatch();
  const {currUserData} = useSelector(state => state.reduc);
  const [currentUserData, setCurrentUserData] = useState({});

  useEffect(() => {
    setCurrentUserData(currUserData);
  }, [currUserData]);

  useEffect(() => {
    setIsDataLoading(true);
    dispatch(fetchUser());
    dispatch(fetchProfileDetails());
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
