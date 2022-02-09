import React, {useState} from 'react';
import {Platform} from 'react-native';
import TimeOffMarkup from './TimeOffMarkup';

const TimeOff = props => {
  //from date section
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isFromSelected, setIsFromSelected] = useState(false);

  //to date section
  const [toDate, setToDate] = useState(new Date());
  const [toMode, setToMode] = useState('date');
  const [toShow, setToShow] = useState(false);
  const [isToSelected, setIsToSelected] = useState(false);

  // extra states
  const [showRangeSection, setShowRangeSection] = useState(false);
  const [showAddNewReqModal, setShowAddNewReqModal] = useState(false);
  const [showTimeOffModal, setShowTimeOffModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  // From
  let fromSectionDate = new Date(date);
  let ddDate = fromSectionDate.getDate();
  let mmMonth = fromSectionDate.getMonth() + 1;
  let yyYear = fromSectionDate.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mmMonth < 10) {
    mmMonth = '0' + mmMonth;
  }
  fromSectionDate = ddDate + '/' + mmMonth + '/' + yyYear;

  // To
  let toSectionDate = new Date(toDate);
  let dd = toSectionDate.getDate();
  let mm = toSectionDate.getMonth() + 1;
  let yyyy = toSectionDate.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  toSectionDate = dd + '/' + mm + '/' + yyyy;

  // Functions

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

  const toOnChange = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setToShow(Platform.OS === 'ios');
    setToDate(currentDate);
    if (currentDate !== toDate) {
      setIsToSelected(true);
    }
  };

  const toShowMode = currentMode => {
    setToShow(true);
    setToMode(currentMode);
  };

  const toShowDatepicker = () => {
    toShowMode('date');
  };

  const clearAllInput = () => {};

  const search = () => {};

  return (
    <TimeOffMarkup
      {...props}
      search={search}
      clearAllInput={clearAllInput}
      date={date}
      setDate={setDate}
      mode={mode}
      setMode={setMode}
      show={show}
      setShow={setShow}
      onChange={onChange}
      showDatepicker={showDatepicker}
      toShowDatepicker={toShowDatepicker}
      toOnChange={toOnChange}
      toDate={toDate}
      toMode={toMode}
      toShow={toShow}
      toSectionDate={toSectionDate}
      fromSectionDate={fromSectionDate}
      isFromSelected={isFromSelected}
      setIsFromSelected={setIsFromSelected}
      isToSelected={isToSelected}
      setIsToSelected={setIsToSelected}
      showRangeSection={showRangeSection}
      setShowRangeSection={setShowRangeSection}
      showAddNewReqModal={showAddNewReqModal}
      setShowAddNewReqModal={setShowAddNewReqModal}
      showTimeOffModal={showTimeOffModal}
      setShowTimeOffModal={setShowTimeOffModal}
    />
  );
};

export default TimeOff;
