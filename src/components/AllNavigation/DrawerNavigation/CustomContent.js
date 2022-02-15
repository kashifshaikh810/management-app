import React, {useEffect, useState} from 'react';
import {View, Text, Pressable, Modal} from 'react-native';
import {DrawerItemList} from '@react-navigation/drawer';

import AccountIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownIcon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';
import styles from './styles';
import CustomContentModal from '../../CustomContentModal/CustomContentModal';

const CustomContent = props => {
  const [showModal, setShowModal] = useState(false);
  const {currUserData} = useSelector(state => state.reduc);
  let data = currUserData;

  const goToMyProfile = () => {
    props.navigation.navigate('MyProfile');
    props.navigation.closeDrawer();
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.accountDefaultImage}>
          <Pressable onPress={() => goToMyProfile()}>
            <AccountIcon name="account-circle-outline" size={150} />
          </Pressable>
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
            <Text style={{color: 'black', textTransform: 'capitalize'}}>
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
      <View style={styles.drawerList}>
        <DrawerItemList {...props} />
      </View>
    </>
  );
};

export default CustomContent;
