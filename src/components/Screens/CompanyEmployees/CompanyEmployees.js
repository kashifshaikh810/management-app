import React, {useState} from 'react';
import CompanyEmployeesMarkup from './CompanyEmployeesMarkup';

const CompanyEmployees = props => {
  const [selectedTab, setSelectedTab] = useState('advanced-settings');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <CompanyEmployeesMarkup
      {...props}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      toggleCheckBox={toggleCheckBox}
      setToggleCheckBox={setToggleCheckBox}
    />
  );
};

export default CompanyEmployees;
