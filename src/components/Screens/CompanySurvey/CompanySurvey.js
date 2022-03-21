import React, {useState} from 'react';
import CompanySurveyMarkup from './CompanySurveyMarkup';

const CompanySurvey = props => {
  const [showTab, setShowTab] = useState('general');
  const [enableSurveyModule, setEnableSurveyModule] = useState(false);

  return (
    <CompanySurveyMarkup
      {...props}
      showTab={showTab}
      setShowTab={setShowTab}
      enableSurveyModule={enableSurveyModule}
      setEnableSurveyModule={setEnableSurveyModule}
    />
  );
};

export default CompanySurvey;
