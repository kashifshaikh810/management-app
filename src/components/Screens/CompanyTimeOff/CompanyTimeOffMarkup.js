import React from 'react';
import {View, Text, ScrollView, Pressable, TextInput} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import ArrowDownIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';
import Header from '../Header/Header';
import tw from 'tailwind-react-native-classnames';

const inputSection = props => {
  if (props.showInputSection) {
    return (
      <View>
        <View>
          <View style={styles.holidayTextContainer}>
            <Text style={styles.holiday}>type</Text>
          </View>
          <TextInput
            selectionColor="#b3b3b3"
            keyboardType="default"
            //   value={props.holiday}
            //   onChangeText={text => props.setholiday(text)}
            style={styles.holidayTextInput}
          />
        </View>

        <View>
          <View style={styles.holidayTextContainer}>
            <Text style={styles.holiday}>auto approve</Text>
          </View>
          <View style={[styles.holidayTextInput, tw`pl-0 justify-center`]}>
            <Picker
              mode="dropdown"
              // selectedValue={props.deparmentActiveOrNotAction}
              onValueChange={
                (itemValue, itemIndex) => {}
                // props.setDeparmentActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="" value="" />
              <Picker.Item label="Yes" value="Yes" />
              <Picker.Item label="No" value="No" />
            </Picker>
          </View>
        </View>

        <View style={[styles.headingContainer, styles.pressableContainer]}>
          <Pressable
            onPress={() => {}}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.clearPressable]}>
            <Text style={[styles.clearPressableText]}>clear</Text>
          </Pressable>

          <Pressable
            onPress={() => {}}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.searchPressable]}>
            <Text style={[styles.searchPressableText]}>search</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const policyInputSection = props => {
  if (props.showPolicyInputSection) {
    return (
      <View>
        <View>
          <View style={styles.holidayTextContainer}>
            <Text style={styles.holiday}>name</Text>
          </View>
          <TextInput
            selectionColor="#b3b3b3"
            keyboardType="default"
            //   value={props.holiday}
            //   onChangeText={text => props.setholiday(text)}
            style={styles.holidayTextInput}
          />
        </View>

        <View>
          <View style={styles.holidayTextContainer}>
            <Text style={styles.holiday}>type</Text>
          </View>
          <View style={[styles.holidayTextInput, tw`pl-0 justify-center`]}>
            <Picker
              mode="dropdown"
              // selectedValue={props.deparmentActiveOrNotAction}
              onValueChange={
                (itemValue, itemIndex) => {}
                // props.setDeparmentActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="" value="" />
            </Picker>
          </View>
        </View>

        <View>
          <View style={styles.holidayTextContainer}>
            <Text style={styles.holiday}>employee</Text>
          </View>
          <View style={[styles.holidayTextInput, tw`pl-0 justify-center`]}>
            <Picker
              mode="dropdown"
              // selectedValue={props.deparmentActiveOrNotAction}
              onValueChange={
                (itemValue, itemIndex) => {}
                // props.setDeparmentActiveOrNotAction(itemValue)
              }>
              <Picker.Item label="" value="" />
              <Picker.Item label="All Employees" value="All Employees" />
              <Picker.Item label="Department" value="Department" />
              <Picker.Item label="Office" value="Office" />
            </Picker>
          </View>
        </View>

        <View style={[styles.headingContainer, styles.pressableContainer]}>
          <Pressable
            onPress={() => {}}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.clearPressable]}>
            <Text style={[styles.clearPressableText]}>clear</Text>
          </Pressable>

          <Pressable
            onPress={() => {}}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.searchPressable]}>
            <Text style={[styles.searchPressableText]}>search</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const CompanyTimeOffMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={[styles.textContainer, styles.headingContainer]}>
          <View>
            <Text style={styles.text}>time off settings</Text>
            <View style={[styles.headingContainer, tw`mt-2`]}>
              <HomeIcon
                name="home"
                size={15}
                color="green"
                style={styles.homeIcon}
              />
              <Text style={styles.slash}>/</Text>
              <Text style={styles.headingText}>settings</Text>
              <Text style={styles.slash}>/</Text>
              <Text style={styles.headingText}>time off</Text>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>advanced settings</Text>
            <View style={styles.updatePressableContainer}>
              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [styles.updatePressable]}>
                <Text style={[styles.updatePressableText]}>update</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.line} />

          <View>
            <View style={styles.emailTextContainer}>
              <Text style={styles.email}>send PTO requests email copy to</Text>
            </View>
            <View>
              <TextInput
                selectionColor="#b3b3b3"
                keyboardType="email-address"
                //   value={props.email}
                //   onChangeText={text => props.setEmail(text)}
                style={styles.emailTextInput}
              />
              <View
                style={[styles.emailTextContainer, styles.commaSepContainer]}>
                <Text style={[styles.email, styles.commaSepText]}>
                  comma-separated.
                </Text>
              </View>
            </View>
          </View>

          <View>
            <View style={styles.emailTextContainer}>
              <Text style={styles.email}>working house a day</Text>
            </View>
            <View>
              <TextInput
                selectionColor="#b3b3b3"
                keyboardType="email-address"
                //   value={props.email}
                //   onChangeText={text => props.setEmail(text)}
                style={styles.emailTextInput}
              />
            </View>
          </View>

          <View>
            <View style={styles.emailTextContainer}>
              <Text style={styles.email}>send approved document to</Text>
            </View>
            <View>
              <TextInput
                selectionColor="#b3b3b3"
                keyboardType="email-address"
                //   value={props.email}
                //   onChangeText={text => props.setEmail(text)}
                style={styles.emailTextInput}
              />
              <View
                style={[styles.emailTextContainer, styles.commaSepContainer]}>
                <Text style={[styles.email, styles.commaSepText]}>
                  comma-separated.
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>types</Text>
            <View style={styles.updatePressableContainer}>
              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [styles.updatePressable]}>
                <Text style={[styles.updatePressableText]}>add new type</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.line} />

          <View style={[styles.headingContainer, styles.refineTextContainer]}>
            <Text style={styles.refineText}>refine time off types</Text>
            <Pressable
              onPress={() => props.setShowInputSection(!props.showInputSection)}
              style={({pressed}) => [
                pressed ? tw`bg-gray-300` : tw`bg-white`,
                styles.arrowDownIcon,
              ]}>
              <ArrowDownIcon
                name={
                  props.showInputSection
                    ? 'arrow-up-bold-circle'
                    : 'arrow-down-bold-circle'
                }
                size={20}
                color="#006f44"
              />
            </Pressable>
          </View>

          {inputSection({...props})}

          <View style={[styles.headingContainer, styles.holidayTable]}>
            <View style={styles.holidayTableContainer}>
              <View style={styles.holidTableTextContainer}>
                <Text style={styles.tableHeadingText}>name</Text>
              </View>

              <View>
                <Text style={styles.commentChildText}>foefoeufoehfoeufoeu</Text>
              </View>
              <View style={styles.line} />
            </View>

            <View style={styles.holidayTableContainer}>
              <View style={styles.holidTableTextContainer}>
                <Text style={styles.tableHeadingText}>auto approve</Text>
              </View>

              <View>
                <Text style={styles.tableTitleText}>yes</Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>

          <View style={[styles.headingContainer, styles.holidayTable]}>
            <View style={styles.holidayTableContainer}>
              <View style={styles.holidTableTextContainer}>
                <Text style={styles.tableHeadingText}>actions</Text>
              </View>

              <View style={styles.headingContainer}>
                <Pressable
                  // onPress={() => props.setShowCompanyCountryModal(true)}
                  style={({pressed}) => [
                    styles.editIconPressable,
                    {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : '#f3f3f3'},
                  ]}>
                  <EditIcon name="edit" size={15} color="#b3b3b3" />
                </Pressable>

                <Pressable
                  onPress={() => {}}
                  style={({pressed}) => [
                    styles.editIconPressable,
                    {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : '#f3f3f3'},
                  ]}>
                  <DeleteIcon name="delete" size={15} color="#b3b3b3" />
                </Pressable>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Text style={styles.heading}>policies</Text>
            <View style={styles.updatePressableContainer}>
              <Pressable
                onPress={() => {}}
                android_ripple={{color: '#fff'}}
                style={({pressed}) => [styles.updatePressable]}>
                <Text style={[styles.updatePressableText]}>add new policy</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.line} />

          <View style={[styles.headingContainer, styles.refineTextContainer]}>
            <Text style={styles.refineText}>refine time off policies</Text>
            <Pressable
              onPress={() =>
                props.setShowPolicyInputSection(!props.showPolicyInputSection)
              }
              style={({pressed}) => [
                pressed ? tw`bg-gray-300` : tw`bg-white`,
                styles.arrowDownIcon,
              ]}>
              <ArrowDownIcon
                name={
                  props.showPolicyInputSection
                    ? 'arrow-up-bold-circle'
                    : 'arrow-down-bold-circle'
                }
                size={20}
                color="#006f44"
              />
            </Pressable>
          </View>

          {policyInputSection({...props})}

          <View style={[styles.headingContainer, styles.holidayTable]}>
            <View style={styles.holidayTableContainer}>
              <View style={styles.holidTableTextContainer}>
                <Text style={styles.tableHeadingText}>name</Text>
              </View>

              <View>
                <Text style={styles.commentChildText}>foefoeufoehfoeufoeu</Text>
              </View>
              <View style={styles.line} />
            </View>

            <View style={styles.holidayTableContainer}>
              <View style={styles.holidTableTextContainer}>
                <Text style={styles.tableHeadingText}>auto approve</Text>
              </View>

              <View>
                <Text style={styles.tableTitleText}>yes</Text>
              </View>
              <View style={styles.line} />
            </View>
          </View>

          <View style={[styles.headingContainer, styles.holidayTable]}>
            <View style={styles.holidayTableContainer}>
              <View style={styles.holidTableTextContainer}>
                <Text style={styles.tableHeadingText}>actions</Text>
              </View>

              <View style={styles.headingContainer}>
                <Pressable
                  // onPress={() => props.setShowCompanyCountryModal(true)}
                  style={({pressed}) => [
                    styles.editIconPressable,
                    {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : '#f3f3f3'},
                  ]}>
                  <EditIcon name="edit" size={15} color="#b3b3b3" />
                </Pressable>

                <Pressable
                  onPress={() => {}}
                  style={({pressed}) => [
                    styles.editIconPressable,
                    {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : '#f3f3f3'},
                  ]}>
                  <DeleteIcon name="delete" size={15} color="#b3b3b3" />
                </Pressable>
              </View>
              <View style={styles.line} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CompanyTimeOffMarkup;
