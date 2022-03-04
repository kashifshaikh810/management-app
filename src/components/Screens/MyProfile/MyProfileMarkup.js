import React, {useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  Pressable,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';

import HomeIcon from 'react-native-vector-icons/FontAwesome';
import DOBIcon from 'react-native-vector-icons/FontAwesome';
import TelephoneIcon from 'react-native-vector-icons/Entypo';
import EditIcon from 'react-native-vector-icons/MaterialIcons';
import GoogleIcon from 'react-native-vector-icons/FontAwesome';
import FacebookIcon from 'react-native-vector-icons/FontAwesome';
import TwitterIcon from 'react-native-vector-icons/AntDesign';
import LinkeInIcon from 'react-native-vector-icons/Entypo';
import ArrowDropIcon from 'react-native-vector-icons/MaterialIcons';
import DeleteIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import tw from 'tailwind-react-native-classnames';

import styles from './styles';
import Header from '../Header/Header';
import MyModal from '../Employees/Modal/Modal';
import ProfileDetailsModal from './MyProfileModals/ProfileDetailsModal/ProfileDetailsModal';
import EmploymentDetailsModal from './MyProfileModals/EmploymentDetailsModal/EmploymentDetailsModal';
import EditBioModal from './MyProfileModals/EditBioModal/EditBioModal';
import ContactInformationModal from './MyProfileModals/ContactInformationModal/ContactInformationModal';
import AddLicenseCertificationModal from './MyProfileModals/AddLicenseCertificationModal/AddLicenseCertificationModal';
import EmergencyContactModal from './MyProfileModals/EmergencyContactModal/EmergencyContactModal';
import EducationModal from './MyProfileModals/EducationModal/EducationModal ';

const timeOffSection = props => {
  return (
    <View style={styles.container}>
      <View style={styles.timeOffAndHolidays}>
        <View style={styles.upcomingTimeOff}>
          <Text style={styles.upcomingTimeOffText}>upcoming time off</Text>
          <View style={styles.notFindBackground}>
            <Text style={styles.notFindText}>
              We couldn't find any records.
            </Text>
          </View>
        </View>
        <View style={styles.upcomingTimeOff}>
          <Text style={styles.upcomingTimeOffText}>
            upcoming company holidays
          </Text>
          <View style={styles.notFindBackground}>
            <Text style={styles.notFindText}>
              We couldn't find any records.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.timeOffInfoCard}>
          <View style={styles.textContainer}>
            <Text style={styles.holiday}>holiday</Text>
            <Text style={styles.numOfHoliday}>112</Text>
            <Text style={styles.hoursAvailable}>hours available</Text>
            <Text style={styles.headingOfTotalHours}>
              <Text style={styles.numOfTotalHours}>112</Text> total hours
            </Text>
          </View>

          <View style={styles.roundCircle}>
            <Text style={styles.numOfUsedHours}>0</Text>
            <Text style={styles.hoursAvailable}>hours used</Text>
          </View>
        </View>

        <View style={styles.timeOffInfoCard}>
          <View style={styles.textContainer}>
            <Text style={styles.holiday}>sick</Text>
            <Text style={styles.numOfHoliday}>56</Text>
            <Text style={styles.hoursAvailable}>hours available</Text>
            <Text style={styles.headingOfTotalHours}>
              <Text style={styles.numOfTotalHours}>56</Text> total hours
            </Text>
          </View>
          <View style={styles.roundCircle}>
            <Text style={styles.numOfUsedHours}>0</Text>
            <Text style={styles.hoursAvailable}>hours used</Text>
          </View>
        </View>
      </View>

      <View style={styles.timeOffAndHolidays} />
      <View style={styles.line} />

      <View style={styles.historyHeading}>
        <Text style={styles.historyText}>history</Text>
      </View>

      <View style={{marginVertical: 5}}>
        <Pressable
          style={styles.lastNameTextInput}
          onPress={() => props.setShowYearModal({show: true, type: 'Year'})}>
          <Text style={{marginHorizontal: 10}}>
            {props?.showYearModal?.chooseVal}
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

      <View style={{marginVertical: 10}}>
        <Pressable
          onPress={() => props.setShowTypeModal({show: true, type: 'Profile'})}
          style={styles.lastNameTextInput}>
          <Text style={{marginHorizontal: 10}}>
            {props?.showTypeModal?.chooseVal}
          </Text>
          <View style={styles.dropIconContainer}>
            <ArrowDropIcon name="arrow-drop-down" size={20} />
          </View>
        </Pressable>
      </View>

      <View style={styles.createAccountButtonContainer}>
        <Pressable
          onPress={() => {}}
          android_ripple={{color: '#fff'}}
          style={({pressed}) => [
            styles.clearPressable,
            {backgroundColor: pressed ? '#006f44' : '#fff'},
          ]}>
          <Text style={[styles.createAccountPressableText, {color: '#006f44'}]}>
            Clear
          </Text>
        </Pressable>

        <Pressable
          onPress={() => {}}
          android_ripple={{color: '#fff'}}
          style={({pressed}) => [
            styles.createAccountPressable,
            {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
          ]}>
          {false ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.createAccountPressableText}>Search</Text>
          )}
        </Pressable>
      </View>

      <MyModal {...props} />

      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#dee2e6',
              marginHorizontal: 15,
              height: 45,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text>Date</Text>
            <Text>Earned</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              // marginHorizontal: 15,
              height: 45,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text>aa</Text>
            <Text>ffaaa</Text>
          </View>
        </View>
      </View>

      <View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#dee2e6',
              marginHorizontal: 15,
              height: 45,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text>Spent</Text>
            <Text>Type</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              // marginHorizontal: 15,
              height: 45,
              justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <Text>aa</Text>
            <Text>ffaaa</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const emergencyContactSection = props => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.editContainer,
          {marginHorizontal: 15, marginVertical: 10},
        ]}>
        <Pressable
          onPress={() => props.setShowEmergencyContactModal(true)}
          style={({pressed}) => [
            styles.editIconPressable,
            {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : '#ffa700'},
          ]}>
          <EditIcon name="edit" size={15} color="#fff" />
        </Pressable>
      </View>

      {props?.emergencyContactData ? (
        <View style={styles.contactContainer}>
          <View style={styles.contactItems}>
            <Text style={styles.contactHeading}>name:</Text>
            <Text>
              {props?.emergencyContactData?.emergencyContactFirstName}{' '}
              {props?.emergencyContactData?.emergencyContactMiddleName}{' '}
              {props?.emergencyContactData?.emergencyContactLastName}
            </Text>
          </View>
          <View style={styles.contactItems}>
            <Text style={styles.contactHeading}>relationship:</Text>
            <Text>
              {props?.emergencyContactData?.emergencyContactRelationShip}
            </Text>
          </View>
          <View style={styles.contactItems}>
            <Text style={styles.contactHeading}>work phone number:</Text>
            <Text>
              {props?.emergencyContactData?.emergencyContactOfficePhone}
            </Text>
          </View>
          <View style={styles.contactItems}>
            <Text style={styles.contactHeading}>mobile phone number:</Text>
            <Text>
              {props?.emergencyContactData?.emergencyContactMobilePhone}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.weCouldNotContainer}>
          <Text style={styles.weCouldNot}>We couldn't find any records.</Text>
        </View>
      )}
    </View>
  );
};

