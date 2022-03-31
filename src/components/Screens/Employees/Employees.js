import React, {useState} from 'react';
import EmployeesMarkup from './EmployeesMarkup';

import {Auth, Database} from '../../firebaseTools/index';

const Employees = props => {
  const [changeArrow, setChangeArrow] = useState(false);
  const [showDepartmentModal, setshowDepartmentModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });
  const [showPositionModal, setshowPositionModal] = useState({
    show: false,
    type: '',
    chooseVal: '',
  });

  // add new employee modal states
  const [showRoleDropDown, setShowRoleDropDown] = useState(false);
  const [showAddNewEmployeeModal, setShowAddNewEmployeeModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [maritialStatus, setMaritialStatus] = useState('');

  // birth day date picker states
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isFromSelected, setIsFromSelected] = useState(false);

  // date of hire date picker states
  const [dateOfHire, setDateOfHire] = useState(new Date());
  const [modeOfHire, setModeOfHire] = useState('date');
  const [showOfHire, setShowOfHire] = useState(false);

  const search = () => {};

  const clearAllInput = () => {};

  const viewEmployeeProfile = () => {
    props.navigation.navigate('EmployeeProfile');
  };

  // birth day date picker functions
  let birthdayDate = new Date(date);
  let ddDate = birthdayDate.getDate();
  let mmMonth = birthdayDate.getMonth() + 1;
  let yyYear = birthdayDate.getFullYear();

  if (ddDate < 10) {
    ddDate = '0' + ddDate;
  }

  if (mmMonth < 10) {
    mmMonth = '0' + mmMonth;
  }

  birthdayDate = ddDate + '/' + mmMonth + '/' + yyYear;

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

  // date of hire functions
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
  };

  const hireShowMode = currentMode => {
    setShowOfHire(true);
    setModeOfHire(currentMode);
  };

  const hireShowDatepicker = () => {
    hireShowMode('date');
  };

  const submitAddNewEmployee = async () => {
    let uid = Auth()?.currentUser?.uid;
    if (
      firstName &&
      lastName &&
      email &&
      birthdayDate &&
      hireDateSection &&
      gender &&
      maritialStatus
    ) {
      Database()
        .ref(`/newEmployess/${email}`)
        .set({
          userId: uid,
          firstName: firstName,
          lastName: lastName,
          email: email,
          dateOfBirth: birthdayDate,
          employeeHireDate: hireDateSection,
          gender: gender,
          maritialStatus: maritialStatus,
          alternativeEmail: '',
          language: '',
          profileImage: '',
          timeZone: '',
          middleName: '',
        })
        .then(() => {
          console.log('success');
          setShowAddNewEmployeeModal(false);
        })
        .catch(err => {
          console.log(err, 'err');
        });
    }
  };

  return (
    <EmployeesMarkup
      {...props}
      changeArrow={changeArrow}
      setChangeArrow={setChangeArrow}
      showDepartmentModal={showDepartmentModal}
      setshowDepartmentModal={setshowDepartmentModal}
      showPositionModal={showPositionModal}
      setshowPositionModal={setshowPositionModal}
      clearAllInput={clearAllInput}
      search={search}
      viewEmployeeProfile={viewEmployeeProfile}
      showDatepicker={showDatepicker}
      onChange={onChange}
      date={date}
      mode={mode}
      show={show}
      birthdayDate={birthdayDate}
      isFromSelected={isFromSelected}
      hireShowDatepicker={hireShowDatepicker}
      hireOnChange={hireOnChange}
      dateOfHire={dateOfHire}
      modeOfHire={modeOfHire}
      showOfHire={showOfHire}
      hireDateSection={hireDateSection}
      showRoleDropDown={showRoleDropDown}
      setShowRoleDropDown={setShowRoleDropDown}
      showAddNewEmployeeModal={showAddNewEmployeeModal}
      setShowAddNewEmployeeModal={setShowAddNewEmployeeModal}
      firstName={firstName}
      setFirstName={setFirstName}
      lastName={lastName}
      setLastName={setLastName}
      email={email}
      setEmail={setEmail}
      gender={gender}
      setGender={setGender}
      maritialStatus={maritialStatus}
      setMaritialStatus={setMaritialStatus}
      submitAddNewEmployee={submitAddNewEmployee}
    />
  );
};

export default Employees;
