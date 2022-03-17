import React, {useEffect, useRef, useState} from 'react';
import {LogBox} from 'react-native';
import CompanyPerformanceReviewMarkup from './CompanyPerformanceReviewMarkup';

const CompanyPerformanceReview = props => {
  const [showNewPerformanceConfig, setShowNewPerformanceConfig] =
    useState(false);
  const [showTab, setShowTab] = useState('general-settings');

  // general settings tab states
  const [generalSettingsButton, setGeneralSettingsButton] = useState('disable');
  const [employeesScrollVal, setEmployeesScrollVal] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  // core values tab states
  const [coreValuesButton, setCoreValuesButton] = useState('disable');
  const [coreValuesSaveInputs, setCoreValuesSaveInputs] = useState([]);

  // rate value items states
  const [rateValuesSaveInputs, setRateValuesSaveInputs] = useState([]);

  // key performance indicators tab states
  const [keyPerformanceButton, setKeyPerformanceButton] = useState('disable');

  const [keyPerformanceSaveInputs, setKeyPerformanceSaveInputs] = useState([]);

  // company feedback tab states
  const [companyFeedBackButton, setCompanyFeedBackButton] = useState('disable');
  const [companyFeedBackSaveInputs, setCompanyFeedBackSaveInputs] = useState(
    [],
  );

  // rate value items states
  const [
    keyPerformanceRateValueSaveInputs,
    setKeyPerformanceRateValueSaveInputs,
  ] = useState([]);

  // goals achievement tab states
  const [goalsAchievementButton, setGoalsAchievementButton] =
    useState('disable');

  // core value items function
  const coreValueAddNewInput = () => {
    let arr = [...coreValuesSaveInputs];
    arr.push({
      titleInput: 'Title',
      shortDescInput: 'Short description',
    });
    setCoreValuesSaveInputs(arr);
  };

  const removeCoreValueInput = (item, index) => {
    let arr = [...coreValuesSaveInputs];
    arr.splice(index, 1);
    setCoreValuesSaveInputs(arr);
  };

  // rate value items function
  const rateValueAddNewInput = () => {
    let arr = [...rateValuesSaveInputs];
    arr.push({
      titleInput: 'Title',
      pointsInput: 'Points Rate',
    });
    setRateValuesSaveInputs(arr);
  };

  const removeRateValueInput = (item, index) => {
    let arr = [...rateValuesSaveInputs];
    arr.splice(index, 1);
    setRateValuesSaveInputs(arr);
  };

  // key performance function
  const keyPerformanceAddNewInput = () => {
    let arr = [...keyPerformanceSaveInputs];
    arr.push({
      titleInput: 'Title',
      pointsInput: 'Short Description',
    });
    setKeyPerformanceSaveInputs(arr);
  };

  const removeKeyPerformanceInput = (item, index) => {
    let arr = [...keyPerformanceSaveInputs];
    arr.splice(index, 1);
    setKeyPerformanceSaveInputs(arr);
  };

  // key performance rate value function
  const keyPerformanceRateValueAddNewInput = () => {
    let arr = [...keyPerformanceRateValueSaveInputs];
    arr.push({
      titleInput: 'Title',
      pointsInput: 'Points Rate',
    });
    setKeyPerformanceRateValueSaveInputs(arr);
  };

  const removeKeyPerformanceRateValueInput = (item, index) => {
    let arr = [...keyPerformanceRateValueSaveInputs];
    arr.splice(index, 1);
    setKeyPerformanceRateValueSaveInputs(arr);
  };

  // company feedback function
  const companyFeedBackAddNewInput = () => {
    let arr = [...companyFeedBackSaveInputs];
    arr.push({
      titleInput: 'Title',
      descInput: 'Description',
    });
    setCompanyFeedBackSaveInputs(arr);
  };

  const removeCompanyFeedBackInput = (item, index) => {
    let arr = [...companyFeedBackSaveInputs];
    arr.splice(index, 1);
    setCompanyFeedBackSaveInputs(arr);
  };

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
      coreValuesButton={coreValuesButton}
      setCoreValuesButton={setCoreValuesButton}
      coreValuesSaveInputs={coreValuesSaveInputs}
      coreValueAddNewInput={coreValueAddNewInput}
      removeCoreValueInput={removeCoreValueInput}
      rateValueAddNewInput={rateValueAddNewInput}
      removeRateValueInput={removeRateValueInput}
      rateValuesSaveInputs={rateValuesSaveInputs}
      keyPerformanceButton={keyPerformanceButton}
      setKeyPerformanceButton={setKeyPerformanceButton}
      keyPerformanceSaveInputs={keyPerformanceSaveInputs}
      keyPerformanceAddNewInput={keyPerformanceAddNewInput}
      removeKeyPerformanceInput={removeKeyPerformanceInput}
      keyPerformanceRateValueAddNewInput={keyPerformanceRateValueAddNewInput}
      removeKeyPerformanceRateValueInput={removeKeyPerformanceRateValueInput}
      keyPerformanceRateValueSaveInputs={keyPerformanceRateValueSaveInputs}
      companyFeedBackButton={companyFeedBackButton}
      setCompanyFeedBackButton={setCompanyFeedBackButton}
      companyFeedBackSaveInputs={companyFeedBackSaveInputs}
      setCompanyFeedBackSaveInputs={setCompanyFeedBackSaveInputs}
      companyFeedBackAddNewInput={companyFeedBackAddNewInput}
      removeCompanyFeedBackInput={removeCompanyFeedBackInput}
      goalsAchievementButton={goalsAchievementButton}
      setGoalsAchievementButton={setGoalsAchievementButton}
    />
  );
};

export default CompanyPerformanceReview;