const contactInfoSection = props => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.editContainer,
          {marginHorizontal: 15, marginVertical: 10},
        ]}>
        <Pressable
          onPress={() => props.setIsShowContactInformationModal(true)}
          style={({pressed}) => [
            styles.editIconPressable,
            {backgroundColor: pressed ? '#b3b3b3' : '#ffa700'},
          ]}>
          <EditIcon name="edit" size={15} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.infoCardContent}>
        <View style={styles.infoContent}>
          <Text style={styles.infoHeading}>
            email:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.profileDetails?.email || props?.userData?.email}
            </Text>
          </Text>
          <Text style={styles.infoHeading}>
            alternative email:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.profileDetails?.alternativeEmail ||
                props?.userData?.alternativeEmail}
            </Text>
          </Text>
          <Text style={styles.infoHeading}>
            mobile phone number:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.contactInformationData?.contactInfoMobilePhone}
            </Text>
          </Text>
        </View>

        <View style={styles.infoContent}>
          <Text style={styles.infoHeading}>
            country:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.contactInformationData?.country}
            </Text>
          </Text>
          <Text style={styles.infoHeading}>
            address 1:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.contactInformationData?.contactInfoAddress}
            </Text>
          </Text>
          <Text style={styles.infoHeading}>
            city:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.contactInformationData?.contactInfoCity}
            </Text>
          </Text>
          <Text style={styles.infoHeading}>
            state:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.contactInformationData?.stateAndRegion}
            </Text>
          </Text>
          <Text style={styles.infoHeading}>
            zip code:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.contactInformationData?.contactInfoPostalCode}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const educationSection = props => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.editContainer,
          {marginHorizontal: 15, marginVertical: 10},
        ]}>
        <Pressable
          onPress={() => props.setShowEducationModal(true)}
          style={({pressed}) => [
            styles.editIconPressable,
            {backgroundColor: pressed ? '#b3b3b3' : '#ffa700'},
          ]}>
          <EditIcon name="edit" size={15} color="#fff" />
        </Pressable>
      </View>
      {props?.userEducationData ? (
        <View style={styles.infoContent}>
          <Text style={styles.infoHeading}>
            aa:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.userEducationData?.collageOrUniversity}
            </Text>
          </Text>
          <Text style={styles.infoHeading}>
            lfaf:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.userEducationData?.degree}
            </Text>
          </Text>
          <Text style={styles.infoHeading}>
            ffaf:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.userEducationData?.major}
            </Text>
          </Text>

          <Text style={styles.infoHeading}>
            aaa:{' '}
            <Text style={styles.infoHeadingExplain}>
              {props?.userEducationData?.yearGraduated}
            </Text>
          </Text>
        </View>
      ) : (
        <View style={styles.weCouldNotContainer}>
          <Text style={styles.weCouldNot}>We couldn't find any records.</Text>
        </View>
      )}
    </View>
  );
};

