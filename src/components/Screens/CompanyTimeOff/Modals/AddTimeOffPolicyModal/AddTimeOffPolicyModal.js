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
import CheckBox from '@react-native-community/checkbox';

import styles from './styles';
import tw from 'tailwind-react-native-classnames';
import {Picker} from '@react-native-picker/picker';

const applyRuleAtSection = props => {
  if (false) {
    return (
      <View>
        <Text></Text>
      </View>
    );
  }
};

const departmentInput = props => {
  if (props.employeeGroup === 'Deparment') {
    return (
      <View>
        <View style={styles.emailTextContainer}>
          <Text style={styles.email}>
            department {''}
            <Text style={styles.star}>*</Text>
          </Text>
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
    );
  }
};

const officeInput = props => {
  if (props.employeeGroup === 'Office') {
    return (
      <View>
        <View style={styles.emailTextContainer}>
          <Text style={styles.email}>
            office {''}
            <Text style={styles.star}>*</Text>
          </Text>
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
    );
  }
};

const AddTimeOffPolicyModal = props => {
  return (
    <Modal
      visible={props.showAddTimeOffPolicy}
      animationType="slide"
      transparent
      onRequestClose={() => props.setShowAddTimeOffPolicy(false)}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.5)" />
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.5)'}]}>
        <View style={styles.modalBody}>
          <View style={styles.cardHeadingContainer}>
            <Text style={styles.cardHeadingText}>add time off policy</Text>
            <View style={styles.closeIconContainer}>
              <Pressable
                onPress={() => props.setShowAddTimeOffPolicy(false)}
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
            <View style={styles.marginTop}>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>
                  time off type {''}
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
                  policy name {''}
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
                  employee group <Text style={styles.star}>*</Text>
                </Text>
              </View>
              <View style={[styles.emailTextInput, styles.pickerContainer]}>
                <Picker
                  mode="dropdown"
                  selectedValue={props.employeeGroup}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setEmployeeGroup(itemValue)
                  }>
                  <Picker.Item label="" value="" />
                  <Picker.Item label="All Employees" value="All Employees" />
                  <Picker.Item label="Deparment" value="Deparment" />
                  <Picker.Item label="Office" value="Office" />
                </Picker>
              </View>
            </View>

            {departmentInput({...props})}
            {officeInput({...props})}

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>starts</Text>
              </View>
              <View>
                <TextInput
                  selectionColor="#b3b3b3"
                  keyboardType="default"
                  placeholder="days"
                  //   value={props.email}
                  //   onChangeText={text => props.setEmail(text)}
                  style={styles.emailTextInput}
                />
                <Text style={styles.subTitle}>after hire day</Text>
              </View>
            </View>

            <View style={styles.hoursInputContainer}>
              <TextInput
                selectionColor="#b3b3b3"
                keyboardType="number-pad"
                placeholder="Hours"
                //   value={props.email}
                //   onChangeText={text => props.setEmail(text)}
                style={styles.houreTextInput}
              />
              <View style={styles.inTextContainer}>
                <Text>in</Text>
              </View>

              <View style={[styles.houreTextInput, styles.pickerContainer]}>
                <Picker
                  mode="dropdown"
                  selectedValue={props.employeeGroup}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setEmployeeGroup(itemValue)
                  }>
                  <Picker.Item label="Week" value="Week" />
                  <Picker.Item label="2 Week" value="2 Week" />
                  <Picker.Item label="Quarter" value="Quarter" />
                  <Picker.Item label="Month" value="Month" />
                  <Picker.Item label="Half-Year" value="Half-Year" />
                  <Picker.Item label="Year" value="Year" />
                </Picker>
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>apply hours at</Text>
              </View>
              <View style={[styles.emailTextInput, styles.pickerContainer]}>
                <Picker
                  mode="dropdown"
                  selectedValue={props.employeeGroup}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setEmployeeGroup(itemValue)
                  }>
                  <Picker.Item
                    label="At the beginning of the period"
                    value="At the beginning of the period"
                  />
                  <Picker.Item
                    label="At the end of the period"
                    value="At the end of the period"
                  />
                </Picker>
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>what to do with unused hours</Text>
              </View>
              <View style={[styles.emailTextInput, styles.pickerContainer]}>
                <Picker
                  mode="dropdown"
                  selectedValue={props.employeeGroup}
                  onValueChange={(itemValue, itemIndex) =>
                    props.setEmployeeGroup(itemValue)
                  }>
                  <Picker.Item label="Lose it" value="Lose it" />
                  <Picker.Item
                    label="Move to next period"
                    value="Move to next period"
                  />
                </Picker>
              </View>
            </View>

            <View>
              <View style={styles.emailTextContainer}>
                <Text style={styles.email}>apply rule at {''}</Text>
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
              <Text style={styles.subTitle}>can be applied to any date</Text>
            </View>

            {applyRuleAtSection({...props})}

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
              <Text style={styles.email}>Prevent sending request</Text>
            </View>

            <View style={[styles.line, tw`mt-4`]} />

            <View style={styles.cancelAndSubmitContainer}>
              <Pressable
                onPress={() => props.setShowAddTimeOffPolicy(false)}
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

export default AddTimeOffPolicyModal;
