import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StatusBar,
  Pressable,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import CloseIcon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-picker/picker';
import RadioIcon from 'react-native-vector-icons/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';

import MyModal from '../Modal';
import styles from './styles';
import tw from 'tailwind-react-native-classnames';
import CheckBox from '@react-native-community/checkbox';

// date of birth
const birthdayDateSection = props => {
  return (
    <>
      <View style={styles.dateRange}>
        <Text style={styles.dateRangeText}>
          Birth Day <Text style={styles.star}>*</Text>
        </Text>
      </View>
      <View style={styles.datePickContainer}>
        <Pressable
          style={styles.fromTextInput}
          onPress={() => props.showDatepicker()}>
          <Text
            style={[
              styles.dateRangeText,
              {
                color: '#263238',
              },
            ]}>
            {props.isFromSelected && props.birthdayDate}
          </Text>
        </Pressable>
      </View>

      {props.show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.date}
          mode={props.mode}
          is24Hour={true}
          display="default"
          onChange={props.onChange}
        />
      )}
    </>
  );
};

// date of hire
const dateOfHireSection = props => {
  return (
    <>
      <View style={styles.dateRange}>
        <Text style={styles.dateRangeText}>
          Date of Hire <Text style={styles.star}>*</Text>
        </Text>
      </View>
      <View style={styles.datePickContainer}>
        <Pressable
          style={styles.fromTextInput}
          onPress={() => props.hireShowDatepicker()}>
          <Text
            style={[
              styles.dateRangeText,
              {
                color: '#263238',
              },
            ]}>
            {props.hireDateSection}
          </Text>
        </Pressable>
      </View>

      {props.showOfHire && (
        <DateTimePicker
          testID="dateTimePicker"
          value={props.dateOfHire}
          mode={props.modeOfHire}
          is24Hour={true}
          display="default"
          onChange={props.hireOnChange}
        />
      )}
    </>
  );
};

const AddNewEmployeeModal = props => {
  return (
    <Modal
      visible={props.showAddNewEmployeeModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowAddNewEmployeeModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>New Employee</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowAddNewEmployeeModal(false)}
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

          <ScrollView
            style={styles.scrollView}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  first name <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  value={props.firstName}
                  onChangeText={text => props.setFirstName(text)}
                  style={styles.commentTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  last name <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  value={props.lastName}
                  onChangeText={text => props.setLastName(text)}
                  style={styles.commentTextInput}
                />
              </View>
            </View>

            {birthdayDateSection(props)}

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  email <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  keyboardType="email-address"
                  value={props.email}
                  onChangeText={text => props.emailFunc(text)}
                  style={styles.commentTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  password <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  secureTextEntry={true}
                  value={props.password}
                  onChangeText={text => props.passwordFunc(text)}
                  style={styles.commentTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  gender <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View style={styles.radioIconsContainer}>
                <View style={styles.directionRow}>
                  <RadioIcon
                    onPress={() => props.setGender('Male')}
                    name={
                      props.gender === 'Male'
                        ? 'radio-btn-active'
                        : 'radio-btn-passive'
                    }
                    size={20}
                    color={props.gender === 'Male' ? '#006f44' : '#b3b3b3'}
                    style={styles.marHorizontal}
                  />
                  <Text style={styles.radioText}>male</Text>
                </View>
                <View style={[styles.directionRow, styles.marHorizontal]}>
                  <RadioIcon
                    onPress={() => props.setGender('Female')}
                    name={
                      props.gender === 'Female'
                        ? 'radio-btn-active'
                        : 'radio-btn-passive'
                    }
                    size={20}
                    color={props.gender === 'Female' ? '#006f44' : '#b3b3b3'}
                    style={styles.marHorizontal}
                  />
                  <Text style={styles.radioText}>female</Text>
                </View>

                <View style={[styles.directionRow, styles.marHorizontal]}>
                  <RadioIcon
                    onPress={() => props.setGender('Gender-Neutral')}
                    name={
                      props.gender === 'Gender-Neutral'
                        ? 'radio-btn-active'
                        : 'radio-btn-passive'
                    }
                    size={20}
                    color={
                      props.gender === 'Gender-Neutral' ? '#006f44' : '#b3b3b3'
                    }
                    style={styles.marHorizontal}
                  />
                  <Text style={styles.radioText}>gender-neutral</Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  marital status <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View style={styles.radioIconsContainer}>
                <View style={styles.directionRow}>
                  <RadioIcon
                    onPress={() => props.setMaritialStatus('Married')}
                    name={
                      props.maritialStatus === 'Married'
                        ? 'radio-btn-active'
                        : 'radio-btn-passive'
                    }
                    size={20}
                    color={
                      props.maritialStatus === 'Married' ? '#006f44' : '#b3b3b3'
                    }
                    style={styles.marHorizontal}
                  />
                  <Text style={styles.radioText}>married</Text>
                </View>
                <View style={[styles.directionRow, styles.marHorizontal]}>
                  <RadioIcon
                    onPress={() => props.setMaritialStatus('Single')}
                    name={
                      props.maritialStatus === 'Single'
                        ? 'radio-btn-active'
                        : 'radio-btn-passive'
                    }
                    size={20}
                    color={
                      props.maritialStatus === 'Single' ? '#006f44' : '#b3b3b3'
                    }
                    style={styles.marHorizontal}
                  />
                  <Text style={styles.radioText}>single</Text>
                </View>
              </View>
            </View>

            {dateOfHireSection({...props})}

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  direct manager <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View
                style={tw`w-11/12 h-12 border-2 border-gray-400 self-center rounded justify-center`}>
                <Picker
                  mode="dropdown"
                  selectedValue={props.terminationReasonActiveOrNotAction}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setTerminationReasonActiveOrNotAction(itemValue)
                  }>
                  <Picker.Item label="" value="" />
                  <Picker.Item
                    label="add your company users"
                    value="add your company users"
                  />
                </Picker>
              </View>
            </View>

            <MyModal {...props} />

            <View style={[styles.line, styles.marginTop]} />

            <View style={styles.checkboxContainer}>
              <CheckBox
                disabled={false}
                style={{
                  transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                }}
                tintColors={{true: 'green', false: 'gray'}}
                value={props.showRoleDropDown}
                onValueChange={newValue => props.setShowRoleDropDown(newValue)}
              />
              <Text style={styles.reqType}>add a user in the system</Text>
            </View>

            {props.showRoleDropDown && (
              <View
                style={tw`w-11/12 h-12 border-2 border-gray-400 self-center rounded justify-center`}>
                <Picker
                  mode="dropdown"
                  selectedValue={props.terminationReasonActiveOrNotAction}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setTerminationReasonActiveOrNotAction(itemValue)
                  }>
                  <Picker.Item
                    label="Please select role"
                    value="Please select role"
                  />
                  <Picker.Item
                    label="show from database"
                    value="show from database"
                  />
                </Picker>
              </View>
            )}

            {props?.showErr ? (
              <View>
                <Text style={styles.err}>{props.showErr}</Text>
              </View>
            ) : null}

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => props.setShowAddNewEmployeeModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>cancel</Text>
              </Pressable>

              <Pressable
                onPress={() => props.submitAddNewEmployee()}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {props.isLoading ? (
                  <ActivityIndicator color="#fff" />
                ) : (
                  <Text style={styles.cancelPressableText}>submit</Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default AddNewEmployeeModal;
