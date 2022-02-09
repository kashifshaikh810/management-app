import React, {useState} from 'react';
import {Platform} from 'react-native';
import MyProfileMarkup from './MyProfileMarkup';

const MyProfile = props => {
  const [selectedTab, setSelectedTab] = useState('time-off');
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
    />
  );
};

export default MyProfile;
