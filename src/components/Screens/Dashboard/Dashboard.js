import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUser} from '../../Redux/Action/Actions';
import DashboardMarkup from './DashboardMarkup';

const Dashboard = props => {
  const dispatch = useDispatch();
  const {currUserData} = useSelector(state => state.reduc);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    setUserData(currUserData);
  }, [currUserData]);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return <DashboardMarkup {...props} userData={userData} />;
};

export default Dashboard;
