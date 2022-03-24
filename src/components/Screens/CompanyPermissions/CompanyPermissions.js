import React, {useEffect, useState} from 'react';
import CompanyPermissionsMarkup from './CompanyPermissionsMarkup';

const CompanyPermissions = props => {
  const [showTab, setShowTab] = useState('roles');
  const [showRefineRolesInputSection, setShowRefineRolesInputSection] =
    useState(false);

  // add new role modal states
  const [showNewRoleModal, setShowNewRoleModal] = useState(false);
  const [showRoleModalTab, setShowRoleModalTab] = useState('role-information');
  const [showButton, setShowButton] = useState('grant-all-access');

  return (
    <CompanyPermissionsMarkup
      {...props}
      showTab={showTab}
      setShowTab={setShowTab}
      showRefineRolesInputSection={showRefineRolesInputSection}
      setShowRefineRolesInputSection={setShowRefineRolesInputSection}
      showNewRoleModal={showNewRoleModal}
      setShowNewRoleModal={setShowNewRoleModal}
      showRoleModalTab={showRoleModalTab}
      setShowRoleModalTab={setShowRoleModalTab}
      showButton={showButton}
      setShowButton={setShowButton}
    />
  );
};

export default CompanyPermissions;
