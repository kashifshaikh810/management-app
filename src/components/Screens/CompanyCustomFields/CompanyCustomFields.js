import React, {useState} from 'react';
import CompanyCustomFieldsMarkup from './CompanyCustomFieldsMarkup';

const CompanyCustomFields = props => {
  const [showRefineFieldsInputSection, setShowRefineFieldsInputSection] =
    useState(false);
  const [showNewEmployeeTabModal, setShowNewEmployeeTabModal] = useState(false);
  const [showCreateCustomFieldModal, setShowCreateCustomFieldModal] =
    useState(false);

  return (
    <CompanyCustomFieldsMarkup
      {...props}
      showRefineFieldsInputSection={showRefineFieldsInputSection}
      setShowRefineFieldsInputSection={setShowRefineFieldsInputSection}
      showNewEmployeeTabModal={showNewEmployeeTabModal}
      setShowNewEmployeeTabModal={setShowNewEmployeeTabModal}
      showCreateCustomFieldModal={showCreateCustomFieldModal}
      setShowCreateCustomFieldModal={setShowCreateCustomFieldModal}
    />
  );
};

export default CompanyCustomFields;
