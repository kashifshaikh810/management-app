import React, {useState} from 'react';
import CompanyTimeOffMarkup from './CompanyTimeOffMarkup';

const CompanyTimeOff = props => {
  const [showInputSection, setShowInputSection] = useState(false);
  const [showPolicyInputSection, setShowPolicyInputSection] = useState(false);

  return (
    <CompanyTimeOffMarkup
      {...props}
      showInputSection={showInputSection}
      setShowInputSection={setShowInputSection}
      showPolicyInputSection={showPolicyInputSection}
      setShowPolicyInputSection={setShowPolicyInputSection}
    />
  );
};

export default CompanyTimeOff;
