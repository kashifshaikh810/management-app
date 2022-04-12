import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

import CompanyAccountMarkup from './CompanyAccountMarkup';

const CompanyAccount = props => {
  const [showSelectedTab, setShowSelectedTab] = useState(
    'billing-and-payment-method',
  );

  const [showPaymentMethodTab, setShowPaymentMethodTab] = useState('monthly');
  const [companyProfileImage, setCompanyProfileImage] = useState('empty');

  // company information modal
  const [showCompanyDetailsModal, setShowCompanyDetailsModal] = useState(false);
  const [showCompanyCountryModal, setShowCompanyCountryModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  // company update payment information modal
  const [
    showCompanyUpdatePaymentInfoModal,
    setShowCompanyUpdatePaymentInfoModal,
  ] = useState(false);

  // company select plan modal
  const [showCompanySelecPlanModal, setShowCompanySelecPlanModal] = useState({
    show: false,
    data: {},
  });

  const [showCompanySelecPlanYearlyModal, setShowCompanySelecPlanYearlyModal] =
    useState({
      show: false,
      type: '',
      data: {},
    });

  const uploadCompanyImage = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setCompanyProfileImage(file);
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
      showCompanyDetailsModal={showCompanyDetailsModal}
      setShowCompanyDetailsModal={setShowCompanyDetailsModal}
      showCompanyCountryModal={showCompanyCountryModal}
      setShowCompanyCountryModal={setShowCompanyCountryModal}
      showCompanyUpdatePaymentInfoModal={showCompanyUpdatePaymentInfoModal}
      setShowCompanyUpdatePaymentInfoModal={
        setShowCompanyUpdatePaymentInfoModal
      }
      showCompanySelecPlanModal={showCompanySelecPlanModal}
      setShowCompanySelecPlanModal={setShowCompanySelecPlanModal}
      showCompanySelecPlanYearlyModal={showCompanySelecPlanYearlyModal}
      setShowCompanySelecPlanYearlyModal={setShowCompanySelecPlanYearlyModal}
      companyProfileImage={companyProfileImage}
    />
  );
};

export default CompanyAccount;
