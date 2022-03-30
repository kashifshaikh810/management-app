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
import ArrowDropIcon from 'react-native-vector-icons/MaterialIcons';
import RadioIcon from 'react-native-vector-icons/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';

import MyModal from '../Modal';
import styles from './styles';

const DateRangeSection = props => {
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
            {(props.profileDetails &&
              props.isFromSelected &&
              props.fromSectionDate) ||
              props?.profileDetails?.dateOfBirth}
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

const AddNewEmployeeModal = props => {
  // const res = () => {
  //   let mar =
  //     props.isLoading ||
  //     (props.firstName === props?.profileDetails?.firstName &&
  //       props.middleName === props?.profileDetails?.middleName &&
  //       props.lastName === props?.profileDetails?.lastName &&
  //       props.selectSingleOrMarried === props?.profileDetails?.maritalStatus &&
  //       props.email === props?.profileDetails?.email &&
  //       props.alternativeEmail === props?.profileDetails?.alternativeEmail &&
  //       props.isShowGenderModal?.chooseVal === props?.profileDetails?.gender &&
  //       props.isShowZoneModal?.chooseVal === props?.profileDetails?.timeZone &&
  //       props.isShowLanguagesModal?.chooseVal ===
  //         props?.profileDetails?.language);

  //   return mar;
  // };

  return (
    <Modal
      visible={true}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowProfileDetailsModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>New Employee</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowProfileDetailsModal(false)}
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

            {DateRangeSection(props)}

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
                  onChangeText={text => props.setEmail(text)}
                  style={styles.commentTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.reqTypeContainer}>
                <Text style={styles.reqType}>
                  gender <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setIsShowGenderModal({show: true, type: 'Gender'})
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {(props?.isShowGenderModal &&
                    props?.isShowGenderModal?.chooseVal) ||
                    props?.profileDetails?.gender}
                </Text>
                <View style={styles.dropIconContainer}>
                  <ArrowDropIcon
                    name="arrow-drop-up"
                    size={20}
                    style={styles.dropIcon}
                  />
                  <ArrowDropIcon name="arrow-drop-down" size={20} />
                </View>
              </Pressable>
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
                    onPress={() => props.setSelectSingleOrMarried('Married')}
                    name={
                      props.selectSingleOrMarried === 'Married'
                        ? 'radio-btn-active'
                        : 'radio-btn-passive'
                    }
                    size={20}
                    color={
                      props.selectSingleOrMarried === 'Married'
                        ? '#006f44'
                        : '#b3b3b3'
                    }
                    style={styles.marHorizontal}
                  />
                  <Text style={styles.radioText}>married</Text>
                </View>
                <View style={[styles.directionRow, styles.marHorizontal]}>
                  <RadioIcon
                    onPress={() => props.setSelectSingleOrMarried('Single')}
                    name={
                      props.selectSingleOrMarried === 'Single'
                        ? 'radio-btn-active'
                        : 'radio-btn-passive'
                    }
                    size={20}
                    color={
                      props.selectSingleOrMarried === 'Single'
                        ? '#006f44'
                        : '#b3b3b3'
                    }
                    style={styles.marHorizontal}
                  />
                  <Text style={styles.radioText}>single</Text>
                </View>
              </View>
            </View>

            <MyModal {...props} />

            <View>
              <View style={styles.commentTextContainer}>
                <Text style={styles.reqType}>
                  alternative email <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  keyboardType="email-address"
                  value={props.alternativeEmail}
                  onChangeText={text => props.setAlternativeEmail(text)}
                  style={styles.commentTextInput}
                />
              </View>
            </View>

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => props.setShowProfileDetailsModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>cancel</Text>
              </Pressable>

              <Pressable
                onPress={() => props.submit()}
                // disabled={res()}
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
