import React, {useEffect, useState, useRef} from 'react';
import {View, Text, Pressable, Modal, Image, ScrollView} from 'react-native';
import {DrawerItemList} from '@react-navigation/drawer';
import SettingsIcon from 'react-native-vector-icons/MaterialIcons';

import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownIcon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import styles from './styles';
import CustomContentModal from '../../CustomContentModal/CustomContentModal';
import tw from 'tailwind-react-native-classnames';

const CustomContent = props => {
  const [showModal, setShowModal] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [selectSettingsSection, setSelectSettingsSection] = useState('');
  const {currUserData, profileData} = useSelector(state => state?.reduc);
  const scrollViewRef = useRef();
  let data = currUserData;

  const goToMyProfile = () => {
    props.navigation.navigate('My Profile');
    props.navigation.closeDrawer();
  };

  const goToCompanyAccount = props => {
    setSelectSettingsSection('company-account');
    props.navigation.navigate('Company Account');
  };
  const goToPortalSettings = () => {
    setSelectSettingsSection('portal-settings');
    props.navigation.navigate('Company Portal Settings');
  };
  const goToCompanyEmployees = () => {
    setSelectSettingsSection('employees');
    props.navigation.navigate('Company Employees');
  };
  const goToCompanyHolidays = () => {
    setSelectSettingsSection('holidays');
    props.navigation.navigate('Company Holidays');
  };
  const goToCompanyTimeOff = () => {
    setSelectSettingsSection('time-off');
    props.navigation.navigate('Company Time Off');
  };
  const goToPerformanceReview = () => {
    setSelectSettingsSection('performance-review');
    props.navigation.navigate('Company Performance Review');
  };
  const goToRewards = () => {
    setSelectSettingsSection('rewards');
    props.navigation.navigate('Company Rewards');
  };
  const goToSurvey = () => {
    setSelectSettingsSection('survey');
    props.navigation.navigate('Company Survey');
  };
  const goToCustomFields = () => {
    setSelectSettingsSection('custom-fields');
    props.navigation.navigate('Company Custom Fields');
  };
  const goToPermissions = () => {
    setSelectSettingsSection('permissions');
    props.navigation.navigate('Company Permissions');
  };

  const subMenuSection = props => {
    if (showSubMenu) {
      return (
        <View
          style={[
            styles.drawerContainer,
            {backgroundColor: 'rgba(0,0,0,0.3)', marginVertical: 20},
          ]}>
          <View style={styles.dropDownItemsContainer}>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'company-account'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToCompanyAccount({...props})}>
              company account
            </Text>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'portal-settings'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToPortalSettings()}>
              portal settings
            </Text>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'employees'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToCompanyEmployees()}>
              employees
            </Text>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'holidays'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToCompanyHolidays()}>
              holidays
            </Text>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'time-off'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToCompanyTimeOff()}>
              time off
            </Text>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'performance-review'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToPerformanceReview()}>
              performance review
            </Text>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'rewards'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToRewards()}>
              rewards
            </Text>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'survey'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToSurvey()}>
              survey
            </Text>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'custom-fields'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToCustomFields()}>
              custom fields
            </Text>
            <Text
              style={[
                styles.dropDownItems,
                selectSettingsSection === 'permissions'
                  ? tw`text-green-400`
                  : tw`text-white`,
              ]}
              onPress={() => goToPermissions()}>
              permissions
            </Text>
          </View>
        </View>
      );
    }
  };

  return (
    <ScrollView
      persistentScrollbar={true}
      indicatorStyle="white"
      ref={scrollViewRef}
      onContentSizeChange={() =>
        showSubMenu ? scrollViewRef.current.scrollToEnd({animated: true}) : {}
      }
      style={styles.drawerContainer}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.accountDefaultImage}>
          {profileData?.profileImage ? (
            <Pressable
              onPress={() => goToMyProfile()}
              style={styles.dpImageContainer}>
              <Image
                source={{uri: profileData?.profileImage}}
                style={styles.dpImage}
              />
            </Pressable>
          ) : (
            <Pressable onPress={() => goToMyProfile()}>
              <AccountIcon name="account-circle-outline" size={150} />
            </Pressable>
          )}
        </View>

        <View style={styles.pressAbleContainer}>
          <Pressable
            onPress={() => setShowModal(true)}
            style={({pressed}) => [
              styles.pressAble,
              {
                backgroundColor: pressed ? '#b3b3b3' : '#fff',
              },
            ]}>
            <Text style={styles.userName}>
              {data?.firstName} {data?.middleName} {data?.lastName}
            </Text>
            <DropDownIcon name="arrow-drop-down" size={20} />
          </Pressable>
        </View>

        <CustomContentModal
          showModal={showModal}
          setShowModal={setShowModal}
          {...props}
        />
      </View>
      <View style={styles.drawerContainer}>
        <DrawerItemList {...props} />
        <Pressable
          onPress={() => setShowSubMenu(!showSubMenu)}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgba(0,0,0,0.1)' : '#263238',
            },
            showSubMenu ||
            selectSettingsSection === 'company-account' ||
            selectSettingsSection === 'portal-settings' ||
            selectSettingsSection === 'employees' ||
            selectSettingsSection === 'holidays' ||
            selectSettingsSection === 'time-off' ||
            selectSettingsSection === 'performance-review' ||
            selectSettingsSection === 'rewards' ||
            selectSettingsSection === 'survey' ||
            selectSettingsSection === 'custom-fields' ||
            selectSettingsSection === 'permissions'
              ? {backgroundColor: '#006f44'}
              : {},
            tw`flex-1 rounded-xl`,
          ]}>
          <View style={styles.settingsContainer}>
            <View style={styles.settingsAndIconContainer}>
              <SettingsIcon name="settings" size={20} color="#fff" />
              <View style={styles.settingsMain}>
                <Text style={styles.settingsText}>settings</Text>
                <View style={styles.iconContainer}>
                  <DropDownIcon
                    name={showSubMenu ? 'arrow-drop-up' : 'arrow-drop-down'}
                    size={20}
                    color="#fff"
                  />
                </View>
              </View>
            </View>
          </View>
        </Pressable>
        {subMenuSection({...props})}
      </View>
    </ScrollView>
  );
};

export default CustomContent;
