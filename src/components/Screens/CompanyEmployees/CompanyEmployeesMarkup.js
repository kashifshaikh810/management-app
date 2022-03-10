import React from 'react';
import {View, Text, ScrollView, Pressable, Switch} from 'react-native';
import HomeIcon from 'react-native-vector-icons/FontAwesome';
import tw from 'tailwind-react-native-classnames';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from '@react-native-community/checkbox';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import Header from '../Header/Header';
import styles from './styles';
import JobPositionModal from './Modals/JobPositionModal/JobPositionModal';
import OfficesModal from './Modals/OfficesModal/OfficesModal';
import DepartmentModal from './Modals/DepartmentModal/DepartmentModal';
import WorkStatusesModal from './Modals/WorkStatusesModal/WorkStatusesModal';
import LevelModal from './Modals/LevelModal/LevelModal';
import TerminationReasonModal from './Modals/TerminationReasonModal/TerminationReasonModal';
import DegreeModal from './Modals/DegreeModal/DegreeModal';

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
  if (
    props.selectedTab === 'advanced-settings' ||
    props.selectedTab === 'import' ||
    props.selectedTab === 'complaints'
  ) {
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
  if (
    props.selectedTab === 'advanced-settings' ||
    props.selectedTab === 'import' ||
    props.selectedTab === 'complaints'
  ) {
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
  if (
    props.selectedTab === 'advanced-settings' ||
    props.selectedTab === 'import' ||
    props.selectedTab === 'complaints'
  ) {
    return (
      <View style={[styles.card, tw`pb-2`]}>
        <View style={[styles.headingContainer]}>
          <Text style={styles.heading}>emergency contact</Text>

          <View style={styles.switchContainer}>
            <Switch
              trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
              thumbColor={props.isEnabled ? '#fff' : '#fff'}
              onValueChange={props.toggleSwitch}
              value={props.isEnabled}
            />
          </View>
        </View>

        <View style={styles.line} />

        <View style={[styles.headingContainer, styles.generalSetting]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              styles.selectAll,
              props.isEnabled ? tw`text-black` : tw`text-gray-400`,
            ]}>
            select all
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            first name
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            middle name
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            last name
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            relationship
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            office phone
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            mobile phone
          </Text>
        </View>
      </View>
    );
  }
};

const advancedSettingsChildCard = props => {
  if (
    props.selectedTab === 'advanced-settings' ||
    props.selectedTab === 'import' ||
    props.selectedTab === 'complaints'
  ) {
    return (
      <View style={[styles.card, tw`pb-2`]}>
        <View style={[styles.headingContainer]}>
          <Text style={styles.heading}>child</Text>

          <View style={styles.switchContainer}>
            <Switch
              trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
              thumbColor={props.isEnabled ? '#fff' : '#fff'}
              onValueChange={props.toggleSwitch}
              value={props.isEnabled}
            />
          </View>
        </View>

        <View style={styles.line} />

        <View style={[styles.headingContainer, styles.generalSetting]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              styles.selectAll,
              props.isEnabled ? tw`text-black` : tw`text-gray-400`,
            ]}>
            select all
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            first name
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            last name
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            birth day
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            gender
          </Text>
        </View>
      </View>
    );
  }
};

