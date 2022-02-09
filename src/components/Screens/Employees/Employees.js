import React, {useState} from 'react';
import EmployeesMarkup from './EmployeesMarkup';

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

  const search = () => {};

  const clearAllInput = () => {};

  const viewEmployeeProfile = () => {
    props.navigation.navigate('EmployeeProfile');
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
    />
  );
};

export default Employees;
