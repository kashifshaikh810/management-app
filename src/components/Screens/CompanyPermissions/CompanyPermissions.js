import React, {useEffect, useState} from 'react';
import CompanyPermissionsMarkup from './CompanyPermissionsMarkup';

const CompanyPermissions = props => {
  const [showTab, setShowTab] = useState('roles');
  const [showRefineRolesInputSection, setShowRefineRolesInputSection] =
    useState(false);

  return (
    <CompanyPermissionsMarkup
      {...props}
      showTab={showTab}
      setShowTab={setShowTab}
      showRefineRolesInputSection={showRefineRolesInputSection}
      setShowRefineRolesInputSection={setShowRefineRolesInputSection}
    />
  );
};

export default CompanyPermissions;