const licensesAndCertificationsSection = (props, secondProps) => {
  const issueMonth = () => {
    if (props.licenseCertificationsData.issueSectionMonth === 'January') {
      return '01';
    } else if (
      props.licenseCertificationsData.issueSectionMonth === 'February'
    ) {
      return '02';
    } else if (props.licenseCertificationsData.issueSectionMonth === 'March') {
      return '03';
    } else if (props.licenseCertificationsData.issueSectionMonth === 'April') {
      return '04';
    } else if (props.licenseCertificationsData.issueSectionMonth === 'May') {
      return '05';
    } else if (props.licenseCertificationsData.issueSectionMonth === 'June') {
      return '06';
    } else if (props.licenseCertificationsData.issueSectionMonth === 'July') {
      return '07';
    } else if (props.licenseCertificationsData.issueSectionMonth === 'August') {
      return '08';
    } else if (
      props.licenseCertificationsData.issueSectionMonth === 'September'
    ) {
      return '09';
    } else if (
      props.licenseCertificationsData.issueSectionMonth === 'October'
    ) {
      return '10';
    } else if (
      props.licenseCertificationsData.issueSectionMonth === 'November'
    ) {
      return '11';
    } else if (
      props.licenseCertificationsData.issueSectionMonth === 'December'
    ) {
      return '12';
    }
  };

  const expireMonth = () => {
    if (props.licenseCertificationsData.expireSectionMonth === 'January') {
      return '01';
    } else if (
      props.licenseCertificationsData.expireSectionMonth === 'February'
    ) {
      return '02';
    } else if (props.licenseCertificationsData.expireSectionMonth === 'March') {
      return '03';
    } else if (props.licenseCertificationsData.expireSectionMonth === 'April') {
      return '04';
    } else if (props.licenseCertificationsData.expireSectionMonth === 'May') {
      return '05';
    } else if (props.licenseCertificationsData.expireSectionMonth === 'June') {
      return '06';
    } else if (props.licenseCertificationsData.expireSectionMonth === 'July') {
      return '07';
    } else if (
      props.licenseCertificationsData.expireSectionMonth === 'August'
    ) {
      return '08';
    } else if (
      props.licenseCertificationsData.expireSectionMonth === 'September'
    ) {
      return '09';
    } else if (
      props.licenseCertificationsData.expireSectionMonth === 'October'
    ) {
      return '10';
    } else if (
      props.licenseCertificationsData.expireSectionMonth === 'November'
    ) {
      return '11';
    } else if (
      props.licenseCertificationsData.expireSectionMonth === 'December'
    ) {
      return '12';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.licensesAndCertifications}>
        <Text style={styles.licensesAndCertificationsText}>
          licenses & Certifications
        </Text>
      </View>
      {!props.licenseCertificationsData && (
        <Pressable
          onPress={() => props.setIsShowAddLicenseCertification(true)}
          android_ripple={{color: '#fff'}}
          style={({pressed}) => [
            styles.addLicensesPressable,
            {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : '#006f44'},
          ]}>
          <Text style={styles.addLicensesText}>
            add license or certification
          </Text>
        </Pressable>
      )}

      {!props.licenseCertificationsData && (
        <View style={styles.timeOffAndHolidays} />
      )}
      <View style={styles.line} />

      {props.licenseCertificationsData && (
        <View style={tw`flex-1 m-5 flex-row`}>
          <View>
            <Text style={tw`text-black mb-1`}>
              {props.licenseCertificationsData.addLicenseName}
            </Text>
            <Text style={tw`mb-1 text-gray-400`}>
              {props.licenseCertificationsData.addLicenseIssuing}
            </Text>
            <View style={styles.directionRow}>
              <Text style={tw`text-gray-400`}>
                Issued {issueMonth()}/
                {props.licenseCertificationsData.issueSectionYear} -{' '}
              </Text>
              <Text style={tw`text-gray-400`}>
                Expired {expireMonth()}/
                {props.licenseCertificationsData.expireSectionYear}
              </Text>
            </View>
            <Text style={tw`mt-1 text-gray-400`}>
              Credential ID: {props.licenseCertificationsData.addLicenseId}
            </Text>
            <Pressable
              onPress={() => secondProps.navigation.navigate('Dashboard')}
              style={({pressed}) =>
                tw`${pressed ? `bg-gray-200 rounded-full` : `bg-white`}`
              }>
              <Text style={tw`text-green-600 mt-1`}>See Credential</Text>
            </Pressable>
          </View>

          <View style={tw`flex-1 justify-center items-end`}>
            <Pressable
              onPress={() => props.editLicenseAndCertifications()}
              style={({pressed}) =>
                tw`${
                  pressed ? `bg-gray-200 rounded-full p-1.5` : `bg-white p-1.5`
                }`
              }>
              <EditIcon name="edit" size={17} style={tw`text-gray-400`} />
            </Pressable>
            <Pressable
              onPress={() => props.deleteLicenseAndCertifications()}
              style={({pressed}) =>
                tw`${
                  pressed ? `bg-gray-200 rounded-full p-1.5` : `bg-white p-1.5`
                }`
              }>
              <DeleteIcon name="delete" size={17} style={tw`text-gray-400`} />
            </Pressable>
          </View>
        </View>
      )}

      {!props.licenseCertificationsData && (
        <View style={[styles.weCouldNotContainer, {marginVertical: 30}]}>
          <Text style={styles.weCouldNot}>We couldn't find any records.</Text>
        </View>
      )}
    </View>
  );
};

