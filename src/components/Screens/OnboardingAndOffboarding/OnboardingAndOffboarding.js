import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import OnboardingAndOffboardingMarkup from './OnboardingAndOffboardingMarkup';
import {Auth, Database} from '../../firebaseTools/index';
import {fetchTaskListData} from '../../Redux/Action/Actions';

const OnboardingAndOffboarding = props => {
  const [showTab, setShowTab] = useState('my-task');
  const [showInputSection, setShowInputSection] = useState(false);
  const [showAddListModal, setShowAddListModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showOnboardingOrOffboarding, setShowOnboardingOrOffboarding] =
    useState('');
  const [companyTasksListData, setCompanyTasksListData] = useState([]);

  // redux
  const dispatch = useDispatch();
  const {companyTaskLists} = useSelector(state => state.reduc);

  // add list input
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addListCompany = () => {
    let uid = Auth()?.currentUser?.uid;
    if (showOnboardingOrOffboarding && title && description) {
      setIsLoading(true);
      Database().ref(`/companyAddList/${uid}`).push({
        companyId: uid,
        showOnboardingOrOffboarding: showOnboardingOrOffboarding,
        title: title,
        description: description,
      });
      setIsLoading(false);
      setShowAddListModal(false);
      setShowOnboardingOrOffboarding('');
      setTitle('');
      setDescription('');
    }
  };

  // for data fetch
  useEffect(() => {
    dispatch(fetchTaskListData());
  }, []);

  // for data show
  useEffect(() => {
    setCompanyTasksListData(companyTaskLists);
  }, [companyTaskLists]);

  return (
    <OnboardingAndOffboardingMarkup
      {...props}
      showTab={showTab}
      setShowTab={setShowTab}
      showInputSection={showInputSection}
      setShowInputSection={setShowInputSection}
      showAddListModal={showAddListModal}
      setShowAddListModal={setShowAddListModal}
      showOnboardingOrOffboarding={showOnboardingOrOffboarding}
      setShowOnboardingOrOffboarding={setShowOnboardingOrOffboarding}
      addListCompany={addListCompany}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      isLoading={isLoading}
      companyTasksListData={companyTasksListData}
    />
  );
};

export default OnboardingAndOffboarding;
