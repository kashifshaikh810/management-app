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
  const {currUserData, profileData} = useSelector(state => state?.reduc);
  const scrollViewRef = useRef();
  let data = currUserData;

  const goToMyProfile = () => {
    props.navigation.navigate('MyProfile');
    props.navigation.closeDrawer();
  };

  const subMenuSection = props => {
    if (showSubMenu) {
      return (
        <View
          style={[
            styles.drawerContainer,
            {backgroundColor: 'rgba(0,0,0,0.1)'},
          ]}>
          <View style={styles.dropDownItemsContainer}>
            <Text style={styles.dropDownItems}>company account</Text>
            <Text style={styles.dropDownItems}>portal settings</Text>
            <Text style={styles.dropDownItems}>employees</Text>
            <Text style={styles.dropDownItems}>holidays</Text>
            <Text style={styles.dropDownItems}>time off</Text>
            <Text style={styles.dropDownItems}>performance review</Text>
            <Text style={styles.dropDownItems}>rewards</Text>
            <Text style={styles.dropDownItems}>survey</Text>
            <Text style={styles.dropDownItems}>cutom fields</Text>
            <Text style={styles.dropDownItems}>permissions</Text>
          </View>
        </View>
      );
    }
  };

  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={() =>
        showSubMenu ? scrollViewRef.current.scrollToEnd({animated: true}) : {}
      }
      style={{flex: 1}}
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
              backgroundColor: pressed || showSubMenu ? '#006f44' : '#263238',
            },
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
