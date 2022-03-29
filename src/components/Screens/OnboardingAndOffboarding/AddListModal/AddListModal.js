import React from 'react';
import {
  View,
  Text,
  Modal,
  StatusBar,
  ActivityIndicator,
  Pressable,
  TextInput,
  ScrollView,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';

import styles from './styles';

const AddListModal = props => {
  return (
    <Modal
      visible={
        props.showAddListModal || props?.showEditListModal?.show || false
      }
      animationType="fade"
      transparent
      onRequestClose={() =>
        props.showEditListModal
          ? props.setShowEditListModal({show: false})
          : props.setShowAddListModal(false)
      }>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.newListHeading}>
            <Text style={styles.newListText}>
              {props?.showEditListModal ? 'edit list' : 'new list'}
            </Text>
          </View>
          <View style={styles.line} />
          <ScrollView style={tw`flex-1 mb-2`}>
            <View style={styles.contentContainer}>
              <Text style={styles.textInputText}>
                Category <Text style={styles.star}>*</Text>
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

              <View style={styles.textInputContainer}>
                <Text style={styles.textInputText}>
                  Title <Text style={styles.star}>*</Text>
                </Text>

                <TextInput
                  style={styles.textInput}
                  selectionColor="#b3b3b3"
                  value={props.title}
                  onChangeText={text => props.setTitle(text)}
                />
              </View>

              <View style={styles.textInputContainer}>
                <Text style={styles.textInputText}>Description</Text>
                <View style={styles.desTextInput}>
                  <TextInput
                    multiline={true}
                    onScroll={e => {
                      e.nativeEvent.contentOffset.y;
                    }}
                    scrollEnabled={true}
                    selectionColor="#b3b3b3"
                    value={props.description}
                    onChangeText={text => props.setDescription(text)}
                  />
                </View>
              </View>
            </View>

            <View style={styles.pressablesContainer}>
              <Pressable
                onPress={() =>
                  props.showEditListModal
                    ? props.setShowEditListModal({show: false})
                    : props.setShowAddListModal(false)
                }
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#f3f3f3' : '#ff4c52'},
                ]}>
                <Text style={styles.cancelPressableText}>cancel</Text>
              </Pressable>

              <Pressable
                onPress={() =>
                  props.showEditListModal
                    ? props.editTask()
                    : props.addListCompany()
                }
                disabled={
                  !props.showOnboardingOrOffboarding &&
                  !props.title &&
                  !props.description
                }
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.addNewListPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {props.isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.cancelPressableText}>
                    {props.showEditListModal ? 'update list' : 'add new list'}
                  </Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddListModal;
