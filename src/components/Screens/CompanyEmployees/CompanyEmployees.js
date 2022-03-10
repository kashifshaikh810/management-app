import React, {useState} from 'react';
import CompanyEmployeesMarkup from './CompanyEmployeesMarkup';

const CompanyEmployees = props => {
  const [selectedTab, setSelectedTab] = useState('advanced-settings');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [showJOBTabs, setShowJOBTabs] = useState('job-positions');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // job position modal
  const [selectedValue, setSelectedValue] = useState('Active');
  const [showJobPositionModal, setShowJobPositionModal] = useState(false);

  // offices modal
  const [officesActiveOrNotAction, setOfficesActiveOrNotAction] =
    useState('Active');
  const [showOfficesModal, setShowOfficesModal] = useState(false);

  // department modal
  const [deparmentActiveOrNotAction, setDeparmentActiveOrNotAction] =
    useState('Active');
  const [showDepartmentModal, setShowDepartmentModal] = useState(false);

  // work statuses modal
  const [workStatusesActiveOrNotAction, setWorkStatusesActiveOrNotAction] =
    useState('Active');
  const [showWorkStatusesModal, setShowWorkStatusesModal] = useState(false);

  // level modal
  const [levelActiveOrNotAction, setLevelActiveOrNotAction] =
    useState('Active');
  const [showLevelModal, setShowLevelModal] = useState(false);

  // termination reason modal
  const [
    terminationReasonActiveOrNotAction,
    setTerminationReasonActiveOrNotAction,
  ] = useState('Active');
  const [showTerminationReasonModal, setShowTerminationReasonModal] =
    useState(false);

  // degree modal
  const [degreeActiveOrNotAction, setDegreeActiveOrNotAction] =
    useState('Active');
  const [showDegreeModal, setShowDegreeModal] = useState(false);

  return (
    <CompanyEmployeesMarkup
      {...props}
      selectedTab={selectedTab}
      setSelectedTab={setSelectedTab}
      toggleCheckBox={toggleCheckBox}
      setToggleCheckBox={setToggleCheckBox}
      isEnabled={isEnabled}
      toggleSwitch={toggleSwitch}
      showJOBTabs={showJOBTabs}
      setShowJOBTabs={setShowJOBTabs}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      showJobPositionModal={showJobPositionModal}
      setShowJobPositionModal={setShowJobPositionModal}
      officesActiveOrNotAction={officesActiveOrNotAction}
      setOfficesActiveOrNotAction={setOfficesActiveOrNotAction}
      showOfficesModal={showOfficesModal}
      setShowOfficesModal={setShowOfficesModal}
      deparmentActiveOrNotAction={deparmentActiveOrNotAction}
      setDeparmentActiveOrNotAction={setDeparmentActiveOrNotAction}
      showDepartmentModal={showDepartmentModal}
      setShowDepartmentModal={setShowDepartmentModal}
      workStatusesActiveOrNotAction={workStatusesActiveOrNotAction}
      setWorkStatusesActiveOrNotAction={setWorkStatusesActiveOrNotAction}
      showWorkStatusesModal={showWorkStatusesModal}
      setShowWorkStatusesModal={setShowWorkStatusesModal}
      levelActiveOrNotAction={levelActiveOrNotAction}
      setLevelActiveOrNotAction={setLevelActiveOrNotAction}
      showLevelModal={showLevelModal}
      setShowLevelModal={setShowLevelModal}
      terminationReasonActiveOrNotAction={terminationReasonActiveOrNotAction}
      setTerminationReasonActiveOrNotAction={
        setTerminationReasonActiveOrNotAction
      }
      showTerminationReasonModal={showTerminationReasonModal}
      setShowTerminationReasonModal={setShowTerminationReasonModal}
      degreeActiveOrNotAction={degreeActiveOrNotAction}
      setDegreeActiveOrNotAction={setDegreeActiveOrNotAction}
      showDegreeModal={showDegreeModal}
      setShowDegreeModal={setShowDegreeModal}
    />
  );
};

export default CompanyEmployees;
