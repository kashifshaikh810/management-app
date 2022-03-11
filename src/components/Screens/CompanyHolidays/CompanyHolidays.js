import React, {useState} from 'react';
import CompanyHolidaysMarkup from './CompanyHolidaysMarkup';

const CompanyHolidays = props => {
  const [showInputSection, setShowInputSection] = useState(false);
  const [isSelect, setIsSelect] = useState('single-day');
  const [showAddHolidayModal, setShowAddHolidayModal] = useState(false);

  return (
    <CompanyHolidaysMarkup
      {...props}
      showInputSection={showInputSection}
      setShowInputSection={setShowInputSection}
      isSelect={isSelect}
      setIsSelect={setIsSelect}
      showAddHolidayModal={showAddHolidayModal}
      setShowAddHolidayModal={setShowAddHolidayModal}
    />
  );
};

export default CompanyHolidays;
