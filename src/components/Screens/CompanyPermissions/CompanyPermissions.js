import React, {useEffect, useState} from 'react';
import CompanyPermissionsMarkup from './CompanyPermissionsMarkup';

const CompanyPermissions = props => {
  const [showTab, setShowTab] = useState('roles');
  const [showRefineRolesInputSection, setShowRefineRolesInputSection] =
    useState(false);

  // add new role modal states
  const [showNewRoleModal, setShowNewRoleModal] = useState(false);
  const [showRoleModalTab, setShowRoleModalTab] = useState('role-information');
  const [showButton, setShowButton] = useState('grant-all-access');

  // custom section modal states
  const [showSettingsSectionModal, setShowSettingsSectionModal] = useState({
    show: false,
    type: '',
  });
  const [
    showOnboardingOffBoardingSectionModal,
    setShowOnboardingOffBoardingSectionModal,
  ] = useState({
    show: false,
    type: '',
  });

  const [
    showPerformanceReviewSectionModal,
    setShowPerformanceReviewSectionModal,
  ] = useState({
    show: false,
    type: '',
  });

  const [showRewardsSectionModal, setShowRewardsSectionModal] = useState({
    show: false,
    type: '',
  });

  const [showNewsSectionModal, setShowNewsSectionModal] = useState({
    show: false,
    type: '',
  });

  const [
    showDashboardWidgetsSectionModal,
    setShowDashboardWidgetsSectionModal,
  ] = useState({
    show: false,
    type: '',
  });

  const [showEmployeeSectionModal, setShowEmployeeSectionModal] = useState({
    show: false,
    type: '',
  });

  const [showTimeOffSectionModal, setShowTimeOffSectionModal] = useState({
    show: false,
    type: '',
  });

  const [showReportsSectionModal, setShowReportsSectionModal] = useState({
    show: false,
    type: '',
  });

  const [showToolsSectionModal, setShowToolsSectionModal] = useState({
    show: false,
    type: '',
  });

  const [showSurveySectionModal, setShowSurveySectionModal] = useState({
    show: false,
    type: '',
  });

  const [showComplaintsSectionModal, setShowComplaintsSectionModal] = useState({
    show: false,
    type: '',
  });

  return (
    <CompanyPermissionsMarkup
      {...props}
      showTab={showTab}
      setShowTab={setShowTab}
      showRefineRolesInputSection={showRefineRolesInputSection}
      setShowRefineRolesInputSection={setShowRefineRolesInputSection}
      showNewRoleModal={showNewRoleModal}
      setShowNewRoleModal={setShowNewRoleModal}
      showRoleModalTab={showRoleModalTab}
      setShowRoleModalTab={setShowRoleModalTab}
      showButton={showButton}
      setShowButton={setShowButton}
      showSettingsSectionModal={showSettingsSectionModal}
      setShowSettingsSectionModal={setShowSettingsSectionModal}
      showOnboardingOffBoardingSectionModal={
        showOnboardingOffBoardingSectionModal
      }
      setShowOnboardingOffBoardingSectionModal={
        setShowOnboardingOffBoardingSectionModal
      }
      showPerformanceReviewSectionModal={showPerformanceReviewSectionModal}
      setShowPerformanceReviewSectionModal={
        setShowPerformanceReviewSectionModal
      }
      showRewardsSectionModal={showRewardsSectionModal}
      setShowRewardsSectionModal={setShowRewardsSectionModal}
      showNewsSectionModal={showNewsSectionModal}
      setShowNewsSectionModal={setShowNewsSectionModal}
      showDashboardWidgetsSectionModal={showDashboardWidgetsSectionModal}
      setShowDashboardWidgetsSectionModal={setShowDashboardWidgetsSectionModal}
      showEmployeeSectionModal={showEmployeeSectionModal}
      setShowEmployeeSectionModal={setShowEmployeeSectionModal}
      showTimeOffSectionModal={showTimeOffSectionModal}
      setShowTimeOffSectionModal={setShowTimeOffSectionModal}
      showReportsSectionModal={showReportsSectionModal}
      setShowReportsSectionModal={setShowReportsSectionModal}
      showToolsSectionModal={showToolsSectionModal}
      setShowToolsSectionModal={setShowToolsSectionModal}
      showSurveySectionModal={showSurveySectionModal}
      setShowSurveySectionModal={setShowSurveySectionModal}
      showComplaintsSectionModal={showComplaintsSectionModal}
      setShowComplaintsSectionModal={setShowComplaintsSectionModal}
    />
  );
};

export default CompanyPermissions;
