import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Keyboard} from 'react-native';
import {Auth} from '../../firebaseTools';
import {fetchCurrentCompanyEmployees} from '../../Redux/Action/Actions';
import HeaderMarkup from './HeaderMarkup';

const Header = props => {
  const [focus, setFocus] = useState(false);
  const [showSearchEmployeesModal, setshowSearchEmployeesModal] =
    useState(false);
  const [search, setSearch] = useState('');
  const [companyEmployeesData, setCompanyEmployeesData] = useState([]);

  // redux tools
  const {companyEmployees} = useSelector(state => state.reduc);
  const dispatch = useDispatch();

  const clearTextInput = () => {
    setSearch('');
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
    dispatch(fetchCurrentCompanyEmployees(uid));
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
    if (focus) {
      null;
    } else {
      setshowSearchEmployeesModal(false);
      setSearch('');
    }
  }, [focus]);

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
    />
  );
};

export default Header;
