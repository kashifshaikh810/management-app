import React from 'react';
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
import RadioIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';
import tw from 'tailwind-react-native-classnames';
import {Picker} from '@react-native-picker/picker';

const singleDaySection = props => {
  if (props.isSelect === 'single-day') {
    return (
      <View>
        <View style={styles.emailTextContainer}>
          <Text style={styles.email}>
            date {''}
            <Text style={styles.star}>*</Text>
          </Text>
        </View>
        <View>
          <TextInput
            selectionColor="#b3b3b3"
            keyboardType="default"
            //   value={props.email}
            //   onChangeText={text => props.setEmail(text)}
            style={styles.emailTextInput}
          />
        </View>
      </View>
    );
  }
};

const rangeSection = props => {
  if (props.isSelect === 'range') {
    return (
      <>
        <View>
          <View style={styles.emailTextContainer}>
            <Text style={styles.email}>
              from {''}
              <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              selectionColor="#b3b3b3"
              keyboardType="default"
              //   value={props.email}
              //   onChangeText={text => props.setEmail(text)}
              style={styles.emailTextInput}
            />
          </View>
        </View>

        <View>
          <View style={styles.emailTextContainer}>
            <Text style={styles.email}>
              to {''}
              <Text style={styles.star}>*</Text>
            </Text>
          </View>
          <View>
            <TextInput
              selectionColor="#b3b3b3"
              keyboardType="default"
              //   value={props.email}
              //   onChangeText={text => props.setEmail(text)}
              style={styles.emailTextInput}
            />
          </View>
        </View>
      </>
    );
  }
};

const AddHolidayModal = props => {
  return (
    <Modal
      visible={props.showAddHolidayModal}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowAddHolidayModal(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>add holiday</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowAddHolidayModal(false)}
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
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  holiday {''}
                  <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="default"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
                  style={styles.emailTextInput}
                />
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>date type</Text>
              </View>

              <View style={styles.dateTypeContainer}>
                <Pressable
                  style={styles.singleDayContainer}
                  onPress={() => props.setIsSelect('single-day')}>
                  <RadioIcon
                    name={
                      props.isSelect === 'single-day'
                        ? 'circle-slice-8'
                        : 'circle-outline'
                    }
                    size={20}
                    color={props.isSelect === 'single-day' ? 'blue' : 'gray'}
                  />
                  <Text style={styles.singleDayText}>single day</Text>
                </Pressable>

                <Pressable
                  style={[styles.singleDayContainer, tw`mt-1`]}
                  onPress={() => props.setIsSelect('range')}>
                  <RadioIcon
                    name={
                      props.isSelect === 'range'
                        ? 'circle-slice-8'
                        : 'circle-outline'
                    }
                    size={20}
                    color={props.isSelect === 'range' ? 'blue' : 'gray'}
                  />
                  <Text style={styles.singleDayText}>range</Text>
                </Pressable>
              </View>
            </View>

            {singleDaySection({...props})}

            {rangeSection({...props})}

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  apply to <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View style={[styles.emailTextInput, styles.pickerContainer]}>
                <Picker
                  mode="dropdown"
                  selectedValue={props.selectedValue}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setSelectedValue(itemValue)
                  }>
                  <Picker.Item label="All Employees" value="All Employees" />
                  <Picker.Item label="Deparment" value="Deparment" />
                  <Picker.Item label="Office" value="Office" />
                </Picker>
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>comment</Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="default"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
                  style={styles.commentTextInput}
                />
              </View>
            </View>

            <View style={styles.checkboxAndTextContainer}>
              <CheckBox
                disabled={false}
                style={{
                  transform: [{scaleX: 0.8}, {scaleY: 0.8}],
                }}
                tintColors={{true: 'gray', false: 'black'}}
                value={true}
                // onValueChange={newValue => props.setToggleCheckBox(newValue)}
              />
              <Text style={styles.email}>repeat each year</Text>
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() => props.setShowAddHolidayModal(false)}
                disabled={props.isLoading}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.cancelPressable,
                  {backgroundColor: pressed ? '#f3f3f3' : '#b3b3b3'},
                ]}>
                <Text style={[styles.cancelPressableText]}>close</Text>
              </Pressable>

              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [
                  styles.submitPressable,
                  {backgroundColor: pressed ? '#b3b3b3' : 'brown'},
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

export default AddHolidayModal;
