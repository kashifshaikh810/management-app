import React from 'react';
import {useSelector} from 'react-redux';
import EmployeeProfileMarkup from './EmployeeProfileMarkup';

const EmployeeProfile = props => {
  // const {} = useSelector(state => state.reduc);

  return <EmployeeProfileMarkup {...props} />;
};

export default EmployeeProfile;
