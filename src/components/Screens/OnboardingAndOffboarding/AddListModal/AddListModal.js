import React from 'react';
import {
  View,
  Text,
  Modal,
  StatusBar,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import styles from './styles';

const AddListModal = props => {
  return (
    <Modal
      visible={props.showAddListModal}
      animationType="fade"
      transparent
      onRequestClose={() => props.setShowAddListModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.newListHeading}>
            <Text style={styles.newListText}>new list</Text>
          </View>
          <View style={styles.line} />

          <View style={styles.contentContainer}>
            <Text>
              Category <Text>*</Text>
            </Text>
            <View style={styles.categoryButtonsContainer}>
              <Pressable
                onPress={() =>
                  props.setShowOnboardingOrOffboarding('onboarding')
                }
                style={() => [
                  styles.categoryPressable,
                  props.showOnboardingOrOffboarding === 'onboarding'
                    ? tw`bg-green-600`
                    : tw`bg-gray-400`,
                ]}>
                <Text style={styles.categoryText}>onboarding</Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  props.setShowOnboardingOrOffboarding('offboarding')
                }
                style={() => [
                  styles.categoryPressable,
                  tw`ml-3`,
                  props.showOnboardingOrOffboarding === 'offboarding'
                    ? tw`bg-green-600`
                    : tw`bg-gray-400`,
                ]}>
                <Text style={styles.categoryText}>offboarding</Text>
              </Pressable>
            </View>
          </View>

          {/* <View>
            <Pressable
              onPress={() => props.setShowAddListModal(false)}
              disabled={props.isLoading}
              android_ripple={{color: '#fff'}}
              style={({pressed}) => [
                // styles.cancelPressable,
                {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
              ]}>
              <Text style={[styles.cancelPressableText]}>cancel</Text>
            </Pressable>

            <Pressable
              onPress={() => {}}
              android_ripple={{color: '#fff'}}
              style={({pressed}) => [
                // styles.sendReqPressable,
                {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
              ]}>
              {false ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.cancelPressableText}>add new list</Text>
              )}
            </Pressable>
          </View> */}
        </View>
      </View>
    </Modal>
  );
};

export default AddListModal;
