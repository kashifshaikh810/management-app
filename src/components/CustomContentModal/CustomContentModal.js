import React, {useState} from 'react';
import {View, Text, Modal, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Auth} from '../firebaseTools/index';
import styles from '../AllNavigation/DrawerNavigation/styles';
import ChangePassword from '../Screens/Authentication/ChangePassword/ChangePassword';

const CustomContentModal = props => {
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  const navigation = useNavigation();

  const changePassword = () => {
    setShowChangePasswordModal(true);
    props.setShowModal(false);
    props.navigation.closeDrawer();
  };

  const goToProfile = () => {
    navigation.navigate('MyProfile');
    props.setShowModal(false);
    props.navigation.closeDrawer();
  };

  const logOut = async () => {
    await Auth().signOut();
    props.navigation.navigate('Login');
  };

  return (
    <>
      <Modal
        transparent
        animationType="fade"
        visible={props.showModal}
        onRequestClose={() => props.setShowModal(false)}>
        <Pressable
          onPress={() => props.setShowModal(false)}
          style={styles.modalPressable}>
          <View style={styles.modalContent}>
            <View style={styles.modalPressables}>
              <Pressable
                onPress={() => goToProfile()}
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#8dd9e8' : '#fff'},
                ]}>
                <Text style={styles.modalText}>Profile</Text>
              </Pressable>
              <Pressable
                onPress={() => changePassword()}
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#8dd9e8' : '#fff'},
                ]}>
                <Text style={styles.modalText}>Change Password</Text>
              </Pressable>
              <Pressable
                onPress={() => logOut()}
                style={({pressed}) => [
                  {backgroundColor: pressed ? '#8dd9e8' : '#fff'},
                ]}>
                <Text style={styles.modalText}>Log Out</Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Modal>
      <ChangePassword
        setShowChangePasswordModal={setShowChangePasswordModal}
        showChangePasswordModal={showChangePasswordModal}
      />
    </>
  );
};

export default CustomContentModal;
