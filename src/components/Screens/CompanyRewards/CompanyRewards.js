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
  const [enableRegistrationModal, setEnableRegistrationModal] = useState(false);

  // custom rewards tab states
  const [showInputSection, setShowInputSection] = useState(false);
  const [showCreateNewRewardModal, setShowCreateNewRewardModal] =
    useState(false);
  const [newRewardImage, setNewRewardImage] = useState(false);

  // share points tab states
  const [newRuleInputs, setNewRuleInputs] = useState([]);
  const [showCheerUpEmployeesModal, setShowCheerUpEmployeesModal] =
    useState(false);
  const [enableSharedPoints, setEnableSharedPoints] = useState(false);

  // awards tab states
  const [awardsShowInputSection, setAwardsShowInputSection] = useState(false);
  const [showRewardsModal, setShowRewardsModal] = useState(false);
  const [newAwardImage, setNewAwardImage] = useState(false);

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

  // awards tab function
  const uploadAwardNewImage = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setNewAwardImage(file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  const addNewRule = () => {
    let arr = [...newRuleInputs];
    arr.push({buttonType: 'Remove'});
    setNewRuleInputs(arr);
  };

  const removeNewRule = (items, index) => {
    let arr = [...newRuleInputs];
    arr.splice(index, 1);
    setNewRuleInputs(arr);
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
      addNewRule={addNewRule}
      newRuleInputs={newRuleInputs}
      removeNewRule={removeNewRule}
      showCheerUpEmployeesModal={showCheerUpEmployeesModal}
      setShowCheerUpEmployeesModal={setShowCheerUpEmployeesModal}
      awardsShowInputSection={awardsShowInputSection}
      setAwardsShowInputSection={setAwardsShowInputSection}
      showRewardsModal={showRewardsModal}
      setShowRewardsModal={setShowRewardsModal}
      newAwardImage={newAwardImage}
      uploadAwardNewImage={uploadAwardNewImage}
      enableRegistrationModal={enableRegistrationModal}
      setEnableRegistrationModal={setEnableRegistrationModal}
      enableSharedPoints={enableSharedPoints}
      setEnableSharedPoints={setEnableSharedPoints}
    />
  );
};

export default CompanyRewards;