const workingHoursSection = props => {
  const aplhaRow = [
    {name: 'm', type: 'monday'},
    {name: 't', type: 'tuesday'},
    {name: 'w', type: 'wednesday'},
    {name: 't', type: 'thursday'},
    {name: 'f', type: 'friday'},
    {name: 's', type: 'saturday'},
    {name: 's', type: 'sunday'},
  ];

  const correctVal = items => {
    let correct =
      (props.isShowMondaySection && items.type === 'monday') ||
      (props.isShowTuesdaySection && items.type === 'tuesday') ||
      (props.isShowWednesdaySection && items.type === 'wednesday') ||
      (props.isShowThursdaySection && items.type === 'thursday') ||
      (props.isShowFridaySection && items.type === 'friday') ||
      (props.isShowSaturdaySection && items.type === 'saturday') ||
      (props.isShowSundaySection && items.type === 'sunday');

    return correct;
  };

  const onPress = type => {
    if (type === 'monday') {
      props.setIsShowMondaySection(!props.isShowMondaySection);
    }

    if (type === 'tuesday') {
      props.setIsShowTuesdaySection(!props.isShowTuesdaySection);
    }

    if (type === 'wednesday') {
      props.setIsShowWednesdaySection(!props.isShowWednesdaySection);
    }

    if (type === 'thursday') {
      props.setIsShowThursdaySection(!props.isShowThursdaySection);
    }
    if (type === 'friday') {
      props.setIsShowFridaySection(!props.isShowFridaySection);
    }
    if (type === 'saturday') {
      props.setIsShowSaturdaySection(!props.isShowSaturdaySection);
    }
    if (type === 'sunday') {
      props.setIsShowSundaySection(!props.isShowSundaySection);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapRowContainer}>
        {aplhaRow.map((items, index) => {
          return (
            <View key={index} style={styles.mapItemContainer}>
              <Pressable
                onPress={() => onPress(items.type)}
                style={[
                  styles.mapItemBackground,
                  {
                    backgroundColor: correctVal(items) ? '#006f44' : '#6c757d',
                  },
                ]}>
                <Text style={styles.mapItem}>{items.name}</Text>
              </Pressable>
            </View>
          );
        })}
      </View>

      <MyModal {...props} />

      {props.isShowMondaySection && (
        <View style={styles.mondayContainer}>
          <View style={styles.directionRow}>
            <View style={styles.mondayTextContainer}>
              <Text style={styles.mondayText}>Monday</Text>
            </View>
            <Pressable
              style={styles.mondayTextInput}
              onPress={() =>
                props.setIsShowMondayModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowMondayModal?.chooseVal || '08:00pm'}
              </Text>
              <View style={styles.dropIconMain}>
                <ArrowDropIcon
                  name="arrow-drop-up"
                  size={20}
                  style={styles.myDropIcon}
                />
                <ArrowDropIcon name="arrow-drop-down" size={20} />
              </View>
            </Pressable>
          </View>

          <View style={styles.directionRow}>
            <View style={[styles.ToTextContainer, {marginHorizontal: 25}]}>
              <Text style={styles.firstNameText}>To</Text>
            </View>
            <Pressable
              onPress={() =>
                props.setIsShowMondayToModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }
              style={styles.mondayTextInput}>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowMondayToModal?.chooseVal || '17:00pm'}
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
        </View>
      )}
      {props.isShowTuesdaySection && (
        <View style={styles.mondayContainer}>
          <View style={styles.directionRow}>
            <View style={styles.mondayTextContainer}>
              <Text style={styles.mondayText}>Tuesday</Text>
            </View>
            <Pressable
              style={styles.mondayTextInput}
              onPress={() =>
                props.setIsShowTuesdayModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowTuesdayModal?.chooseVal || '08:00pm'}
              </Text>
              <View style={styles.dropIconMain}>
                <ArrowDropIcon
                  name="arrow-drop-up"
                  size={20}
                  style={styles.myDropIcon}
                />
                <ArrowDropIcon name="arrow-drop-down" size={20} />
              </View>
            </Pressable>
          </View>

          <View style={styles.directionRow}>
            <View style={[styles.ToTextContainer, {marginHorizontal: 28}]}>
              <Text style={styles.firstNameText}>To</Text>
            </View>
            <Pressable
              onPress={() =>
                props.setIsShowTuesdayToModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }
              style={styles.mondayTextInput}>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowTuesdayToModal?.chooseVal || '17:00pm'}
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
        </View>
      )}
      {props.isShowWednesdaySection && (
        <View style={styles.mondayContainer}>
          <View style={styles.directionRow}>
            <View style={styles.mondayTextContainer}>
              <Text style={styles.mondayText}>Wednesday</Text>
            </View>
            <Pressable
              style={styles.mondayTextInput}
              onPress={() =>
                props.setIsShowWednesdayModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowWednesdayModal?.chooseVal || '08:00am'}
              </Text>
              <View style={styles.dropIconMain}>
                <ArrowDropIcon
                  name="arrow-drop-up"
                  size={20}
                  style={styles.myDropIcon}
                />
                <ArrowDropIcon name="arrow-drop-down" size={20} />
              </View>
            </Pressable>
          </View>

          <View style={styles.directionRow}>
            <View style={[styles.ToTextContainer, {marginHorizontal: 35}]}>
              <Text style={styles.firstNameText}>To</Text>
            </View>
            <Pressable
              onPress={() =>
                props.setIsShowWednesdayToModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }
              style={styles.mondayTextInput}>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowWednesdayToModal?.chooseVal || '17:00pm'}
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
        </View>
      )}
      {props.isShowThursdaySection && (
        <View style={styles.mondayContainer}>
          <View style={styles.directionRow}>
            <View style={styles.mondayTextContainer}>
              <Text style={styles.mondayText}>Thursday</Text>
            </View>
            <Pressable
              style={styles.mondayTextInput}
              onPress={() =>
                props.setIsShowThursdayModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowThursdayModal?.chooseVal || '80:00am'}
              </Text>
              <View style={styles.dropIconMain}>
                <ArrowDropIcon
                  name="arrow-drop-up"
                  size={20}
                  style={styles.myDropIcon}
                />
                <ArrowDropIcon name="arrow-drop-down" size={20} />
              </View>
            </Pressable>
          </View>

          <View style={styles.directionRow}>
            <View style={[styles.ToTextContainer, {marginHorizontal: 30}]}>
              <Text style={styles.firstNameText}>To</Text>
            </View>
            <Pressable
              onPress={() =>
                props.setIsShowThursdayToModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }
              style={styles.mondayTextInput}>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowThursdayToModal?.chooseVal || '17:00pm'}
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
        </View>
      )}
      {props.isShowFridaySection && (
        <View style={styles.mondayContainer}>
          <View style={styles.directionRow}>
            <View style={styles.mondayTextContainer}>
              <Text style={styles.mondayText}>Friday</Text>
            </View>
            <Pressable
              style={styles.mondayTextInput}
              onPress={() =>
                props.setIsShowFridayModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowFridayModal?.chooseVal || '08:00am'}
              </Text>
              <View style={styles.dropIconMain}>
                <ArrowDropIcon
                  name="arrow-drop-up"
                  size={20}
                  style={styles.myDropIcon}
                />
                <ArrowDropIcon name="arrow-drop-down" size={20} />
              </View>
            </Pressable>
          </View>

          <View style={styles.directionRow}>
            <View style={[styles.ToTextContainer, {marginHorizontal: 20}]}>
              <Text style={styles.firstNameText}>To</Text>
            </View>
            <Pressable
              onPress={() =>
                props.setIsShowFridayToModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }
              style={styles.mondayTextInput}>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowFridayToModal?.chooseVal || '17:00pm'}
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
        </View>
      )}
      {props.isShowSaturdaySection && (
        <View style={styles.mondayContainer}>
          <View style={styles.directionRow}>
            <View style={styles.mondayTextContainer}>
              <Text style={styles.mondayText}>Saturday</Text>
            </View>
            <Pressable
              style={styles.mondayTextInput}
              onPress={() =>
                props.setIsShowSaturdayModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowSaturdayModal?.chooseVal || '08:00am'}
              </Text>
              <View style={styles.dropIconMain}>
                <ArrowDropIcon
                  name="arrow-drop-up"
                  size={20}
                  style={styles.myDropIcon}
                />
                <ArrowDropIcon name="arrow-drop-down" size={20} />
              </View>
            </Pressable>
          </View>

          <View style={styles.directionRow}>
            <View style={[styles.ToTextContainer, {marginHorizontal: 28}]}>
              <Text style={styles.firstNameText}>To</Text>
            </View>
            <Pressable
              onPress={() =>
                props.setIsShowSaturdayToModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }
              style={styles.mondayTextInput}>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowSaturdayToModal?.chooseVal || '17:00pm'}
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
        </View>
      )}
      {props.isShowSundaySection && (
        <View style={styles.mondayContainer}>
          <View style={styles.directionRow}>
            <View style={styles.mondayTextContainer}>
              <Text style={styles.mondayText}>Sunday</Text>
            </View>
            <Pressable
              style={styles.mondayTextInput}
              onPress={() =>
                props.setIsShowSundayModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowSundayModal?.chooseVal || '08:00am'}
              </Text>
              <View style={styles.dropIconMain}>
                <ArrowDropIcon
                  name="arrow-drop-up"
                  size={20}
                  style={styles.myDropIcon}
                />
                <ArrowDropIcon name="arrow-drop-down" size={20} />
              </View>
            </Pressable>
          </View>

          <View style={styles.directionRow}>
            <View style={[styles.ToTextContainer, {marginHorizontal: 22}]}>
              <Text style={styles.firstNameText}>To</Text>
            </View>
            <Pressable
              onPress={() =>
                props.setIsShowSundayToModal({
                  show: true,
                  type: 'mondayFromProfile',
                })
              }
              style={styles.mondayTextInput}>
              <Text style={{marginHorizontal: 10}}>
                {props?.isShowSundayToModal?.chooseVal || '17:00pm'}
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
        </View>
      )}

      <Pressable
        onPress={() => {}}
        android_ripple={{color: '#fff'}}
        style={({pressed}) => [
          styles.submitPressable,
          {backgroundColor: pressed ? '#b3b3b3' : '#006f44'},
        ]}>
        <Text style={styles.submitText}>submit</Text>
      </Pressable>
    </View>
  );
};

