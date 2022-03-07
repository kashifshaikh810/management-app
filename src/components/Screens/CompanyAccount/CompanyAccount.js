import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

import CompanyAccountMarkup from './CompanyAccountMarkup';

const CompanyAccount = props => {
  const [showSelectedTab, setShowSelectedTab] = useState(
    'billing-and-payment-method',
  );

  const [showPaymentMethodTab, setShowPaymentMethodTab] = useState('monthly');

  const uploadCompanyImage = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      console.log(file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  return (
    <CompanyAccountMarkup
      {...props}
      showSelectedTab={showSelectedTab}
      setShowSelectedTab={setShowSelectedTab}
      showPaymentMethodTab={showPaymentMethodTab}
      setShowPaymentMethodTab={setShowPaymentMethodTab}
      uploadCompanyImage={uploadCompanyImage}
    />
  );
};

export default CompanyAccount;