const advancedSettingsJobCard = props => {
  if (
    props.selectedTab === 'advanced-settings' ||
    props.selectedTab === 'import' ||
    props.selectedTab === 'complaints'
  ) {
    return (
      <View style={[styles.card, tw`pb-2`]}>
        <View style={[styles.headingContainer]}>
          <Text style={styles.heading}>job</Text>

          <View style={styles.switchContainer}>
            <Switch
              trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
              thumbColor={props.isEnabled ? '#fff' : '#fff'}
              onValueChange={props.toggleSwitch}
              value={props.isEnabled}
            />
          </View>
        </View>

        <View style={styles.line} />

        <View style={[styles.headingContainer, styles.generalSetting]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            position
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            hire day
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.jobTabsContainer]}>
          <Pressable
            style={[
              styles.jobPositionTab,
              props.showJOBTabs === 'job-positions'
                ? tw`bg-white`
                : tw`bg-gray-100`,
            ]}
            onPress={() => props.setShowJOBTabs('job-positions')}>
            <Text
              style={[
                styles.tabText,
                props.showJOBTabs === 'job-positions'
                  ? tw`text-black`
                  : tw`text-gray-400`,
              ]}>
              job positions
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.officesTab,
              props.showJOBTabs === 'offices' ? tw`bg-white` : tw`bg-gray-100`,
            ]}
            onPress={() => props.setShowJOBTabs('offices')}>
            <Text
              style={[
                styles.tabText,
                props.showJOBTabs === 'offices'
                  ? tw`text-black`
                  : tw`text-gray-400`,
              ]}>
              offices
            </Text>
          </Pressable>
        </View>

        <View style={[styles.headingContainer, styles.jobTabsContainer]}>
          <Pressable
            style={[
              styles.jobPositionTab,
              props.showJOBTabs === 'department'
                ? tw`bg-white`
                : tw`bg-gray-100`,
            ]}
            onPress={() => props.setShowJOBTabs('department')}>
            <Text
              style={[
                styles.tabText,
                props.showJOBTabs === 'department'
                  ? tw`text-black`
                  : tw`text-gray-400`,
              ]}>
              department
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.workStatusesTab,
              props.showJOBTabs === 'work-statuses'
                ? tw`bg-white`
                : tw`bg-gray-100`,
            ]}
            onPress={() => props.setShowJOBTabs('work-statuses')}>
            <Text
              style={[
                styles.tabText,
                props.showJOBTabs === 'work-statuses'
                  ? tw`text-black`
                  : tw`text-gray-400`,
              ]}>
              work statuses
            </Text>
          </Pressable>
        </View>

        <View style={[styles.headingContainer, styles.jobTabsContainer]}>
          <Pressable
            style={[
              styles.levelTab,
              props.showJOBTabs === 'level' ? tw`bg-white` : tw`bg-gray-100`,
            ]}
            onPress={() => props.setShowJOBTabs('level')}>
            <Text
              style={[
                styles.tabText,
                props.showJOBTabs === 'level'
                  ? tw`text-black`
                  : tw`text-gray-400`,
              ]}>
              level
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.terminationReasonTab,
              props.showJOBTabs === 'termination-reason'
                ? tw`bg-white`
                : tw`bg-gray-100`,
            ]}
            onPress={() => props.setShowJOBTabs('termination-reason')}>
            <Text
              style={[
                styles.tabText,
                props.showJOBTabs === 'termination-reason'
                  ? tw`text-black`
                  : tw`text-gray-400`,
              ]}>
              termination reason
            </Text>
          </Pressable>
        </View>
        <View style={[styles.line, tw`w-11/12 ml-7`]} />

        {jobPostionsTabSection({...props})}
        {officesTabSection({...props})}
        {departmentTabSection({...props})}
        {workStatusesTabSection({...props})}
        {levelTabSection({...props})}
        {terminationReasonTabSection({...props})}
      </View>
    );
  }
};

const jobPostionsTabSection = props => {
  if (props.showJOBTabs === 'job-positions') {
    return (
      <View>
        <View style={styles.addNewPressableContainer}>
          <Pressable
            onPress={() => props.setShowJobPositionModal(true)}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.addNewPressable]}>
            <Text style={[styles.cancelPressableText]}>add new postion</Text>
          </Pressable>
        </View>

        <View style={[styles.headingContainer, tw`mt-4 pl-4`]}>
          <View style={styles.headingContainer}>
            <Text>text</Text>

            <View style={styles.activeTextContainer}>
              <Text style={styles.activeText}>active</Text>
            </View>
          </View>

          <View style={[styles.iconsContainer, styles.headingContainer]}>
            <Pressable
              onPress={() => {}}
              style={({pressed}) => [
                styles.icon,
                pressed ? tw`bg-gray-100` : tw`bg-yellow-400`,
              ]}>
              <EditIcon name="edit" size={15} color="#fff" />
            </Pressable>

            <Pressable
              onPress={() => {}}
              style={({pressed}) => [
                styles.icon,
                pressed ? tw`bg-gray-100` : tw`bg-red-400`,
              ]}>
              <DeleteIcon name="delete" size={17} color="#fff" />
            </Pressable>
          </View>
        </View>
        <View style={tw`p-3`}>
          <View style={styles.line} />
        </View>
      </View>
    );
  }
};

