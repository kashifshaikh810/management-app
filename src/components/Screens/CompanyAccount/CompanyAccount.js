import React, {useState} from 'react';
import CompanyAccountMarkup from './CompanyAccountMarkup';

const CompanyAccount = props => {
  const [showSelectedTab, setShowSelectedTab] = useState(
    'billing-and-payment-method',
  );
  return (
    <CompanyAccountMarkup
      {...props}
      showSelectedTab={showSelectedTab}
      setShowSelectedTab={setShowSelectedTab}
    />
  );
};

export default CompanyAccount;
