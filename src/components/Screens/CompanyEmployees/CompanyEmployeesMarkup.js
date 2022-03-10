import React from 'react';
import {View, Text, ScrollView, Pressable, Switch} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';
import CheckBox from '@react-native-community/checkbox';

import Header from '../Header/Header';
import styles from './styles';

const advancedSettingsSection = props => {
  if (props.selectedTab === 'advanced-settings') {
    return (
      <View>
        <View style={[styles.headingContainer, styles.itemsCenter]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={styles.addEmployeeText}>
            Add employee with simple form
          </Text>
        </View>
      </View>
    );
  }
};

const advancedSettingsGeneralCard = props => {
  if (props.selectedTab === 'advanced-settings') {
    return (
      <View style={[styles.card, tw`pb-2`]}>
        <Text style={styles.heading}>general settings</Text>

        <View style={styles.line} />

        <View style={[styles.headingContainer, styles.generalSetting]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, styles.selectAll]}>
            select all
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            alternative email
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            office phone
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>Ext.</Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            Mobile Phone
          </Text>
        </View>
      </View>
    );
  }
};

const advancedSettingsAddressCard = props => {
  if (props.selectedTab === 'advanced-settings') {
    return (
      <View style={[styles.card, tw`pb-2`]}>
        <Text style={styles.heading}>address</Text>

        <View style={styles.line} />

        <View style={[styles.headingContainer, styles.generalSetting]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, styles.selectAll]}>
            select all
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>address</Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>city</Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>state</Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>country</Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            zip/Postal code
          </Text>
        </View>
      </View>
    );
  }
};

const advancedSettingsEmergencyContactCard = props => {
  if (props.selectedTab === 'advanced-settings') {
    return (
      <View style={[styles.card, tw`pb-2`]}>
        <View style={[styles.headingContainer]}>
          <Text style={styles.heading}>emergency contact</Text>

          <View></View>
          <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            // onValueChange={toggleSwitch}
            value={true}
          />
        </View>

        <View style={styles.line} />

        <View style={[styles.headingContainer, styles.generalSetting]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, styles.selectAll]}>
            select all
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            first name
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            middle name
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            last name
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            relationship
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            office phone
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={false}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={{true: 'gray', false: 'black'}}
            value={props.toggleCheckBox}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text style={[styles.addEmployeeText, tw`capitalize`]}>
            mobile phone
          </Text>
        </View>
      </View>
    );
  }
};

const importSection = props => {
  if (props.selectedTab === 'import') {
    return (
      <View>
        <Text>hEllo world</Text>
      </View>
    );
  }
};

const complaintsSection = props => {
  if (props.selectedTab === 'complaints') {
    return (
      <View>
        <Text>hEllo world</Text>
      </View>
    );
  }
};

const CompanyEmployeesMarkup = props => {
  return (
    <View style={styles.container}>
      <Header {...props} />
      <ScrollView style={styles.scrollView}>
        <View style={[styles.textContainer, styles.headingContainer]}>
          <View>
            <Text style={styles.text}>employee settings</Text>
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
              <Text style={styles.headingText}>employee</Text>
            </View>
          </View>
          <View style={styles.cancelPressableContainer}>
            <Pressable
              onPress={() => {}}
              android_ripple={{color: '#fff'}}
              style={({pressed}) => [styles.cancelPressable]}>
              <Text style={[styles.cancelPressableText]}>save</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headingContainer}>
            <Pressable
              style={() => [
                styles.advancedSettingsTab,
                props.selectedTab === 'advanced-settings'
                  ? tw`bg-gray-100`
                  : tw`bg-white`,
              ]}
              onPress={() => props.setSelectedTab('advanced-settings')}>
              <Text
                style={[
                  styles.tabsText,
                  props.selectedTab === 'advanced-settings'
                    ? tw`text-gray-500`
                    : tw`text-black`,
                ]}>
                advanced settings
              </Text>
            </Pressable>

            <Pressable
              style={() => [
                styles.importTab,
                props.selectedTab === 'import' ? tw`bg-gray-100` : tw`bg-white`,
              ]}
              onPress={() => props.setSelectedTab('import')}>
              <Text
                style={[
                  styles.tabsText,
                  props.selectedTab === 'import'
                    ? tw`text-gray-500`
                    : tw`text-black`,
                ]}>
                import
              </Text>
            </Pressable>

            <Pressable
              style={() => [
                styles.complaintsTab,
                props.selectedTab === 'complaints'
                  ? tw`bg-gray-100`
                  : tw`bg-white`,
              ]}
              onPress={() => props.setSelectedTab('complaints')}>
              <Text
                style={[
                  styles.tabsText,
                  props.selectedTab === 'complaints'
                    ? tw`text-gray-500`
                    : tw`text-black`,
                ]}>
                complaints
              </Text>
            </Pressable>
          </View>

          <View style={styles.line} />

          {advancedSettingsSection({...props})}
          {importSection({...props})}
          {complaintsSection({...props})}
        </View>

        {advancedSettingsGeneralCard({...props})}
        {advancedSettingsAddressCard({...props})}
        {advancedSettingsEmergencyContactCard({...props})}
      </ScrollView>
    </View>
  );
};

export default CompanyEmployeesMarkup;
