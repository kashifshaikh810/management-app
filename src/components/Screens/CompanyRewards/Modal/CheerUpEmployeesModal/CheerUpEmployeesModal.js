import React from 'react';
import {View, Text, Pressable, TextInput, Modal, StatusBar} from 'react-native';
import CloseIcon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';

import styles from './styles';

const CheerUpEmployeesModal = props => {
  return (
    <Modal
      visible={props.showCheerUpEmployeesModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowCheerUpEmployeesModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>cheer up employees</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowCheerUpEmployeesModal(false)}
                style={({pressed}) => [
                  styles.closePressabel,
                  {backgroundColor: pressed ? '#b3b3b3' : '#fff'},
                ]}>
                {({pressed}) => (
                  <CloseIcon
                    name="close"
                    size={20}
                    color={pressed ? '#fff' : '#b3b3b3'}
                  />
                )}
              </Pressable>
            </View>
          </View>

          <View style={styles.line} />

          <View>
            <View style={styles.rewardTextContainer}>
              <Text style={styles.reward}>
                points <Text style={styles.star}>*</Text>
              </Text>
            </View>
            <View>
              <TextInput
                selectionColor="#b3b3b3"
                keyboardType="default"
                //   value={props.reward}
                //   onChangeText={text => props.setreward(text)}
                style={styles.rewardTextInput}
              />
            </View>
          </View>

          <View style={[styles.line, tw`mt-7`]} />

          <View style={styles.cancelAndSubmitContainer}>
            <Pressable
              onPress={() => props.setShowCheerUpEmployeesModal(false)}
              disabled={props.isLoading}
              android_ripple={{color: '#fff'}}
              style={({pressed}) => [
                styles.cancelPressable,
                {backgroundColor: pressed ? '#b3b3b3' : 'red'},
              ]}>
              <Text style={[styles.cancelPressableText]}>close</Text>
            </Pressable>

            <Pressable
              onPress={() => {}}
              android_ripple={{color: '#fff'}}
              style={({pressed}) => [
                styles.submitPressable,
                {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : 'green'},
              ]}>
              {props.isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.cancelPressableText}>submit</Text>
              )}
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CheerUpEmployeesModal;
