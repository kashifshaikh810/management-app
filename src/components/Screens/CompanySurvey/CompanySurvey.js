import React, {useEffect, useState} from 'react';
import CompanySurveyMarkup from './CompanySurveyMarkup';
import DocumentPicker from 'react-native-document-picker';
import {LogBox} from 'react-native';

const CompanySurvey = props => {
  const [showTab, setShowTab] = useState('general');
  const [enableSurveyModule, setEnableSurveyModule] = useState(false);
  const [saveBackgroundImage, setSaveBackgroundImage] = useState({});
  const [saveLogoImage, setSaveLogoImage] = useState({});

  const uploadBackgroundImage = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setSaveBackgroundImage(file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  const uploadLogoImage = async () => {
    try {
      const file = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      setSaveLogoImage(file);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log(err, 'errr');
      } else {
        throw err;
      }
    }
  };

  const removeBackgroundImage = () => {
    setSaveBackgroundImage('');
  };

  const removeLogoImage = () => {
    setSaveLogoImage('');
  };

  useEffect(() => {
    LogBox.ignoreLogs([
      'Failed prop type: Invalid prop `title` of type `boolean` supplied to `ThumbChildren`, expected `string`.',
    ]);
    LogBox.ignoreLogs([
      'Failed prop type: Invalid prop `leftTitle` of type `boolean` supplied to `ReactNativeToggleElement`, expected `string`.',
    ]);
  }, []);

  return (
    <CompanySurveyMarkup
      {...props}
      showTab={showTab}
      setShowTab={setShowTab}
      enableSurveyModule={enableSurveyModule}
      setEnableSurveyModule={setEnableSurveyModule}
      uploadBackgroundImage={uploadBackgroundImage}
      uploadLogoImage={uploadLogoImage}
      saveBackgroundImage={saveBackgroundImage}
      saveLogoImage={saveLogoImage}
      removeLogoImage={removeLogoImage}
      removeBackgroundImage={removeBackgroundImage}
    />
  );
};

export default CompanySurvey;
