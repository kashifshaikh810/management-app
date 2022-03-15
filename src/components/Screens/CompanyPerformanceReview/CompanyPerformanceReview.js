import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import CompanyPerformanceReviewMarkup from './CompanyPerformanceReviewMarkup';

const CompanyPerformanceReview = props => {
  const [showNewPerformanceConfig, setShowNewPerformanceConfig] =
    useState(false);
  const [showTab, setShowTab] = useState('general-settings');
  const [generalSettingsButton, setGeneralSettingsButton] = useState('disable');

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
    />
  );
};

export default CompanyPerformanceReview;
