import React, {useState} from 'react';
import CompanyTimeOffMarkup from './CompanyTimeOffMarkup';

const CompanyTimeOff = props => {
  const [showInputSection, setShowInputSection] = useState(false);
  const [showPolicyInputSection, setShowPolicyInputSection] = useState(false);
  const [showAddTimeOffTypeModal, setShowAddTimeOffTypeModal] = useState(false);
  const [employeeGroup, setEmployeeGroup] = useState('');
  const [showAddTimeOffPolicy, setShowAddTimeOffPolicy] = useState(false);

  return (
    <CompanyTimeOffMarkup
      {...props}
      showInputSection={showInputSection}
      setShowInputSection={setShowInputSection}
      showPolicyInputSection={showPolicyInputSection}
      setShowPolicyInputSection={setShowPolicyInputSection}
      showAddTimeOffTypeModal={showAddTimeOffTypeModal}
      setShowAddTimeOffTypeModal={setShowAddTimeOffTypeModal}
      employeeGroup={employeeGroup}
      setEmployeeGroup={setEmployeeGroup}
      showAddTimeOffPolicy={showAddTimeOffPolicy}
      setShowAddTimeOffPolicy={setShowAddTimeOffPolicy}
    />
  );
};

export default CompanyTimeOff;
