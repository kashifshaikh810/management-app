import React, {useEffect, useState} from 'react';
import CompanyRewardsMarkup from './CompanyRewardsMarkup';
import DocumentPicker from 'react-native-document-picker';

const CompanyRewards = props => {
  const [showTab, setShowTab] = useState('general');

  // general tab states
  const [wouldYouLikeButton, setWouldYouLikeButton] = useState(false);
  const [additionalOption, setAdditionalOption] = useState(false);
  const [sendRewardsNotificationButton, setSendRewardsNotificationButton] =
    useState(false);

  // simple earning rule tab states
  const [pointsRewarded, setPointsRewarded] = useState(0);
  const [pointsRewardedInput, setPointsRewardedInput] = useState(0);

  // custom rewards tab states
  const [showInputSection, setShowInputSection] = useState(false);
  const [showCreateNewRewardModal, setShowCreateNewRewardModal] =
    useState(false);
  const [newRewardImage, setNewRewardImage] = useState(false);

  // custom rewards function
  const uploadNewImage = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setNewRewardImage(file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  useEffect(() => {
    setPointsRewardedInput(pointsRewarded);
  }, [pointsRewarded]);

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
      pointsRewarded={pointsRewarded}
      setPointsRewarded={setPointsRewarded}
      pointsRewardedInput={pointsRewardedInput}
      setPointsRewardedInput={setPointsRewardedInput}
      showInputSection={showInputSection}
      setShowInputSection={setShowInputSection}
      showCreateNewRewardModal={showCreateNewRewardModal}
      setShowCreateNewRewardModal={setShowCreateNewRewardModal}
      uploadNewImage={uploadNewImage}
      newRewardImage={newRewardImage}
    />
  );
};

export default CompanyRewards;