const officesTabSection = props => {
  if (props.showJOBTabs === 'offices') {
    return (
      <View>
        <View style={styles.addNewPressableContainer}>
          <Pressable
            onPress={() => props.setShowOfficesModal(true)}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.addNewPressable]}>
            <Text style={[styles.cancelPressableText]}>add new office</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const departmentTabSection = props => {
  if (props.showJOBTabs === 'department') {
    return (
      <View>
        <View style={styles.addNewPressableContainer}>
          <Pressable
            onPress={() => props.setShowDepartmentModal(true)}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.addNewPressable]}>
            <Text style={[styles.cancelPressableText]}>add new department</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const workStatusesTabSection = props => {
  if (props.showJOBTabs === 'work-statuses') {
    return (
      <View>
        <View style={styles.addNewPressableContainer}>
          <Pressable
            onPress={() => props.setShowWorkStatusesModal(true)}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.addNewPressable]}>
            <Text style={[styles.cancelPressableText]}>add new status</Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const levelTabSection = props => {
  if (props.showJOBTabs === 'level') {
    return (
      <View>
        <View style={styles.addNewPressableContainer}>
          <Pressable
            onPress={() => props.setShowLevelModal(true)}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.addNewPressable]}>
            <Text style={[styles.cancelPressableText]}>
              add new employee level
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const terminationReasonTabSection = props => {
  if (props.showJOBTabs === 'termination-reason') {
    return (
      <View>
        <View style={styles.addNewPressableContainer}>
          <Pressable
            onPress={() => props.setShowTerminationReasonModal(true)}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.addNewPressable]}>
            <Text style={[styles.cancelPressableText]}>
              add new termination reason
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

const complaintsSection = props => {
  if (props.selectedTab === 'complaints') {
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
            Allow employees left complaints
          </Text>
        </View>
      </View>
    );
  }
};

const advancedSettingsEducationCard = props => {
  if (props.selectedTab === 'advanced-settings') {
    return (
      <View style={[styles.card, tw`pb-2`]}>
        <View style={[styles.headingContainer]}>
          <Text style={styles.heading}>education</Text>

          <View style={styles.switchContainer}>
            <Switch
              trackColor={{false: '#b3b3b3', true: '#f5dd4b'}}
              thumbColor={props.isEnabled ? '#fff' : '#fff'}
              onValueChange={props.toggleSwitch}
              value={props.isEnabled}
            />
          </View>
        </View>

        <View style={styles.line} />

        <View style={[styles.headingContainer, styles.generalSetting]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            collage/Univercity
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            speciality
          </Text>
        </View>

        <View style={[styles.headingContainer, styles.generalSettingTwo]}>
          <CheckBox
            disabled={!props.isEnabled}
            style={{
              transform: [{scaleX: 0.8}, {scaleY: 0.8}],
            }}
            tintColors={
              props.isEnabled
                ? {true: 'gray', false: 'black'}
                : {false: '#b3b3b3'}
            }
            value={props.isEnabled ? props.toggleCheckBox : ''}
            onValueChange={newValue => props.setToggleCheckBox(newValue)}
          />
          <Text
            style={[
              styles.addEmployeeText,
              tw`capitalize`,
              props.isEnabled ? tw`text-gray-700` : tw`text-gray-400`,
            ]}>
            end year
          </Text>
        </View>

        <Text style={styles.degreeHeading}>degree</Text>

        <View style={[styles.addNewPressableContainer, tw`mt-0`]}>
          <Pressable
            onPress={() => props.setShowDegreeModal(true)}
            android_ripple={{color: '#fff'}}
            style={({pressed}) => [styles.addNewPressable]}>
            <Text style={[styles.cancelPressableText]}>add new degree</Text>
          </Pressable>
        </View>
        <View style={[styles.headingContainer, tw`mt-4 pl-4`]}>
          <View style={styles.headingContainer}>
            <Text>text</Text>

            <View style={styles.activeTextContainer}>
              <Text style={styles.activeText}>active</Text>
            </View>
          </View>

          <View style={[styles.iconsContainer, styles.headingContainer]}>
            <Pressable
              onPress={() => {}}
              style={({pressed}) => [
                styles.icon,
                pressed ? tw`bg-gray-100` : tw`bg-yellow-400`,
              ]}>
              <EditIcon name="edit" size={15} color="#fff" />
            </Pressable>

            <Pressable
              onPress={() => {}}
              style={({pressed}) => [
                styles.icon,
                pressed ? tw`bg-gray-100` : tw`bg-red-400`,
              ]}>
              <DeleteIcon name="delete" size={17} color="#fff" />
            </Pressable>
          </View>
        </View>
        <View style={tw`p-3`}>
          <View style={styles.line} />
        </View>
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
          {complaintsSection({...props})}
        </View>

        {advancedSettingsGeneralCard({...props})}
        {advancedSettingsAddressCard({...props})}
        {advancedSettingsEmergencyContactCard({...props})}
        {advancedSettingsChildCard({...props})}
        {advancedSettingsJobCard({...props})}
        {advancedSettingsEducationCard({...props})}

        {/* Job positions modal  */}
        <JobPositionModal {...props} />

        {/* offices modal  */}
        <OfficesModal {...props} />

        {/* department modal  */}
        <DepartmentModal {...props} />

        {/* work statuses modal  */}
        <WorkStatusesModal {...props} />

        {/* level modal  */}
        <LevelModal {...props} />

        {/* termination reason modal  */}
        <TerminationReasonModal {...props} />

        {/* degree modal  */}
        <DegreeModal {...props} />
      </ScrollView>
    </View>
  );
};

export default CompanyEmployeesMarkup;
