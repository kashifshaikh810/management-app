import React, {useEffect, useState} from 'react';
import EmployeesMarkup from './EmployeesMarkup';
import {ToastAndroid} from 'react-native';

import {Auth, Database} from '../../firebaseTools/index';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchCompanyEmployeeEducation,
  fetchCompanyEmployeeProfileDetails,
  fetchCompanyNoteForEmployee,
  fetchCompanyUser,
  fetchCompanyUserBio,
  fetchCurrentCompanyEmployees,
  fetchEditBioData,
} from '../../Redux/Action/Actions';

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
  const [companyEmployeesData, setCompanyEmployeesData] = useState([]);
  const [activeEmployees, setActiveEmployees] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [acitveUserData, setAcitveUserData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  // add new employee modal states
  const [showRoleDropDown, setShowRoleDropDown] = useState(false);
  const [showAddNewEmployeeModal, setShowAddNewEmployeeModal] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [maritialStatus, setMaritialStatus] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showErr, setShowErr] = useState('');

  // birth day date picker states
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isFromSelected, setIsFromSelected] = useState(false);

  // date of hire date picker states
  const [dateOfHire, setDateOfHire] = useState(new Date());
  const [modeOfHire, setModeOfHire] = useState('date');
  const [showOfHire, setShowOfHire] = useState(false);

  // redux tools
  const {currUserData, companyEmployees, companyUserEducation} = useSelector(
    state => state.reduc,
  );
  const dispatch = useDispatch();

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

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
    ToastAndroid.showWithGravityAndOffset(
      'Page Reloading...',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const emailFunc = text => {
    setEmail(text);
    setShowErr('');
  };

  const passwordFunc = text => {
    setPassword(text);
    setShowErr('');
  };

  const submitAddNewEmployee = async () => {
    let uid = Auth()?.currentUser?.uid;
    let companyEmail = currUserData ? currUserData.email : '';
    let companyPassword = currUserData ? currUserData.password : '';
    if (
      firstName &&
      lastName &&
      email &&
      birthdayDate &&
      hireDateSection &&
      gender &&
      maritialStatus &&
      password
    ) {
      setIsLoading(true);
      await Auth()
        .createUserWithEmailAndPassword(email, password)
        .then(({user}) => {
          Auth().signOut();
          Auth()
            .signInWithEmailAndPassword(companyEmail, companyPassword)
            .then(() => {
              Database()
                .ref(`/newEmployess/${uid}/${user.uid}`)
                .set({
                  userId: user.uid,
                  companyId: uid,
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
                  activityType: 'inactive',
                  userType: 'employee',
                })
                .then(() => {
                  Database()
                    .ref(`/profileDetails/${user.uid}`)
                    .set({
                      userId: user.uid,
                      companyId: uid,
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
                      Database()
                        .ref(`/userSignUp/${user.uid}`)
                        .set({
                          userId: user.uid,
                          companyId: uid,
                          firstName: firstName,
                          lastName: lastName,
                          phone: '',
                          email: email,
                          password: password,
                          userType: 'employee',
                        })
                        .then(() => {
                          setFirstName('');
                          setLastName('');
                          setIsFromSelected(false);
                          setEmail('');
                          setPassword('');
                          setGender('');
                          setMaritialStatus('');
                          setDateOfHire(new Date());
                          setIsLoading(false);
                          setShowAddNewEmployeeModal(false);
                          ToastAndroid.showWithGravityAndOffset(
                            'Employee Successfully Added... ',
                            ToastAndroid.LONG,
                            ToastAndroid.BOTTOM,
                            25,
                            50,
                          );
                        })
                        .catch(err => {
                          console.log(err, 'err');
                          setIsLoading(false);
                        });
                    })
                    .catch(err => {
                      console.log(err, 'err');
                      setIsLoading(false);
                    });
                })
                .catch(err => {
                  console.log(err, 'err');
                  setIsLoading(false);
                });
            })
            .catch(err => {
              console.log(err, 'err');
              setIsLoading(false);
            });
        })
        .catch(err => {
          console.log(err, 'err');
          if (err.code === 'auth/email-already-in-use') {
            setShowErr('The email address is already use by another account');
          } else if (err.code === 'auth/invalid-email') {
            setShowErr('The email address is invalid');
          } else if (err.code === 'auth/weak-password') {
            setShowErr('The password length must be greater then 6');
          }
          setIsLoading(false);
        });
    }
  };

  const search = () => {};

  const clearAllInput = () => {};

  const viewEmployeeProfile = (item, index) => {
    let employeeId = item.userId;
    dispatch(fetchCompanyUser(employeeId));
    dispatch(fetchCompanyUserBio(employeeId));
    dispatch(fetchCompanyEmployeeProfileDetails(employeeId));
    dispatch(fetchCompanyEmployeeEducation(employeeId));
    dispatch(fetchCompanyNoteForEmployee(employeeId));
    props.navigation.navigate('EmployeeProfile');
  };

  // for show data
  useEffect(() => {
    let data = companyEmployees ? Object.values(companyEmployees) : [];
    let numOfActiveEmployees = data.filter((item, index) => {
      return item.activityType === 'active';
    });
    setActiveEmployees(numOfActiveEmployees?.length);
    setCompanyEmployeesData(data);
  }, [companyEmployees]);

  useEffect(() => {
    setAcitveUserData(currUserData);
  }, [currUserData]);

  // for fetch data
  useEffect(() => {
    let uid = Auth()?.currentUser?.uid;
    let id = currUserData?.userID;
    let companyId = currUserData.companyId;
    const unsubscribe = props.navigation.addListener('focus', () => {
      setIsDataLoading(true);
      dispatch(fetchCurrentCompanyEmployees(companyId || uid));
      dispatch(fetchCompanyEmployeeEducation(id));
      setTimeout(() => {
        setIsDataLoading(false);
      }, 100);
    });

    return () => {
      unsubscribe;
    };
  }, [refreshing]);

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
      emailFunc={emailFunc}
      gender={gender}
      setGender={setGender}
      maritialStatus={maritialStatus}
      setMaritialStatus={setMaritialStatus}
      submitAddNewEmployee={submitAddNewEmployee}
      password={password}
      passwordFunc={passwordFunc}
      isLoading={isLoading}
      showErr={showErr}
      companyEmployeesData={companyEmployeesData}
      activeEmployees={activeEmployees}
      refreshing={refreshing}
      onRefresh={onRefresh}
      acitveUserData={acitveUserData}
      isDataLoading={isDataLoading}
    />
  );
};

export default Employees;
