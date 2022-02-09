import React from 'react';
import {StyleSheet, Text, View, Modal, Pressable, FlatList} from 'react-native';

const departmentData = [
  {
    name: 'Design',
  },
  {
    name: 'Development',
  },
  {
    name: 'Founders',
  },
  {
    name: 'HR',
  },
  {
    name: 'Marketing',
  },
  {
    name: 'Product',
  },
  {
    name: 'Sales',
  },
  {
    name: 'Support',
  },
];

const positionData = [
  {
    name: 'Content Writer',
  },
  {
    name: 'Customer Support',
  },
  {
    name: 'Designer',
  },
  {
    name: 'Developer',
  },
  {
    name: 'Founder',
  },
  {
    name: 'HR',
  },
  {
    name: 'Marketer',
  },
  {
    name: 'PM/PO',
  },
  {
    name: 'Sales',
  },
];

const newTimeOffReqData = [
  {
    name: 'Holiday',
  },
  {
    name: 'Sick',
  },
];

const yearData = [
  {
    name: '2012',
  },
  {
    name: '2013',
  },
  {
    name: '2014',
  },
  {
    name: '2015',
  },
  {
    name: '2016',
  },
  {
    name: '2017',
  },
  {
    name: '2018',
  },
  {
    name: '2019',
  },
  {
    name: '2020',
  },
  {
    name: '2021',
  },
  {
    name: '2022',
  },
];

const profileData = [
  {
    name: 'Holiday',
  },
  {
    name: 'Sick',
  },
];

const timeData = [
  {name: '00:00am'},
  {name: '00:30am'},
  {name: '01:00am'},
  {name: '01:30am'},
  {name: '02:00am'},
  {name: '02:30am'},
  {name: '03:00am'},
  {name: '03:30am'},
  {name: '04:00am'},
  {name: '04:30am'},
  {name: '05:00am'},
  {name: '05:30am'},
  {name: '06:00am'},
  {name: '06:30am'},
  {name: '07:00am'},
  {name: '07:30am'},
  {name: '08:00am'},
  {name: '08:30am'},
  {name: '09:00am'},
  {name: '09:30am'},
  {name: '10:00am'},
  {name: '10:30am'},
  {name: '11:00am'},
  {name: '11:30am'},
  {name: '12:00pm'},
  {name: '12:30pm'},
  {name: '13:00pm'},
  {name: '13:30pm'},
  {name: '14:00pm'},
  {name: '14:30pm'},
  {name: '15:00pm'},
  {name: '15:30pm'},
  {name: '16:00pm'},
  {name: '16:30pm'},
  {name: '17:00pm'},
  {name: '17:30pm'},
  {name: '18:00pm'},
  {name: '18:30pm'},
  {name: '19:00pm'},
  {name: '19:30pm'},
  {name: '20:00pm'},
  {name: '20:30pm'},
  {name: '21:00pm'},
  {name: '21:30pm'},
  {name: '22:00pm'},
  {name: '22:30pm'},
  {name: '23:00pm'},
  {name: '23:30pm'},
];

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
        false
      }
      transparent
      animationType="fade"
      onRequestClose={() => closeModal()}>
      <Pressable onPress={() => closeModal()} style={styles.modal}>
        <View
          style={[
            styles.flatListContainer,
            props?.showTimeOffModal?.type === 'TimeOff' && {height: '10%'},
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
                timeData)
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
