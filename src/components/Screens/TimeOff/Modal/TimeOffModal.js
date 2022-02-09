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
import MyModal from '../../Employees/Modal/Modal';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

const DateRangeSection = () => {
  //from date section
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [isFromSelected, setIsFromSelected] = useState(false);

  //to date section
  const [toDate, setToDate] = useState(new Date());
  const [toMode, setToMode] = useState('date');
  const [toShow, setToShow] = useState(false);
  const [isToSelected, setIsToSelected] = useState(false);

  // From
  let fromSectionDate = new Date(date);
  let ddDate = fromSectionDate.getDate();
  let mmMonth = fromSectionDate.getMonth() + 1;
  let yyYear = fromSectionDate.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mmMonth < 10) {
    mmMonth = '0' + mmMonth;
  }
  fromSectionDate = ddDate + '/' + mmMonth + '/' + yyYear;

  // To
  let toSectionDate = new Date(toDate);
  let dd = toSectionDate.getDate();
  let mm = toSectionDate.getMonth() + 1;
  let yyyy = toSectionDate.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }
  toSectionDate = dd + '/' + mm + '/' + yyyy;

  // Functions

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    if (currentDate !== date) {
      setIsFromSelected(true);
    }
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const toOnChange = (event, selectedDate) => {
    const currentDate = selectedDate || toDate;
    setToShow(Platform.OS === 'ios');
    setToDate(currentDate);
    if (currentDate !== toDate) {
      setIsToSelected(true);
    }
  };

  const toShowMode = currentMode => {
    setToShow(true);
    setToMode(currentMode);
  };

  const toShowDatepicker = () => {
    toShowMode('date');
  };

  return (
    <>
      <View style={styles.dateRange}>
        <Text style={styles.dateRangeText}>
          Date Range <Text style={styles.star}>*</Text>
        </Text>
      </View>
      <View style={styles.datePickContainer}>
        <Pressable
          style={styles.fromTextInput}
          onPress={() => showDatepicker()}>
          <Text
            style={[
              styles.dateRangeText,
              {
                color: isFromSelected ? '#263238' : '#b3b3b3',
              },
            ]}>
            {isFromSelected ? fromSectionDate : 'From'}
          </Text>
        </Pressable>
        <Pressable
          style={styles.fromTextInput}
          onPress={() => toShowDatepicker()}>
          <Text
            style={[
              styles.dateRangeText,
              {
                color: isToSelected ? '#263238' : '#b3b3b3',
              },
            ]}>
            {isToSelected ? toSectionDate : 'To'}
          </Text>
        </Pressable>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
      {toShow && (
        <DateTimePicker
          testID="dateTimePicker"
          value={toDate}
          mode={toMode}
          is24Hour={true}
          display="default"
          onChange={toOnChange}
        />
      )}
    </>
  );
};

const TimeOffModal = props => {
  return (
    <Modal
      visible={props.showAddNewReqModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowAddNewReqModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={styles.container}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>new time off request</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowAddNewReqModal(false)}
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
            <View style={styles.holidayAndSickContainer}>
              <View style={styles.holidayCard}>
                <Text style={styles.holiday}>holiday</Text>
                <View style={styles.holidayNumContainer}>
                  <Text style={styles.numOfHoliday}>19</Text>
                  <Text style={styles.hoursAvai}>hours available</Text>
                </View>
                <View style={styles.cardLine} />
                <View style={styles.hoursUseContainer}>
                  <Text style={styles.numOfHoursUse}>0</Text>
                  <Text style={styles.hoursUseText}>hours used</Text>
                </View>
              </View>

              <View style={styles.sickCard}>
                <Text style={styles.holiday}>sick</Text>
                <View style={styles.holidayNumContainer}>
                  <Text style={styles.numOfHoliday}>20</Text>
                  <Text style={styles.hoursAvai}>hours available</Text>
                </View>
                <View style={styles.cardLine} />

                <View style={styles.hoursUseContainer}>
                  <Text style={styles.numOfHoursUse}>0</Text>
                  <Text style={styles.hoursUseText}>hours used</Text>
                </View>
              </View>
            </View>

            <View>
              <View style={styles.reqTypeContainer}>
                <Text style={styles.reqType}>
                  request type <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <Pressable
                onPress={() =>
                  props.setShowTimeOffModal({show: true, type: 'TimeOff'})
                }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {props?.showTimeOffModal?.chooseVal}
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

            <MyModal {...props} />

            {DateRangeSection(props)}

            <View>
              <View style={styles.reviewerContainer}>
                <Text style={styles.reqType}>
                  reviewer <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <Pressable
                // onPress={() =>
                //   props.setShowTimeOffModal({show: true, type: 'TimeOff'})
                // }
                style={styles.pressable}>
                <Text style={styles.text}>
                  {/* {props?.showTimeOffModal?.chooseVal} */}
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
                <Text style={styles.commentText}>comment</Text>
              </View>
              <View style={styles.commentTextInput}>
                <TextInput multiline />
              </View>
            </View>

            <View style={styles.cancelAndSendReqContainer}>
              <Pressable
                onPress={() => props.setShowAddNewReqModal(false)}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : '#ff4c52'},
                ]}>
                <Text style={[styles.cancelPressableText]}>cancel</Text>
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
                  <Text style={styles.cancelPressableText}>send request</Text>
                )}
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default TimeOffModal;
