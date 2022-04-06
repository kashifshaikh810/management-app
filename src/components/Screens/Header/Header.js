import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Auth} from '../../firebaseTools';
import {
  fetchCompanyEmployeeEducation,
  fetchCompanyEmployeeProfileDetails,
  fetchCompanyUser,
  fetchCompanyUserBio,
  fetchCurrentCompanyEmployees,
} from '../../Redux/Action/Actions';
import HeaderMarkup from './HeaderMarkup';

const Header = props => {
  const [focus, setFocus] = useState(false);
  const [showSearchEmployeesModal, setshowSearchEmployeesModal] =
    useState(false);
  const [search, setSearch] = useState('');
  const [companyEmployeesData, setCompanyEmployeesData] = useState([]);

  // redux tools
  const {currUserData, companyEmployees} = useSelector(state => state.reduc);
  const dispatch = useDispatch();

  const clearTextInput = () => {
    setSearch('');
  };

  const goToEmployeeProfile = (item, index) => {
    let employeeId = item.userId;
    dispatch(fetchCompanyUser(employeeId));
    dispatch(fetchCompanyUserBio(employeeId));
    dispatch(fetchCompanyEmployeeProfileDetails(employeeId));
    dispatch(fetchCompanyEmployeeEducation(employeeId));
    props.navigation.navigate('EmployeeProfile');
    setshowSearchEmployeesModal(false);
    setSearch('');
    setFocus(false);
  };

  // for showing modal
  useEffect(() => {
    if (search.length >= 1) {
      setshowSearchEmployeesModal(true);
    } else if (search.length >= 0) {
      setshowSearchEmployeesModal(false);
    }
  }, [search.length]);

  // for fetch data
  useEffect(() => {
    let uid = Auth()?.currentUser?.uid;
    if (currUserData.userType === 'employee') {
      dispatch(fetchCurrentCompanyEmployees(currUserData.companyId));
    } else {
      dispatch(fetchCurrentCompanyEmployees(uid));
    }
  }, []);

  // for showing data
  useEffect(() => {
    let data = companyEmployees ? Object.values(companyEmployees) : [];
    let dataRes = data.filter((item, index) => {
      let name = `${item.firstName + ' ' + item.lastName}`;
      return (
        item.firstName === search || item.lastName === search || name === search
      );
    });
    setCompanyEmployeesData(dataRes);
  }, [search]);

  useEffect(() => {
    if (companyEmployeesData.length === 0) {
      if (focus) {
        null;
      } else {
        setshowSearchEmployeesModal(false);
        setSearch('');
      }
    }
  }, [focus]);

  useEffect(() => {
    if (companyEmployeesData.length >= 1) {
      setFocus(true);
      setshowSearchEmployeesModal(true);
    }
  }, [companyEmployeesData.length]);

  return (
    <HeaderMarkup
      {...props}
      focus={focus}
      setFocus={setFocus}
      search={search}
      setSearch={setSearch}
      showSearchEmployeesModal={showSearchEmployeesModal}
      setshowSearchEmployeesModal={setshowSearchEmployeesModal}
      clearTextInput={clearTextInput}
      companyEmployeesData={companyEmployeesData}
      goToEmployeeProfile={goToEmployeeProfile}
    />
  );
};

export default Header;
