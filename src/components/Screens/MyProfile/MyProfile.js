import React, {useState} from 'react';
import {Platform} from 'react-native';
import DocumentPicker from 'react-native-document-picker';

import MyProfileMarkup from './MyProfileMarkup';

const MyProfile = props => {
  const [selectedTab, setSelectedTab] = useState('time-off');
  const [profileImage, setProfileImage] = useState('');
  const [showYearModal, setShowYearModal] = useState({
    show: false,
    type: '',
    chooseVal: '2022',
  });
  const [showTypeModal, setShowTypeModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowMondaySection, setIsShowMondaySection] = useState(false);
  const [isShowTuesdaySection, setIsShowTuesdaySection] = useState(false);
  const [isShowWednesdaySection, setIsShowWednesdaySection] = useState(false);
  const [isShowThursdaySection, setIsShowThursdaySection] = useState(false);
  const [isShowFridaySection, setIsShowFridaySection] = useState(false);
  const [isShowSaturdaySection, setIsShowSaturdaySection] = useState(false);
  const [isShowSundaySection, setIsShowSundaySection] = useState(false);

  // modals for profile edit section
  const [showProfileDetailsModal, setShowProfileDetailsModal] = useState(false);

  // modal section
  const [isShowMondayModal, setIsShowMondayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowMondayToModal, setIsShowMondayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowTuesdayModal, setIsShowTuesdayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowTuesdayToModal, setIsShowTuesdayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowWednesdayModal, setIsShowWednesdayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowWednesdayToModal, setIsShowWednesdayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowThursdayModal, setIsShowThursdayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowThursdayToModal, setIsShowThursdayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowFridayModal, setIsShowFridayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowFridayToModal, setIsShowFridayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowSaturdayModal, setIsShowSaturdayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowSaturdayToModal, setIsShowSaturdayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [isShowSundayModal, setIsShowSundayModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowSundayToModal, setIsShowSundayToModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isFromSelected, setIsFromSelected] = useState(false);
  const [selectSingleOrMarried, setSelectSingleOrMarried] = useState('');
  const [isShowGenderModal, setIsShowGenderModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowLanguagesModal, setIsShowLanguagesModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [isShowZoneModal, setIsShowZoneModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [showPositionModalForProfile, setshowPositionModalForProfile] =
    useState({
      show: false,
      type: '',
      chooseVal: '',
    });
  const [showDepartmentModalForProfile, setShowDepartmentModalForProfile] =
    useState({
      show: false,
      type: '',
      chooseVal: '',
    });
  const [showEmploymentLevelModal, setShowEmploymentLevelModal] =
    useState(false);

  const [showDirectManagerModal, setShowDirectManagerModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [showCountryModal, setShowCountryModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [showStateRegionModal, setShowStateRegionModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [showIssueDateMonthModal, setShowIssueDateMonthModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [showIssueDateYearsModal, setShowIssueDateYearsModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  const [showExpirationDateMonthModal, setShowExpirationDateMonthModal] =
    useState({
      show: false,
      type: '',
      chooseVal: '',
    });

  const [showExpirationDateYearsModal, setShowExpirationDateYearsModal] =
    useState({
      show: false,
      type: '',
      chooseVal: '',
    });

  const [isShowEmploymentDetailsModal, setIsShowEmploymentDetailsModal] =
    useState(false);
  const [isShowEditBioModal, setIsShowEditBioModal] = useState(false);
  const [isShowContactInformationModal, setIsShowContactInformationModal] =
    useState(false);
  const [isShowAddLicenseCertification, setIsShowAddLicenseCertification] =
    useState(false);

  const [dateOfHire, setDateOfHire] = useState(new Date());
  const [modeOfHire, setModeOfHire] = useState('date');
  const [showOfHire, setShowOfHire] = useState(false);
  const [isSelectedDateOfHire, setIsSelectedDateOfHire] = useState(false);

  // From date
  let fromSectionDate = new Date(date);
  let ddDate = fromSectionDate.getDate();
  let mmMonth = fromSectionDate.getMonth() + 1;
  let yyYear = fromSectionDate.getFullYear();
  if (ddDate < 10) {
    ddDate = '0' + ddDate;
  }

  if (mmMonth < 10) {
    mmMonth = '0' + mmMonth;
  }
  fromSectionDate = ddDate + '/' + mmMonth + '/' + yyYear;

  //functions

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (currentDate !== date) {
      setIsFromSelected(true);
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  // date of hire functionallity
  let hireDateSection = new Date(dateOfHire);
  let hireDate = hireDateSection.getDate();
  let hireMonth = hireDateSection.getMonth() + 1;
  let hireYear = hireDateSection.getFullYear();
  if (hireDate < 10) {
    hireDate = '0' + hireDate;
  }

  if (hireMonth < 10) {
    hireMonth = '0' + hireMonth;
  }
  hireDateSection = hireDate + '/' + hireMonth + '/' + hireYear;

  // date of hire functions
  const hireOnChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateOfHire;
    setShowOfHire(Platform.OS === 'ios');
    setDateOfHire(currentDate);
    if (currentDate !== dateOfHire) {
      setIsSelectedDateOfHire(true);
    }
  };

  const hireShowMode = currentMode => {
    setShowOfHire(true);
    setModeOfHire(currentMode);
  };

  const hireShowDatepicker = () => {
    hireShowMode('date');
  };

  const uploadProfileImage = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setProfileImage(file);
      console.log(file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  return (
    <MyProfileMarkup
      {...props}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      showYearModal={showYearModal}
      setShowYearModal={setShowYearModal}
      showTypeModal={showTypeModal}
      setShowTypeModal={setShowTypeModal}
      isShowMondaySection={isShowMondaySection}
      setIsShowMondaySection={setIsShowMondaySection}
      isShowTuesdaySection={isShowTuesdaySection}
      setIsShowTuesdaySection={setIsShowTuesdaySection}
      isShowWednesdaySection={isShowWednesdaySection}
      setIsShowWednesdaySection={setIsShowWednesdaySection}
      isShowThursdaySection={isShowThursdaySection}
      setIsShowThursdaySection={setIsShowThursdaySection}
      isShowFridaySection={isShowFridaySection}
      setIsShowFridaySection={setIsShowFridaySection}
      isShowSaturdaySection={isShowSaturdaySection}
      setIsShowSaturdaySection={setIsShowSaturdaySection}
      isShowSundaySection={isShowSundaySection}
      setIsShowSundaySection={setIsShowSundaySection}
      isShowMondayModal={isShowMondayModal}
      setIsShowMondayModal={setIsShowMondayModal}
      isShowMondayToModal={isShowMondayToModal}
      setIsShowMondayToModal={setIsShowMondayToModal}
      isShowTuesdayModal={isShowTuesdayModal}
      setIsShowTuesdayModal={setIsShowTuesdayModal}
      isShowTuesdayToModal={isShowTuesdayToModal}
      setIsShowTuesdayToModal={setIsShowTuesdayToModal}
      isShowWednesdayModal={isShowWednesdayModal}
      setIsShowWednesdayModal={setIsShowWednesdayModal}
      isShowWednesdayToModal={isShowWednesdayToModal}
      setIsShowWednesdayToModal={setIsShowWednesdayToModal}
      isShowThursdayModal={isShowThursdayModal}
      setIsShowThursdayModal={setIsShowThursdayModal}
      isShowThursdayToModal={isShowThursdayToModal}
      setIsShowThursdayToModal={setIsShowThursdayToModal}
      isShowFridayModal={isShowFridayModal}
      setIsShowFridayModal={setIsShowFridayModal}
      isShowFridayToModal={isShowFridayToModal}
      setIsShowFridayToModal={setIsShowFridayToModal}
      isShowSaturdayModal={isShowSaturdayModal}
      setIsShowSaturdayModal={setIsShowSaturdayModal}
      isShowSaturdayToModal={isShowSaturdayToModal}
      setIsShowSaturdayToModal={setIsShowSaturdayToModal}
      isShowSundayModal={isShowSundayModal}
      setIsShowSundayModal={setIsShowSundayModal}
      isShowSundayToModal={isShowSundayToModal}
      setIsShowSundayToModal={setIsShowSundayToModal}
      showProfileDetailsModal={showProfileDetailsModal}
      setShowProfileDetailsModal={setShowProfileDetailsModal}
      showDatepicker={showDatepicker}
      onChange={onChange}
      mode={mode}
      show={show}
      date={date}
      isFromSelected={isFromSelected}
      fromSectionDate={fromSectionDate}
      selectSingleOrMarried={selectSingleOrMarried}
      setSelectSingleOrMarried={setSelectSingleOrMarried}
      isShowGenderModal={isShowGenderModal}
      setIsShowGenderModal={setIsShowGenderModal}
      isShowLanguagesModal={isShowLanguagesModal}
      setIsShowLanguagesModal={setIsShowLanguagesModal}
      isShowZoneModal={isShowZoneModal}
      setIsShowZoneModal={setIsShowZoneModal}
      showPositionModalForProfile={showPositionModalForProfile}
      setshowPositionModalForProfile={setshowPositionModalForProfile}
      hireShowDatepicker={hireShowDatepicker}
      hireOnChange={hireOnChange}
      modeOfHire={modeOfHire}
      showOfHire={showOfHire}
      dateOfHire={dateOfHire}
      isSelectedDateOfHire={isSelectedDateOfHire}
      hireDateSection={hireDateSection}
      showDepartmentModalForProfile={showDepartmentModalForProfile}
      setShowDepartmentModalForProfile={setShowDepartmentModalForProfile}
      showEmploymentLevelModal={showEmploymentLevelModal}
      setShowEmploymentLevelModal={setShowEmploymentLevelModal}
      isShowEmploymentDetailsModal={isShowEmploymentDetailsModal}
      setIsShowEmploymentDetailsModal={setIsShowEmploymentDetailsModal}
      isShowEditBioModal={isShowEditBioModal}
      setIsShowEditBioModal={setIsShowEditBioModal}
      isShowContactInformationModal={isShowContactInformationModal}
      setIsShowContactInformationModal={setIsShowContactInformationModal}
      showCountryModal={showCountryModal}
      setShowCountryModal={setShowCountryModal}
      showStateRegionModal={showStateRegionModal}
      setShowStateRegionModal={setShowStateRegionModal}
      isShowAddLicenseCertification={isShowAddLicenseCertification}
      setIsShowAddLicenseCertification={setIsShowAddLicenseCertification}
      showIssueDateMonthModal={showIssueDateMonthModal}
      setShowIssueDateMonthModal={setShowIssueDateMonthModal}
      showIssueDateYearsModal={showIssueDateYearsModal}
      setShowIssueDateYearsModal={setShowIssueDateYearsModal}
      showExpirationDateMonthModal={showExpirationDateMonthModal}
      setShowExpirationDateMonthModal={setShowExpirationDateMonthModal}
      showExpirationDateYearsModal={showExpirationDateYearsModal}
      setShowExpirationDateYearsModal={setShowExpirationDateYearsModal}
      uploadProfileImage={uploadProfileImage}
      profileImage={profileImage}
      // get all users from database and show this section
      showDirectManagerModal={showDirectManagerModal}
      setShowDirectManagerModal={setShowDirectManagerModal}
    />
  );
};

export default MyProfile;
