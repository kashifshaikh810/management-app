import React from 'react';
import {Text, View, Pressable} from 'react-native';
import tw from 'tailwind-react-native-classnames';

import styles from '../styles';

const EnableAndDisableButton = props => {
  const enableFunc = () => {
    if (props.generalSettingsButton.tabName === 'general-settings') {
      props.setGeneralSettingsButton({
        show: 'enable',
        tabName: 'general-settings',
      });
    }
  };

  const disableFunc = () => {
    if (props.generalSettingsButton.tabName === 'general-settings') {
      props.setGeneralSettingsButton({
        show: 'disable',
        tabName: 'general-settings',
      });
    }
  };

  return (
    <View style={styles.enableAndDisablePressableContainer}>
      <Pressable
        onPress={() => enableFunc()}
        style={({pressed}) => [
          styles.enablePressable,
          props.generalSettingsButton.show === 'enable'
            ? tw`bg-green-600`
            : tw`bg-white`,
        ]}>
        <Text
          style={[
            styles.enableAndDisablePressableText,
            props.generalSettingsButton.show === 'enable'
              ? tw`text-white`
              : tw`text-gray-200`,
          ]}>
          {props.enable}
        </Text>
      </Pressable>

      <Pressable
        onPress={() => disableFunc()}
        style={({pressed}) => [
          styles.disablePressable,
          props.generalSettingsButton.show === 'disable'
            ? tw`bg-green-600`
            : tw`bg-white`,
        ]}>
        <Text
          style={[
            styles.enableAndDisablePressableText,
            props.generalSettingsButton.show === 'disable'
              ? tw`text-white`
              : tw`text-gray-200`,
          ]}>
          {props.disable}
        </Text>
      </Pressable>
    </View>
  );
};

export default EnableAndDisableButton;
