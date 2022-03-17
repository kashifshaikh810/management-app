import React, {useState} from 'react';
import CompanyRewardsMarkup from './CompanyRewardsMarkup';

const CompanyRewards = props => {
  const [showTab, setShowTab] = useState('general');

  // general tab states
  const [wouldYouLikeButton, setWouldYouLikeButton] = useState(false);
  const [additionalOption, setAdditionalOption] = useState(false);
  const [sendRewardsNotificationButton, setSendRewardsNotificationButton] =
    useState(false);

  return (
    <CompanyRewardsMarkup
      {...props}
      showTab={showTab}
      setShowTab={setShowTab}
      wouldYouLikeButton={wouldYouLikeButton}
      setWouldYouLikeButton={setWouldYouLikeButton}
      additionalOption={additionalOption}
      setAdditionalOption={setAdditionalOption}
      sendRewardsNotificationButton={sendRewardsNotificationButton}
      setSendRewardsNotificationButton={setSendRewardsNotificationButton}
    />
  );
};

export default CompanyRewards;
