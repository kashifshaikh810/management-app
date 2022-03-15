import React, {useEffect, useRef, useState} from 'react';
import {LogBox} from 'react-native';
import CompanyPerformanceReviewMarkup from './CompanyPerformanceReviewMarkup';

const CompanyPerformanceReview = props => {
  const [showNewPerformanceConfig, setShowNewPerformanceConfig] =
    useState(false);
  const [showTab, setShowTab] = useState('general-settings');
  const [generalSettingsButton, setGeneralSettingsButton] = useState({
    show: 'disable',
    tabName: 'general-settings',
  });
  const [employeesScrollVal, setEmployeesScrollVal] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <CompanyPerformanceReviewMarkup
      {...props}
      showNewPerformanceConfig={showNewPerformanceConfig}
      setShowNewPerformanceConfig={setShowNewPerformanceConfig}
      showTab={showTab}
      setShowTab={setShowTab}
      generalSettingsButton={generalSettingsButton}
      setGeneralSettingsButton={setGeneralSettingsButton}
      employeesScrollVal={employeesScrollVal}
      setEmployeesScrollVal={setEmployeesScrollVal}
      isSelected={isSelected}
      setIsSelected={setIsSelected}
    />
  );
};

export default CompanyPerformanceReview;
