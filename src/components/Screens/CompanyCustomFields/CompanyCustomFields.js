import React, {useState} from 'react';
import CompanyCustomFieldsMarkup from './CompanyCustomFieldsMarkup';

const CompanyCustomFields = props => {
  const [showRefineFieldsInputSection, setShowRefineFieldsInputSection] =
    useState(false);

  return (
    <CompanyCustomFieldsMarkup
      {...props}
      showRefineFieldsInputSection={showRefineFieldsInputSection}
      setShowRefineFieldsInputSection={setShowRefineFieldsInputSection}
    />
  );
};

export default CompanyCustomFields;