const tabsSection = (props, secondProps) => {
  return (
    <View style={styles.infoCard}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => props.setSelectedTab('time-off')}
          style={() => [
            styles.tabs,
            {
              width: '35%',
              backgroundColor:
                props.selectedTab === 'time-off' ? '#e9e9f0' : '#fff',
            },
          ]}>
          <Text
            style={[
              styles.infoText,
              {
                color: props.selectedTab === 'time-off' ? '#b3b3b3' : '#495057',
              },
            ]}>
            time-off
          </Text>
        </Pressable>

        <Pressable
          onPress={() => props.setSelectedTab('emergency contact')}
          style={() => [
            styles.tabs,
            {
              width: '65%',
              backgroundColor:
                props.selectedTab === 'emergency contact' ? '#e9e9f0' : '#fff',
            },
          ]}>
          <Text
            style={[
              styles.infoText,
              {
                color:
                  props.selectedTab === 'emergency contact'
                    ? '#b3b3b3'
                    : '#495057',
              },
            ]}>
            emergency contact
          </Text>
        </Pressable>

        <Pressable
          onPress={() => props.setSelectedTab('contact information')}
          style={() => [
            styles.tabs,
            {
              width: '65%',
              backgroundColor:
                props.selectedTab === 'contact information'
                  ? '#e9e9f0'
                  : '#fff',
            },
          ]}>
          <Text
            style={[
              styles.infoText,
              {
                color:
                  props.selectedTab === 'contact information'
                    ? '#b3b3b3'
                    : '#495057',
              },
            ]}>
            contact information
          </Text>
        </Pressable>

        <Pressable
          onPress={() => props.setSelectedTab('education')}
          style={() => [
            styles.tabs,
            {
              width: '35%',
              backgroundColor:
                props.selectedTab === 'education' ? '#e9e9f0' : '#fff',
            },
          ]}>
          <Text
            style={[
              styles.infoText,
              {
                color:
                  props.selectedTab === 'education' ? '#b3b3b3' : '#495057',
              },
            ]}>
            education
          </Text>
        </Pressable>

        <Pressable
          onPress={() => props.setSelectedTab('licenses & certifications')}
          style={() => [
            styles.tabs,
            {
              width: '80%',
              backgroundColor:
                props.selectedTab === 'licenses & certifications'
                  ? '#e9e9f0'
                  : '#fff',
            },
          ]}>
          <Text
            style={[
              styles.infoText,
              {
                color:
                  props.selectedTab === 'licenses & certifications'
                    ? '#b3b3b3'
                    : '#495057',
              },
            ]}>
            licenses & certifications
          </Text>
        </Pressable>

        <Pressable
          onPress={() => props.setSelectedTab('working hours')}
          style={() => [
            styles.tabs,
            {
              width: '55%',
              backgroundColor:
                props.selectedTab === 'working hours' ? '#e9e9f0' : '#fff',
            },
          ]}>
          <Text
            style={[
              styles.infoText,
              {
                color:
                  props.selectedTab === 'working hours' ? '#b3b3b3' : '#495057',
              },
            ]}>
            working hours
          </Text>
        </Pressable>
      </View>

      <View style={[styles.line]} />

      {props.selectedTab === 'time-off' && timeOffSection(props)}
      {props.selectedTab === 'emergency contact' &&
        emergencyContactSection(props)}
      {props.selectedTab === 'contact information' && contactInfoSection(props)}
      {props.selectedTab === 'education' && educationSection(props)}
      {props.selectedTab === 'licenses & certifications' &&
        licensesAndCertificationsSection(props, {...secondProps})}
      {props.selectedTab === 'working hours' && workingHoursSection(props)}
    </View>
  );
};

