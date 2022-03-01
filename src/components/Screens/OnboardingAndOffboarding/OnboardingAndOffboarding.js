import React, {useState} from 'react';
import OnboardingAndOffboardingMarkup from './OnboardingAndOffboardingMarkup';

const OnboardingAndOffboarding = props => {
  const [showTab, setShowTab] = useState('my-task');
  const [showInputSection, setShowInputSection] = useState(false);
  const [showAddListModal, setShowAddListModal] = useState(false);
  const [showOnboardingOrOffboarding, setShowOnboardingOrOffboarding] =
    useState('');

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
    />
  );
};

export default OnboardingAndOffboarding;
