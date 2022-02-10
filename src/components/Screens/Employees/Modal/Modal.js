import React from 'react';
import {StyleSheet, Text, View, Modal, Pressable, FlatList} from 'react-native';
import {
  departmentData,
  employmentLevelData,
  genderData,
  languageData,
  zoneData,
  yearData,
  newTimeOffReqData,
  positionData,
  profileData,
  timeData,
  countryData,
  regionData,
  monthsNameData,
  issueDateData,
  expirationDateData,
} from './ModalData';

const MyModal = props => {
  const click = item => {
    if (props?.showDepartmentModal?.type === 'Department') {
      props?.setshowDepartmentModal({show: false, chooseVal: item});
    } else if (props?.showPositionModal?.type === 'Position') {
      props?.setshowPositionModal({show: false, chooseVal: item});
    } else if (props?.showTimeOffModal?.type === 'TimeOff') {
      props?.setShowTimeOffModal({show: false, chooseVal: item});
    } else if (props?.showYearModal?.type === 'Year') {
      props?.setShowYearModal({show: false, chooseVal: item});
    } else if (props?.showTypeModal?.type === 'Profile') {
      props?.setShowTypeModal({show: false, chooseVal: item});
    } else if (props?.isShowMondayModal?.type === 'mondayFromProfile') {
      props?.setIsShowMondayModal({show: false, chooseVal: item});
    } else if (props?.isShowMondayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowMondayToModal({show: false, chooseVal: item});
    } else if (props?.isShowTuesdayModal?.type === 'mondayFromProfile') {
      props?.setIsShowTuesdayModal({show: false, chooseVal: item});
    } else if (props?.isShowTuesdayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowTuesdayToModal({show: false, chooseVal: item});
    } else if (props?.isShowWednesdayModal?.type === 'mondayFromProfile') {
      props?.setIsShowWednesdayModal({show: false, chooseVal: item});
    } else if (props?.isShowWednesdayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowWednesdayToModal({show: false, chooseVal: item});
    } else if (props?.isShowThursdayModal?.type === 'mondayFromProfile') {
      props?.setIsShowThursdayModal({show: false, chooseVal: item});
    } else if (props?.isShowThursdayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowThursdayToModal({show: false, chooseVal: item});
    } else if (props?.isShowFridayModal?.type === 'mondayFromProfile') {
      props?.setIsShowFridayModal({show: false, chooseVal: item});
    } else if (props?.isShowFridayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowFridayToModal({show: false, chooseVal: item});
    } else if (props?.isShowSaturdayModal?.type === 'mondayFromProfile') {
      props?.setIsShowSaturdayModal({show: false, chooseVal: item});
    } else if (props?.isShowSaturdayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowSaturdayToModal({show: false, chooseVal: item});
    } else if (props?.isShowSundayModal?.type === 'mondayFromProfile') {
      props?.setIsShowSundayModal({show: false, chooseVal: item});
    } else if (props?.isShowSundayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowSundayToModal({show: false, chooseVal: item});
    } else if (props?.isShowGenderModal?.type === 'Gender') {
      props?.setIsShowGenderModal({show: false, chooseVal: item});
    } else if (props?.isShowLanguagesModal?.type === 'Language') {
      props?.setIsShowLanguagesModal({show: false, chooseVal: item});
    } else if (props?.isShowZoneModal?.type === 'TimeZone') {
      props?.setIsShowZoneModal({show: false, chooseVal: item});
    } else if (props?.showPositionModalForProfile?.type === 'Position') {
      props?.setshowPositionModalForProfile({show: false, chooseVal: item});
    } else if (props?.showDepartmentModalForProfile?.type === 'Department') {
      props?.setShowDepartmentModalForProfile({show: false, chooseVal: item});
    } else if (props?.showEmploymentLevelModal?.type === 'EmploymentLevel') {
      props?.setShowEmploymentLevelModal({show: false, chooseVal: item});
    } else if (props?.showCountryModal?.type === 'Country') {
      props?.setShowCountryModal({show: false, chooseVal: item});
    } else if (props?.showStateRegionModal?.type === 'StateRegion') {
      props?.setShowStateRegionModal({show: false, chooseVal: item});
    } else if (props?.showIssueDateMonthModal?.type === 'Month') {
      props?.setShowIssueDateMonthModal({show: false, chooseVal: item});
    } else if (props?.showIssueDateYearsModal?.type === 'Year') {
      props?.setShowIssueDateYearsModal({show: false, chooseVal: item});
    } else if (props?.showExpirationDateMonthModal?.type === 'Month') {
      props?.setShowExpirationDateMonthModal({show: false, chooseVal: item});
    } else if (props?.showExpirationDateYearsModal?.type === 'Year') {
      props?.setShowExpirationDateYearsModal({show: false, chooseVal: item});
    }
  };

  const closeModal = () => {
    if (props?.showDepartmentModal?.type === 'Department') {
      props.setshowDepartmentModal({show: false});
    } else if (props?.showPositionModal?.type === 'Position') {
      props.setshowPositionModal({show: false});
    } else if (props?.showTimeOffModal?.type === 'TimeOff') {
      props?.setShowTimeOffModal({show: false});
    } else if (props?.showYearModal?.type === 'Year') {
      props?.setShowYearModal({show: false});
    } else if (props?.showTypeModal?.type === 'Profile') {
      props?.setShowTypeModal({show: false});
    } else if (props?.isShowMondayModal?.type === 'mondayFromProfile') {
      props?.setIsShowMondayModal({show: false});
    } else if (props?.isShowMondayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowMondayToModal({show: false});
    } else if (props?.isShowTuesdayModal?.type === 'mondayFromProfile') {
      props?.setIsShowTuesdayModal({show: false});
    } else if (props?.isShowTuesdayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowTuesdayToModal({show: false});
    } else if (props?.isShowWednesdayModal?.type === 'mondayFromProfile') {
      props?.setIsShowWednesdayModal({show: false});
    } else if (props?.isShowWednesdayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowWednesdayToModal({show: false});
    } else if (props?.isShowThursdayModal?.type === 'mondayFromProfile') {
      props?.setIsShowThursdayModal({show: false});
    } else if (props?.isShowThursdayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowThursdayToModal({show: false});
    } else if (props?.isShowFridayModal?.type === 'mondayFromProfile') {
      props?.setIsShowFridayModal({show: false});
    } else if (props?.isShowFridayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowFridayToModal({show: false});
    } else if (props?.isShowSaturdayModal?.type === 'mondayFromProfile') {
      props?.setIsShowSaturdayModal({show: false});
    } else if (props?.isShowSaturdayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowSaturdayToModal({show: false});
    } else if (props?.isShowSundayModal?.type === 'mondayFromProfile') {
      props?.setIsShowSundayModal({show: false});
    } else if (props?.isShowSundayToModal?.type === 'mondayFromProfile') {
      props?.setIsShowSundayToModal({show: false});
    } else if (props?.isShowGenderModal?.type === 'Gender') {
      props?.setIsShowGenderModal({show: false});
    } else if (props?.isShowLanguagesModal?.type === 'Language') {
      props?.setIsShowLanguagesModal({show: false});
    } else if (props?.isShowZoneModal?.type === 'TimeZone') {
      props?.setIsShowZoneModal({show: false});
    } else if (props?.showPositionModalForProfile?.type === 'Position') {
      props?.setshowPositionModalForProfile({show: false});
    } else if (props?.showDepartmentModalForProfile?.type === 'Department') {
      props?.setShowDepartmentModalForProfile({show: false});
    } else if (props?.showEmploymentLevelModal?.type === 'EmploymentLevel') {
      props?.setShowEmploymentLevelModal({show: false});
    } else if (props?.showCountryModal?.type === 'Country') {
      props?.setShowCountryModal({show: false});
    } else if (props?.showStateRegionModal?.type === 'StateRegion') {
      props?.setShowStateRegionModal({show: false});
    } else if (props?.showIssueDateMonthModal?.type === 'Month') {
      props?.setShowIssueDateMonthModal({show: false});
    } else if (props?.showIssueDateYearsModal?.type === 'Year') {
      props?.setShowIssueDateYearsModal({show: false});
    } else if (props?.showExpirationDateMonthModal?.type === 'Month') {
      props?.setShowExpirationDateMonthModal({show: false});
    } else if (props?.showExpirationDateYearsModal?.type === 'Year') {
      props?.setShowExpirationDateYearsModal({show: false});
    }
  };

  return (
    <Modal
      visible={
        props?.showDepartmentModal?.show ||
        props?.showPositionModal?.show ||
        props?.showTimeOffModal?.show ||
        props?.showYearModal?.show ||
        props?.showTypeModal?.show ||
        props?.isShowMondayModal?.show ||
        props?.isShowMondayToModal?.show ||
        props?.isShowTuesdayModal?.show ||
        props?.isShowTuesdayToModal?.show ||
        props?.isShowWednesdayModal?.show ||
        props?.isShowWednesdayToModal?.show ||
        props?.isShowThursdayModal?.show ||
        props?.isShowThursdayToModal?.show ||
        props?.isShowFridayModal?.show ||
        props?.isShowFridayToModal?.show ||
        props?.isShowSaturdayModal?.show ||
        props?.isShowSaturdayToModal?.show ||
        props?.isShowSundayModal?.show ||
        props?.isShowSundayToModal?.show ||
        props?.isShowGenderModal?.show ||
        props?.isShowLanguagesModal?.show ||
        props?.isShowZoneModal?.show ||
        props?.showPositionModalForProfile?.show ||
        props?.showDepartmentModalForProfile?.show ||
        props?.showEmploymentLevelModal?.show ||
        props?.showCountryModal?.show ||
        props?.showStateRegionModal?.show ||
        props?.showIssueDateMonthModal?.show ||
        props?.showIssueDateYearsModal?.show ||
        props?.showExpirationDateMonthModal?.show ||
        props?.showExpirationDateYearsModal?.show ||
        false
      }
      transparent
      animationType="fade"
      onRequestClose={() => closeModal()}>
      <Pressable onPress={() => closeModal()} style={styles.modal}>
        <View
          style={[
            styles.flatListContainer,
            props?.showTimeOffModal?.type === 'TimeOff' ||
              props?.isShowGenderModal?.type === 'Gender' ||
              (props?.isShowLanguagesModal?.type === 'Language' && {
                height: '12%',
              }),
          ]}>
          <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={
              (props?.showDepartmentModal?.type === 'Department' &&
                departmentData) ||
              (props?.showPositionModal?.type === 'Position' && positionData) ||
              (props?.showTimeOffModal?.type === 'TimeOff' &&
                newTimeOffReqData) ||
              (props?.showYearModal?.type === 'Year' && yearData) ||
              (props?.showTypeModal?.type === 'Profile' && profileData) ||
              (props?.isShowMondayModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowMondayToModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowTuesdayModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowTuesdayToModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowWednesdayModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowWednesdayToModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowThursdayModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowThursdayToModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowFridayModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowFridayToModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowSaturdayModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowSaturdayToModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowSundayModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowSundayToModal?.type === 'mondayFromProfile' &&
                timeData) ||
              (props?.isShowGenderModal?.type === 'Gender' && genderData) ||
              (props?.isShowLanguagesModal?.type === 'Language' &&
                languageData) ||
              (props?.isShowZoneModal?.type === 'TimeZone' && zoneData) ||
              (props?.showPositionModalForProfile?.type === 'Position' &&
                positionData) ||
              (props?.showDepartmentModalForProfile?.type === 'Department' &&
                departmentData) ||
              (props?.showEmploymentLevelModal?.type === 'EmploymentLevel' &&
                employmentLevelData) ||
              (props?.showCountryModal?.type === 'Country' && countryData) ||
              (props?.showStateRegionModal?.type === 'StateRegion' &&
                regionData) ||
              (props?.showIssueDateMonthModal?.type === 'Month' &&
                monthsNameData) ||
              (props?.showIssueDateYearsModal?.type === 'Year' &&
                issueDateData) ||
              (props?.showExpirationDateMonthModal?.type === 'Month' &&
                monthsNameData) ||
              (props?.showExpirationDateYearsModal?.type === 'Year' &&
                expirationDateData)
            }
            renderItem={({item, index}) => {
              return (
                <Pressable
                  onPress={() => click(item?.name)}
                  style={({pressed}) => [
                    styles.itemPressable,
                    {backgroundColor: pressed ? 'lightblue' : '#fff'},
                  ]}>
                  <Text>{item?.name}</Text>
                </Pressable>
              );
            }}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default MyModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  itemPressable: {
    width: '100%',
    height: 22,
    marginHorizontal: 12,
    marginVertical: 0.5,
  },
  flatListContainer: {
    width: '50%',
    height: '27%',
    backgroundColor: '#fff',
  },
});