const MyProfileMarkup = props => {
  const scrollViewRef = useRef();
  return (
    <View style={styles.container}>
      <Header {...props} />
      {props.refreshing ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={70} color="rgba(0,0,0,0.5)" />
        </View>
      ) : (
        <ScrollView
          style={styles.scrollView}
          ref={scrollViewRef}
          onContentSizeChange={() =>
            props.goToBottom
              ? scrollViewRef.current.scrollToEnd({animated: true})
              : {}
          }
          refreshControl={
            <RefreshControl
              onRefresh={props.onRefresh}
              refreshing={props.refreshing}
            />
          }>
          <View style={styles.userNameContiner}>
            <Text style={styles.userName}>
              {props?.userData?.firstName} {props?.profileDetails?.middleName}{' '}
              {props?.userData?.lastName}
            </Text>
          </View>

          <View style={styles.headingContainer}>
            <HomeIcon name="home" size={15} color="green" />
            <Text style={styles.headingTextSlash}>/</Text>
            <Text style={styles.headingText}>my profile</Text>
          </View>

          <ImageBackground
            source={require('../../Assists/images/background.jpeg')}
            style={styles.imageBack}>
            <View style={styles.contentContainer}>
              <Image
                source={
                  props?.profileDetails?.profileImage
                    ? {uri: props?.profileDetails?.profileImage}
                    : require('../../Assists/images/defaultProfile.png')
                }
                style={styles.userProfile}
              />
              <View style={styles.editIconContainer}>
                <Pressable
                  onPress={() => props.setShowProfileDetailsModal(true)}
                  style={({pressed}) => [
                    styles.editIconPressable,
                    {backgroundColor: pressed ? 'rgba(0,0,0,0)' : '#ffa700'},
                  ]}>
                  <EditIcon name="edit" size={15} color="#fff" />
                </Pressable>
              </View>
            </View>

            <View style={styles.imageBackUserNameContainer}>
              <Text style={styles.imageBackUserName}>
                {props?.userData?.firstName} {props?.profileDetails?.middleName}{' '}
                {props?.userData?.lastName}
              </Text>
            </View>

            <View style={styles.contentContainer}>
              <Text style={[styles.email, {textDecorationLine: 'underline'}]}>
                {props?.userData?.email}
              </Text>
            </View>

            <View style={[styles.contentContainer, {flexDirection: 'row'}]}>
              <TelephoneIcon
                name="phone"
                size={15}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.email}>{props.userData.phone}</Text>
            </View>

            <View style={styles.doBContainer}>
              <DOBIcon
                name="birthday-cake"
                size={15}
                color="#fff"
                style={styles.icon}
              />
              <Text style={styles.userDOB}>
                {props?.profileDetails?.dateOfBirth || 'N/A'}
              </Text>
            </View>
          </ImageBackground>

          <View style={styles.card}>
            <View style={styles.cardHeadingContainer}>
              <Text style={styles.cardHeadingText}>login with</Text>
            </View>
            <View style={styles.line} />

            <View style={styles.buttonsContainer}>
              <Pressable style={styles.pressAbleStyle}>
                <GoogleIcon
                  name="google"
                  size={15}
                  color="#fff"
                  style={styles.pressableIcon}
                />
                <Text style={styles.pressableText}>Google</Text>
              </Pressable>

              <Pressable style={styles.pressAbleStyle}>
                <TwitterIcon
                  name="twitter"
                  size={15}
                  color="#fff"
                  style={styles.pressableIcon}
                />
                <Text style={styles.pressableText}>Twitter</Text>
              </Pressable>

              <Pressable style={styles.pressAbleStyle}>
                <LinkeInIcon
                  name="linkedin"
                  size={15}
                  color="#fff"
                  style={styles.pressableIcon}
                />
                <Text style={styles.pressableText}>LinkeIn</Text>
              </Pressable>

              <Pressable style={styles.facebookPressable}>
                <FacebookIcon
                  name="facebook"
                  size={15}
                  color="#fff"
                  style={styles.pressableIcon}
                />
                <Text style={styles.pressableText}>Facebook</Text>
              </Pressable>
            </View>
          </View>

          <View style={styles.employmentCard}>
            <View style={styles.employmentCardHeadingContainer}>
              <Text style={styles.cardHeadingText}>employment details</Text>
              <View style={styles.editContainer}>
                <Pressable
                  onPress={() => props.setIsShowEmploymentDetailsModal(true)}
                  style={({pressed}) => [
                    styles.editIconPressable,
                    {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : '#ffa700'},
                  ]}>
                  <EditIcon name="edit" size={15} color="#fff" />
                </Pressable>
              </View>
            </View>
            <View style={styles.line} />

            <View style={styles.profileDetailsContainer}>
              <View style={styles.profileDetailsContainerChild}>
                <Text style={styles.employeeHeading}>
                  Position: <Text style={styles.employeePosition}>hello</Text>
                </Text>
                <Text style={styles.employeeHeading}>
                  Department:
                  <Text style={styles.employeePosition}> Founders</Text>
                </Text>
                <Text style={styles.employeeHeading}>
                  Date of Hire:
                  <Text style={styles.employeePosition}>
                    24/11/2021 (0y 2m 8d)
                  </Text>
                </Text>
                <Text style={styles.employeeHeading}>
                  Level:
                  <Text style={styles.employeePosition}>{/* level num */}</Text>
                </Text>
              </View>

              <View style={styles.detailsContainer}>
                <Text style={styles.employeeHeading}>
                  Employment Status:
                  <Text style={styles.employeePosition}>{/* status  */}</Text>
                </Text>
                <Text style={styles.employeeHeading}>
                  Office:
                  <Text style={styles.employeePosition}>{/* office  */}</Text>
                </Text>
                <Text style={styles.employeeHeading}>
                  Direct Manager:
                  <Text style={styles.employeePosition}> Master Devandgo</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.itMyOwnCard}>
            <View style={styles.cardHeadingContainer}>
              <Text style={[styles.itMyOwn]}>in my own words</Text>
              <View style={styles.editContainer}>
                <Pressable
                  onPress={() => props.setIsShowEditBioModal(true)}
                  style={({pressed}) => [
                    styles.editIconPressable,
                    {backgroundColor: pressed ? 'rgba(0,0,0,0.5)' : '#ffa700'},
                  ]}>
                  <EditIcon name="edit" size={15} color="#fff" />
                </Pressable>
              </View>
            </View>
            <View style={styles.line} />

            <View style={styles.hobbiesContainer}>
              <View>
                <Text>
                  Get to know me better:{' '}
                  <Text> {props?.editBioData?.about}</Text>
                </Text>
              </View>
              <View>
                <Text>
                  Hobbies: <Text> {props?.editBioData?.hobbies}</Text>
                </Text>
              </View>
              <View>
                <Text>
                  Favorite Books:
                  <Text> {props?.editBioData?.favoriteBooks}</Text>
                </Text>
              </View>
              <View>
                <Text>
                  Music Preference:
                  <Text> {props?.editBioData?.musicPreference}</Text>
                </Text>
              </View>
              <View>
                <Text>
                  Sports:
                  <Text> {props?.editBioData?.sports}</Text>
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.managerNotesCard}>
            <View style={styles.cardHeadingContainer}>
              <Text style={[styles.itMyOwn]}>manager's notes</Text>
            </View>
            <View style={styles.line} />

            <View style={styles.managerNotesTextContainer}>
              <View style={styles.managerNotesBackground}>
                <Text style={styles.managerNotesText}>
                  We couldn't find any records.
                </Text>
              </View>
            </View>
          </View>

          <ProfileDetailsModal {...props} />

          <EmploymentDetailsModal {...props} />

          <EditBioModal {...props} />

          <EmergencyContactModal {...props} />

          <ContactInformationModal {...props} />

          <EducationModal {...props} />

          <AddLicenseCertificationModal {...props} />

          {tabsSection(props, {...props})}
        </ScrollView>
      )}
    </View>
  );
};

export default MyProfileMarkup;
