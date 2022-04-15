import React, {useEffect, useState} from 'react';
import {LogBox} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import {useDispatch, useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';
import {Auth, Database, Storage} from '../../firebaseTools';
import {
  fetchCompanyImage,
  fetchCompanyProfileDetails,
} from '../../Redux/Action/Actions';

import CompanyAccountMarkup from './CompanyAccountMarkup';

const CompanyAccount = props => {
  const [showSelectedTab, setShowSelectedTab] = useState(
    'billing-and-payment-method',
  );

  // redux tools
  const dispatch = useDispatch();
  const {companyImage, profileData, companyProfileDetails, currUserData} =
    useSelector(state => state.reduc);

  const [showPaymentMethodTab, setShowPaymentMethodTab] = useState('monthly');
  const [companyProfileImage, setCompanyProfileImage] = useState('empty');
  const [companyProfileData, setCompanyProfileData] = useState({});
  const [companyRegistrationDate, setCompanyRegistrationDate] = useState('');
  const [companyProfileDetailsData, setCompanyProfileDetailsData] = useState(
    {},
  );

  // company information modal
  const [showCompanyDetailsModal, setShowCompanyDetailsModal] = useState(false);
  const [showCompanyCountryModal, setShowCompanyCountryModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  // company details modal inputs
  const [companyName, setCompanyName] = useState('');
  const [companyNameSpace, setCompanyNameSpace] = useState('');
  const [companyStreetAddressOne, setCompanyStreetAddressOne] = useState('');
  const [companyCity, setCompanyCity] = useState('');
  const [companyState, setCompanyState] = useState('');
  const [companyZipCode, setCompanyZipCode] = useState('');
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // company update payment information modal
  const [
    showCompanyUpdatePaymentInfoModal,
    setShowCompanyUpdatePaymentInfoModal,
  ] = useState(false);
  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');

  const handleCardNumber = text => {
    let formattedText = text.split(' ').join('');
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,4}', 'g')).join(' ');
    }
    setCardNumber(formattedText);
    return formattedText;
  };

  const handleExpirationDate = text => {
    let formattedText = text.split(' ').join('');
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp('.{1,2}', 'g')).join(' ');
    }
    setExpirationDate(formattedText);
    return formattedText;
  };

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
      await uploadCompanyImageToFirebase(file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  const uploadCompanyImageToFirebase = async file => {
    try {
      const storageRef = await Storage().ref(`/companyImage/${file.name}`);
      const myPicOrg = file.uri;
      const result = await RNFetchBlob.fs.readFile(myPicOrg, 'base64');
      const task = storageRef.putString(result, 'base64', {
        contentType: file.type,
      });
      task.on('state_changed', taskSnapshot => {
        console.log(
          `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`,
        );
      });
      await task.then(imageSnapshot => {
        console.log('Image Upload Successfully');
        Storage()
          .ref(imageSnapshot.metadata.fullPath)
          .getDownloadURL()
          .then(downloadURL => {
            console.log('image ', downloadURL);
            let uid = Auth()?.currentUser?.uid;
            Database()
              .ref(`/companyImage/${uid}`)
              .set({companyImage: downloadURL});
          });
      });
    } catch (err) {
      console.log('errr ', err);
    }
  };

  const companyDetailsSubmit = () => {
    const companyCountry = showCompanyCountryModal?.chooseVal;
    let uid = Auth()?.currentUser?.uid;
    if (
      companyName &&
      companyNameSpace &&
      companyPhoneNumber &&
      companyState &&
      companyZipCode &&
      companyCity &&
      companyStreetAddressOne &&
      companyCountry
    ) {
      setIsLoading(true);
      Database()
        .ref(`/companyDetails/${uid}`)
        .set({
          companyName: companyName,
          companyNameSpace: companyNameSpace,
          companyPhoneNumber: companyPhoneNumber,
          companyState: companyState,
          companyZipCode: companyZipCode,
          companyCity: companyCity,
          companyStreetAddressOne: companyStreetAddressOne,
          companyCountry: companyCountry,
        })
        .then(() => {
          setShowCompanyDetailsModal(false);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err, 'err');
          setIsLoading(false);
        });
    }
  };

  const showModal = () => {
    setShowCompanyDetailsModal(true);
    if (companyProfileDetails) {
      setCompanyName(companyProfileDetailsData?.companyName);
      setCompanyNameSpace(companyProfileDetailsData?.companyNameSpace);
      setCompanyCity(companyProfileDetailsData?.companyCity);
      setCompanyZipCode(companyProfileDetailsData?.companyZipCode);
      setCompanyPhoneNumber(companyProfileDetailsData?.companyPhoneNumber);
      setCompanyState(companyProfileDetailsData?.companyState);
      setCompanyStreetAddressOne(
        companyProfileDetailsData?.companyStreetAddressOne,
      );
    } else {
      if (currUserData.middleName) {
        setCompanyNameSpace(
          currUserData?.firstName +
            ' ' +
            currUserData?.middleName +
            ' ' +
            currUserData?.lastName,
        );
        setCompanyName(
          currUserData?.firstName +
            ' ' +
            currUserData?.middleName +
            ' ' +
            currUserData?.lastName,
        );
      } else {
        setCompanyNameSpace(
          currUserData?.firstName + ' ' + currUserData?.lastName,
        );
        setCompanyName(currUserData?.firstName + ' ' + currUserData?.lastName);
      }
    }
  };

  useEffect(() => {
    dispatch(fetchCompanyImage());
    dispatch(fetchCompanyProfileDetails());
  }, []);

  useEffect(() => {
    setCompanyProfileImage(companyImage?.companyImage);
    setCompanyProfileData(currUserData ? currUserData : []);
    let date = new Date(Auth()?.currentUser?.metadata?.creationTime);
    let dateRes = date
      ? date?.toISOString()?.slice(0, 10)?.split('-')?.reverse()?.join('/')
      : '';
    setCompanyRegistrationDate(dateRes);

    setCompanyProfileDetailsData(
      companyProfileDetails ? companyProfileDetails : '',
    );
  }, [companyImage, profileData, companyProfileDetails]);

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
      companyProfileData={companyProfileData}
      companyRegistrationDate={companyRegistrationDate}
      companyName={companyName}
      setCompanyName={setCompanyName}
      companyNameSpace={companyNameSpace}
      setCompanyNameSpace={setCompanyNameSpace}
      companyStreetAddressOne={companyStreetAddressOne}
      setCompanyStreetAddressOne={setCompanyStreetAddressOne}
      companyCity={companyCity}
      setCompanyCity={setCompanyCity}
      companyState={companyState}
      setCompanyState={setCompanyState}
      companyZipCode={companyZipCode}
      setCompanyZipCode={setCompanyZipCode}
      companyPhoneNumber={companyPhoneNumber}
      setCompanyPhoneNumber={setCompanyPhoneNumber}
      companyDetailsSubmit={companyDetailsSubmit}
      isLoading={isLoading}
      companyProfileDetailsData={companyProfileDetailsData}
      showModal={showModal}
      cardHolderName={cardHolderName}
      setCardHolderName={setCardHolderName}
      cardNumber={cardNumber}
      setCardNumber={setCardNumber}
      handleCardNumber={handleCardNumber}
      expirationDate={expirationDate}
      handleExpirationDate={handleExpirationDate}
    />
  );
};

export default CompanyAccount;
