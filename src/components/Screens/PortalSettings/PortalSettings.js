import React, {useState} from 'react';
import PortalSettingsMarkup from './PortalSettingsMarkup';

const PortalSettings = props => {
  const [testState, setTestState] = useState({});

  return (
    <PortalSettingsMarkup
      {...props}
      testState={testState}
      setTestState={setTestState}
    />
  );
};

export default PortalSettings;
