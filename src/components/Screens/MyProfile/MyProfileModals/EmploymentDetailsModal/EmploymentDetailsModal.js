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
} from 'react-native';
import CloseIcon from 'react-native-vector-icons/FontAwesome';
import ArrowDropIcon from 'react-native-vector-icons/MaterialIcons';
import RadioIcon from 'react-native-vector-icons/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';

import MyModal from '../../../Employees/Modal/Modal';
import styles from './styles';

const DateRangeSection = props => {
  return (
    <>
      <View style={styles.dateRange}>
        <Text style={styles.dateRangeText}>
          date of hire <Text style={styles.star}>*</Text>
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
            {props.isSelectedDateOfHire && props.hireDateSection}
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

const EmploymentDetailsModal = props => {
  return (
    <Modal
      visible={props.isShowEmploymentDetailsModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setIsShowEmploymentDetailsModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>employment details</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setIsShowEmploymentDetailsModal(false)}
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
            <MyModal {...props} />

            <View>
              <View style={styles.reviewerContainer}>
                <Text style={styles.reqType}>
                  position <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setshowPositionModalForProfile({
                    show: true,
                    type: 'Position',
                  })
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showPositionModalForProfile?.chooseVal}
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

            {DateRangeSection(props)}

            <View>
              <View style={styles.reviewerContainer}>
                <Text style={styles.reqType}>office</Text>
              </View>
              <Pressable
                onPress={() =>
                  // props.setIsShowZoneModal({show: true, type: 'TimeZone'})
                  {}
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {/* {props?.isShowZoneModal?.chooseVal} */}
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
              <View style={styles.reviewerContainer}>
                <Text style={styles.reqType}>department</Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setShowDepartmentModalForProfile({
                    show: true,
                    type: 'Department',
                  })
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showDepartmentModalForProfile?.chooseVal}
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
              <View style={styles.reviewerContainer}>
                <Text style={styles.reqType}>employment status</Text>
              </View>
              <Pressable
                onPress={() =>
                  // props.setIsShowZoneModal({show: true, type: 'TimeZone'})
                  {}
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {/* {props?.isShowZoneModal?.chooseVal} */}
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
              <View style={styles.reviewerContainer}>
                <Text style={styles.reqType}>employment level</Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setShowEmploymentLevelModal({
                    show: true,
                    type: 'EmploymentLevel',
                  })
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showEmploymentLevelModal?.chooseVal}
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
              <View style={styles.reviewerContainer}>
                <Text style={styles.reqType}>
                  Direct Manager <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setShowDirectManagerModal({
                    show: true,
                    type: 'DirectManager',
                  })
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showDirectManagerModal?.chooseVal}
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

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => props.setIsShowEmploymentDetailsModal(false)}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#6c757d'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.sendReqPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
                ]}>
                {false ? (
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

export default EmploymentDetailsModal;
